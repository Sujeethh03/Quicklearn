import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Strategic Leader (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Develop, deliver, and optimize strategy to create lasting value with ITIL® Strategic Leader (Version 5). Expert-led training on strategy development, implementation, and governance in AI-driven environments.",
  keywords: "ITIL Strategic Leader Version 5, ITIL Strategy Version 5, ITIL 5 leadership certification Hyderabad, digital strategy training, ITIL AI governance, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Strategic Leader (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Develop, deliver, and optimize strategy to create lasting value with ITIL® Strategic Leader (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Strategic Leader (Version 5) Certification Training",
  subtitle: "Develop, Deliver, and Optimize Strategy to Create Lasting Value",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Strategic Leader (Version 5) offers practical guidance for developing, delivering, and optimizing strategies that create lasting value across digital products and services.",
    "The programme helps professionals align technology, investment, and execution with business outcomes in complex, AI-driven environments — enabling confident decision-making amid volatility, uncertainty, and ambiguity.",
    "Participants learn to translate strategic intent into actionable initiatives, apply the ITIL Strategy Management Model, and lead value-driven strategy delivery while balancing governance, risk, and sustainability.",
  ],
  whyHead: "Why Choose ITIL® Strategic Leader (Version 5)?",
  why: [
    "Build strategic alignment capability using the ITIL Strategy Management Model",
    "Make confident decisions in volatile, uncertain, and ambiguous settings",
    "Translate strategic intent into actionable, value-driven initiatives",
    "Lead strategy in complex, digital, and AI-driven environments",
    "Strengthen governance, risk, and sustainability in strategy execution",
    "Earn a globally recognized senior ITIL leadership credential",
  ],
  prerequisites: [
    "ITIL Strategic Leader requires ITIL Foundation, ITIL Strategy, and ITIL Transformation.",
    "PeopleCert requires mandatory accredited training for the ITIL Strategic Leader (Version 5) certification.",
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
    { title: "Module 1: Key ITIL Strategy Concepts", topics: ["Core principles, practices, and terminology for strategy development"] },
    { title: "Module 2: Strategy in Digital and AI-Driven Environments", topics: ["Navigating dynamic and disruptive contexts with clarity"] },
    { title: "Module 3: Strategy Development", topics: ["Observing, orienting, deciding, and planning effective strategies"] },
    { title: "Module 4: Strategy Implementation", topics: ["Planning, executing, synthesizing, and reflecting on strategic initiatives"] },
    { title: "Module 5: Operating Models and Strategic Alignment", topics: ["Supporting strategic intent through business and operating models"] },
    { title: "Module 6: Strategic Decision-Making in Complex Environments", topics: ["Making informed decisions amid uncertainty and complexity"] },
    { title: "Module 7: Strategic Capabilities and Leadership", topics: ["Shaping and leading value-driven strategy delivery"] },
    { title: "Module 8: Governance, Risk, and Sustainability in Strategy", topics: ["Supporting long-term success and organizational resilience"] },
    { title: "Module 9: AI Governance in Strategy", topics: ["Enabling responsible, value-driven strategy execution with AI"] },
  ],
  learningOutcomes: [
    "Apply the ITIL Strategy Management Model to achieve strategic alignment",
    "Make effective decisions in volatile, uncertain, and ambiguous settings",
    "Translate strategic intent into actionable initiatives with sustained value delivery",
    "Lead strategy development and implementation in AI-driven environments",
    "Embed governance, risk, and sustainability into strategy execution",
    "Prepare confidently for the ITIL Strategic Leader (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Strategic Leader (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (open book)" },
    { label: "Number of Questions", value: "40 marks" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28 out of 40)" },
    { label: "Language", value: "English" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite", value: "ITIL Foundation, ITIL Strategy, and ITIL Transformation (mandatory training)" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Senior-level strategic leadership content",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world strategy and decision-making scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILStrategicLeaderV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
