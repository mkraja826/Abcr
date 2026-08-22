import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abcr.co.in";
  const routes = ["", "/about", "/services", "/projects", "/careers", "/contact", "/privacy"];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" || route === "/services" ? 0.9 : route === "/privacy" ? 0.4 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
