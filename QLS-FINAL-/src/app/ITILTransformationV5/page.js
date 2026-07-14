import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Transformation (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Embed, sustain, and optimize change across digital products and services with ITIL® Transformation (Version 5). Expert-led training on the ITIL Transformation Model, governance, execution, and AI-driven change.",
  keywords: "ITIL Transformation Version 5, ITIL 5 transformation certification Hyderabad, ITIL Transformation Model, digital transformation training, ITIL AI capability model, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Transformation (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Embed, sustain, and optimize change across digital products and services with ITIL® Transformation (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Transformation (Version 5) Certification Training",
  subtitle: "Lead, Embed, and Sustain Change Across Digital Products and Services",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Transformation (Version 5) offers practical guidance for embedding, sustaining, and optimizing change across digital products and services.",
    "The programme equips professionals to balance governance, execution, and continual learning while delivering measurable value in AI-driven contexts.",
    "Participants learn to apply the ITIL Transformation Model, navigate complex and chaotic environments, and use proven tools and techniques to lead transformation initiatives that deliver lasting organizational resilience.",
  ],
  whyHead: "Why Choose ITIL® Transformation (Version 5)?",
  why: [
    "Lead effective transformation initiatives across digital products and services",
    "Apply the ITIL Transformation Model with confidence",
    "Balance governance structure with adaptability for sustainable outcomes",
    "Deliver value-driven change in complex, AI-driven environments",
    "Embed measurement, learning, and continual improvement",
    "Earn a globally recognized ITIL Version 5 credential",
  ],
  prerequisites: [
    "ITIL® Foundation (Version 5) is a prerequisite for all ITIL (Version 5) higher-level qualifications, including ITIL Transformation (Version 5).",
  ],
  whoShouldAttend: [
    "Strategy Managers",
    "Digital Strategy Leads",
    "Transformation Leads",
    "Portfolio Managers",
    "Enterprise Architects",
    "IT Directors",
    "Programme Managers",
    "Business Strategy Consultants",
    "Innovation Leads",
    "Chief Digital Officers",
  ],
  curriculum: [
    {
      title: "Module 1: Key ITIL Transformation Concepts",
      topics: ["Change and value", "The ITIL Product and Service Lifecycle", "Interconnections with the ITIL Value System"],
    },
    {
      title: "Module 2: Transformation in Complex Environments",
      topics: ["Approaches for implementing transformation across complex and chaotic organizational contexts"],
    },
    {
      title: "Module 3: The ITIL Transformation Model",
      topics: ["Layers, stages, and steps", "Governance, positioning, execution, and learning phases"],
    },
    {
      title: "Module 4: Transformation Patterns and Approaches",
      topics: ["Initiation, governance, and execution patterns", "Effects on scope, timing, and implementation strategy"],
    },
    {
      title: "Module 5: Governance and Transformation Alignment",
      topics: ["Governance structures that support transformation", "Maintaining flexibility and value delivery"],
    },
    {
      title: "Module 6: Execution and Delivery of Change",
      topics: ["Managing and implementing transformation initiatives across various scenarios"],
    },
    {
      title: "Module 7: Measurement, Learning, and Continuous Improvement",
      topics: ["Measuring progress and evaluating outcomes", "Embedding organizational learning practices"],
    },
    {
      title: "Module 8: Tools, Methods, and Techniques for Transformation",
      topics: ["Value stream mapping", "Objectives and Key Results (OKRs)", "The ITIL Maturity Model"],
    },
    {
      title: "Module 9: AI and Transformation",
      topics: ["The ITIL AI Capability Model", "How AI governance supports transformation readiness and adaptive execution"],
    },
  ],
  learningOutcomes: [
    "Lead effective transformation initiatives across digital products and services",
    "Apply the ITIL Transformation Model across governance, execution, and learning phases",
    "Balance structure and adaptability for sustainable outcomes",
    "Ensure transformation delivers measurable value and organizational resilience",
    "Use value stream mapping, OKRs, and the ITIL Maturity Model effectively",
    "Understand how AI supports transformation readiness and adaptive execution",
    "Prepare confidently for the ITIL Transformation (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Transformation (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (open book)" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28 out of 40)" },
    { label: "Language", value: "English" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite", value: "ITIL® Foundation (Version 5)" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Practical, model-driven transformation content",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world transformation scenarios and tools",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILTransformationV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
