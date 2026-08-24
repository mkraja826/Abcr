"use client";

import { FormEvent, useState } from "react";

const contactEmail = "abcrinfraprojects@gmail.com";

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
          companyWebsite: data.get("companyWebsite"),
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

  const fallbackMessage = (
    <>
      Please email us directly at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
    </>
  );

  return (
    <form className="enquiry-form" onSubmit={submit} noValidate={false}>
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required maxLength={250} autoComplete="email" inputMode="email" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" inputMode="tel" />
        </label>
        <label className="message-field">
          <span>Tell us about your requirement</span>
          <textarea name="message" required minLength={10} maxLength={4000} rows={4} />
        </label>
      </div>
      <div className="form-footer">
        <button className="button white" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <span>↗</span>
        </button>
        <p aria-live="polite">
          {status === "sent" && "Thank you. Your enquiry has been received. Our team will get back to you."}
          {status === "offline" && fallbackMessage}
          {status === "error" && <>We could not submit this enquiry right now. {fallbackMessage}</>}
        </p>
      </div>
    </form>
  );
}
