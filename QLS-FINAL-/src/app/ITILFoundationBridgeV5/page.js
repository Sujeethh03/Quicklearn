import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Foundation Bridge (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Upgrade your existing ITIL 4 knowledge to the latest ITIL® Foundation (Version 5) framework. Expert-led bridge training covering the new, changed, and expanded Version 5 concepts, AI-native practices, and exam preparation.",
  keywords: "ITIL Foundation Bridge Version 5, ITIL 4 to Version 5 bridge, ITIL bridge certification Hyderabad, ITIL Version 5 upgrade training, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Foundation Bridge (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Upgrade your existing ITIL 4 knowledge to the latest ITIL® Foundation (Version 5) framework.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Foundation Bridge (Version 5) Certification Training",
  subtitle: "Upgrade Your ITIL 4 Knowledge to the Latest Version 5 Framework",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Foundation Bridge (Version 5) introduces the key concepts of digital product and service management and establishes a common language for effective practice across organizations. The course provides an overview of the ITIL Version 5 framework, including updates to core models and fundamental concepts for creating, delivering, and improving products and services.",
    "The bridge enables candidates to build on their existing ITIL 4 knowledge and understand how value can be co-created through the effective management of products and services. It explains how ITIL has evolved to support modern technologies, data-driven decision-making, automation, artificial intelligence, and contemporary ways of working.",
    "This bridge syllabus focuses exclusively on the new, changed, and expanded concepts introduced in Version 5 and does not reassess topics that remain unchanged from ITIL 4 Foundation — making it a fast, efficient route to the latest certification.",
  ],
  whyHead: "Why Choose ITIL® Foundation Bridge (Version 5)?",
  why: [
    "Rapidly update your knowledge with only the key Version 5 enhancements",
    "Avoid revisiting the full ITIL Foundation syllabus",
    "Confidently interpret and apply Version 5 guidance",
    "Strengthen your understanding of AI-enabled digital product and service management",
    "Prepare for the official ITIL Foundation Bridge (Version 5) certification exam",
    "Efficient, focused path to the latest globally recognized ITIL credential",
  ],
  prerequisites: [
    "A valid ITIL® 4 Foundation certification is mandatory.",
    "Alternatively, any ITIL 4 higher-level certification (except Cloud and Sustainability) is accepted.",
  ],
  whoShouldAttend: [
    "Professionals who hold ITIL® 4 Foundation certification",
    "Holders of any ITIL 4 higher-level certification wishing to transition to Version 5",
    "IT service management practitioners keeping their skills current",
    "Anyone wanting to upgrade to the latest ITIL framework efficiently",
  ],
  curriculum: [
    {
      title: "Module 1: Key ITIL Terms and Definitions",
      topics: ["Product and service management", "Service offerings", "Value co-creation", "Service relationships"],
    },
    {
      title: "Module 2: The Four Dimensions of Product and Service Management",
      topics: ["Introduction to the ITIL Four Dimensions", "Internal factors", "External factors"],
    },
    {
      title: "Module 3: The ITIL Product and Service Lifecycle",
      topics: ["Introduction to the product and service lifecycle", "Purpose and scope of lifecycle activities"],
    },
    {
      title: "Module 4: The ITIL Value System",
      topics: [
        "Components of the ITIL Value System",
        "The ITIL guiding principles",
        "Governance",
        "Value chain",
        "Management practices",
        "The ITIL Continual Improvement Model",
      ],
    },
    {
      title: "Module 5: Value Stream Identification, Mapping, and Management",
      topics: ["Key concepts of value stream mapping and management", "Purpose of value stream mapping and management"],
    },
    {
      title: "Module 6: ITIL and AI",
      topics: ["Introduction to AI", "ITIL AI governance"],
    },
    {
      title: "Module 7: ITIL and Other Frameworks",
      topics: ["ITIL and DevOps", "ITIL and PRINCE2"],
    },
  ],
  learningOutcomes: [
    "Understand the key Version 5 enhancements to the ITIL framework",
    "Explain how value is co-created through product and service management",
    "Apply the updated ITIL value system and guiding principles",
    "Recognize how ITIL supports AI-enabled, data-driven ways of working",
    "Understand value stream mapping and management in Version 5",
    "Prepare confidently for the ITIL Foundation Bridge (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Foundation (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (closed book)" },
    { label: "Number of Questions", value: "20" },
    { label: "Duration", value: "30 Minutes (25% additional time if English is not your native language)" },
    { label: "Passing Score", value: "65% (typically 13 out of 20)" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite for Exam", value: "Valid ITIL® 4 Foundation or higher-level ITIL 4 certification" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Focused bridge syllabus — only the new and changed Version 5 content",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Comprehensive course material and practice questions",
    "Exam preparation guidance",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILFoundationBridgeV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
