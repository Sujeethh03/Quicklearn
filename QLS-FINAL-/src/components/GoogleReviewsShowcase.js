"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=QuickLearn+Systems+Reviews";

// Distribute 7 screenshots across 4 columns, varied order so columns look distinct
const COLUMNS = [
  ["/review_1.png", "/review_4.png", "/review_7.png"],
  ["/review_2.png", "/review_5.png", "/review_1.png"],
  ["/review_3.png", "/review_6.png", "/review_2.png"],
  ["/review_4.png", "/review_7.png", "/review_3.png"],
];

// Different scroll speeds per column for a natural, staggered feel
const SPEEDS = [0.6, 0.45, 0.7, 0.5];

function ScrollColumn({ images, speed, delay = 0 }) {
  const ref = useRef(null);
  const isPausedRef = useRef(false);
  // Duplicate images for seamless infinite loop
  const doubled = [...images, ...images];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wait for images to load so scrollHeight is accurate
    let frameId;

    const startScroll = () => {
      const scroll = () => {
        if (!isPausedRef.current) {
          el.scrollTop += speed;
          // When we've scrolled through the first set, snap back to top
          if (el.scrollTop >= el.scrollHeight / 2) {
            el.scrollTop = 0;
          }
        }
        frameId = requestAnimationFrame(scroll);
      };
      frameId = requestAnimationFrame(scroll);
    };

    const timer = setTimeout(startScroll, delay);

    const pause = () => { isPausedRef.current = true; };
    const resume = () => { isPausedRef.current = false; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [speed, delay]);

  return (
    <div
      ref={ref}
      className="overflow-hidden h-[700px] space-y-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {doubled.map((src, i) => (
        <a
          key={i}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
        >
          <Image
            src={src}
            alt={`Student review ${(i % images.length) + 1}`}
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}

export default function GoogleReviewsShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Professionals
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2BA6D9] to-indigo-600">
              Worldwide
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our learners say about their training experience with QuickLearn Systems.
          </p>
        </motion.div>
      </div>

      {/* Scrolling columns */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLUMNS.map((images, colIndex) => (
            <ScrollColumn
              key={colIndex}
              images={images}
              speed={SPEEDS[colIndex]}
              delay={colIndex * 300}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          See all reviews on Google
        </a>
      </motion.div>
    </section>
  );
}
