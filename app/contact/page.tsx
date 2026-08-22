import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EnquiryForm from "@/components/EnquiryForm";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | ABCR Infra Projects",
  description: "Contact ABCR Infra Projects Pvt. Ltd. for infrastructure, project and partnership enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact ABCR Infra Projects",
    description: "Contact ABCR Infra Projects Pvt. Ltd. for infrastructure, project and partnership enquiries.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader solid />
      <section className="inner-hero compact">
        <p className="eyebrow">Contact ABCR</p>
        <h1>Start a conversation<br /><span>with our team.</span></h1>
        <p>For project enquiries, partnerships, vendor discussions or general information, reach ABCR through the channels below.</p>
      </section>

      <section className="contact-page section">
        <div className="contact-directory">
          <div><p className="eyebrow">Call</p>{contact.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>)}</div>
          <div><p className="eyebrow">Email</p>{contact.emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}</div>
          <div><p className="eyebrow">Offices</p>{contact.offices.map((office) => <p className="office-line" key={office.label}><strong>{office.label}</strong><span>{office.location}</span></p>)}</div>
        </div>
        <div className="contact-form-panel">
          <p className="eyebrow">Project enquiry</p>
          <h2>Tell us what<br />you are building.</h2>
          <EnquiryForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
