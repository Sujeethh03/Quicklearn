import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Experience (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Embed human-centred and AI-aware design into digital products and services with ITIL® Experience (Version 5). Expert-led training on trust, perception, experience capture, and continual experience improvement.",
  keywords: "ITIL Experience Version 5, ITIL 5 experience certification Hyderabad, human-centred design ITIL, digital experience management, ITIL managing professional, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Experience (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Embed human-centred and AI-aware design into digital products and services with ITIL® Experience (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Experience (Version 5) Certification Training",
  subtitle: "Design Trust, Perception, and Value into Every Digital Experience",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Experience (Version 5) provides expertise in embedding human-centred and AI-aware design into digital products and services, aligning trust, perception, and value across the lifecycle.",
    "The course explores experience as a human response — anticipation, perception, and evaluation — and how engagement, trust, and value are co-created over time across service journeys.",
    "Participants learn to capture and interpret experience evidence, embed transparency and psychological safety into digital interactions, and apply the ITIL Continual Improvement Model to continually improve experience in AI-enabled contexts.",
  ],
  whyHead: "Why Choose ITIL® Experience (Version 5)?",
  why: [
    "Embed human-centred design into digital products and services",
    "Understand experience as a human response across service journeys",
    "Capture and interpret experience evidence with confidence",
    "Design for trust, transparency, and psychological safety",
    "Apply the ITIL Continual Improvement Model to experience",
    "Understand AI's impact on trust, perception, and digital ethics",
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
    "Customer Experience Leads",
    "Digital Experience Managers",
    "Transformation Leads",
    "AI Governance Leads",
  ],
  curriculum: [
    {
      title: "Module 1: Experience as a Human Response",
      topics: ["Anticipation, perception, and evaluation", "Engagement, trust, and value co-creation over time"],
    },
    {
      title: "Module 2: Digital Experience and Its Value",
      topics: ["Understanding digital experience through feelings, thoughts, and bodily responses", "Importance for value and trust"],
    },
    {
      title: "Module 3: Stakeholder Perspectives",
      topics: ["User, customer, consumer, and provider roles", "Needs and tensions shaping experience in real journeys"],
    },
    {
      title: "Module 4: Experience in the Lifecycle",
      topics: ["Service journeys and experience moments", "Functional and relational interactions across lifecycle stages"],
    },
    {
      title: "Module 5: Experience Drivers",
      topics: ["The Four Dimensions of Product and Service Management", "Organizations/people, information/technology, partners/suppliers, value streams/processes"],
    },
    {
      title: "Module 6: Experience Capture",
      topics: ["Experience capture and domains", "Metrics as hypotheses reflecting partial human experience"],
    },
    {
      title: "Module 7: Trustworthiness and Coherence",
      topics: ["Evaluation criteria for experience evidence"],
    },
    {
      title: "Module 8: Continual Experience Improvement",
      topics: ["Notice–interpret–hypothesize–experiment approach", "Applying the ITIL Continual Improvement Model"],
    },
    {
      title: "Module 9: AI and Experience",
      topics: ["AI's impact on trust, perception, and experience", "AI governance and digital ethics"],
    },
  ],
  learningOutcomes: [
    "Organize roles, responsibilities, and accountability for experience across stakeholders",
    "Work with experience capture and both narrative and numerical signals",
    "Make evidence-informed experience decisions",
    "Embed transparency and psychological safety into digital interactions",
    "Apply the ITIL Continual Improvement Model to experience",
    "Understand AI's influence on trust, perception, and digital ethics",
    "Prepare confidently for the ITIL Experience (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Experience (Version 5)" },
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
    "Human-centred and AI-aware design focus",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world experience design scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILExperienceV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
