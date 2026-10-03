import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const base = "https://chaitanya-raj.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
    },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
