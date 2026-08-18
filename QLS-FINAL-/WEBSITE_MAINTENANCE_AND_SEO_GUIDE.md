# QuickLearn Systems — Website Maintenance & SEO Guide

**Prepared for:** QuickLearn Systems Client Team, Content Team & SEO Team
**Project:** QLS-FINAL — [quicklearnsys.com](https://quicklearnsys.com)
**Framework:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4
**Last Updated:** August 2026

This guide explains how the website is put together, where every piece of text lives, and exactly what to change when you want to edit content or SEO. You do not need to be a developer to follow it — each section names the file to open and the lines to change. A short "why this matters" note accompanies each rule so you can make judgement calls the guide doesn't cover.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [URLs, Slugs & Redirects](#2-urls-slugs--redirects)
3. [Anatomy of a Course Page](#3-anatomy-of-a-course-page)
4. [Where Text Lives — Content Editing Map](#4-where-text-lives--content-editing-map)
5. [SEO Architecture](#5-seo-architecture)
6. [Step-by-Step — Editing SEO on a Page](#6-step-by-step--editing-seo-on-a-page)
7. [Adding a New Course Page](#7-adding-a-new-course-page)
8. [Renaming or Retiring a Page](#8-renaming-or-retiring-a-page)
9. [Trademark Disclaimers](#9-trademark-disclaimers)
10. [Forms, Email & the Brochure Gate](#10-forms-email--the-brochure-gate)
11. [Contact Info & Global Site Settings](#11-contact-info--global-site-settings)
12. [Images & Media](#12-images--media)
13. [Deploying & Verifying Changes](#13-deploying--verifying-changes)
14. [Known Gaps & Recommended Actions](#14-known-gaps--recommended-actions)
15. [Quick Reference Cheatsheet](#15-quick-reference-cheatsheet)

---

## 1. Architecture Overview

### What the site is built with

| Layer | Technology | What it controls |
|---|---|---|
| Pages & routing | Next.js 15 App Router | Which URLs exist, what renders on them |
| Rendering | React 19 (server components by default) | Page structure; SEO tags are rendered server-side, so Google sees them |
| Styling | Tailwind CSS 4 | Colours, spacing, typography, layout |
| Animation | Framer Motion, GSAP | Scroll reveals, hero transitions, carousels |
| Forms & email | Nodemailer over SMTP | Contact, registration, brochure and newsletter submissions |
| Chat widget | AnythingLLM embed (`src/app/layout.js`) | The assistant bubble on every page |
| Icons | Lucide React, React Icons, MUI | UI iconography |
| Hosting | Vercel | Builds and deploys on every push to `main` |

### The folders that matter

```
src/
├── app/          One folder per URL. Course pages, static pages, API routes.
├── components/   Shared UI: Header, Footer, CoursePageTemplate, forms, widgets.
├── data/         Content registries — routes, course lists, policies, redirects.
├── lib/          Small helpers.
└── middleware.js Runs before every matched request (redirects + brochure gate).
public/           All images, logos and the downloadable brochure.
```

### Global elements (appear on every page)

| Element | File to edit |
|---|---|
| Top navigation bar and course mega-menu | `src/components/Header.js` |
| Footer (links, address, social icons) | `src/components/Footer.js` |
| Footer course listing by category | `src/components/CourseListings.js` |
| Live chat / assistant widget | `src/app/layout.js` |
| Site-wide fallback title & description | `src/app/layout.js` → `metadata` |
| Organisation structured data (JSON-LD) | `src/components/StructuredData.js` → `OrganizationSchema` |
| Phone, email, WhatsApp, company name | `.env.local` (see Section 11) |

---

## 2. URLs, Slugs & Redirects

### Folder name = URL

Every folder inside `src/app/` becomes a URL:

```
src/app/page.js                                  → quicklearnsys.com/
src/app/contact/page.js                          → quicklearnsys.com/contact
src/app/pmp-certification-training/page.js       → quicklearnsys.com/pmp-certification-training
src/app/itil-4-foundation-certification-training/page.js
                                                 → quicklearnsys.com/itil-4-foundation-certification-training
```

### Slugs are keyword-based

Course URLs use full, descriptive, hyphenated slugs (`/pmp-certification-training`), not short internal codes. The URL itself is a ranking signal and it is what appears in the Google result, so the slug should read like the search query a buyer would type.

**Rules for a new slug:**
- lowercase, words separated by hyphens, no spaces, no `®`, no underscores
- include the certification name and the word people search with (`training` or `certification-training`)
- keep it stable — see Section 8 before ever changing one

### Legacy redirects

The site previously used short camel-case URLs (`/PMP`, `/ITL4Management`, `/PSPO1`). Every one of them now 301-redirects to its new slug so old links and accumulated ranking carry over.

| File | Purpose |
|---|---|
| `src/data/legacyRedirects.mjs` | The mapping table: `"/OldURL": "/new-slug"` |
| `next.config.mjs` | Turns that table into permanent (301) redirects |
| `src/middleware.js` | Handles the special cases where only capitalisation changed (`/Contact` → `/contact`), which the config-level redirect cannot do without looping |

### The route registry

`src/data/siteRoutes.js` is the **source of truth for which URLs are public**:

- `COURSE_ROUTES` — the ~81 certification course pages
- `SITE_ROUTES` — everything else, each with a sitemap `priority` and `changeFrequency`
- `SITE_URL` — `https://quicklearnsys.com`, used for canonical URLs and JSON-LD

`src/app/sitemap.js` and `src/app/robots.js` are generated from this file. **A page that is not in this registry will not appear in `sitemap.xml`** — this is the single most common reason a new page fails to get indexed.

---

## 3. Anatomy of a Course Page

Almost every course page is a short file with three parts: the SEO metadata, the content object, and one line that renders the shared template.

### Part 1 — SEO metadata

```js
export const metadata = {
  alternates: { canonical: "/pmp-certification-training" },
  title: "Project Management Professional (PMP®) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead Projects with Confidence Using the World's Most Recognized Project Management Certification",
  openGraph: {
    title: "...",
    description: "...",
    images: ["/pmp_certification.jpg"],
  },
};
```

### Part 2 — Course content (`courseData`)

```js
const courseData = {
  title: "Project Management Professional (PMP®) Certification Training",
  subtitle: "One-line tagline shown under the title in the hero",
  backgroundImage: "/pmp_certification.jpg",
  overview: ["Paragraph one…", "Paragraph two…"],
  whyHead: "Why Choose PMP® Certification?",
  why: ["Intro line…", "Benefit one", "Benefit two"],
  prerequisites: ["## Heading", "Body text", "### Sub-heading", "Bullet"],
  whoShouldAttend: ["Project Managers", "Program Managers"],
  curriculum: [
    { title: "Module 1: Foundations", topics: ["Topic A", "Topic B"] },
    { title: "Module 2: Leadership",  topics: ["Topic C", "Topic D"] },
  ],
  learningOutcomes: ["Outcome one", "Outcome two"],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Exam Duration", value: "230 Minutes" },
    { label: "Exam Provider", value: "Project Management Institute (PMI®)" },
  ],
  disclaimer: "PMI®, PMP® … are the property of the Project Management Institute, Inc. …",
};
```

**Field reference:**

| Field | Type | Renders as |
|---|---|---|
| `title` | text | Hero heading (the page's `<h1>`) |
| `subtitle` | text | Hero tagline |
| `backgroundImage` | `/file.jpg` in `public/` | Hero background |
| `overview` | array of paragraphs | Overview section — one `<p>` per string |
| `whyHead` / `why` | text / array | "Why choose…" section heading and bullets |
| `prerequisites` | array | Prerequisites. A string starting `## ` becomes a heading, `### ` a sub-heading, anything else a bullet |
| `whoShouldAttend` | array | Target-audience chips |
| `curriculum` | array of `{ title, topics[] }` | Accordion of modules |
| `learningOutcomes` | array | Learning outcomes list |
| `certificationHeading` | text | Heading above the exam table |
| `certification` | array of `{ label, value }` | Exam details table |
| `disclaimer` | text | Trademark notice at the foot of the page (see Section 9) |

### Part 3 — Rendering

```js
export default function PMPPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
```

`CoursePageTemplate` (`src/components/CoursePageTemplate.js`) does the layout, the animations, and — importantly — emits the page's `Course` and `BreadcrumbList` JSON-LD automatically from the same `courseData`. **You get structured data for free simply by filling in `courseData` properly.**

### Legacy field names

Older pages were written with a different set of field names. The template still accepts them and converts them on the fly:

| Legacy field | Modern equivalent |
|---|---|
| `courseOutline` (flat array) | `curriculum` (grouped modules) |
| `learningObjectives` | `learningOutcomes` |
| `targetGroup` | `whoShouldAttend` |
| `prerequisite` | `prerequisites` |
| `examDetails` (flat array) | `certification` (label/value pairs) |

Both render correctly, so there is no urgency to convert. When you next touch such a page, prefer moving it to the modern fields — grouped `curriculum` modules and labelled `certification` rows produce noticeably richer structured data.

### Fully hardcoded pages

A very small number of older pages (currently `src/app/itil-service-configuration-management-training/page.js`) were written as hand-coded JSX with no `courseData` object and no `metadata` export. You can spot one because the file begins with `"use client"` and has no `export const metadata` near the top. These pages inherit the generic site-wide title from `layout.js`, which materially hurts them in search. See Section 14, Gap 1.

---

## 4. Where Text Lives — Content Editing Map

### Course page text

Everything below is in `src/app/{slug}/page.js`:

| Content | What to edit |
|---|---|
| Google result title | `metadata.title` |
| Google result snippet | `metadata.description` |
| Canonical URL | `metadata.alternates.canonical` |
| Social share title / text / image | `metadata.openGraph.title` / `.description` / `.images[0]` |
| Hero heading | `courseData.title` |
| Hero tagline | `courseData.subtitle` |
| Hero background image | `courseData.backgroundImage` |
| Overview paragraphs | `courseData.overview` |
| Benefits section | `courseData.whyHead`, `courseData.why` |
| Prerequisites / eligibility | `courseData.prerequisites` |
| Who should attend | `courseData.whoShouldAttend` |
| Modules & topics | `courseData.curriculum` |
| Learning outcomes | `courseData.learningOutcomes` |
| Exam details table | `courseData.certification` |
| Trademark disclaimer | `courseData.disclaimer` |

### Global and shared text

| Content | Where to edit |
|---|---|
| Site-wide fallback title/description/keywords | `src/app/layout.js` → `metadata` |
| Homepage sections | `src/app/page.js` and `src/components/HomePageClient.js` |
| Navigation menu and mega-menu course links | `src/components/Header.js` |
| Footer links, address, social icons | `src/components/Footer.js` |
| Footer course directory (grouped by category) | `src/components/CourseListings.js` → `LISTINGS` |
| Course dropdown options in forms | `src/data/courseRegistry.js` → `COURSE_GROUPS` |
| About page copy | `src/components/AboutPageHybrid.js` |
| Corporate training page | `src/components/CorporateTemplate.js`, `CorporateClent.js` |
| Contact form fields and copy | `src/components/Contactus.js` |
| Registration form | `src/app/register/` |
| Events / Insights pages | `src/app/events/page.js`, `src/app/insights/page.js` |
| Privacy, Terms, Refund, Disclaimer text | `src/data/policies.js` (all four pages render from this one file) |
| Policy effective date | `src/data/policies.js` → `POLICY_EFFECTIVE_DATE` |
| Social profile URLs, office address, map links | `src/data/socialLinks.js` |
| Testimonials, client logos, reviews | `src/components/Testimonial.js`, `Clients.js`, `GoogleReviewsShowcase.js` |
| Phone / email / WhatsApp / company name | `.env.local` (Section 11) |

> **Note on duplicated course lists.** A course name can appear in up to four places: the page itself, `siteRoutes.js`, `Header.js`, `CourseListings.js`, and `courseRegistry.js`. When adding or renaming a course, walk the checklist in Section 7 so none of them drift apart.

---

## 5. SEO Architecture

### How metadata reaches Google

Each page exports a `metadata` object and Next.js renders the corresponding tags into the page `<head>` on the server, so crawlers see them in the initial HTML:

```html
<title>Project Management Professional (PMP®) Certification Training in Hyderabad | QuickLearn Systems</title>
<meta name="description" content="Lead Projects with Confidence…" />
<link rel="canonical" href="https://quicklearnsys.com/pmp-certification-training" />
<meta property="og:title" content="…" />
<meta property="og:image" content="https://quicklearnsys.com/pmp_certification.jpg" />
```

### The metadata hierarchy

```
src/app/layout.js        ← site-wide defaults: metadataBase, fallback title/description,
                           keywords, Open Graph site name, Twitter card, robots directives
        ↓ overridden by
src/app/{slug}/page.js   ← page-specific title, description, canonical, OG image
```

A page that exports no `metadata` inherits the layout's generic values — which is why every page needs its own.

### `metadataBase`

`src/app/layout.js` sets:

```js
metadataBase: new URL('https://quicklearnsys.com'),
```

This lets every page write image paths and canonicals as short relative values (`"/pmp_certification.jpg"`, `"/pmp-certification-training"`) while Next.js expands them into absolute URLs. Social platforms reject relative image URLs, so never remove this line.

### Canonical URLs

Every page should declare its own canonical:

```js
alternates: { canonical: "/pmp-certification-training" },
```

Write it **relative** (leading slash, no domain) — `metadataBase` supplies the rest. The canonical tells Google which single URL is authoritative when the same page is reachable with a trailing slash, query string, or via one of the legacy redirects.

### Sitemap and robots

| File | Output | Built from |
|---|---|---|
| `src/app/sitemap.js` | `/sitemap.xml` | `SITE_ROUTES` + `COURSE_ROUTES` in `src/data/siteRoutes.js` |
| `src/app/robots.js` | `/robots.txt` | Allows everything except `/api/` and `/login`; points at the sitemap |

Course routes are published with priority `0.9` and a weekly change frequency; static pages carry their own priority from `SITE_ROUTES`.

### Structured data (JSON-LD)

| Schema | Where it comes from | Applies to |
|---|---|---|
| `EducationalOrganization` + `LocalBusiness` + `WebSite` | `OrganizationSchema` in `src/components/StructuredData.js`, rendered once in `layout.js` | Every page |
| `Course` + `BreadcrumbList` | `CourseSchema`, emitted automatically by `CoursePageTemplate` | Every page using the template |

The organisation schema carries the Hyderabad office address, geo-coordinates, phone numbers, Google Maps listing and social profiles (`sameAs`) — this is what feeds the knowledge panel and local pack. Keep it in sync with `src/data/socialLinks.js`.

Because `CourseSchema` reads the live `courseData`, improving the course content improves the structured data at the same time. Nothing extra to maintain.

### Character limits

| Field | Target | Why |
|---|---|---|
| `title` | 50–60 characters | Google truncates beyond ~60 |
| `description` | 140–160 characters | Truncated beyond ~160 |
| `openGraph.title` | 40–90 characters | Varies by platform |
| `openGraph.description` | 100–200 characters | Varies by platform |

---

## 6. Step-by-Step — Editing SEO on a Page

**Step 1 — Find the file.** Take the slug from the URL and open `src/app/{slug}/page.js`. For `quicklearnsys.com/pmp-certification-training`, that is `src/app/pmp-certification-training/page.js`.

**Step 2 — Edit the title.**

```js
title: "PMP® Certification Training in Hyderabad | QuickLearn Systems",
```

- primary keyword first, brand last
- under 60 characters
- unique across the site — two pages with the same title compete with each other

**Step 3 — Edit the description.**

```js
description: "Instructor-led PMP® certification training in Hyderabad, aligned to the latest PMI ECO and PMBOK® Guide. 35 contact hours, mock exams and application support.",
```

- 140–160 characters, primary keyword used naturally, one clear call to action
- never duplicate a description between pages

**Step 4 — Check the canonical.** It must match the page's own URL exactly, relative form:

```js
alternates: { canonical: "/pmp-certification-training" },
```

**Step 5 — Check the Open Graph block.** Title and description may differ slightly from the search ones — these are the words that appear on LinkedIn and WhatsApp. The image must exist in `public/` and be at least 1200×630 px.

**Step 6 — Update the on-page content.** Search rankings follow the body copy, not just the tags. The `overview` paragraphs and `curriculum` module titles are the strongest on-page signals; make sure the keyword in your title actually appears there.

**Step 7 — Deploy and verify.** See Section 13.

---

## 7. Adding a New Course Page

Work through all six steps — skipping step 2 is what keeps new pages out of Google.

**1. Create the page** at `src/app/{new-seo-slug}/page.js`:

```js
import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/new-seo-slug" },
  title: "Course Name Certification Training in Hyderabad | QuickLearn Systems",
  description: "140–160 character description with the primary keyword and a call to action.",
  openGraph: {
    title: "Course Name Certification Training | QuickLearn Systems",
    description: "Short description for LinkedIn / WhatsApp previews.",
    images: ["/course-image.jpg"],
  },
};

const courseData = {
  title: "Course Full Name",
  subtitle: "One-line tagline.",
  backgroundImage: "/course-image.jpg",
  overview: ["First paragraph…", "Second paragraph…"],
  whyHead: "Why Choose This Certification?",
  why: ["Benefit one", "Benefit two"],
  prerequisites: ["## Training Prerequisites", "There are no mandatory prerequisites…"],
  whoShouldAttend: ["IT Professionals", "Project Managers"],
  curriculum: [
    { title: "Module 1: Introduction", topics: ["Topic A", "Topic B"] },
  ],
  learningOutcomes: ["Outcome one", "Outcome two"],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Exam Format", value: "40 multiple-choice questions" },
    { label: "Duration", value: "60 minutes" },
    { label: "Pass Mark", value: "65%" },
  ],
  disclaimer: "The accrediting body's exact trademark notice — see Section 9.",
};

export default function NewCoursePage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
```

**2. Register the route** — add the slug to `COURSE_ROUTES` in `src/data/siteRoutes.js`. Without this the page is live but absent from `sitemap.xml`.

**3. Add the hero image** to `public/` and reference the same file in `backgroundImage` and `openGraph.images`.

**4. Link it from navigation** — add the course to the correct dropdown in `src/components/Header.js` and to the matching category in `src/components/CourseListings.js`. Internal links are how crawlers (and visitors) find the page.

**5. Add it to the form dropdowns** — put the course name in the right group in `src/data/courseRegistry.js` → `COURSE_GROUPS`, so people can select it on the contact and registration forms.

**6. Add the trademark disclaimer** (Section 9), then build, deploy and request indexing in Google Search Console.

---

## 8. Renaming or Retiring a Page

Changing a live URL discards its accumulated ranking unless the old address redirects. Never rename a folder on its own.

**To rename a route:**

1. Rename the folder under `src/app/`.
2. Add `"/old-slug": "/new-slug"` to `LEGACY_ROUTE_REDIRECTS` in `src/data/legacyRedirects.mjs` — `next.config.mjs` turns it into a permanent 301.
3. If the change is **only capitalisation** (`/Contact` → `/contact`), add it to `CASE_ONLY_REDIRECTS` in the same file instead. The config-level redirects match case-insensitively and would redirect the new URL back to itself forever; `src/middleware.js` matches these exactly to break the loop. Also add the path to the `matcher` array at the bottom of `middleware.js`.
4. Update the slug in `siteRoutes.js`, `Header.js`, `CourseListings.js` and the page's own `alternates.canonical`.
5. After deploying, submit the new URL in Google Search Console.

**To retire a page:** remove it from `siteRoutes.js`, `Header.js` and `CourseListings.js`, and redirect its URL to the nearest relevant page rather than deleting it outright — a 301 preserves value, a 404 throws it away.

---

## 9. Trademark Disclaimers

Every certification page must display the trademark notice required by its accrediting body. This is a contractual requirement of the accreditation, not an SEO choice. The text lives in `courseData.disclaimer` and renders at the foot of the page.

**Reproduce the accrediting body's wording exactly** — do not paraphrase, reorder, shorten, or "improve" it, and keep the `®` symbols.

Current PMP® disclaimer (`src/app/pmp-certification-training/page.js`):

> PMI®, PMI-ACP®, Agile Certified Practitioner®, PMP®, PMBOK®, and all related trademarks are the property of the Project Management Institute, Inc. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.

Each accrediting body has its own wording — PMI® for PMP and PMI-ACP, AXELOS/PeopleCert for ITIL® and PRINCE2®, Scaled Agile, Inc. for SAFe®, Scrum Alliance® and Scrum.org for the Scrum credentials, ISTQB® for the testing certifications, DevOps Institute for DevOps/SRE/DevSecOps. Copy the notice from an existing page in the same family rather than writing a new one.

The site-wide disclaimer page at `/disclaimer` is separate and is edited in `src/data/policies.js`.

---

## 10. Forms, Email & the Brochure Gate

Four API routes handle submissions. All of them send mail through SMTP using the credentials in `.env.local`, and all validate their input server-side.

| Route | File | Triggered by |
|---|---|---|
| Contact enquiry | `src/app/api/contact/route.js` | Contact page form |
| Course registration | `src/app/api/register/route.js` | `/register` (Register Now / Pay Now) |
| Brochure request | `src/app/api/brochure/route.js` | `/brochure` lead-capture form |
| Newsletter signup | `src/app/api/newsletter/route.js` | Available but not currently wired to any form on the site |

Submissions are emailed to the address in `CONTACT_EMAIL`. If forms stop arriving, check that variable and the SMTP credentials first — nothing is stored in a database, so a mail failure means the lead is lost.

The brochure form includes a hidden honeypot field: bots fill it, humans never see it, and a filled honeypot is silently accepted without sending mail. Worth adding to the contact and registration forms too if spam becomes an issue.

### The brochure gate

`/quicklearn-professional-brochure.html` in `public/` is a lead magnet. `src/middleware.js` checks for the `ql_brochure` cookie; visitors without it are redirected to `/brochure` to submit their details, and the cookie is set once they do. If you add another gated asset, add its path both to the middleware logic and to the `matcher` array at the bottom of that file.

---

## 11. Contact Info & Global Site Settings

Phone numbers, email addresses and the company name are read from environment variables, so they can be changed without touching component code. Set them in `.env.local` at the project root, and in the Vercel project settings for production.

```
# Publicly visible (rendered in header, footer, chat widget)
NEXT_PUBLIC_COMPANY_NAME=QuickLearn Systems
NEXT_PUBLIC_CONTACT_EMAIL=training@quicklearnsys.com
NEXT_PUBLIC_PHONE_PRIMARY=9100195152
NEXT_PUBLIC_PHONE_SECONDARY=9703704495
NEXT_PUBLIC_WHATSAPP_NUMBER=919100195152

# Server-side only (never rendered to the browser)
CONTACT_EMAIL=training@quicklearnsys.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=…
SMTP_PASS=…
```

> **Two things to remember.** `NEXT_PUBLIC_*` values are baked in at build time — the site must be **rebuilt and redeployed** for a change to appear. And anything prefixed `NEXT_PUBLIC_` is visible to anyone viewing the site, so never put a password behind that prefix.

The office address, map links and social profile URLs are **not** environment variables — they live in `src/data/socialLinks.js`, which also feeds the address and geo-coordinates in the organisation structured data. Change them in that one file and the header, footer, contact page, map embed and schema all follow.

---

## 12. Images & Media

### Where images live

All images sit in `public/` at the project root and are referenced with a leading slash:

```js
backgroundImage: "/pmp_certification.jpg"   // → public/pmp_certification.jpg
```

### Naming

Use lowercase, descriptive, hyphen- or underscore-separated names that match the course (`pmp_certification.jpg`, `itil-4-foundation.jpg`). No spaces, no `®`. The filename is a minor image-search signal and a major sanity aid.

### Recommended specifications

| Use | Size | Format |
|---|---|---|
| Course hero background | 1920×1080 px | JPG |
| Open Graph / social share | 1200×630 px minimum | JPG or PNG |
| Course card thumbnail | 800×600 px | JPG |
| Client / partner logos | 400×200 px | PNG with transparency |

Next.js is configured to serve AVIF and WebP automatically (`next.config.mjs` → `images.formats`), so upload a good-quality JPG and let the framework optimise delivery. Keep source files under ~500 KB where possible — hero images are the largest contributor to Core Web Vitals scores on course pages.

### Alt text

Every meaningful image needs descriptive `alt` text. Decorative backgrounds may use `alt=""`. This affects both accessibility and image search.

---

## 13. Deploying & Verifying Changes

### Local check

```bash
npm install       # first time only
npm run dev       # http://localhost:3000
npm run build     # catches errors that only surface in a production build
```

Run `npm run build` before pushing. Unescaped apostrophes in JSX and other lint errors pass in dev but fail the Vercel build.

### Deploy

Pushing to `main` triggers an automatic Vercel build and deploy. Verify the change on the live URL once the build reports success.

### Verify SEO

| Tool | What to check |
|---|---|
| Google Search Console → URL Inspection | Indexing status; request re-indexing after a meaningful edit |
| Google Rich Results Test | That the `Course` and `Organization` JSON-LD parse without errors |
| LinkedIn Post Inspector / Facebook Sharing Debugger | Open Graph preview; both cache aggressively, so re-scrape after changing an image |
| PageSpeed Insights | Core Web Vitals, especially LCP on image-heavy hero sections |
| `quicklearnsys.com/sitemap.xml` | That a new page actually appears |

---

## 14. Known Gaps & Recommended Actions

Status as of this revision. Several gaps listed in earlier versions of this document — no sitemap, no robots.txt, missing canonicals, structured data on the PMP page only — have since been closed.

### Gap 1 — One hardcoded page still has no metadata (HIGH)

`src/app/itil-service-configuration-management-training/page.js` is hand-coded JSX with no `metadata` export, so it shows the generic site-wide title in search results and emits no `Course` structured data.

**Action:** migrate it to the `courseData` + `CoursePageTemplate` pattern used by every other course page.

### Gap 2 — Static pages missing their own metadata (MEDIUM)

`src/app/about/page.js` and `src/app/corporate-training/page.js` delegate straight to client components and export no `metadata`, so both inherit the homepage title and description. Both are commercially important pages that rank for brand and corporate-training queries.

**Action:** add a `metadata` export with a page-specific title, description, canonical and OG image to each.

### Gap 3 — Placeholder login page is indexable in principle (LOW)

`src/app/login/page.js` is a stub. `robots.txt` disallows `/login`, so the exposure is limited, but the route should either be built out or removed.

### Gap 4 — Course lists are duplicated in five files (MEDIUM, maintenance)

A course appears in its page file, `siteRoutes.js`, `Header.js`, `CourseListings.js` and `courseRegistry.js`. They drift apart easily, producing menu links to pages missing from the sitemap or dropdown options for courses that no longer exist.

**Action:** consolidate into a single registry (name, slug, category, image) that the navigation, footer listing, form dropdowns and sitemap all derive from.

### Gap 5 — Keyword tags only at the site level (LOW)

Only `layout.js` sets `keywords`. Google ignores the keywords meta tag entirely, so this is cosmetic — spend the effort on titles, descriptions and body copy instead.

### Gap 6 — No blog or article schema on Insights (LOW)

`/insights` has no `Article`/`BlogPosting` structured data and no per-post routes. Long-form content targeting informational queries is the largest untapped organic opportunity on the site.

---

## 15. Quick Reference Cheatsheet

### Editing an existing course page

| Task | File | What to change |
|---|---|---|
| Google title | `src/app/{slug}/page.js` | `metadata.title` |
| Google description | `src/app/{slug}/page.js` | `metadata.description` |
| Canonical URL | `src/app/{slug}/page.js` | `metadata.alternates.canonical` |
| Social preview | `src/app/{slug}/page.js` | `metadata.openGraph` |
| Hero heading / tagline | `src/app/{slug}/page.js` | `courseData.title` / `.subtitle` |
| Hero image | `src/app/{slug}/page.js` | `courseData.backgroundImage` |
| Overview text | `src/app/{slug}/page.js` | `courseData.overview` |
| Modules | `src/app/{slug}/page.js` | `courseData.curriculum` |
| Learning outcomes | `src/app/{slug}/page.js` | `courseData.learningOutcomes` |
| Who should attend | `src/app/{slug}/page.js` | `courseData.whoShouldAttend` |
| Exam details | `src/app/{slug}/page.js` | `courseData.certification` |
| Trademark notice | `src/app/{slug}/page.js` | `courseData.disclaimer` |

### Editing global elements

| Task | File |
|---|---|
| Navigation / mega-menu | `src/components/Header.js` |
| Footer | `src/components/Footer.js` |
| Footer course directory | `src/components/CourseListings.js` |
| Form course dropdowns | `src/data/courseRegistry.js` |
| Sitemap contents | `src/data/siteRoutes.js` |
| Legal / policy text | `src/data/policies.js` |
| Address, map, social links | `src/data/socialLinks.js` |
| Organisation structured data | `src/components/StructuredData.js` |
| Redirects for renamed URLs | `src/data/legacyRedirects.mjs` |
| Phone / email / WhatsApp | `.env.local`, then redeploy |
| Site-wide fallback metadata | `src/app/layout.js` |

### New course page checklist

- [ ] `src/app/{slug}/page.js` created with `metadata` (title, description, canonical, OG) and `courseData`
- [ ] Slug added to `COURSE_ROUTES` in `src/data/siteRoutes.js`
- [ ] Hero image added to `public/` and referenced in both `backgroundImage` and `openGraph.images`
- [ ] Link added to `src/components/Header.js`
- [ ] Link added to `src/components/CourseListings.js`
- [ ] Course name added to `src/data/courseRegistry.js`
- [ ] Accrediting body's trademark disclaimer added verbatim
- [ ] `npm run build` passes
- [ ] Deployed, then submitted in Google Search Console

---

*Prepared from a technical review of the QLS-FINAL codebase. For implementation of the recommended actions in Section 14, contact the development team.*
