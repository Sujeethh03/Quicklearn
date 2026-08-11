import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead organizational improvement, governance, and strategic planning with ITIL® 4 Strategist: Direct, Plan and Improve (DPI). Accredited training covering governance, risk, strategic planning, change management, and continual improvement — a shared module for the ITIL 4 Managing Professional and Strategic Leader designations.",
  keywords: "ITIL 4 DPI training Hyderabad, Direct Plan and Improve certification, ITIL 4 Strategist, ITIL Managing Professional, ITIL Strategic Leader, governance and continual improvement, QuickLearn Systems",
  openGraph: {
    title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead organizational improvement, governance, and strategic planning to drive business agility and continual value creation.",
    images: ["/direct_plan_improve.jpg"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® 4 Strategist: Direct, Plan and Improve (DPI)®, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI) Certification Training",
  subtitle: "Lead Organizational Improvement, Governance, and Strategic Planning to Drive Business Agility and Continual Value Creation",
  breadcrumbTitle: "ITIL® 4 Strategist: Direct, Plan and Improve",
  backgroundImage: "/direct_plan_improve.jpg",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Strategist: Direct, Plan and Improve (DPI) certification equips professionals with the strategic knowledge and practical skills required to establish direction, align organizational objectives, improve governance, and embed a culture of continual improvement across the enterprise.",
    "As a key module in both the ITIL® 4 Managing Professional (MP) and ITIL® 4 Strategic Leader (SL) qualification paths, DPI focuses on creating effective governance models, improving decision-making, managing organizational change, and aligning IT services with business strategy.",
    "Participants will learn how to develop effective strategies, implement governance frameworks, manage risk, define objectives, measure performance, and drive continual improvement initiatives that support long-term organizational success.",
  ],
  whyHead: "Why Choose ITIL® 4 Strategist: Direct, Plan and Improve?",
  why: [
    "Develop strategic leadership capabilities for modern IT organizations",
    "Learn how to align IT services with business objectives",
    "Build effective governance and decision-making frameworks",
    "Drive continual improvement across teams and departments",
    "Strengthen organizational agility and resilience",
    "Improve planning, measurement, and risk management",
    "Progress toward both ITIL® Managing Professional and Strategic Leader designations",
  ],
  prerequisites: [
    "ITIL® 4 Foundation Certificate (or an eligible equivalent recognized within the ITIL qualification scheme).",
    "Recommended: experience in IT service management, leadership, governance, or organizational improvement.",
    "Recommended: familiarity with ITIL concepts and business strategy.",
  ],
  whoShouldAttend: [
    "IT Managers and IT Directors",
    "Service Management Professionals",
    "CIOs and Senior IT Leaders",
    "Digital Transformation Managers",
    "PMO Managers",
    "Governance and Compliance Managers",
    "Continual Improvement and Quality Managers",
    "Business Relationship Managers and Enterprise Architects",
    "IT Consultants",
    "Professionals pursuing the ITIL® Managing Professional or Strategic Leader designation",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to Direct, Plan and Improve",
      topics: ["Purpose and objectives of the DPI module", "Strategic role of IT service management", "Organizational direction and alignment", "Business value and governance", "Digital transformation challenges"],
    },
    {
      title: "Module 2: Governance, Risk and Compliance",
      topics: ["Governance principles", "Decision-making structures", "Risk identification and management", "Compliance considerations", "Policy development and oversight", "Organizational accountability"],
    },
    {
      title: "Module 3: Strategic Planning",
      topics: ["Developing strategic objectives", "Aligning IT with business priorities", "Portfolio planning", "Resource planning", "Prioritization techniques", "Strategic roadmaps"],
    },
    {
      title: "Module 4: Organizational Change Management",
      topics: ["Managing organizational change", "Change adoption strategies", "Building a culture of continuous learning", "Leadership communication", "Stakeholder engagement", "Managing resistance to change"],
    },
    {
      title: "Module 5: Continual Improvement",
      topics: ["Establishing continual improvement practices", "Improvement models and frameworks", "Identifying improvement opportunities", "Measuring outcomes", "Embedding improvement into organizational culture"],
    },
    {
      title: "Module 6: Measurement and Performance Management",
      topics: ["Defining Key Performance Indicators (KPIs)", "Success metrics", "Balanced scorecards", "Performance reporting", "Data-driven decision making", "Service value measurement"],
    },
    {
      title: "Module 7: Communication and Stakeholder Engagement",
      topics: ["Leadership communication", "Stakeholder management", "Collaboration across business units", "Influencing organizational decisions", "Building strategic partnerships"],
    },
    {
      title: "Module 8: Workforce and Organizational Capability",
      topics: ["Developing organizational capabilities", "Skills management", "Talent development", "Leadership competencies", "Building high-performing teams", "Knowledge sharing"],
    },
    {
      title: "Module 9: Integrating Modern Ways of Working",
      topics: ["Agile planning", "Lean thinking", "DevOps collaboration", "Digital operating models", "Innovation management", "Organizational adaptability"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["Governance implementation scenarios", "Continual improvement workshops", "Strategic planning exercises", "Organizational transformation case studies", "Performance improvement planning"],
    },
  ],
  learningOutcomes: [
    "Apply governance principles to IT service management",
    "Develop strategic plans aligned with business objectives",
    "Lead organizational improvement initiatives",
    "Measure performance using meaningful business metrics",
    "Improve decision-making through effective planning",
    "Build a culture of continual improvement",
    "Support long-term business agility and resilience",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Strategist: Direct, Plan and Improve" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28/40)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Latest ITIL® 4 Strategist syllabus",
    "Governance and strategic planning concepts",
    "Organizational change management practices",
    "Continual improvement framework",
    "Risk, compliance, and performance management",
    "Leadership and communication techniques",
    "Practical workshops and implementation scenarios",
    "Comprehensive certification exam preparation",
  ],
};

export default function ITL4SDPIPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
