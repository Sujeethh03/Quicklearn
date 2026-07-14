import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Product (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Manage digital products as integrated value streams with ITIL® Product (Version 5). Expert-led training covering the product and service lifecycle, value stream flow, human-centred design, reliable operations, and AI-enabled ways of working.",
  keywords: "ITIL Product Version 5, ITIL 5 product certification Hyderabad, digital product management ITIL, ITIL value streams, ITIL managing professional, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Product (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Manage digital products as integrated value streams with ITIL® Product (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Product (Version 5) Certification Training",
  subtitle: "Manage Digital Products as Integrated Value Streams Across the Full Lifecycle",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Product (Version 5) enables you to manage digital products as integrated value streams, aligning product capabilities, services, and business outcomes across their full lifecycle.",
    "The course applies the ITIL Product and Service Lifecycle Model end-to-end — from discovery through design, build, transition, operate, and support — helping you break down silos and align stakeholders across the ITIL Value System.",
    "Participants learn to optimize flow, embed human-centred design, orchestrate resources and suppliers, and use metrics and feedback loops to continuously measure and improve lifecycle performance in AI-enabled environments.",
  ],
  whyHead: "Why Choose ITIL® Product (Version 5)?",
  why: [
    "Manage digital products end-to-end across the ITIL Product and Service Lifecycle",
    "Break down silos and align stakeholders across the ITIL Value System",
    "Optimize value stream flow and reduce waste",
    "Embed human-centred, sustainable product design",
    "Apply SRE principles for reliable, observable operations",
    "Integrate AI into modern product development and support",
  ],
  prerequisites: [
    "Any ITIL 4 certification, OR",
    "ITIL Foundation (Version 5), OR",
    "ITIL Foundation Bridge (Version 5)",
  ],
  whoShouldAttend: [
    "Product Managers",
    "Product Owners",
    "Portfolio Managers",
    "Chief Digital Officers",
    "IT Operations Managers",
    "Service Delivery Managers",
    "Customer Experience (CX) Leads",
    "Digital Experience Managers",
    "Transformation Leads",
    "AI Governance Leads",
  ],
  curriculum: [
    {
      title: "Module 1: Digital Product and Service Integration",
      topics: ["Understanding digital products and capabilities", "Digital services enabling value realization", "Managing products and services as unified systems"],
    },
    {
      title: "Module 2: Value Stream Integration and Flow Optimization",
      topics: ["Identifying and mapping product value streams", "Optimizing flow and reducing waste", "Achieving measurable outcomes"],
    },
    {
      title: "Module 3: Strategic Discovery and Product Direction",
      topics: ["Aligning product roadmaps with organizational strategy", "Structured discovery and prioritization", "Evidence-based decision-making"],
    },
    {
      title: "Module 4: Human-Centred Product Design",
      topics: ["Design thinking principles", "User-centered design approaches", "Creating scalable, resilient, usable, and sustainable products"],
    },
    {
      title: "Module 5: Resource and Supplier Orchestration",
      topics: ["Informed acquisition decisions", "Technology and talent management", "Ensuring scalability and resilience"],
    },
    {
      title: "Module 6: Build and Quality Engineering Integration",
      topics: ["Integrating design into build activities", "Automation and testing governance", "Technical debt management"],
    },
    {
      title: "Module 7: Controlled Transition and Deployment",
      topics: ["Structured, risk-aware product transitions", "Operational readiness and observability", "Day-one embedding of reliability measures"],
    },
    {
      title: "Module 8: Reliable and Observable Operations",
      topics: ["Site Reliability Engineering (SRE) principles", "Observability and capacity planning", "Monitoring, performance management, and automation"],
    },
    {
      title: "Module 9: AI-enabled Ways of Working",
      topics: ["Integrating AI into product development", "AI-enhanced support practices"],
    },
  ],
  learningOutcomes: [
    "Manage digital products end-to-end using the ITIL Product and Service Lifecycle Model",
    "Break down silos and align stakeholders across the ITIL Value System",
    "Identify, map, and optimize product value streams",
    "Embed human-centred design into scalable, sustainable products",
    "Apply SRE principles for reliable and observable operations",
    "Use metrics and feedback loops to continuously measure lifecycle success",
    "Prepare confidently for the ITIL Product (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Product (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (open book)" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28 out of 40)" },
    { label: "Language", value: "English" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite", value: "Any ITIL 4 certification, ITIL Foundation (V5), or ITIL Foundation Bridge (V5)" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Full product and service lifecycle coverage",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world product management scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILProductV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
