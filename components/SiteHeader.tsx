import Link from "next/link";

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? " solid-header" : ""}`}>
      <Link className="brand" href="/" aria-label="ABCR home">
        <span className="brand-mark">A</span>
        <span>ABCR</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" href="/contact">Enquire <span>↗</span></Link>
    </header>
  );
}
