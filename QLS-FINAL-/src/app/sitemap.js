import { COURSE_ROUTES, SITE_ROUTES, SITE_URL } from "@/data/siteRoutes";

export default function sitemap() {
  const lastModified = new Date();

  return [
    ...SITE_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...COURSE_ROUTES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  ];
}
