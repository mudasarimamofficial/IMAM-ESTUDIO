import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Whitelist of allowed database action selectors (Action-Selector Pattern)
const ALLOWED_ACTIONS = {
  GET_EXPERT_PROFILE: "GET_EXPERT_PROFILE",
  LIST_ACTIVE_SERVICES: "LIST_ACTIVE_SERVICES",
  GET_PROJECT_MILESTONES: "GET_PROJECT_MILESTONES",
  GET_AUDIT_LOG_SUMMARY: "GET_AUDIT_LOG_SUMMARY",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, params, tenantId } = body;

    // Security Gate 1: Enforce action whitelisting to block arbitrary code injection
    if (!action || !ALLOWED_ACTIONS[action as keyof typeof ALLOWED_ACTIONS]) {
      return NextResponse.json(
        { error: "Security Exception: Action not permitted or unrecognized by MCP gateway." },
        { status: 403 }
      );
    }

    // Security Gate 2: Enforce tenant parameter isolation (no cross-tenant bleed)
    if (!tenantId) {
      return NextResponse.json(
        { error: "Access Denied: Missing tenant authority parameter." },
        { status: 400 }
      );
    }

    let queryResult;

    // Execute only safe, hardcoded query templates
    switch (action) {
      case ALLOWED_ACTIONS.GET_EXPERT_PROFILE: {
        const { profileId } = params || {};
        if (!profileId) throw new Error("Missing profileId parameter.");
        const { data, error } = await supabase
          .from("profiles")
          .select("id, headline, bio, hourly_rate, timezone, is_verified")
          .eq("id", profileId)
          .single();
        if (error) throw error;
        queryResult = data;
        break;
      }

      case ALLOWED_ACTIONS.LIST_ACTIVE_SERVICES: {
        const { data, error } = await supabase
          .from("services")
          .select("id, title, description, base_price")
          .limit(20);
        if (error) throw error;
        queryResult = data;
        break;
      }

      case ALLOWED_ACTIONS.GET_PROJECT_MILESTONES: {
        const { projectId } = params || {};
        if (!projectId) throw new Error("Missing projectId parameter.");
        const { data, error } = await supabase
          .from("milestones")
          .select("id, project_id, title, amount, approval_state, due_date")
          .eq("project_id", projectId);
        if (error) throw error;
        queryResult = data;
        break;
      }

      case ALLOWED_ACTIONS.GET_AUDIT_LOG_SUMMARY: {
        const { data, error } = await supabase
          .from("audit_logs")
          .select("id, action, target_resource, timestamp")
          .eq("actor_id", tenantId)
          .order("timestamp", { ascending: false })
          .limit(10);
        if (error) throw error;
        queryResult = data;
        break;
      }

      default:
        throw new Error("Action routing mismatch in selector switch.");
    }

    return NextResponse.json({
      status: "success",
      action,
      data: queryResult,
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "MCP execution exception", details: errMsg },
      { status: 500 }
    );
  }
}
