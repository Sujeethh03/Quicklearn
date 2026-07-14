"use client";

import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Award, Target, Globe, Star, GraduationCap } from "lucide-react";


export default function SocialProof() {
  const topStats = [
    {
      icon: "users",
      number: "15,000+",
      label: "Learners",
      subtitle: "Careers Transitioned"
    },
    {
      icon: "google",
      rating: "4.9/5",
      stars: 5,
      subtitle: "Average Ratings on this year"
    },
    {
      icon: "trustpilot",
      rating: "4.8/5",
      stars: 5,
      subtitle: "Average Ratings on this year"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Professionals Trained & Certified",
      description: "Individuals and corporate teams skilled across 50+ countries"
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Years of Industry Excellence",
      description: "A decade of accredited, industry-aligned training delivery"
    },
    {
      icon: Trophy,
      number: "99%",
      label: "Certification Success Rate",
      description: "Exam-focused training methodology designed for strong certification outcomes"
    },
    {
      icon: Award,
      number: "100+",
      label: "Corporate Clients Served",
      description: "Trusted by leading enterprises and Fortune 500 companies"
    },
    {
      icon: Star,
      number: "95%",
      label: "Learner Satisfaction",
      description: "Rated by professionals who completed our programs"
    },
    {
      icon: GraduationCap,
      number: "500+",
      label: "Training Batches Delivered",
      description: "Instructor-led online and classroom batches successfully completed"
    },
    {
      icon: Globe,
      number: "40+",
      label: "Global Certification Programs",
      description: "Accredited courses across IT service management, agile, project management, and more"
    },
    {
      icon: Target,
      number: "15+",
      label: "Years Average Trainer Experience",
      description: "Accredited trainers with deep, real-world industry expertise"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      {/* Refined Background Pattern */}
      

      <Container maxWidth="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Top Stats Section - New */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {topStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    {stat.icon === "users" && (
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2BA6D9] to-[#5B6F81] rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    )}
                    {stat.icon === "google" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 48 48" className="w-12 h-12">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                        </svg>
                      </div>
                    )}
                    {stat.icon === "trustpilot" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 48 48" className="w-12 h-12">
                          <rect width="48" height="48" rx="4" fill="#00B67A"/>
                          <path d="M24 8l4.5 13.8h14.5l-11.7 8.5 4.5 13.8L24 35.6l-11.8 8.5 4.5-13.8L5 21.8h14.5z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Number/Rating */}
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number || stat.rating}
                  </div>

                  {/* Stars for ratings */}
                  {stat.stars && (
                    <div className="flex gap-1 mb-2">
                      {[...Array(stat.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  )}

                  {/* Label */}
                  {stat.label && (
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {stat.label}
                    </div>
                  )}

                  {/* Subtitle */}
                  <div className="text-sm text-gray-600">
                    {stat.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section Header - Improved spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2BA6D9] mb-3">
              Why QuickLearn Systems?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Trusted by Professionals
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-700 to-slate-800">
                Worldwide
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of IT professionals and leading organizations who rely on QuickLearn Systems for expert-led training, globally recognized certifications, and impactful learning experiences that drive career and business success.
            </p>
          </div>
        </motion.div>

        {/* Stats — Horizontal Milestone Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            {/* Row 1 — 4 stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-gray-100">
              {stats.slice(0, 4).map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-2 py-10 px-6 text-center group hover:bg-sky-50/60 transition-colors duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2BA6D9]/10 to-[#5B6F81]/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#2BA6D9]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-[#2BA6D9] transition-colors duration-300 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-tight max-w-[120px]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Row 2 — remaining stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-gray-100">
              {stats.slice(4).map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.32 + i * 0.08, duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-2 py-10 px-6 text-center group hover:bg-sky-50/60 transition-colors duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2BA6D9]/10 to-[#5B6F81]/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#2BA6D9]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-[#2BA6D9] transition-colors duration-300 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-tight max-w-[120px]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Bottom CTA - Enhanced design and spacing */}
        
      </Container>
    </section>
  );
}