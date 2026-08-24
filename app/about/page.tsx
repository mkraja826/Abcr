import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company, leadership } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | ABCR Infra Projects",
  description: "Learn about ABCR Infra Projects Pvt. Ltd., its mission, vision and leadership.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About ABCR Infra Projects",
    description: "Learn about ABCR Infra Projects Pvt. Ltd., its mission, vision and leadership.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero">
        <p className="eyebrow">About ABCR</p>
        <h1>Engineering ambition<br /><span>into infrastructure.</span></h1>
        <p>{company.description}</p>
      </section>

      <section className="content-split section">
        <div><p className="eyebrow">Who we are</p><h2>Focused on execution.<br /><span>Built around trust.</span></h2></div>
        <div className="rich-copy">
          <p>ABCR works across public infrastructure and engineering assignments in India, with capabilities spanning railway works, electrical and TRD, SCADA and automation, EPC delivery, water systems, buildings and infrastructure planning.</p>
          <p>Our approach combines technical discipline, transparent working relationships and responsible project execution with a focus on long-term infrastructure performance.</p>
        </div>
      </section>

      <section className="mission-grid">
        <article><span>01</span><p className="eyebrow">Mission</p><h3>Deliver with discipline.</h3><p>{company.mission}</p></article>
        <article><span>02</span><p className="eyebrow">Vision</p><h3>Build for tomorrow.</h3><p>{company.vision}</p></article>
        <article><span>03</span><p className="eyebrow">Approach</p><h3>Responsible infrastructure.</h3><p>Quality, transparency, innovation and environment-conscious execution guide the way we approach projects and partnerships.</p></article>
      </section>

      <section className="content-split section">
        <div><p className="eyebrow">Corporate identity</p><h2>Clear legal<br /><span>company information.</span></h2></div>
        <div className="rich-copy">
          <p><strong>Legal name:</strong> {company.legalName}</p>
          <p><strong>Incorporated:</strong> {company.incorporated}</p>
          <p><strong>Corporate Identification Number (CIN):</strong> {company.cin}</p>
          <p><strong>Registered office:</strong> {company.registeredAddress}</p>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="section-heading"><div><p className="eyebrow">Leadership</p><h2>People guiding<br /><span>our progress.</span></h2></div><p>Leadership focused on execution, sustainable growth and long-term client relationships.</p></div>
        <div className="leadership-grid">
          {leadership.map((person, index) => (
            <article key={person.name}>
              <span>0{index + 1}</span>
              <div className="leader-avatar leader-photo" style={{ backgroundImage: `url(${person.image})` }} role="img" aria-label={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
