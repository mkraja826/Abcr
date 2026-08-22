import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const url = `/projects/${project.slug}`;
  const description = `${project.title} — an ABCR ${project.sector.toLowerCase()} project listed in the company portfolio.`;

  return {
    title: `${project.title} | ABCR Projects`,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${project.title} | ABCR Infra Projects`,
      description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <SiteHeader solid />

      <section className="project-detail-hero">
        <div>
          <p className="eyebrow">Project portfolio</p>
          <p className="project-breadcrumb"><Link href="/projects">Projects</Link><span>/</span>{project.sector}</p>
          <h1>{project.title}</h1>
        </div>
        <div className="project-facts" aria-label="Project information">
          <div><span>Sector</span><strong>{project.sector}</strong></div>
          <div><span>Region</span><strong>{project.region}</strong></div>
          <div><span>Portfolio status</span><strong>Publicly listed by ABCR</strong></div>
        </div>
      </section>

      <section className="project-detail-body section">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2>Verified information,<br /><span>without assumptions.</span></h2>
        </div>
        <div className="rich-copy project-copy">
          <p>{project.summary}</p>
          <p>ABCR&apos;s current public portfolio identifies this project by name and sector. Detailed scope, client, contract value, milestones and delivery status are not stated here unless they have been independently verified from ABCR&apos;s own project records.</p>
          <div className="project-verification-note">
            <strong>Content policy</strong>
            <p>This page intentionally avoids estimated values, invented specifications or unverified completion claims. Verified project documentation can be added later without changing the page structure.</p>
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div>
          <p className="eyebrow light">Project enquiries</p>
          <h2>Discuss a similar<br />infrastructure requirement.</h2>
        </div>
        <Link className="button white" href="/contact">Contact ABCR <span>↗</span></Link>
      </section>

      <section className="next-project section">
        <p className="eyebrow">Next project</p>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>{nextProject.sector}</span>
          <h2>{nextProject.title}</h2>
          <b>→</b>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
