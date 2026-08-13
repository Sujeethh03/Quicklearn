"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CourseSchema } from "@/components/StructuredData";

export default function CoursePageTemplate({ courseData: rawCourseData }) {
  const pathname = usePathname();
  // Normalize legacy (old-layout) field names into the standardized
  // curriculum-driven layout so every course page renders one consistent format.
  const courseData = (() => {
    const cd = { ...rawCourseData };
    const hasCurriculum = Array.isArray(cd.curriculum) && cd.curriculum.length > 0;
    if (!hasCurriculum && Array.isArray(cd.courseOutline) && cd.courseOutline.length > 0) {
      cd.curriculum = [{ title: "Course Outline", topics: cd.courseOutline }];
      if (!cd.learningOutcomes) cd.learningOutcomes = cd.learningObjectives;
      if (!cd.whoShouldAttend) cd.whoShouldAttend = cd.targetGroup;
      if (!cd.prerequisites) cd.prerequisites = cd.prerequisite;
      if (!cd.certification && Array.isArray(cd.examDetails)) {
        cd.certification = cd.examDetails.map((v) => ({ value: v }));
        cd.certificationHeading = cd.certificationHeading || "Exam Details";
      }
    }
    return cd;
  })();

  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1 } }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: slideTransition }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
  };

  // A course uses the new (document-driven) layout when it defines a curriculum.
  const isNew = Array.isArray(courseData.curriculum) && courseData.curriculum.length > 0;

  // Bullet lists support inline structure: an item prefixed with "## " renders as a
  // sub-heading and "### " as a nested sub-heading; plain items become bullets
  // indented under whichever heading precedes them.
  const renderBullets = (items) => {
    const indent = ["", "ml-5", "ml-10"];
    let depth = 0;
    return items.map((item, i) => {
      const text = String(item);
      const isSub = text.startsWith("### ");
      const isHead = !isSub && text.startsWith("## ");

      if (isHead || isSub) {
        const level = isSub ? 1 : 0;
        depth = level + 1;
        return (
          <motion.li
            key={i}
            variants={wordSlideVariants}
            className={`font-bold text-gray-900 mt-5 first:mt-0 ${isSub ? "text-base" : "text-lg"} ${indent[level]}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {text.slice(isSub ? 4 : 3)}
          </motion.li>
        );
      }

      return (
        <motion.li
          key={i}
          variants={wordSlideVariants}
          className={`flex gap-3 text-gray-900 ${indent[depth]}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="w-2 h-2 bg-[#2BA6D9] rounded-full mt-2 flex-shrink-0" />
          {text}
        </motion.li>
      );
    });
  };

  const Sidebar = (
    <div className="lg:col-span-4">
      <div className="sticky top-24 flex flex-col gap-4">
        <motion.img
          src={courseData.backgroundImage}
          alt={courseData.title}
          className="rounded-xl shadow-lg w-full"
          whileHover={{ scale: 1.03 }}
        />
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#2BA6D9] to-[#1E7BA3] px-5 py-3">
            <p className="text-white font-semibold text-sm leading-tight">{courseData.title}</p>
            {courseData.category && (
              <p className="text-white/70 text-xs mt-0.5">{courseData.category}</p>
            )}
          </div>
          <div className="px-5 py-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
              Online &amp; Classroom batches available
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
              Flexible scheduling to suit your needs
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
              Expert-led, accredited training
            </div>
          </div>
          <div className="px-5 pb-5">
            <Link href="/events">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
              >
                Check Schedule
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <CourseSchema courseData={courseData} path={pathname} />

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${courseData.backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.h1 variants={slideInLeftVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {courseData.title}
            </motion.h1>
            <motion.p variants={fadeInVariants} className="text-lg md:text-xl text-white/80 max-w-3xl"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {courseData.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COURSE OVERVIEW — full width */}
      <section className="bg-white py-14">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Course Overview
            </motion.h2>
            {courseData.overview.map((p, i) => (
              <motion.p key={i} variants={paragraphVariants} className="mb-5 text-gray-900 max-w-4xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- OLD LAYOUT (backward compatible) ---------------- */}
      {!isNew && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
            <div className="lg:col-span-8">
              {[
                ["Course Outline", courseData.courseOutline],
                ["Learning Objectives", courseData.learningObjectives],
                ["Target Group", courseData.targetGroup],
                ...(courseData.prerequisite ? [["Prerequisite", courseData.prerequisite]] : []),
                ["Exam Pattern", courseData.examDetails]
              ].map(([title, list], idx) => (
                <motion.div key={idx} variants={staggerTextVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {title}
                  </motion.h2>
                  <ul className="space-y-3 mb-10">
                    {(list || []).map((item, i) => (
                      <motion.li key={i} variants={wordSlideVariants} className="flex gap-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            {Sidebar}
          </div>
        </section>
      )}

      {/* ---------------- NEW LAYOUT (document-driven) ---------------- */}
      {isNew && (
        <>
          {/* WHY CHOOSE / PREREQUISITES / WHO SHOULD ATTEND + sidebar */}
          <section className="bg-slate-50 py-16">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
              <div className="lg:col-span-8">
                {courseData.why && courseData.why.length > 0 && (
                  <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {courseData.whyHead || "Why Choose This Course?"}
                    </motion.h2>
                    <ul className="space-y-3 mb-10">
                      {renderBullets(courseData.why)}
                    </ul>
                  </motion.div>
                )}

                {courseData.prerequisites && courseData.prerequisites.length > 0 && (
                  <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Prerequisites
                    </motion.h2>
                    <ul className="space-y-3 mb-10">
                      {renderBullets(courseData.prerequisites)}
                    </ul>
                  </motion.div>
                )}

                {courseData.whoShouldAttend && courseData.whoShouldAttend.length > 0 && (
                  <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Who Should Attend?
                    </motion.h2>
                    <ul className="space-y-3">
                      {renderBullets(courseData.whoShouldAttend)}
                    </ul>
                  </motion.div>
                )}
              </div>
              {Sidebar}
            </div>
          </section>

          {/* COURSE CURRICULUM */}
          <section className="bg-white py-16">
            <div className="container mx-auto max-w-7xl px-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-10 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Course Curriculum
              </motion.h2>
              <motion.div
                className={`grid grid-cols-1 gap-6 ${courseData.curriculum.length > 1 ? "md:grid-cols-2" : ""}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerTextVariants}
              >
                {courseData.curriculum.map((module, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="bg-slate-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-[#1E7BA3] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {module.title}
                    </h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#2BA6D9] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-900 text-sm md:text-base">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* LEARNING OUTCOMES */}
          {courseData.learningOutcomes && courseData.learningOutcomes.length > 0 && (
            <section className="bg-slate-50 py-16">
              <div className="container mx-auto max-w-7xl px-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-10 text-center"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headingVariants}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Learning Outcomes
                </motion.h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerTextVariants}
                >
                  {courseData.learningOutcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      variants={wordSlideVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#2BA6D9] text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-900">{outcome}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* CERTIFICATION + HIGHLIGHTS */}
          <section className="bg-white py-16">
            <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {courseData.certification && courseData.certification.length > 0 && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerTextVariants}>
                  <motion.h2 variants={headingVariants} className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {courseData.certificationHeading || "Certification & Exam Details"}
                  </motion.h2>
                  <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    {courseData.certification.map((row, index) => (
                      <motion.div
                        key={index}
                        variants={wordSlideVariants}
                        className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
                      >
                        {row.label ? (
                          <>
                            <span className="font-semibold text-[#1E7BA3] sm:w-44 flex-shrink-0">{row.label}</span>
                            <span className="text-gray-900">{row.value}</span>
                          </>
                        ) : (
                          <span className="text-gray-900">{row.value}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {courseData.courseHighlights && courseData.courseHighlights.length > 0 && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerTextVariants}>
                  <motion.h2 variants={headingVariants} className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Course Highlights
                  </motion.h2>
                  <ul className="space-y-4">
                    {courseData.courseHighlights.map((item, index) => (
                      <motion.li key={index} variants={wordSlideVariants} whileHover={{ x: 5 }} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#2BA6D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </section>

          {/* DISCLAIMER */}
          {courseData.disclaimer && (
            <section className="bg-slate-50 py-10 border-t border-gray-200">
              <div className="container mx-auto max-w-7xl px-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Disclaimer</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {courseData.disclaimer}
                </p>
              </div>
            </section>
          )}
        </>
      )}

      {/* WHY TRAIN WITH QUICKLEARN */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-sky-50 py-14 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Train With <span className="text-[#2BA6D9]">QuickLearn Systems?</span>
            </h2>
            <p className="text-gray-800 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Your success is our guarantee — backed by expert trainers, accredited content, and a commitment to your exam results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "99% Certification Success Rate",
                desc: "Our structured and exam-focused training methodology is designed for strong outcomes and high certification success rates."
              },
              {
                icon: "👨‍🏫",
                title: "Expert Trainers with 15+ Years Experience",
                desc: "Learn from certified industry professionals with deep real-world expertise, bringing practical insights into every session."
              },
              {
                icon: "🔄",
                title: "Re-Examination Support",
                desc: "If you don't pass the exam on the first attempt, we support you with re-exam coverage so you can succeed."
              },
              {
                icon: "💰",
                title: "Competitive & Transparent Pricing",
                desc: "High-quality training that delivers excellent value for your investment with no hidden costs or surprises."
              },
              {
                icon: "🌐",
                title: "Flexible Delivery Models",
                desc: "Choose from Online, Onsite, Classroom, or E-Learning — designed to fit your schedule and learning style."
              },
              {
                icon: "⭐",
                title: "Trusted by Professionals",
                desc: "15,000+ professionals trained and highly rated by participants across Google, JustDial, Sulekha, and other platforms."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#2BA6D9]/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2BA6D9] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
