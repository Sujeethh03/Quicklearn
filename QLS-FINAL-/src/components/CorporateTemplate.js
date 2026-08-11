"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check, Users, Monitor, Building2, Award, Clock,
  GraduationCap, Headphones, Layers, BarChart3, ArrowRight,
} from "lucide-react";
import SendMessageForm from "@/components/SendMessage";

const SERIF = { fontFamily: "'Playfair Display', 'Georgia', serif" };
const SANS = { fontFamily: "'Inter', 'Helvetica Neue', sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const STATS = [
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "15,000+", label: "Professionals Trained" },
  { icon: Award, value: "50+", label: "Certification Programs" },
  { icon: BarChart3, value: "4.8/5", label: "Average Rating" },
];

const DELIVERY_ICONS = [Building2, Monitor, Layers, Clock, GraduationCap];

const POPULAR = [
  { title: "ITIL® 4 Foundation", img: "/itl4_foundation.png", badge: "Foundation", desc: "Master the fundamentals of modern IT Service Management.", duration: "3 Days", students: "2.5K+", href: "/ITL4Management" },
  { title: "PMP® Certification", img: "/pmp_certification.jpg", badge: "Professional", desc: "The global standard for experienced project managers.", duration: "4 Days", students: "3.2K+", href: "/PMP" },
  { title: "AI-Empowered SAFe Agilist 6", img: "/leading_safe_agilist.jpg", badge: "Professional", desc: "Lead enterprise Agile transformation with SAFe®.", duration: "2 Days", students: "2.8K+", href: "/LeadingSAFeAgilist" },
  { title: "Professional Scrum Master (PSM)", img: "/professional_scrum_master_1.jpg", badge: "Professional", desc: "Master the Scrum framework and servant leadership.", duration: "2 Days", students: "4.1K+", href: "/PScrumM1" },
  { title: "Lean Six Sigma Green Belt", img: "/green_belt.png", badge: "Professional", desc: "Process improvement and quality management with Six Sigma.", duration: "4 Days", students: "1.9K+", href: "/LeanSSGB" },
  { title: "Certified Tester Foundation Level (CTFL)", img: "/istqb_foundation.jpg", badge: "Foundation", desc: "Software testing fundamentals and ISTQB® certification.", duration: "3 Days", students: "2.7K+", href: "/ISTQBF" },
];

function Eyebrow({ children }) {
  return (
    <span className="inline-block bg-[#2BA6D9]/10 text-[#1E7BA3] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full" style={SANS}>
      {children}
    </span>
  );
}

export default function CorporateTemplate({ courseData }) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${courseData.backgroundImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-gray-900/40" />
        <div className="relative z-10 container mx-auto max-w-7xl px-6 py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-white/10 backdrop-blur text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20" style={SANS}>
                Corporate Training
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mt-6 mb-5 leading-tight" style={SERIF}>
              {courseData.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl mb-8" style={SANS}>
              {courseData.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/Contact" className="inline-flex items-center gap-2 bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors" style={SANS}>
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/Events" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/25 transition-colors" style={SANS}>
                View Training Calendar
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-gradient-to-r from-[#1E7BA3] to-[#2BA6D9]">
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center text-white">
                <s.icon className="w-7 h-7 mx-auto mb-2 text-white/80" />
                <div className="text-3xl font-bold" style={SERIF}>{s.value}</div>
                <div className="text-sm text-white/80 mt-1" style={SANS}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>About Our Corporate Training</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6" style={SERIF}>
              Training built around your business goals
            </h2>
            {courseData.overview.map((p, i) => (
              <p key={i} className="mb-4 text-gray-700 leading-relaxed" style={SANS}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <Image src="/hero_devops_business_analysis.jpg" alt="Corporate training session" width={640} height={460} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 border border-gray-100 hidden sm:block">
                <div className="text-2xl font-bold text-[#1E7BA3]" style={SERIF}>Onsite · Online · Hybrid</div>
                <div className="text-xs text-gray-500" style={SANS}>Flexible delivery for every team</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — icon cards */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Why QuickLearn Systems</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4" style={SERIF}>
              A corporate training partner you can rely on
            </h2>
            {courseData.WhyQlsIntro && (
              <p className="text-gray-600 leading-relaxed" style={SANS}>{courseData.WhyQlsIntro}</p>
            )}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseData.WhyQls.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#2BA6D9]/30 transition-all">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2BA6D9]/10 text-[#2BA6D9] flex-shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-700 text-sm leading-relaxed" style={SANS}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DELIVERY METHODS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Flexible Delivery</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4" style={SERIF}>Training Delivery Methods</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.DeliveryMethods.map((item, i) => {
              const Icon = DELIVERY_ICONS[i % DELIVERY_ICONS.length];
              return (
                <motion.div key={i} variants={fadeUp} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#2BA6D9] text-white mb-4">
                    <Icon className="w-5 h-5" />
                  </span>
                  <p className="text-gray-700 leading-relaxed" style={SANS}>{item}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* COURSE CATALOG */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>What We Train</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4" style={SERIF}>Corporate Course Catalog</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseData.Catalog.map((item, i) => {
              const [head, ...rest] = item.split(":");
              const body = rest.join(":").trim();
              return (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-[#2BA6D9]" />
                    <h3 className="text-lg font-bold text-[#1E7BA3]" style={SERIF}>{head.trim()}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed" style={SANS}>{body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Most Requested</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-3" style={SERIF}>Popular Corporate Programs</h2>
            <p className="text-gray-600" style={SANS}>Enhance your team&apos;s skills with our most sought-after certification programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {POPULAR.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }} whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#2BA6D9] text-white text-xs font-semibold px-3 py-1 rounded-full">{c.badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={SERIF}>{c.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1" style={SANS}>{c.desc}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4" style={SANS}>
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {c.duration}</span>
                    <span className="inline-flex items-center gap-1"><Users className="w-4 h-4" /> {c.students}</span>
                  </div>
                  <Link href={c.href} className="w-full text-center bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white py-2.5 rounded-xl font-semibold text-sm transition-colors" style={SANS}>
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP PROGRAMS + E-LEARNING */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { icon: Users, title: "Group & Open Training Programs", list: courseData.TrainingPrograms },
            { icon: Headphones, title: "Post-Training & E-Learning Support", list: courseData.eLearning },
          ].map((panel, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#2BA6D9] text-white">
                  <panel.icon className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900" style={SERIF}>{panel.title}</h3>
              </div>
              <ul className="space-y-3">
                {panel.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700" style={SANS}>
                    <Check className="w-5 h-5 text-[#2BA6D9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E7BA3] via-[#2BA6D9] to-[#1E7BA3]">
        <div className="container mx-auto max-w-5xl px-6 py-16 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-4" style={SERIF}>
            Ready to upskill your workforce?
          </motion.h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-8" style={SANS}>
            Tell us your goals and team size — we&apos;ll design a customized corporate training proposal for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/Contact" className="inline-flex items-center gap-2 bg-white text-[#1E7BA3] px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors" style={SANS}>
              Get a Custom Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/Events" className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors" style={SANS}>
              View Training Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={SERIF}>
        <SendMessageForm />
      </section>
    </>
  );
}
