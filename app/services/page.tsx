import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | ABCR Infra Projects",
  description: "Explore ABCR capabilities across railways, SCADA, EPC, water, buildings and infrastructure consultancy.",
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">Our services</p>
        <h1>Multi-disciplinary<br /><span>infrastructure capability.</span></h1>
        <p>Execution capabilities across railway infrastructure, electrical systems, automation, EPC, water networks, civil works and technical planning.</p>
      </section>

      <section className="service-detail-list section">
        {services.map((service) => (
          <article className="service-detail" key={service.slug} id={service.slug}>
            <span className="service-number">{service.number}</span>
            <div><p className="eyebrow">{service.shortTitle}</p><h2>{service.title}</h2></div>
            <div><p>{service.description}</p><ul>{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
