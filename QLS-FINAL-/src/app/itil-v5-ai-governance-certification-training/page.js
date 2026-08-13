import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-v5-ai-governance-certification-training" },
  title: "ITIL® AI Governance (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Govern artificial intelligence responsibly within IT service management using ITIL® AI Governance (Version 5). Expert-led, accredited training covering the ITIL AI capability model, AI governance, ethics, risk, and responsible, value-driven AI adoption.",
  keywords: "ITIL AI Governance Version 5, ITIL 5 AI certification Hyderabad, AI governance ITIL, responsible AI, ITIL AI capability model, AI risk and ethics, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® AI Governance (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Govern artificial intelligence responsibly within IT service management using ITIL® AI Governance (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® AI Governance (Version 5) Certification Training",
  subtitle: "Adopt, Govern and Scale Artificial Intelligence Responsibly Across Digital Services",
  breadcrumbTitle: "ITIL® AI Governance (Version 5)",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® AI Governance (Version 5) helps organisations adopt, govern, and scale artificial intelligence responsibly within their products, services, and ways of working.",
    "As AI becomes native to service management, this module provides a structured approach to governing AI — balancing innovation and value creation with accountability, ethics, risk management, and regulatory compliance.",
    "Participants learn to apply the ITIL AI capability model, establish AI governance structures, manage the risks and biases associated with AI, and embed responsible, trustworthy AI practices across the product and service lifecycle.",
  ],
  whyHead: "Why Choose ITIL® AI Governance (Version 5)?",
  why: [
    "Understand how AI is applied across modern service management",
    "Apply the ITIL AI capability model to assess and grow AI maturity",
    "Establish effective AI governance and accountability structures",
    "Manage AI-related risk, bias, and ethical considerations",
    "Align AI adoption with regulation, trust, and sustainability",
    "Lead responsible, value-driven AI transformation",
  ],
  prerequisites: [
    "Any ITIL 4 certification, OR",
    "ITIL Foundation (Version 5), OR",
    "ITIL Foundation Bridge (Version 5)",
    "A general awareness of AI concepts is helpful but not required.",
  ],
  whoShouldAttend: [
    "IT Service Managers",
    "AI Governance and Ethics Leads",
    "Digital Transformation Leaders",
    "Risk, Compliance and Security Managers",
    "Product and Service Owners",
    "Enterprise and Data Architects",
    "IT Operations and Automation Leads",
    "Consultants advising on AI adoption",
  ],
  curriculum: [
    {
      title: "Module 1: AI in Service Management",
      topics: ["Key AI concepts (Generative AI, Agentic AI, automation)", "How AI is applied across the service lifecycle", "Opportunities, limitations, and expectations"],
    },
    {
      title: "Module 2: The ITIL AI Capability Model",
      topics: ["Dimensions of AI capability and maturity", "Assessing current AI readiness", "Building a roadmap for AI capability growth"],
    },
    {
      title: "Module 3: AI Governance Foundations",
      topics: ["Purpose and principles of AI governance", "Governance structures, roles, and decision rights", "Policies, standards, and controls for AI"],
    },
    {
      title: "Module 4: AI Risk, Ethics and Trust",
      topics: ["Identifying and managing AI risk and bias", "Ethical, responsible, and explainable AI", "Data privacy, security, and trustworthiness"],
    },
    {
      title: "Module 5: Regulation, Compliance and Sustainability",
      topics: ["Navigating the evolving AI regulatory landscape", "Compliance and auditability of AI systems", "Sustainable and human-centred AI adoption"],
    },
    {
      title: "Module 6: Operationalising Responsible AI",
      topics: ["Embedding AI governance into value streams", "Monitoring, observability, and continual improvement of AI", "Measuring the value and impact of AI"],
    },
  ],
  learningOutcomes: [
    "Explain how AI is applied within modern service management",
    "Apply the ITIL AI capability model to assess AI maturity",
    "Design and implement effective AI governance structures",
    "Identify and manage AI-related risk, bias, and ethical concerns",
    "Align AI adoption with regulation, trust, and sustainability",
    "Prepare confidently for the ITIL AI Governance (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® AI Governance (Version 5)" },
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
    "Focused on the latest AI-native ITIL practices",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world AI governance and risk scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
};

export default function ITILAIGovernanceV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
