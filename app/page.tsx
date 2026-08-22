import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company, projects, services } from "@/lib/site-data";

const projectImages = [
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85",
];

export default function Home() {
  const featuredProjects = [projects[0], projects[4], projects[2]];

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">{company.tagline}</p>
          <h1>Engineering India&apos;s<br />next <em>infrastructure</em><br />chapter.</h1>
          <p className="hero-copy">{company.description}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">Explore our projects <span>↗</span></Link>
            <Link className="text-link" href="/about">Discover ABCR <span>→</span></Link>
          </div>
        </div>
        <div className="hero-index"><span>ABCR</span><div className="hero-line"><i /></div><span>INDIA</span></div>
      </section>

      <section className="intro section" id="about">
        <div><p className="eyebrow">Who we are</p><h2>Infrastructure built<br /><span>with purpose.</span></h2></div>
        <div className="intro-copy"><p>ABCR Infra Projects Pvt. Ltd. delivers multidisciplinary infrastructure work across railway, electrical, automation, EPC, water and civil sectors, with experience serving Government, PSU and infrastructure requirements.</p><Link className="arrow-link" href="/about">About ABCR <span>→</span></Link></div>
      </section>

      <section className="stats" aria-label="ABCR capabilities">
        <div><strong>06</strong><span>Core service<br />capabilities</span></div>
        <div><strong>EPC</strong><span>Engineering through<br />commissioning</span></div>
        <div><strong>PSU</strong><span>Government & PSU<br />project experience</span></div>
        <div><strong>India</strong><span>Infrastructure<br />delivery focus</span></div>
      </section>

      <section className="sectors section" id="services">
        <div className="section-heading"><div><p className="eyebrow">Our services</p><h2>Capability across<br /><span>critical infrastructure.</span></h2></div><p>From railway and electrical systems to water networks and turnkey EPC, ABCR brings coordinated engineering and project execution to complex infrastructure requirements.</p></div>
        <div className="sector-list">
          {services.map((service) => <Link className="sector" href={`/services#${service.slug}`} key={service.slug}><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><b>↗</b></Link>)}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-head"><div><p className="eyebrow light">Selected work</p><h2>Projects across<br />essential infrastructure.</h2></div><Link href="/projects">View all projects <span>→</span></Link></div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => <article className="project-card" key={project.title} style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(4,16,26,.9) 100%), url(${projectImages[index]})` }}><span>0{index + 1}</span><div><p>{project.sector}</p><h3>{project.title}</h3></div></article>)}
        </div>
      </section>

      <section className="strength section" id="strength">
        <div className="strength-image" role="img" aria-label="Infrastructure engineering and construction" />
        <div className="strength-copy"><p className="eyebrow">How we deliver</p><h2>From engineering<br /><span>to execution.</span></h2><p>ABCR&apos;s infrastructure approach brings together planning, engineering, procurement, construction, electrical systems, quality controls and commissioning support according to project requirements.</p><ul><li><span>01</span>Engineering & planning</li><li><span>02</span>Procurement & coordination</li><li><span>03</span>Quality-focused execution</li><li><span>04</span>Testing & commissioning support</li></ul></div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow light">Start a conversation</p><h2>Have an infrastructure<br />requirement?</h2><p className="contact-intro">Talk to ABCR about project execution, partnership opportunities or technical requirements.</p></div>
        <EnquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}
