import { NextRequest, NextResponse } from "next/server";
import { insertRow } from "@/lib/backend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "unsupported_media_type" }, { status: 415 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 16_000) {
      return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
    }

    const body = await request.json();

    // Honeypot: bots commonly fill fields that real visitors never see.
    if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 250) : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : null;
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 4000) : "";
    const sourcePath = typeof body.sourcePath === "string" && body.sourcePath.startsWith("/")
      ? body.sourcePath.slice(0, 500)
      : "/";

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    const result = await insertRow("enquiries", {
      name,
      email,
      phone,
      message,
      source_path: sourcePath,
    });

    if (!result.stored) {
      return NextResponse.json({ ok: false, error: "backend_not_configured" }, { status: 503 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
