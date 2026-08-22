import type { Metadata } from "next";
import "./globals.css";
import "./enquiry.css";
import "./interior.css";
import VisitorTracker from "@/components/VisitorTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://abcr.co.in"),
  title: {
    default: "ABCR Infra Projects Pvt. Ltd. | Infrastructure & Engineering",
    template: "%s | ABCR Infra Projects",
  },
  description: "ABCR delivers infrastructure solutions across railways, EPC, SCADA, water systems, buildings and technical consultancy in India.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
