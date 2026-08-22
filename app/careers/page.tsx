import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers | ABCR Infra Projects",
  description: "Careers and opportunities at ABCR Infra Projects Pvt. Ltd.",
};

export default function CareersPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">Careers</p>
        <h1>Build infrastructure.<br /><span>Build your career.</span></h1>
        <p>ABCR works across multidisciplinary infrastructure assignments where engineering discipline, ownership and collaboration matter.</p>
      </section>

      <section className="career-panel section">
        <div><p className="eyebrow">Work with ABCR</p><h2>Engineering careers<br /><span>with real-world impact.</span></h2></div>
        <div className="rich-copy">
          <p>We welcome professionals from civil, electrical, railway, SCADA, project management, procurement, quality, safety and related infrastructure disciplines to share their profile for relevant opportunities.</p>
          <p>Current vacancies are not published on this website yet. Profiles may be sent to the company contact email for consideration when suitable roles arise.</p>
          <a className="button primary" href={`mailto:${contact.emails[0]}?subject=Career%20Enquiry%20-%20ABCR`}>Send your profile <span>↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
