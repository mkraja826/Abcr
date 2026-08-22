import type { Metadata } from "next";
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

const images = [
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1400&q=85",
];

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
          <article className="portfolio-card" key={project.title}>
            <div className="portfolio-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(4,16,26,.78)), url(${images[index]})` }}>
              <span>0{index + 1}</span>
            </div>
            <div className="portfolio-meta"><p>{project.sector}</p><span>{project.region}</span></div>
            <h2>{project.title}</h2>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
