import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-logo-link" href="/" aria-label="ABCR Infra Projects Pvt. Ltd. home">
            <img
              className="footer-logo"
              src="/abcr-logo-footer.svg"
              alt="ABCR Infra Projects Pvt. Ltd."
            />
          </Link>
          <p className="footer-kicker">ABCR Infra Projects Pvt. Ltd.</p>
          <p className="footer-copy">Infrastructure development across railways, EPC, SCADA, water systems and civil works.</p>
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className="footer-links">
          <strong>Contact</strong>
          <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`}>{contact.phones[0]}</a>
          <a href={`mailto:${contact.emails[0]}`}>{contact.emails[0]}</a>
          <Link href="/contact">All contact details</Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 ABCR Infra Projects Pvt. Ltd.</span><span>Infrastructure & Engineering</span></div>
    </footer>
  );
}
