import type { Metadata } from "next";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";

export const metadata: Metadata = {
  title: "ABCR | Infrastructure & Engineering",
  description: "ABCR delivers dependable engineering and infrastructure solutions built for long-term impact.",
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
