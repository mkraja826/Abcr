import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://abcr.co.in/sitemap.xml",
    host: "https://abcr.co.in",
  };
}
