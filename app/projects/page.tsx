import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects | ABCR Infra Projects",
  description: "Selected ABCR railway, SCADA, pipeline and infrastructure projects across India.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | ABCR Infra Projects",
    description: "Selected ABCR railway, SCADA, pipeline and infrastructure projects across India.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">Project portfolio</p>
        <h1>Infrastructure delivered<br /><span>across critical sectors.</span></h1>
        <p>Selected projects publicly presented by ABCR across railway infrastructure, SCADA and water/pipeline works.</p>
      </section>

      <section className="portfolio-grid section">
        {projects.map((project, index) => (
          <Link className="portfolio-card" href={`/projects/${project.slug}`} key={project.title}>
            <div className="portfolio-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(3,21,34,.8)), url(${project.image})` }}>
              <span>0{index + 1}</span>
              <small>ABCR site photograph</small>
            </div>
            <div className="portfolio-meta"><p>{project.sector}</p><span>{project.region}</span></div>
            <div className="portfolio-title-row"><h2>{project.title}</h2><b>↗</b></div>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
