"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="error-state">
      <section>
        <p className="eyebrow">ABCR Infra Projects</p>
        <h1>Something went wrong.</h1>
        <p>We could not load this page correctly. You can try again or return to the home page.</p>
        <div className="error-actions">
          <button className="button primary" type="button" onClick={() => reset()}>Try again</button>
          <Link className="text-link" href="/">Return home <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
