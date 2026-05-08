"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "IT Service Management",
    subtitle: "Master ITIL® 4 frameworks and best practices to manage IT services efficiently. Guide professionals in aligning IT services with business needs, handling incidents, problems, and continual improvement.",
    image: "/hero_it_service_management.jpg",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project & Program Management",
    subtitle: "Earn globally recognized certifications like PMP, ACP, and Prince2. Develop essential skills in project planning, execution, agile practices, and strategic governance.",
    image: "/hero_project_program_management.jpg",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Agile, Scrum & Kanban",
    subtitle: "Excel in agile delivery methods and frameworks like SAFe, Scrum, and Kanban. Train professionals in agile leadership, scaling frameworks, and product ownership.",
    image: "/hero_agile_scrum_kanban.jpg",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Quality Management",
    subtitle: "Master process improvement and efficiency using Lean Six Sigma methodologies. Gain Green Belt and Black Belt certifications to reduce waste and optimize quality.",
    image: "/hero_quality_management.jpg",
    accent: "from-blue-500 to-blue-700",
  },
  {
    title: "DevOps & Business Analysis",
    subtitle: "Bridge development and operations for faster, more reliable delivery. Master DevOps automation, CI/CD, cloud practices, and business transformation.",
    image: "/hero_devops_business_analysis.jpg",
    accent: "from-teal-500 to-blue-500",
  },
  {
    title: "Software Testing & Technical",
    subtitle: "Excel in software quality assurance and testing principles. Master ISTQB certifications with advanced skills in test design, execution, and automation.",
    image: "/hero_software_testing_technical.jpg",
    accent: "from-indigo-500 to-purple-500",
  },
];

const AUTOPLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 1200; // ms — matches framer motion 1.2s

export default function Hero({ onCategorySelect }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);

  const startProgress = useCallback(() => {
    progressStartRef.current = Date.now();
    setProgress(0);
    cancelAnimationFrame(progressRef.current);

    const tick = () => {
      const elapsed = Date.now() - progressStartRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
  }, []);

  const stopProgress = useCallback(() => {
    cancelAnimationFrame(progressRef.current);
  }, []);

  const goToSlide = useCallback((index, dir) => {
    if (index === currentSlide || isTransitioning) return;
    setDirection(dir ?? (index > currentSlide ? 1 : -1));
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, [currentSlide, isTransitioning]);

  // Auto-play — restarts whenever currentSlide changes or pause toggles
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      stopProgress();
      return;
    }
    startProgress();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      startProgress();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, [currentSlide, isPaused, startProgress, stopProgress]);

  const prevSlide = () => {
    const index = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(index, -1);
    // Reset timer
    clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      startProgress();
    }, AUTOPLAY_INTERVAL);
  };

  const nextSlide = () => {
    const index = (currentSlide + 1) % slides.length;
    goToSlide(index, 1);
    clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      startProgress();
    }, AUTOPLAY_INTERVAL);
  };

  const handleDotClick = (index) => {
    const dir = index > currentSlide ? 1 : -1;
    goToSlide(index, dir);
    clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      startProgress();
    }, AUTOPLAY_INTERVAL);
  };

  // Direction-aware text variants
  const textEnterX = direction * -80;
  const textExitX = direction * 80;

  const titleVariants = {
    hidden: { opacity: 0, x: textEnterX, y: 10 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.9 } },
    exit: { opacity: 0, x: textExitX, transition: { duration: 0.35, ease: "easeIn" } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: textEnterX * 0.6, y: 8 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 90, damping: 20, delay: 0.12, duration: 0.9 } },
    exit: { opacity: 0, x: textExitX * 0.6, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18, delay: 0.22, duration: 0.8 } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeIn" } },
  };

  return (
    <section
      className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0"
          initial={{ scale: 1.12, opacity: 0, x: direction * 60 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0.97, opacity: 0, x: direction * -60 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-25`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-4xl text-white"
            >
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 tracking-[-0.02em]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button
                  className="group relative bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden shadow-2xl tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onCategorySelect(slides[currentSlide].title)}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white hover:bg-white/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white hover:bg-white/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Dots + Progress */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isTransitioning}
            className="relative flex items-center justify-center"
            style={{ width: index === currentSlide ? 32 : 10, height: 10, transition: "width 0.3s ease" }}
          >
            {index === currentSlide ? (
              <span className="relative block w-full h-2 rounded-full bg-white/30 overflow-hidden">
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  style={{ width: `${progress}%` }}
                />
              </span>
            ) : (
              <span
                className="block w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-colors duration-200"
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20 text-white/70 text-xs sm:text-sm font-medium">
        <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1 sm:mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Pause indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            className="absolute top-4 right-4 z-20 text-white/50 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            paused
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
