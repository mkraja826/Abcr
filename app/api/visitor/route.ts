import { NextRequest, NextResponse } from "next/server";
import { insertRow } from "@/lib/backend";

export const runtime = "nodejs";

const sessionPattern = /^[A-Za-z0-9_-]{10,100}$/;

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "unsupported_media_type" }, { status: 415 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 12_000) {
      return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
    }

    const body = await request.json();
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.slice(0, 100) : "";
    const path = typeof body.path === "string" && body.path.startsWith("/") ? body.path.slice(0, 500) : "/";

    if (!sessionPattern.test(sessionId)) {
      return NextResponse.json({ ok: false, error: "invalid_session" }, { status: 400 });
    }

    const countryHeader = request.headers.get("cf-ipcountry") || request.headers.get("x-vercel-ip-country");
    const country = countryHeader && /^[A-Za-z]{2}$/.test(countryHeader) ? countryHeader.toUpperCase() : null;

    const result = await insertRow("visitor_events", {
      session_id: sessionId,
      path,
      referrer: typeof body.referrer === "string" ? body.referrer.trim().slice(0, 1000) : null,
      language: typeof body.language === "string" ? body.language.trim().slice(0, 50) : null,
      screen: typeof body.screen === "string" ? body.screen.trim().slice(0, 50) : null,
      user_agent: request.headers.get("user-agent")?.slice(0, 1000) || null,
      country,
    });

    return NextResponse.json({ ok: true, stored: result.stored }, { status: result.stored ? 201 : 202 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
