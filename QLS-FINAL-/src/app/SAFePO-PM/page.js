"use client";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import WhyTrainWithUs from "@/components/WhyTrainWithUs";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import LiveChat from "@/components/LiveChat";

export default function SAFePOPM() {
  return (
    <>
      <Headers />
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        {/* Background */}
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
              style={{ backgroundImage: `url('/safe_product_owner_manager.jpg')` }}
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

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-4xl text-white"
              >
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    SAFe Product Owner/Product Manager
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.25 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Master product ownership and management in the Scaled Agile Framework environment.
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enhanced ScrollFloat Section */}
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
            SAFe PO/PM
          </ScrollFloat>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content Grid */}
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative"
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
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                The SAFe® Product Owner/Product Manager (POPM) course prepares current and future Product Owners and Product Managers to take on their roles in the Agile Release Train (ART). Students will develop an understanding of the Agile Product Management mindset, their role and responsibilities, and how to effectively perform their role.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                Students will understand how to apply Lean-Agile principles and practices to the specification, development, deployment, and validation of products and solutions. They will learn about their role in PI Planning and how to use Iteration Goals to build the Program Increment.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                Attendees will also discover how to write Epics, Capabilities, Features, and Stories following SAFe practices and how to manage the Team and Program backlogs. Students learn about the importance of Customer Centricity and Design Thinking in delivering desirable, feasible, viable, and sustainable solutions.
              </motion.p>
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
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
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
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Introduction to SAFe and the role of PO/PM in the Agile Release Train",
                  "Customer Centricity and Design Thinking",
                  "Product and Solution Vision",
                  "PI Planning: Preparing and participating effectively",
                  "Writing Epics, Capabilities, Features, and Stories",
                  "Managing and prioritising Team and Program Backlogs",
                  "Continuous Delivery Pipeline and DevOps practices",
                  "Iteration execution and Program Increment objectives"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
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
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Apply SAFe Product Owner/Product Manager practices",
                  "Apply Lean-Agile principles to product management",
                  "Understand the role of Product Owner and Product Manager in SAFe",
                  "Create and manage Team and Program backlogs",
                  "Plan and participate in PI Planning",
                  "Apply Customer Centricity and Design Thinking",
                  "Write effective Epics, Capabilities, Features, and Stories",
                  "Understand DevOps and Release on Demand",
                  "Participate in the Continuous Delivery Pipeline",
                  "Support the execution of the Program Increment"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
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
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Product Owners",
                  "Product Managers",
                  "Product Marketing Managers",
                  "Business Analysts",
                  "Business Owners",
                  "Program Managers",
                  "Solution Managers",
                  "Anyone responsible for defining and prioritizing team backlogs"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
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
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Familiarity with the Agile Manifesto and basic Agile practices",
                  "Understanding of Scrum or experience working on an Agile team is recommended",
                  "No formal SAFe prerequisites are required for this course",
                  "Attendance of a SAFe Leading SAFe or equivalent course is beneficial but not mandatory"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
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
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Duration: 2 days of training",
                  "Exam: 60 minutes, 45 questions",
                  "Passing score: 32 out of 45 (71%)",
                  "Format: Multiple choice, single answer",
                  "Certification: SAFe® 6 Product Owner/Product Manager (POPM)",
                  "Certification period: 1 year",
                  "Language: English",
                  "Digital badge and certificate included"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-4">
                <motion.img
                  src="/safe_product_owner_manager.jpg"
                  alt="SAFe PO/PM Training"
                  className="w-full rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#2BA6D9] to-[#1E7BA3] px-5 py-3">
                    <p className="text-white font-semibold text-sm leading-tight">SAFe PO/PM</p>
                    <p className="text-white/70 text-xs mt-0.5">Agile, Scrum &amp; Kanban</p>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
                      Online &amp; Classroom batches available
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
                      Flexible scheduling to suit your needs
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#2BA6D9] flex-shrink-0" />
                      Expert-led, accredited training
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Link href="/Events">
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
          </div>
        </div>
      </section>

      <WhyTrainWithUs />
      <Footer />
        
    </>
  );
}