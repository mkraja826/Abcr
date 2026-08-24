import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
] as const;

const logoSrc = "https://drive.google.com/uc?export=view&id=1Z6ibCqErFOHQ2FUxqGlEv262CdqJbDsA";

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? " solid-header" : ""}`}>
      <Link className="brand" href="/" aria-label="ABCR Infra Projects Pvt. Ltd. home">
        <img
          className="brand-logo"
          src={logoSrc}
          alt="ABCR Infra Projects Pvt. Ltd."
        />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>

      <div className="header-actions">
        <Link className="header-cta" href="/contact">Enquire <span>↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}<span>→</span></Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
