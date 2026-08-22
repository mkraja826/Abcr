import type { Metadata } from "next";
import "./globals.css";
import "./enquiry.css";
import "./interior.css";
import "./accessibility.css";
import "./project-detail.css";
import VisitorTracker from "@/components/VisitorTracker";
import { company, contact } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://abcr.co.in"),
  title: "ABCR Infra Projects Pvt. Ltd. | Infrastructure & Engineering",
  description: "ABCR delivers infrastructure solutions across railways, EPC, SCADA, water systems, buildings and technical consultancy in India.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abcr.co.in",
    siteName: "ABCR Infra Projects Pvt. Ltd.",
    title: "ABCR Infra Projects Pvt. Ltd.",
    description: "Infrastructure solutions across railways, EPC, SCADA, water systems and civil works in India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABCR Infra Projects Pvt. Ltd.",
    description: "Infrastructure & Engineering",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  legalName: company.legalName,
  alternateName: company.shortName,
  url: "https://abcr.co.in",
  description: company.description,
  foundingDate: "2024-01-16",
  identifier: company.cin,
  areaServed: "India",
  telephone: contact.phones,
  email: contact.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "24-101-20-37, Saibaba Temple area, Near Renuka Yellamma Temple",
    addressLocality: "Proddatur",
    addressRegion: "Andhra Pradesh",
    postalCode: "516360",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.phones[0],
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
