"use client";

import { useState } from "react";

const TEAM_SIZES = ["Just me", "2–10", "11–50", "51–200", "200+"];

const INTERESTS = [
  "IT Service Management (ITIL®)",
  "Project & Program Management",
  "Agile, Scrum & SAFe®",
  "DevOps & SRE",
  "Software Testing (ISTQB®)",
  "Quality Management",
  "Business Analysis",
  "Not sure yet",
];

const HIGHLIGHTS = [
  "All 80+ certification programs, grouped by domain",
  "Delivery formats — live online, classroom, e-learning, corporate",
  "How a corporate engagement runs, step by step",
  "Direct contacts for scheduling and quotations",
];

export default function BrochureGate() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    teamSize: "",
    interest: "",
    consent: true,
    website: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("done");
      window.open(data.redirectTo, "_blank", "noopener");
    } catch {
      setError("We could not reach the server. Please check your connection and try again.");
      setStatus("idle");
    }
  };

  const field =
    "w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-[#2BA6D9] focus:ring-2 focus:ring-[#2BA6D9]/20";
  const label = "block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5";

  if (status === "done") {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2BA6D9]/10 text-2xl">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Your brochure is open in a new tab.</h2>
        <p className="mt-3 text-gray-700">
          If it did not open, your browser may have blocked the pop-up — use the button below. Use
          the <strong>Download PDF</strong> button inside the brochure to save a copy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/quicklearn-professional-brochure.html"
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-[#2BA6D9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E7BA3]"
          >
            Open the brochure
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Talk to our team
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          A member of our team will follow up within one business day. Prefer to reach us first?
          Email{" "}
          <a className="text-[#1E7BA3] underline" href="mailto:training@quicklearnsys.com">
            training@quicklearnsys.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* What's inside */}
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E7BA3]">
          Corporate brochure
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          The full QuickLearn Systems training catalogue.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Six pages covering every certification we deliver, how we run corporate programmes, and
          what it takes to get your team certified.
        </p>

        <ul className="mt-7 space-y-3">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex gap-3 text-gray-700">
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-[#2BA6D9]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
          {[
            ["10+", "Years"],
            ["15,000+", "Trained"],
            ["80+", "Programs"],
          ].map(([value, caption]) => (
            <div key={caption}>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">{caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lead form */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-bold text-gray-900">Where should we send it?</h2>
          <p className="mt-1.5 text-sm text-gray-600">
            Fill this in once and the brochure opens straight away.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={label} htmlFor="fullName">Full name *</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={update}
                required autoComplete="name" className={field} placeholder="Your name" />
            </div>

            <div>
              <label className={label} htmlFor="email">Work email *</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update}
                required autoComplete="email" className={field} placeholder="you@company.com" />
            </div>

            <div>
              <label className={label} htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={update}
                required autoComplete="tel" className={field} placeholder="+91 90000 00000" />
            </div>

            <div>
              <label className={label} htmlFor="company">Company</label>
              <input id="company" name="company" value={form.company} onChange={update}
                autoComplete="organization" className={field} placeholder="Organisation name" />
            </div>

            <div>
              <label className={label} htmlFor="jobTitle">Job title</label>
              <input id="jobTitle" name="jobTitle" value={form.jobTitle} onChange={update}
                autoComplete="organization-title" className={field} placeholder="e.g. L&D Manager" />
            </div>

            <div>
              <label className={label} htmlFor="teamSize">People to train</label>
              <select id="teamSize" name="teamSize" value={form.teamSize} onChange={update} className={field}>
                <option value="">Select</option>
                {TEAM_SIZES.map((size) => <option key={size} value={size}>{size}</option>)}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="interest">Training interest</label>
              <select id="interest" name="interest" value={form.interest} onChange={update} className={field}>
                <option value="">Select</option>
                {INTERESTS.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
          </div>

          {/* honeypot — hidden from people, tempting to bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off"
              value={form.website} onChange={update} />
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" name="consent" checked={form.consent} onChange={update}
              className="mt-0.5 h-4 w-4 accent-[#2BA6D9]" />
            <span>
              Keep me posted about course schedules and offers. You can unsubscribe at any time —
              see our <a href="/privacy-policy" className="text-[#1E7BA3] underline">Privacy Policy</a>.
            </span>
          </label>

          {error && (
            <p role="alert" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-lg bg-[#2BA6D9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E7BA3] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Opening brochure…" : "View the brochure"}
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            No spam. We use your details only to send training information you ask for.
          </p>
        </form>
      </div>
    </div>
  );
}
