import { SITE_URL } from "@/data/siteRoutes";
import { SOCIAL_PROFILE_URLS, GOOGLE_MAPS_URL, OFFICE_COORDINATES } from "@/data/socialLinks";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Renders a JSON-LD block. Server component — the markup ships in the HTML. */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization + LocalBusiness + WebSite. Rendered once, in the root layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": ORGANIZATION_ID,
        name: "QuickLearn Systems",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/logo.png`,
        description:
          "QuickLearn Systems is a professional training and certification provider delivering ITIL, PMP, PRINCE2, Agile, Scrum, SAFe, DevOps, ISTQB and Lean Six Sigma training to individuals and organizations.",
        email: "training@quicklearnsys.com",
        telephone: ["+91-91001-95152", "+91-97037-04495"],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Lorven Smart Space, 2nd Floor, Vaishnavi Cynosure, Near Gachibowli Flyover, Telecom Nagar",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500032",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: OFFICE_COORDINATES.lat,
          longitude: OFFICE_COORDINATES.lng,
        },
        hasMap: GOOGLE_MAPS_URL,
        areaServed: "Worldwide",
        sameAs: SOCIAL_PROFILE_URLS,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "QuickLearn Systems",
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
    ],
  };

  return <JsonLd data={data} />;
}

/**
 * Course + BreadcrumbList for a single course page.
 * Reads the same courseData object the page already renders from.
 */
export function CourseSchema({ courseData, path }) {
  if (!courseData?.title) return null;

  const url = `${SITE_URL}${path}`;
  const description =
    courseData.subtitle ||
    (Array.isArray(courseData.overview) ? courseData.overview[0] : courseData.overview) ||
    `${courseData.title} certification training from QuickLearn Systems.`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${url}#course`,
        name: courseData.title,
        description,
        url,
        provider: { "@id": ORGANIZATION_ID },
        ...(courseData.category && { about: courseData.category }),
        ...(courseData.backgroundImage && {
          image: `${SITE_URL}${courseData.backgroundImage}`,
        }),
        inLanguage: "en",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: courseData.duration || "P2D",
            location: {
              "@type": "VirtualLocation",
              url,
            },
          },
          {
            "@type": "CourseInstance",
            courseMode: "Onsite",
            courseWorkload: courseData.duration || "P2D",
            location: {
              "@type": "Place",
              name: "QuickLearn Systems",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          ...(courseData.category
            ? [{ "@type": "ListItem", position: 2, name: courseData.category }]
            : []),
          {
            "@type": "ListItem",
            position: courseData.category ? 3 : 2,
            name: courseData.breadcrumbTitle || courseData.title,
            item: url,
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}

/** FAQPage schema — pass [{ question, answer }]. */
export function FaqSchema({ faqs }) {
  if (!faqs?.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <JsonLd data={data} />;
}
