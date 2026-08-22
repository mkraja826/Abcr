import { NextRequest, NextResponse } from "next/server";
import { insertRow } from "@/lib/backend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 250) : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : null;
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 4000) : "";

    if (!name || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    const result = await insertRow("enquiries", {
      name,
      email,
      phone,
      message,
      source_path: typeof body.sourcePath === "string" ? body.sourcePath.slice(0, 500) : "/",
    });

    if (!result.stored) {
      return NextResponse.json({ ok: false, error: "backend_not_configured" }, { status: 503 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
