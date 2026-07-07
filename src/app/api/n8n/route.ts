import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");
    // Verify a security token to prevent unauthorized triggers in production
    const webhookToken = process.env.N8N_WEBHOOK_SECRET || "n8n_sec_token_9x12";

    if (!authHeader || authHeader !== `Bearer ${webhookToken}`) {
      return NextResponse.json(
        { error: "Unauthorized access to n8n workflow gate." },
        { status: 401 }
      );
    }

    const payload = await request.json();
    const { eventType, payloadData } = payload;

    if (eventType === "contract_compiled") {
      const { projectId, contractUrl, totalBudget } = payloadData || {};
      if (!projectId || !contractUrl) {
        return NextResponse.json({ error: "Missing required contract fields." }, { status: 400 });
      }

      // Update project budget and attach Stripe Connect parameters
      const { error } = await supabase
        .from("projects")
        .update({
          total_budget: totalBudget,
          stripe_escrow_id: contractUrl, // Link compiled contract as reference escrow ID
        })
        .eq("id", projectId);

      if (error) throw error;
    } else if (eventType === "github_pr_sync") {
      const { projectId, prNumber, prStatus, prTitle } = payloadData || {};
      if (!projectId || !prNumber) {
        return NextResponse.json({ error: "Missing required sync fields." }, { status: 400 });
      }

      // Sync PR logs into project communications stream
      const { error } = await supabase
        .from("messages")
        .insert({
          project_id: projectId,
          content: `[GitHub PR Sync] Pull Request #${prNumber} ("${prTitle}") status updated to: ${prStatus.toUpperCase()}`,
        });

      if (error) throw error;
    } else {
      return NextResponse.json({ error: "Unsupported eventType parameter." }, { status: 400 });
    }

    return NextResponse.json({ status: "success", eventType });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "n8n pipeline processor exception", details: errMsg },
      { status: 500 }
    );
  }
}
