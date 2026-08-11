import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner™ II (PSPO II) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Strengthen strategic product leadership with advanced product ownership techniques. Professional Scrum Product Owner™ II (PSPO II) covers product strategy, stakeholder management, Evidence-Based Management, product discovery, and scaling product ownership. Prepare for the PSPO II assessment.",
  keywords: "PSPO II training Hyderabad, Professional Scrum Product Owner II certification, advanced product ownership, Evidence-Based Management, product strategy, Scrum.org, QuickLearn Systems",
  openGraph: {
    title: "Professional Scrum Product Owner™ II (PSPO II) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Strengthen strategic product leadership with advanced product ownership techniques.",
    images: ["/professional_scrum_product_owner_2.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Product Owner™ II (PSPO II) Certification Training",
  subtitle: "Strengthen Strategic Product Leadership with Advanced Product Ownership Techniques",
  breadcrumbTitle: "Professional Scrum Product Owner II (PSPO II)",
  backgroundImage: "/professional_scrum_product_owner_2.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "Professional Scrum Product Owner™ II (PSPO II) is an advanced course for experienced Product Owners seeking to enhance their ability to manage products, maximize value, and drive product strategy in complex environments.",
    "The course emphasizes strategic thinking, stakeholder engagement, evidence-based decision-making, and advanced product management techniques.",
    "Participants will be prepared to take the globally recognized Professional Scrum Product Owner™ II (PSPO II) certification assessment.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Advance your Product Owner skills beyond the fundamentals",
    "Learn how to maximize product value in complex environments",
    "Strengthen your ability to define and communicate product strategy",
    "Improve stakeholder engagement, influence, and negotiation skills",
    "Apply Evidence-Based Management to make better product decisions",
    "Gain practical techniques for product discovery, validation, and learning",
    "Build confidence in leading product initiatives across multiple teams and stakeholders",
  ],
  prerequisites: [
    "Strong understanding of Scrum.",
    "Practical experience working as a Product Owner or in a product leadership role.",
    "PSPO I certification is strongly recommended, along with familiarity with product strategy, stakeholder management, and product metrics.",
  ],
  whoShouldAttend: [
    "Experienced Product Owners",
    "Product Managers",
    "Product Leaders",
    "Portfolio Managers",
    "Business Owners",
    "Agile Leaders",
  ],
  curriculum: [
    {
      title: "Module 1: Advanced Product Ownership",
      topics: ["Product Strategy", "Vision and Outcomes", "Value Optimization", "Product Economics"],
    },
    {
      title: "Module 2: Stakeholder Management",
      topics: ["Stakeholder Engagement", "Negotiation", "Influence", "Managing Expectations"],
    },
    {
      title: "Module 3: Evidence-Based Management",
      topics: ["Key Value Areas", "Product Metrics", "Outcome Measurement", "Experimentation"],
    },
    {
      title: "Module 4: Product Discovery & Validation",
      topics: ["Customer Research", "Hypothesis Testing", "Innovation", "Product Learning"],
    },
    {
      title: "Module 5: Scaling Product Ownership",
      topics: ["Multiple Teams", "Complex Products", "Organizational Alignment", "Strategic Roadmapping"],
    },
  ],
  learningOutcomes: [
    "Drive product strategy effectively",
    "Maximize value delivery",
    "Apply Evidence-Based Management",
    "Influence stakeholders successfully",
    "Validate product assumptions",
    "Lead product initiatives in complex environments",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "Professional Scrum Product Owner™ II (PSPO II)" },
    { label: "Exam Format", value: "Scenario-Based Assessment" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "85%" },
    { label: "Delivery", value: "Online" },
    { label: "Validity", value: "Lifetime certification — no annual renewal fee" },
    { label: "Credential", value: "Free Credly digital credential included" },
  ],
  courseHighlights: [
    "Advanced PSPO II certification training",
    "Focus on product strategy, value optimization, and stakeholder management",
    "Evidence-Based Management and product metrics coverage",
    "Product discovery, experimentation, and validation techniques",
    "Scaling product ownership across multiple teams and complex products",
    "Scenario-based learning and practical exercises",
    "Designed for experienced Product Owners and product leaders",
  ],
  faq: [
    {
      q: "Do I need PSPO I before taking PSPO II?",
      a: "PSPO I is strongly recommended. This advanced course is intended for experienced Product Owners and product leaders.",
    },
    {
      q: "What is the exam format?",
      a: "A scenario-based assessment of 40 questions in 90 minutes, online, with an 85% pass mark.",
    },
    {
      q: "Does the certification expire?",
      a: "No. PSPO II is a lifetime certification with no annual renewal fee, and includes a free Credly digital credential.",
    },
    {
      q: "Who is this course best suited for?",
      a: "Experienced Product Owners, product managers, portfolio managers, and agile leaders operating in complex, multi-team environments.",
    },
  ],
  disclaimer:
    "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function PSPO2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
