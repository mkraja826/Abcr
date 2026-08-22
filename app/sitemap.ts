import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abcr.co.in";
  const routes = ["", "/about", "/services", "/projects", "/careers", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" || route === "/services" ? 0.9 : route === "/privacy" ? 0.4 : 0.8,
  }));
}
