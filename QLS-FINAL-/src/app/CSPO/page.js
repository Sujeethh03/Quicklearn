"use client";
import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import WhyTrainWithUs from "@/components/WhyTrainWithUs";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import LiveChat from "@/components/LiveChat";

export default function CSPO() {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
    exit: { opacity: 0, x: 100 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
    exit: { opacity: 0, y: -40 }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 1 }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1, scale: 1, rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 1.2 }
    }
  };

  return (
    <>
      <Headers />
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/professional_scrum_product_owner_1.jpg')` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-gray-900 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="max-w-4xl text-white"
              >
                <motion.h1
                  variants={slideInLeftVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    Certified Scrum Product Owner
                  </span>
                </motion.h1>
                <motion.p
                  variants={fadeInVariants}
                  className="text-lg md:text-xl lg:text-2xl leading-[1.6] mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Value for time and money invested is the prime aspiration of Quicklearn Systems.
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center"
            textClassName="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] bg-gradient-to-r from-slate-700 via-gray-800 to-stone-900 bg-clip-text text-transparent drop-shadow-lg"
          >
            Certified Scrum Product Owner (CSPO)
          </ScrollFloat>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerTextVariants}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Course Overview</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                The Certified Scrum Product Owner (CSPO) certification, offered by Scrum Alliance, is designed to equip you with the knowledge and skills to fulfil the Product Owner role effectively within a Scrum team. The course focuses on understanding the Product Owner&apos;s responsibilities, defining product vision, and maximising business value.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                Participants will learn how to create and prioritise a product backlog, write effective user stories, manage stakeholder expectations, and collaborate with development teams to deliver valuable software incrementally. The course emphasises empirical product management and the importance of frequent feedback loops.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                This 2-day interactive workshop is delivered by a Scrum Alliance Certified Scrum Trainer (CST) and includes practical exercises and collaborative activities. No written exam is required — certification is granted upon successful completion of the workshop and fulfilment of Scrum Alliance membership requirements.
              </motion.p>
            </motion.div>

            <motion.div
              className="lg:col-span-4 sticky top-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <motion.img
                src="/professional_scrum_product_owner_1.jpg"
                alt="Certified Scrum Product Owner"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-2xl p-2 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">Training Calendar</div>
                </div>
              </motion.div>
              <Link href="/Events">
                <motion.button
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold px-5 py-2 rounded-xl shadow-xl hover:from-red-600 hover:to-pink-700 active:scale-95 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Schedule
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-stone-50 via-slate-50 to-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerTextVariants}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Course Outline</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {[
                  "Introduction to Scrum and the Product Owner role",
                  "Defining and communicating a compelling product vision",
                  "Stakeholder identification, mapping, and management",
                  "Creating, refining, and prioritising the product backlog",
                  "Writing effective user stories and acceptance criteria",
                  "Release planning and managing expectations",
                  "Maximising business value through iterative delivery",
                  "Collaboration with the development team and ScrumMaster",
                ].map((desc, index) => (
                  <motion.li key={index} variants={wordSlideVariants} className="flex items-start gap-3 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0" whileHover={{ scale: 1.5 }} transition={{ duration: 0.2 }} />
                    <span className="text-gray-700">{desc}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Learning Objectives</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {[
                  "Define and articulate a clear product vision aligned to business goals",
                  "Build and maintain a well-ordered, value-driven product backlog",
                  "Write clear user stories with measurable acceptance criteria",
                  "Effectively manage diverse stakeholders and balance competing priorities",
                  "Collaborate with Scrum teams to deliver incrementally and continuously improve",
                  "Apply empirical thinking to product decisions and roadmap planning",
                ].map((desc, index) => (
                  <motion.li key={index} variants={wordSlideVariants} className="flex items-start gap-3 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0" whileHover={{ scale: 1.5 }} transition={{ duration: 0.2 }} />
                    <span className="text-gray-700">{desc}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Target Group</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {[
                  "Product managers, business analysts, and entrepreneurs seeking formal Agile product ownership skills.",
                  "Project managers and programme managers transitioning to Scrum-based delivery.",
                  "Stakeholders and customers who want to understand how to work effectively with Scrum teams.",
                  "Anyone responsible for defining requirements, prioritising work, or maximising the value of a product.",
                ].map((desc, index) => (
                  <motion.li key={index} variants={wordSlideVariants} className="flex items-start gap-3 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0" whileHover={{ scale: 1.5 }} transition={{ duration: 0.2 }} />
                    <span className="text-gray-700">{desc}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Prerequisite</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {[
                  "No formal prerequisites are required for the CSPO course",
                  "No prior Scrum or agile experience is necessary",
                  "Open to all professionals interested in product ownership and Scrum",
                  "Basic business or IT background is helpful but not mandatory"
                ].map((desc, index) => (
                  <motion.li key={index} variants={wordSlideVariants} className="flex items-start gap-3 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0" whileHover={{ scale: 1.5 }} transition={{ duration: 0.2 }} />
                    <span className="text-gray-700">{desc}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Exam Pattern</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3" variants={staggerTextVariants}>
                {[
                  "Exam Type – No written exam; certification granted upon completing the workshop",
                  "Duration – 2 Days (16 hours of instructor-led training)",
                  "Supervised – Yes (attendance and participation required)",
                  "Delivery – Classroom or Virtual Instructor-Led Training (VILT)",
                  "Certification Body – Scrum Alliance",
                ].map((desc, index) => (
                  <motion.li key={index} variants={wordSlideVariants} className="flex items-start gap-3 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0" whileHover={{ scale: 1.5 }} transition={{ duration: 0.2 }} />
                    <span className="text-gray-700">{desc}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="lg:col-span-4 sticky top-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <motion.img
                src="/professional_scrum_product_owner_1.jpg"
                alt="Certified Scrum Product Owner"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold font-serif text-slate-800">Product Ownership</div>
                  <div className="text-xs text-slate-600 font-medium">Vision. Value. Delivery.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyTrainWithUs />
      <Footer />
    </>
  );
}
