import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy | ABCR Infra Projects",
  description: "Privacy information for visitors to the ABCR Infra Projects website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy | ABCR Infra Projects",
    description: "Privacy information for visitors to the ABCR Infra Projects website.",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">Privacy</p>
        <h1>Respecting visitor<br /><span>information.</span></h1>
        <p>This notice explains what information may be collected when you use the ABCR website or send us an enquiry.</p>
      </section>

      <section className="section content-split">
        <div>
          <p className="eyebrow">Website information</p>
          <h2>Simple analytics.<br /><span>No unnecessary tracking.</span></h2>
        </div>
        <div className="rich-copy">
          <h3>Information we collect</h3>
          <p>For basic website analytics, ABCR may record an anonymous session identifier, pages viewed, referring page, browser or device information, language, screen size and coarse country information when available. The website is designed not to store raw visitor IP addresses for analytics.</p>

          <h3>Enquiries</h3>
          <p>When you submit an enquiry, we may collect the name, email address, phone number and message that you choose to provide. This information is used to respond to your request and manage relevant business communication.</p>

          <h3>How information is used</h3>
          <p>Information may be used to understand website usage, improve the website, respond to enquiries, support project or partnership discussions, maintain security and meet applicable legal obligations.</p>

          <h3>Storage and service providers</h3>
          <p>Website and enquiry information may be processed by infrastructure, hosting, database or security service providers used to operate the ABCR website. Information is retained only for as long as reasonably necessary for the purposes described above or as required by applicable law.</p>

          <h3>Your requests</h3>
          <p>If you have a privacy question or want to request correction or deletion of information you submitted through this website, contact ABCR at <a href={`mailto:${contact.emails[0]}`}>{contact.emails[0]}</a>.</p>

          <h3>Updates</h3>
          <p>This notice may be updated as the website, its services or applicable requirements change. The version published on this page is the current website notice.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
