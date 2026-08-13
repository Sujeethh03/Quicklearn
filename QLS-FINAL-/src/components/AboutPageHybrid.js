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

      {/* AT A GLANCE */}
      <section className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "10+", label: "Years of industry experience" },
              { value: "15,000+", label: "IT professionals trained" },
              { value: "100+", label: "Partner organizations" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ABOUT CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* TEXT */}
            <div className="md:col-span-8 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Who We Are
              </h2>

              <p>
                At QuickLearn Systems, we are passionate about transforming careers and empowering
                organizations through world-class professional training and globally recognized certification
                programs. With over 10 years of industry experience, we have successfully trained 15,000+ IT
                professionals and partnered with 100+ organizations to build future-ready skills.
              </p>

              <p>
                We specialize in delivering industry-aligned training across Project Management, Agile &amp;
                Scrum, IT Service Management, DevOps, Cloud, Cybersecurity, Quality Management, Business
                Analysis, AI, and other emerging technologies. Every program is designed to bridge the gap
                between theoretical knowledge and real-world application, enabling learners to excel in
                today&apos;s rapidly evolving technology landscape.
              </p>

              <p>
                Our learning solutions include Instructor-Led Live Online Training, Classroom Training,
                E-Learning, Customized Learning Programs, and Corporate Training, providing the flexibility
                professionals and organizations need to learn anytime, anywhere.
              </p>

              <p>
                What sets us apart is our learner-first approach. Our experienced instructors bring extensive
                industry expertise, practical insights, and proven methodologies to every session, ensuring
                participants gain not only certification success but also the confidence and skills to excel
                in their careers.
              </p>

              <p>
                At QuickLearn Systems, we believe that learning is the foundation of innovation and
                professional growth. Our mission is to deliver exceptional learning experiences that help
                individuals advance their careers and enable organizations to build high-performing,
                future-ready teams.
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
                  className="rounded-xl shadow-lg w-full h-auto"
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
                  At QuickLearn Systems, our vision is to be a globally trusted leader in professional
                  training and certification, setting new benchmarks for excellence in learning. We aspire to
                  empower individuals and organizations through innovative, high-quality training solutions
                  that inspire continuous learning, accelerate career growth, and build future-ready
                  professionals.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At QuickLearn Systems, our mission is to empower individuals and organizations through
                  world-class training, globally recognized certifications, and practical learning
                  experiences. We are committed to delivering flexible, high-quality, and customized learning
                  solutions that help professionals build future-ready skills, accelerate career growth, and
                  enable organizations to develop high-performing teams.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Core Values
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {[
                    { name: "Excellence", detail: "Delivering high-quality, industry-focused learning experiences." },
                    { name: "Customer Success", detail: "Your growth and success are our highest priorities." },
                    { name: "Integrity", detail: "Building trust through honesty, transparency, and professionalism." },
                    { name: "Innovation", detail: "Embracing modern learning technologies and best practices." },
                    { name: "Continuous Learning", detail: "Evolving with industry trends to keep learners future-ready." },
                    { name: "Respect & Collaboration", detail: "Creating an inclusive and supportive learning environment." },
                    { name: "Long-Term Relationships", detail: "Building lasting partnerships through value and trust." },
                  ].map((value) => (
                    <li key={value.name} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#2BA6D9]" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">{value.name}</strong> &ndash; {value.detail}
                      </span>
                    </li>
                  ))}
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
                  className="rounded-xl shadow-lg w-full h-auto"
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
