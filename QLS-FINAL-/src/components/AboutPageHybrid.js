"use client";

import Image from "next/image";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import WhyTrainWithUs from "@/components/WhyTrainWithUs";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";

export default function AboutPageHybrid() {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0, transition: slideTransition }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: slideTransition }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: slideTransition }
  };

  return (
    <div className="w-full flex flex-col">

      <Headers />

      {/* HERO */}
      <section className="relative h-[600px] bg-gray-900 overflow-hidden">
        <AnimatePresence>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero_it_service_management.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl text-white"
            >
              <motion.h1
                variants={slideInLeftVariants}
                className="text-5xl md:text-7xl font-bold mb-6 font-serif"
              >
                About QuickLearn Systems
              </motion.h1>

              <motion.p
                variants={fadeInVariants}
                className="text-lg md:text-xl text-white/80"
              >
                Your one-stop solution for nurturing and enhancing skills — for individuals and corporate teams worldwide.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

{/* ABOUT CONTENT */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* TEXT */}
            <div className="md:col-span-8 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Who We Are
              </h2>

              <p>
                QuickLearn Systems is a trusted professional training and certification provider with over
                10 years of industry experience in empowering IT professionals and corporate teams. We deliver
                world-class, outcome-driven training across key domains including Project &amp; Program Management,
                Service Management, IT Governance, Agile, and Quality Management.
              </p>

              <p>
                Our offerings span Live Online (Instructor-Led), Classroom, E-Learning, Customized, and
                Corporate Training programs, designed to align with real-world challenges and career goals.
                With a strong focus on customer satisfaction, practical learning, and value for time and
                investment, we help professionals achieve globally recognized certifications and accelerate
                career growth.
              </p>

              <p>
                At QuickLearn Systems, we combine expert instructors, ethical practices, and learner-centric
                delivery to create impactful learning experiences that drive measurable success.
              </p>
            </div>

            {/* IMAGE */}
            <div className="md:col-span-4">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Image
                  src="/hero_project_program_management.jpg"
                  alt="Corporate Training"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION, MISSION & VALUES */}
      <section className="bg-gradient-to-br from-stone-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* TEXT */}
            <div className="md:col-span-8 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed italic mb-2">
                  &ldquo;We are limited not by our abilities, but by the vision we pursue.&rdquo;
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At QuickLearn Systems, our vision is to become a benchmark for excellence in professional
                  training and certification. We strive to set the standard that other training organizations
                  aspire to achieve — recognized and respected for delivering outstanding training quality,
                  innovative learning experiences, and highly effective programs that empower professionals
                  to achieve their career aspirations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At QuickLearn Systems, our mission is to empower individuals and organizations with the
                  knowledge and skills needed to grow and succeed in their professional journeys. We are
                  committed to delivering flexible, high-quality, and customized training programs that
                  help professionals enhance their capabilities, achieve globally recognized certifications,
                  and stay competitive in a rapidly evolving industry.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Values
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quality teaching and learning</li>
                  <li>• Respect and Care for all</li>
                  <li>• Customer Satisfaction is our priority</li>
                  <li>• Focus on continuous improvement</li>
                  <li>• Long Term Relationship with our customers</li>
                </ul>
              </div>
            </div>

            {/* IMAGE */}
            <div className="md:col-span-4">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Image
                  src="/hero_agile_scrum_kanban.jpg"
                  alt="Our Team"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <WhyTrainWithUs />

      <Footer />
    </div>
  );
}
