"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "offline" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          sourcePath: window.location.pathname,
        }),
      });

      if (response.status === 503) {
        setStatus("offline");
        return;
      }

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required maxLength={250} autoComplete="email" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" maxLength={40} autoComplete="tel" />
        </label>
        <label className="message-field">
          <span>Tell us about your requirement</span>
          <textarea name="message" required minLength={10} maxLength={4000} rows={4} />
        </label>
      </div>
      <div className="form-footer">
        <button className="button white" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <span>↗</span>
        </button>
        <p aria-live="polite">
          {status === "sent" && "Thank you. Your enquiry has been received."}
          {status === "offline" && "Online enquiry storage is ready but not connected yet."}
          {status === "error" && "We could not submit this enquiry. Please try again."}
        </p>
      </div>
    </form>
  );
}
