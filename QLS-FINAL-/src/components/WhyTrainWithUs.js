"use client";
import { motion } from "framer-motion";

const reasons = [
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
];

export default function WhyTrainWithUs() {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-14 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Train With <span className="text-[#3B82F6]">QuickLearn?</span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your success is our guarantee — backed by expert trainers, accredited content, and a commitment to your exam results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#3B82F6]/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3
                className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3B82F6] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
