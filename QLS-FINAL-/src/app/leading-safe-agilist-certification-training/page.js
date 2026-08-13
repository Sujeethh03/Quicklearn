import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/leading-safe-agilist-certification-training" },
  title: "AI-Empowered SAFe® Agilist (SA) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead enterprise Agile transformation with SAFe® and AI-powered decision making. AI-Empowered Leading SAFe® 6.0 covers Business Agility, Lean-Agile principles, ARTs, PI Planning, Lean Portfolio Management, and AI-enabled Agile practices. SAFe® Agilist (SA) certification included.",
  keywords: "Leading SAFe training Hyderabad, SAFe Agilist certification, AI-Empowered SAFe 6.0, SAFe transformation, Business Agility, PI Planning, Lean Portfolio Management, QuickLearn Systems",
  openGraph: {
    title: "AI-Empowered SAFe® Agilist (SA) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead enterprise Agile transformation with SAFe® and AI-powered decision making.",
    images: ["/leading_safe_agilist.jpg"],
  },
};

const courseData = {
  "disclaimer": "SAFe®, Scaled Agile Framework®, SAFe Agilist®, Product Owner/Product Manager®, and all related trademarks are the property of Scaled Agile, Inc. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "AI-Empowered SAFe® Agilist (SA) 6.0 Certification Training",
  subtitle: "Lead Enterprise Agile Transformation with SAFe® and AI-Powered Decision Making",
  breadcrumbTitle: "AI-Empowered SAFe® Agilist 6",
  backgroundImage: "/leading_safe_agilist.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "The AI-Empowered Leading SAFe® 6.0 course helps participants learn how to lead a Lean-Agile transformation using the Scaled Agile Framework® (SAFe®).",
    "In this two-day interactive course, participants learn how to build Business Agility, align teams around value, and apply Agile practices at enterprise scale. The course also introduces AI-enabled tools and techniques that support planning, collaboration, decision-making, and continuous improvement.",
    "After completing the course and certification exam, participants earn the globally recognized SAFe® AI-Empowered SAFe Agilist (SA) certification.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Learn how to lead Agile transformation at scale",
    "Understand SAFe® principles, values, and practices",
    "See how AI can support planning and decision-making",
    "Improve team alignment and value delivery",
    "Build skills for Business Agility",
    "Prepare for the SAFe® Agilist certification",
    "Strengthen your Agile leadership skills",
  ],
  prerequisites: [
    "There are no mandatory prerequisites to attend this course.",
    "Recommended: more than 3 years of experience in software development, testing, business analysis, project management, product management, or related fields.",
    "Recommended: familiarity with Agile principles and practices, and a basic understanding of Scrum, Kanban, or Lean concepts.",
  ],
  whoShouldAttend: [
    "Executives and Senior Leaders",
    "Business and Technology Managers",
    "Program Managers and Project Managers",
    "Product Managers and Product Owners",
    "Scrum Masters and Agile Coaches",
    "Release Train Engineers (RTEs)",
    "Architects and Business Analysts",
    "Change Agents and Transformation Leaders",
    "Anyone involved in scaling Agile practices across the enterprise",
  ],
  curriculum: [
    {
      title: "Module 1: Adapting and Thriving with SAFe®",
      topics: ["Thrive in the age of disruption", "Understand Business Agility", "SAFe® as an operating system for Business Agility", "Seven Core Competencies of Business Agility"],
    },
    {
      title: "Module 2: Building a Foundation with Mindset, Values, and Principles",
      topics: ["Lean-Agile Mindset", "SAFe® Core Values", "SAFe® Lean-Agile Principles", "Empowering Agility with AI"],
    },
    {
      title: "Module 3: Establishing Team and Technical Agility",
      topics: ["Cross-functional Agile Teams", "Built-in Quality", "Organizing around value", "Agile Release Trains (ARTs)"],
    },
    {
      title: "Module 4: Building Solutions with Agile Product Delivery",
      topics: ["Customer-centric culture", "Design Thinking", "Program Backlog and WSJF prioritization", "Program Increment (PI) Planning", "Develop on Cadence, Release on Demand", "Continuous Delivery Pipeline and DevOps"],
    },
    {
      title: "Module 5: Exploring Lean Portfolio Management",
      topics: ["Strategy and execution alignment", "Strategic Themes", "Portfolio Canvas", "Epic Hypothesis Statements", "Lean Budgeting", "Portfolio Kanban"],
    },
    {
      title: "Module 6: Leading the Change",
      topics: ["Leading by example", "Leading Lean-Agile transformation", "SAFe® Implementation Roadmap", "Sustaining Business Agility"],
    },
    {
      title: "Module 7: AI-Empowered SAFe® Practices",
      topics: ["AI-assisted planning and forecasting", "AI-enabled decision support", "AI-enhanced collaboration and productivity", "Applying AI responsibly within Agile environments", "Leveraging AI to improve flow, insights, and value delivery"],
    },
  ],
  learningOutcomes: [
    "Apply the Lean-Agile mindset, values, and principles of SAFe®",
    "Explain how SAFe® enables Business Agility",
    "Align teams, programs, and portfolios around value delivery",
    "Participate effectively in Program Increment (PI) Planning",
    "Organize and support Agile Release Trains (ARTs)",
    "Apply customer-centricity and Design Thinking practices",
    "Align strategy and execution using Lean Portfolio Management",
    "Lead and support enterprise Agile transformations",
    "Utilize AI-enabled practices to improve planning, collaboration, and decision-making",
    "Drive continuous improvement and sustainable business outcomes",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "SAFe® AI-Empowered SAFe Agilist (SA)" },
    { label: "Exam Format", value: "Multiple Choice, Single Select" },
    { label: "Number of Questions", value: "45" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "80%" },
    { label: "Delivery", value: "Web-Based, Closed Book, No Outside Assistance" },
    { label: "Exam Access", value: "Available through SAFe Studio™ after course completion" },
    { label: "Attempts Included", value: "First two attempts if taken within 60 days of course completion" },
    { label: "Validity", value: "Annual renewal through Scaled Agile" },
  ],
  courseHighlights: [
    "2-day instructor-led training",
    "Based on SAFe® 6.0",
    "Simple and interactive learning",
    "Real-world examples and discussions",
    "Covers Business Agility and Lean-Agile basics",
    "Includes PI Planning and ART concepts",
    "Introduces Lean Portfolio Management",
    "Covers AI-enabled Agile practices",
    "Exam preparation support",
  ],
  faq: [
    {
      q: "Are there prerequisites to attend?",
      a: "There are no mandatory prerequisites. More than 3 years of experience in software/product roles and familiarity with Agile, Scrum, Kanban, or Lean are recommended.",
    },
    {
      q: "Is the certification exam included?",
      a: "Yes. The SAFe® Agilist (SA) exam is accessed through SAFe Studio™ after the course, and the first two attempts are included if taken within 60 days of course completion.",
    },
    {
      q: "What is the exam format?",
      a: "45 multiple-choice (single select) questions in 90 minutes, web-based and closed book, with an 80% pass mark.",
    },
    {
      q: "Does the certification expire?",
      a: "SAFe certifications are renewed annually through Scaled Agile.",
    },
  ],
  disclaimer:
    "SAFe®, Scaled Agile Framework®, SAFe Agilist®, and all related trademarks are the property of Scaled Agile, Inc. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function LeadingSAFeAgilistPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
