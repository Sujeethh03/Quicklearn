import Link from "next/link";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { POLICY_EFFECTIVE_DATE, POLICY_LINKS } from "@/data/policies";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const formatPhone = (number) => {
  const digits = (number || "").replace(/\D/g, "");
  return digits.length === 10 ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}` : number;
};

function Bullets({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-3 space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#2BA6D9]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ items }) {
  if (!items?.length) return null;
  return items.map((text) => (
    <p key={text} className="mt-3 text-gray-700 leading-relaxed">
      {text}
    </p>
  ));
}

function PolicyTable({ table }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {table.head.map((cell) => (
              <th key={cell} className="px-4 py-3 font-semibold text-gray-900">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-t border-gray-200 align-top">
              {row.map((cell, i) => (
                <td
                  key={cell}
                  className={`px-4 py-3 text-gray-700 ${i === 0 ? "font-medium text-gray-900" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PolicyPage({ policy }) {
  const { title, intro, sections, contactIntro, numbered, slug } = policy;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const phones = [
    process.env.NEXT_PUBLIC_PHONE_PRIMARY,
    process.env.NEXT_PUBLIC_PHONE_SECONDARY,
  ].filter(Boolean);

  return (
    <>
      <Headers />

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 to-[#1E7BA3] py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-blue-100">
            Effective Date: {POLICY_EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-xl bg-white p-6 shadow-sm sm:p-10">
            {/* INTRO */}
            <div className="border-b border-gray-200 pb-6">
              <Paragraphs items={intro} />
            </div>

            {/* CONTENTS */}
            <nav aria-label="On this page" className="border-b border-gray-200 py-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                On this page
              </h2>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text-sm text-[#1E7BA3] hover:underline"
                    >
                      {numbered ? `${index + 1}. ` : ""}
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* SECTIONS */}
            {sections.map((section, index) => (
              <section
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-24 border-b border-gray-100 py-8 last:border-b-0"
              >
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  {numbered ? `${index + 1}. ` : ""}
                  {section.heading}
                </h2>

                <Paragraphs items={section.paragraphs} />
                <Bullets items={section.bullets} />
                {section.table && <PolicyTable table={section.table} />}
                <Paragraphs items={section.trailingParagraphs} />
                <Bullets items={section.trailingBullets} />

                {section.footnote && (
                  <p className="mt-4 text-gray-700 leading-relaxed">{section.footnote}</p>
                )}

                {section.link && (
                  <Link
                    href={section.link.href}
                    className="mt-4 inline-block text-sm font-medium text-[#1E7BA3] hover:underline"
                  >
                    {section.link.label} →
                  </Link>
                )}

                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">{sub.heading}</h3>
                    <Paragraphs items={sub.paragraphs} />
                    <Bullets items={sub.bullets} />
                  </div>
                ))}
              </section>
            ))}

            {/* CONTACT */}
            <section id="contact-us" className="scroll-mt-24 pt-8">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Contact Us</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{contactIntro}</p>
              <div className="mt-4 rounded-lg bg-slate-50 p-5 text-gray-700">
                <p className="font-semibold text-gray-900">QuickLearn Systems</p>
                <p className="mt-2 text-sm">
                  Email:{" "}
                  <a href={`mailto:${email}`} className="text-[#1E7BA3] hover:underline">
                    {email}
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  Phone:{" "}
                  {phones.map((phone, i) => (
                    <span key={phone}>
                      {i > 0 && " | "}
                      <a href={`tel:+91${phone}`} className="text-[#1E7BA3] hover:underline">
                        {formatPhone(phone)}
                      </a>
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-sm">
                  Website:{" "}
                  <a
                    href="https://quicklearnsys.com"
                    className="text-[#1E7BA3] hover:underline"
                  >
                    quicklearnsys.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* RELATED POLICIES */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Related policies
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {POLICY_LINKS.filter((item) => item.href !== slug).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-[#2BA6D9] hover:text-[#1E7BA3]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
