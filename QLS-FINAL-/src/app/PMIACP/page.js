import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PMI-ACP® Agile Certified Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Agile practices across Scrum, Kanban, Lean, and XP with PMI-ACP® certification training. Aligned to the latest PMI-ACP® Exam Content Outline (March 2026). Expert-led, exam-focused training with 28 contact hours, mock exams, and application guidance.",
  keywords: "PMI-ACP training Hyderabad, PMI Agile Certified Practitioner certification, Agile certification Hyderabad, Scrum Kanban Lean XP training, PMI-ACP exam preparation, QuickLearn Systems, project management training Hyderabad",
  openGraph: {
    title: "PMI-ACP® Agile Certified Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master Agile practices across multiple frameworks and pass the PMI-ACP® exam with confidence.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "PMI Agile Certified Practitioner (PMI-ACP®) Certification Training",
  subtitle: "Master Agile Practices. Lead High-Performing Teams. Deliver Business Value.",
  breadcrumbTitle: "PMI-ACP®",
  backgroundImage: "/itl4_foundation.png",
  category: "Project & Program Management",
  overview: [
    "The PMI Agile Certified Practitioner (PMI-ACP®) certification from the Project Management Institute (PMI®) is one of the world's most respected Agile certifications. It validates your ability to apply Agile principles, practices, and techniques across multiple Agile approaches, including Scrum, Kanban, Lean, XP, and other adaptive methodologies.",
    "Our PMI-ACP® Certification Training is aligned with the latest PMI-ACP® Examination Content Outline (March 2026) and prepares professionals to lead Agile teams, optimize value delivery, foster Enterprise Agility, and successfully pass the PMI-ACP certification examination.",
    "This instructor-led course combines practical Agile concepts, real-world case studies, hands-on exercises, and exam-focused preparation to help professionals confidently implement Agile practices across projects and organizations.",
  ],
  whyHead: "Why Choose PMI-ACP® Certification?",
  why: [
    "Apply Agile values, principles, and practices across multiple frameworks",
    "Lead Agile teams in dynamic business environments",
    "Deliver customer value through iterative and incremental delivery",
    "Foster collaboration, transparency, and continuous improvement",
    "Improve organizational agility and business outcomes",
    "Support Agile transformations across teams and enterprises",
    "Advance your career as an Agile practitioner and leader",
  ],
  prerequisites: [
    "There are no mandatory prerequisites to attend this training; a basic understanding of Agile concepts is beneficial.",
    "For PMI-ACP® certification eligibility, PMI requires: a secondary diploma (high school, associate degree, or global equivalent) or higher.",
    "28 hours of formal training in Agile practices, frameworks, or methodologies.",
    "Two years of Agile experience within the past five years; OR one year of Agile experience plus a PMI GAC-accredited degree; OR one year of Agile experience plus an active qualifying third-party Agile certification; OR an active PMP® certification.",
  ],
  whoShouldAttend: [
    "Scrum Masters",
    "Agile Coaches",
    "Product Owners and Product Managers",
    "Project Managers and Delivery Managers",
    "Business Analysts",
    "Team Leads",
    "Software Developers and QA Professionals",
    "PMO Professionals",
    "Professionals involved in Agile transformations",
  ],
  curriculum: [
    {
      title: "Module 1: Agile Mindset",
      topics: ["Agile values and principles", "Enterprise Agility", "Customer-centric thinking", "Systems thinking", "Continuous learning and improvement", "Lean thinking and experimentation"],
    },
    {
      title: "Module 2: Agile Leadership",
      topics: ["Servant leadership", "Coaching Agile teams", "Building high-performing teams", "Psychological safety", "Conflict management", "Facilitating collaboration", "Stakeholder engagement"],
    },
    {
      title: "Module 3: Agile Product Management",
      topics: ["Product vision and strategy", "Product backlog management", "Value prioritization", "Customer feedback loops", "Incremental value delivery", "Product metrics and outcomes"],
    },
    {
      title: "Module 4: Agile Delivery",
      topics: ["Scrum Framework", "Kanban practices", "Lean principles", "Extreme Programming (XP)", "Flow optimization", "Adaptive planning", "Agile estimation techniques", "Continuous delivery and improvement"],
    },
    {
      title: "Module 5: Agile Metrics & Value Delivery",
      topics: ["Measuring business outcomes", "Agile performance metrics", "Forecasting and predictability", "Managing risks and dependencies", "Evidence-based decision making"],
    },
    {
      title: "Module 6: Enterprise Agility",
      topics: ["Scaling Agile concepts", "Organizational agility", "Cross-functional collaboration", "Governance in Agile environments", "Change enablement", "Business value realization"],
    },
    {
      title: "Module 7: PMI-ACP® Exam Preparation",
      topics: ["Latest PMI-ACP® exam structure", "Scenario-based practice questions", "Mock examinations", "Exam strategies and techniques", "Application guidance"],
    },
  ],
  learningOutcomes: [
    "Apply Agile principles across multiple frameworks",
    "Build and lead high-performing Agile teams",
    "Foster Enterprise Agility within organizations",
    "Prioritize work based on customer and business value",
    "Improve collaboration among stakeholders and teams",
    "Optimize Agile delivery through continuous improvement",
    "Apply Agile leadership techniques in complex environments",
    "Prepare confidently for the latest PMI-ACP® certification examination",
  ],
  certificationHeading: "PMI-ACP® Exam Information",
  certification: [
    { label: "Certification", value: "PMI Agile Certified Practitioner (PMI-ACP®)" },
    { label: "Exam Provider", value: "Project Management Institute (PMI®)" },
    { label: "Exam Duration", value: "3 Hours" },
    { label: "Questions", value: "120 (100 scored + 20 pretest)" },
    { label: "Question Types", value: "Multiple Choice, Multiple Response, Drag-and-Drop, Matching, Scenario-Based" },
    { label: "Break", value: "One optional 10-minute break" },
    { label: "Delivery", value: "Pearson VUE Test Centre or Online Proctored" },
    { label: "Exam Domains", value: "Mindset 28%, Leadership 25%, Product 19%, Delivery 28%" },
  ],
  courseHighlights: [
    "Aligned with the Latest PMI-ACP® Exam Content Outline (March 2026)",
    "Covers Scrum, Kanban, Lean, XP, and Enterprise Agility concepts",
    "28 Contact Hours Certificate",
    "Instructor-led Live Training",
    "Real-world Agile case studies",
    "Practice questions and mock exams",
    "PMI-ACP® application guidance",
    "Comprehensive course material and post-training mentor support",
  ],
  faq: [
    {
      q: "Am I eligible to sit the PMI-ACP® exam?",
      a: "PMI requires a secondary diploma or higher, 28 hours of Agile training (which this course provides), and qualifying Agile experience — or an active PMP® certification. We provide full application guidance during the course.",
    },
    {
      q: "Which Agile frameworks does the course cover?",
      a: "The course covers Scrum, Kanban, Lean, and Extreme Programming (XP), along with Enterprise Agility concepts — reflecting PMI-ACP's multi-framework approach.",
    },
    {
      q: "Is this course aligned with the latest exam?",
      a: "Yes. It is aligned with the latest PMI-ACP® Examination Content Outline (March 2026), including the current domain weightings and question types.",
    },
    {
      q: "Do I get the 28 contact hours certificate?",
      a: "Yes. On completing the training you receive a 28 contact hours certificate, which satisfies PMI's formal training requirement for the exam.",
    },
  ],
  disclaimer:
    "PMI®, PMI-ACP®, Agile Certified Practitioner®, PMP®, PMBOK®, and all related trademarks are the property of the Project Management Institute, Inc. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function PMIACPPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
