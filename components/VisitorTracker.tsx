"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "abcr_session_id";

function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const payload = {
      sessionId: getSessionId(),
      path: pathname || "/",
      referrer: document.referrer || null,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
    };

    fetch("/api/visitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => undefined);
  }, [pathname]);

  return null;
}
