import type { Metadata } from "next";
import "./globals.css";
import "./enquiry.css";
import "./interior.css";
import VisitorTracker from "@/components/VisitorTracker";

export const metadata: Metadata = {
  title: "ABCR Infra Projects Pvt. Ltd. | Infrastructure & Engineering",
  description: "ABCR delivers infrastructure solutions across railways, EPC, SCADA, water systems, buildings and technical consultancy in India.",
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
