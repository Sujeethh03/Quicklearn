# QuickLearn Systems — Website

Marketing and course-catalog website for [QuickLearn Systems](https://quicklearnsys.com), a professional certification training provider (ITIL®, PMP®, PRINCE2®, SAFe®, Scrum, ISTQB®, DevOps, Lean Six Sigma, and more).

Built with **Next.js 15** (App Router, Turbopack), **React 19**, and **Tailwind CSS 4**.

---

## Getting Started

```bash
npm install
npm run dev      # dev server on http://localhost:3000 (Turbopack)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

### Environment variables

Create `.env.local` in the project root. Contact, registration, brochure, and newsletter forms all send mail via SMTP (nodemailer) and will fail without these.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP server (defaults to `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password / app password |
| `CONTACT_EMAIL` | Inbox that receives form submissions |
| `NEXT_PUBLIC_COMPANY_NAME` | Company name shown in the UI |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_PHONE_PRIMARY` | Primary phone number |
| `NEXT_PUBLIC_PHONE_SECONDARY` | Secondary phone number |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for the chat widget |

---

## Project Structure

```
src/
├── app/                     # App Router — one directory per route
│   ├── page.js              # Homepage
│   ├── layout.js            # Root layout, global metadata
│   ├── sitemap.js           # Generated from src/data/siteRoutes.js
│   ├── robots.js            # robots.txt
│   ├── api/                 # Route handlers (contact, register, brochure, newsletter)
│   ├── <course-slug>/       # ~81 SEO-slug course pages
│   └── about, contact, events, insights, register,
│       corporate-training, brochure, login,
│       privacy-policy, terms-conditions, refund-policy, disclaimer
├── components/              # Shared UI (Header, Footer, CoursePageTemplate, …)
│   └── ui/                  # shadcn-style primitives
├── data/                    # Content registries (see below)
├── lib/utils.js             # `cn()` class helper
└── middleware.js            # Case-only legacy redirects + brochure gate
public/                      # Images, brochure HTML, static assets
```

### Data registries (`src/data/`)

| File | What it holds |
| --- | --- |
| `siteRoutes.js` | `COURSE_ROUTES`, `SITE_ROUTES`, `SITE_URL` — the source of truth for the sitemap and canonical URLs |
| `courseRegistry.js` | `COURSE_GROUPS` — grouped course names used by dropdowns and listings |
| `legacyRedirects.mjs` | Old URLs → new SEO slugs, consumed by `next.config.mjs` and `middleware.js` |
| `policies.js` | Text for the privacy / terms / refund / disclaimer pages |
| `socialLinks.js` | Social profile and Google Maps links |
| `countries.js` | Country list for the registration form |

---

## How Course Pages Work

Most course pages are a thin file that exports `metadata` plus a `courseData` object and renders the shared template:

```js
export const metadata = {
  alternates: { canonical: "/pmp-certification-training" },
  title: "…",
  description: "…",
  openGraph: { title: "…", description: "…", images: ["/pmp_certification.jpg"] },
};

const courseData = { title, subtitle, backgroundImage, overview, whyHead, why,
  prerequisites, whoShouldAttend, curriculum, learningOutcomes,
  certificationHeading, certification, disclaimer };

export default function Page() {
  return (<><Headers /><CoursePageTemplate courseData={courseData} /><Footer /></>);
}
```

`CoursePageTemplate` (`src/components/CoursePageTemplate.js`) also supports the older field names used by legacy pages (`courseOutline`, `learningObjectives`, `examDetails`, `targetGroup`, `prerequisite`, `courseHighlights`).

**Adding a course page:**

1. Create `src/app/<seo-slug>/page.js` following the shape above.
2. Add the slug to `COURSE_ROUTES` in `src/data/siteRoutes.js` so it lands in the sitemap.
3. Add the course name to the right group in `src/data/courseRegistry.js`.
4. Drop the hero image in `public/` and reference it in `backgroundImage` / `openGraph.images`.
5. Include the accrediting body's trademark **disclaimer** on the page.

**Renaming a route:** add the old → new mapping to `src/data/legacyRedirects.mjs` (use `CASE_ONLY_REDIRECTS` when only capitalisation changed, so `next.config.mjs`'s case-insensitive matching doesn't loop).

---

## Notable Behaviours

- **Brochure gate** — `/quicklearn-professional-brochure.html` is a lead magnet. Middleware redirects visitors without the `ql_brochure` cookie to `/brochure` to submit their details first.
- **SEO** — canonical URLs per page, generated `sitemap.xml` and `robots.txt`, Open Graph images, and JSON-LD via `src/components/StructuredData.js`.
- **Trademark disclaimers** — every course page carries the disclaimer required by its accrediting body (PMI®, AXELOS®, Scrum Alliance®, Scaled Agile®, ISTQB®, …). Keep this text exact when editing.

---

## Deployment

Deployed on **Vercel**; pushes to `main` build and deploy automatically. Set the environment variables above in the Vercel project settings.

## Further Reading

See [`WEBSITE_MAINTENANCE_AND_SEO_GUIDE.md`](./WEBSITE_MAINTENANCE_AND_SEO_GUIDE.md) for the detailed non-developer guide to editing content, metadata, and images.
