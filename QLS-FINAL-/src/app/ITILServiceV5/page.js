import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Service (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Deliver resilient, high-performing digital services across the full lifecycle with ITIL® Service (Version 5). Expert-led training on service relationships, service levels, operational reliability, and continual improvement.",
  keywords: "ITIL Service Version 5, ITIL 5 service certification Hyderabad, digital service management ITIL, service level management, ITIL managing professional, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Service (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Deliver resilient, high-performing digital services across the full lifecycle with ITIL® Service (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Service (Version 5) Certification Training",
  subtitle: "Deliver Resilient, High-Performing Digital Services Across the Full Lifecycle",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Service (Version 5) equips you with the expertise to deliver resilient, high-performing digital services across the full lifecycle.",
    "The programme provides structured guidance for managing service relationships, service levels, operational reliability, and continual improvement — with a focus on consistent performance, resilience, and measurable customer outcomes.",
    "Participants learn to align services with strategy and stakeholder needs, adopt experience-led service design, strengthen continual improvement, and use AI and automation to enhance service capability.",
  ],
  whyHead: "Why Choose ITIL® Service (Version 5)?",
  why: [
    "Deliver resilient, high-performing digital services",
    "Manage service relationships, service levels, and operational reliability",
    "Adopt experience-led, human-centred service design",
    "Align services with strategy and stakeholder needs",
    "Strengthen continual improvement using evidence-based decisions",
    "Enhance service delivery with AI and automation",
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
    { title: "Module 1: Digital Products and Services", topics: ["Key concepts of digital product and service management supporting value and performance"] },
    { title: "Module 2: Service Value Co-creation", topics: ["How services enable value creation with customers, partners, and stakeholders"] },
    { title: "Module 3: Experience-Led Service Quality", topics: ["Human-centred, experience-led design to improve service perception and quality"] },
    { title: "Module 4: Resilient and Adaptable Services", topics: ["Developing services that respond effectively to change"] },
    { title: "Module 5: Strategy and Service Alignment", topics: ["Connecting strategic intent with consistent performance"] },
    { title: "Module 6: Stakeholder-Aligned Services", topics: ["Aligning services with stakeholder needs for measurable outcomes"] },
    { title: "Module 7: Continual Improvement", topics: ["Using evidence-based decisions to increase value and reduce waste"] },
    { title: "Module 8: Service Governance and Innovation", topics: ["Practical governance supporting compliance and risk management"] },
    { title: "Module 9: AI-Enabled Service Delivery", topics: ["How AI and automation enhance service capability"] },
  ],
  learningOutcomes: [
    "Deliver value-driven service management through customer and stakeholder collaboration",
    "Adopt experience-led, human-centred service improvement",
    "Manage service relationships, service levels, and reliability",
    "Design resilient services that adapt to change",
    "Strengthen continual improvement using evidence-based decisions",
    "Apply AI and automation to enhance service delivery",
    "Prepare confidently for the ITIL Service (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Service (Version 5)" },
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
    "Full digital service lifecycle coverage",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world service delivery scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILServiceV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
