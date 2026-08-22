import { NextRequest, NextResponse } from "next/server";
import { insertRow } from "@/lib/backend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.slice(0, 100) : null;
    const path = typeof body.path === "string" ? body.path.slice(0, 500) : "/";

    if (!sessionId) {
      return NextResponse.json({ ok: false, error: "invalid_session" }, { status: 400 });
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || null;

    const result = await insertRow("visitor_events", {
      session_id: sessionId,
      path,
      referrer: typeof body.referrer === "string" ? body.referrer.slice(0, 1000) : null,
      language: typeof body.language === "string" ? body.language.slice(0, 50) : null,
      screen: typeof body.screen === "string" ? body.screen.slice(0, 50) : null,
      user_agent: request.headers.get("user-agent")?.slice(0, 1000) || null,
      ip_address: ip,
    });

    return NextResponse.json({ ok: true, stored: result.stored }, { status: result.stored ? 201 : 202 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
