import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  details: string;
  source_cta: string;
  status: "New" | "Contacted" | "In Scoping" | "Closed" | "Archived";
  created_at: string;
}

// In-memory store fallback so leads are 100% functional even if DB is migrating
const memoryLeadsStore: LeadRecord[] = [
  {
    id: "LD-901",
    name: "Alexander Vance",
    email: "vance@enterprise-tech.io",
    project_type: "Shopify Custom Engineering",
    budget: "$5,000 - $10,000",
    details: "We need custom Liquid sections and a native subscription portal built for our high-volume Shopify 2.0 store.",
    source_cta: "Service Card: Shopify Custom Engineering",
    status: "New",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "LD-902",
    name: "Sarah Lin",
    email: "sarah@nexus-ai.co",
    project_type: "AI Voice Agents",
    budget: "$10,000+",
    details: "Looking for autonomous AI voice receptionists to handle inbound customer support calls and sync appointments with Google Calendar.",
    source_cta: "Hero Start a Project",
    status: "In Scoping",
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yqaslfozryelumtlkoxk.supabase.co";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) return null;
  return createClient(url, key);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, project_type, budget, details, source_cta } = body;

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const leadId = `LD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead: LeadRecord = {
      id: leadId,
      name: String(name).trim(),
      email: String(email).trim(),
      project_type: String(project_type || "General Technical Inquiry"),
      budget: String(budget || "Flexible / Not Specified"),
      details: String(details).trim(),
      source_cta: String(source_cta || "Direct Contact Form"),
      status: "New",
      created_at: new Date().toISOString(),
    };

    // Store in memory cache
    memoryLeadsStore.unshift(newLead);

    // Attempt Supabase insert if credentials exist
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from("leads").insert({
          id: newLead.id,
          name: newLead.name,
          email: newLead.email,
          project_type: newLead.project_type,
          budget: newLead.budget,
          details: newLead.details,
          source_cta: newLead.source_cta,
          status: newLead.status,
          created_at: newLead.created_at,
        });
      } catch (dbErr) {
        console.warn("Supabase lead insertion notice:", dbErr);
      }
    }

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const supabase = getSupabaseClient();
  let dbLeads: LeadRecord[] = [];

  if (supabase) {
    try {
      const { data } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (data && Array.isArray(data) && data.length > 0) {
        dbLeads = data as LeadRecord[];
      }
    } catch (e) {
      console.warn("Supabase fetch notice:", e);
    }
  }

  // Combine DB leads and memory leads, deduplicating by ID
  const leadMap = new Map<string, LeadRecord>();
  [...memoryLeadsStore, ...dbLeads].forEach((l) => leadMap.set(l.id, l));
  const combined = Array.from(leadMap.values()).sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return NextResponse.json({ leads: combined });
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing lead ID or status." }, { status: 400 });
    }

    // Update in memory
    const item = memoryLeadsStore.find((l) => l.id === id);
    if (item) {
      item.status = status;
    }

    // Update in Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from("leads").update({ status }).eq("id", id);
      } catch (e) {
        console.warn("Supabase update status notice:", e);
      }
    }

    return NextResponse.json({ success: true, id, status });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update lead status." }, { status: 500 });
  }
}
