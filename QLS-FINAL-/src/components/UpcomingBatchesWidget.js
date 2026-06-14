"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Monitor, Users, ArrowRight, Clock } from "lucide-react";

function hashTitle(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) & 0xffff;
  }
  return hash;
}

function getUpcomingBatches(courseTitle = "") {
  const today = new Date();
  const offset = hashTitle(courseTitle) % 6; // 0–5 day offset unique per course
  const modes = ["Online", "Classroom", "Online", "Classroom"];
  const batches = [];

  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + 5 + offset + i * 14);
    // Snap to next weekday (Mon–Fri)
    const day = d.getDay();
    if (day === 0) d.setDate(d.getDate() + 1);
    if (day === 6) d.setDate(d.getDate() + 2);
    batches.push({ date: d, mode: modes[i] });
  }
  return batches;
}

function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function UpcomingBatchesWidget({ courseTitle }) {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    setBatches(getUpcomingBatches(courseTitle));
  }, [courseTitle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden sticky top-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2BA6D9] to-[#1E7BA3] px-5 py-4">
        <div className="flex items-center gap-2 mb-0.5">
          <Calendar className="w-4 h-4 text-white/80" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Upcoming Batches
          </span>
        </div>
        {courseTitle && (
          <p className="text-white font-semibold text-sm leading-tight line-clamp-1">
            {courseTitle}
          </p>
        )}
      </div>

      {/* Batch rows */}
      <div className="divide-y divide-gray-100">
        {batches.map((batch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex items-center justify-between px-5 py-3.5 hover:bg-sky-50/60 transition-colors duration-200 group"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-gray-800 font-semibold text-sm">
                <Clock className="w-3.5 h-3.5 text-[#2BA6D9] flex-shrink-0" />
                {formatDate(batch.date)}
              </div>
              <div className="flex items-center gap-1.5">
                {batch.mode === "Online" ? (
                  <Monitor className="w-3 h-3 text-[#2BA6D9]" />
                ) : (
                  <Users className="w-3 h-3 text-emerald-500" />
                )}
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    batch.mode === "Online"
                      ? "bg-blue-50 text-[#2BA6D9]"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {batch.mode}
                </span>
              </div>
            </div>

            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-xs font-semibold bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white px-3 py-1.5 rounded-lg transition-colors duration-200 flex items-center gap-1 flex-shrink-0"
              >
                Book Now
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <Link
          href="/Events"
          className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[#2BA6D9] hover:text-[#1E7BA3] transition-colors duration-200"
        >
          View all schedules
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
