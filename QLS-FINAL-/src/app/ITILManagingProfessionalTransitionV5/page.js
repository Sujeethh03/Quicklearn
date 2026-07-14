import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Managing Professional Transition (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Upgrade your ITIL Managing Professional or Master credential to Version 5 with a single, clear learning path. Expert-led transition training covering the product and service lifecycle, experience-led design, AI, and the ITIL Transformation Model.",
  keywords: "ITIL Managing Professional Transition Version 5, ITIL 5 transition certification Hyderabad, ITIL upgrade to Version 5, ITIL MP transition, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Managing Professional Transition (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Upgrade your ITIL Managing Professional or Master credential to Version 5 with a single, clear learning path.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Managing Professional Transition (Version 5) Certification Training",
  subtitle: "Upgrade Your ITIL Expertise to Version 5 Through a Single Learning Path",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "Designed for experienced ITIL professionals, the ITIL® Managing Professional Transition (Version 5) module enables you to quickly and cost-efficiently upgrade to the latest version of ITIL through a single, clear learning path.",
    "The course consolidates the key new and changed concepts of Version 5 — including the digital product and service lifecycle, experience-led design, AI, and the ITIL Transformation Model — so you can refresh your expertise without repeating full lower-level modules.",
    "Eligibility is restricted to ITIL 4 Managing Professionals, ITIL 4 Masters, ITIL v3 Experts, and ITIL v3 Masters, making this the efficient route for senior practitioners to stay current.",
  ],
  whyHead: "Why Choose ITIL® Managing Professional Transition (Version 5)?",
  why: [
    "Upgrade to ITIL Version 5 through a single, streamlined learning path",
    "Refresh only the new and changed Version 5 concepts",
    "Demonstrate capability in AI-enabled service environments",
    "Qualify for senior management positions with updated competencies",
    "Cost- and time-efficient route for experienced ITIL professionals",
    "Globally recognized, up-to-date ITIL credential",
  ],
  prerequisites: [
    "Completion of one ITIL designation: ITIL 4 Managing Professional, ITIL 4 Master, ITIL v3 Expert, or ITIL v3 Master.",
    "Training from an Accredited Training Organization or ITIL Official eLearning.",
    "Successful completion of the transition exam.",
  ],
  whoShouldAttend: [
    "ITIL 4 Managing Professionals",
    "ITIL 4 Masters",
    "ITIL v3 Experts and Masters",
    "Service Managers and Support Managers",
    "IT Operations Managers",
    "Digital Product and Service Delivery Managers",
    "Digital Transformation and Change Managers",
    "Solutions Architects and Practice Owners",
  ],
  curriculum: [
    { title: "Module 1: Digital Product and Service Lifecycle Management", topics: ["Managing digital products and services across the Version 5 lifecycle"] },
    { title: "Module 2: Experience-Led Design and Value Creation", topics: ["Embedding human-centred, experience-led design to create value"] },
    { title: "Module 3: The ITIL Value Chain in Practice", topics: ["Applying the ITIL value chain in real-world scenarios"] },
    { title: "Module 4: AI and Modern Operating Models", topics: ["AI and modern operating models within ITIL Version 5"] },
    { title: "Module 5: The ITIL Transformation Model", topics: ["ITIL Transformation Model concepts and organizational change"] },
  ],
  learningOutcomes: [
    "Upgrade your expertise to ITIL Version 5 standards",
    "Manage digital products and services across the Version 5 lifecycle",
    "Apply experience-led design and the ITIL value chain in practice",
    "Demonstrate capability in AI-enabled service environments",
    "Understand the ITIL Transformation Model and organizational change",
    "Qualify for senior management positions with updated competencies",
    "Prepare confidently for the ITIL Managing Professional Transition (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Managing Professional Transition (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (open book)" },
    { label: "Number of Questions", value: "60" },
    { label: "Duration", value: "120 Minutes" },
    { label: "Passing Score", value: "70% (42 out of 60)" },
    { label: "Language", value: "English" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite", value: "ITIL 4 Managing Professional, ITIL 4 Master, ITIL v3 Expert, or ITIL v3 Master" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Single, streamlined transition path to Version 5",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Focused refresh of new and changed Version 5 concepts",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILManagingProfessionalTransitionV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
