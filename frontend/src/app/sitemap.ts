import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const SITE_URL = "https://bharatmarks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}
