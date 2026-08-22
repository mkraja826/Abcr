import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This route doesn&apos;t<br /><span>lead anywhere yet.</span></h1>
        <p>The page may have moved, the address may be incorrect, or the content may not have been published yet.</p>
        <div className="hero-actions not-found-actions">
          <Link className="button primary" href="/">Return home <span>→</span></Link>
          <Link className="arrow-link" href="/projects">View projects <span>→</span></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
