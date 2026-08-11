import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "AI-Empowered SAFe® Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Advance your Scrum Master expertise to coach high-performing teams and Agile Release Trains. AI-Empowered SAFe® SASM covers Lean-Agile leadership at scale, flow optimization, program execution, anti-patterns, and AI-empowered facilitation. SASM certification included.",
  keywords: "SAFe Advanced Scrum Master training Hyderabad, SASM certification, AI-Empowered SAFe, flow optimization, ART performance, Agile coaching, QuickLearn Systems",
  openGraph: {
    title: "AI-Empowered SAFe® Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Advance your Scrum Master expertise to coach high-performing teams and Agile Release Trains.",
    images: ["/safe_advanced_scrum_master.jpg"],
  },
};

const courseData = {
  title: "AI-Empowered SAFe® Advanced Scrum Master (SASM) Certification Training",
  subtitle: "Advance Your Scrum Master Expertise to Coach High-Performing Teams and Agile Release Trains",
  breadcrumbTitle: "AI-Empowered SAFe® Advanced Scrum Master 6",
  backgroundImage: "/safe_advanced_scrum_master.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "The AI-Empowered SAFe® Advanced Scrum Master (SASM) course is designed for experienced Scrum Masters who want to strengthen their coaching, facilitation, leadership, and Agile scaling skills in a SAFe® environment.",
    "This advanced-level course builds on the Scrum Master role and focuses on improving team and Agile Release Train (ART) performance, optimizing flow, resolving conflicts, coaching high-performing teams, and supporting program execution at scale.",
    "The course also introduces practical AI skills that help Scrum Masters use AI-powered tools for facilitation, collaboration, decision-making, flow improvement, and continuous improvement while following responsible AI practices. Upon successful completion, participants earn the globally recognized AI-Empowered SAFe® Advanced Scrum Master (SASM) certification.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Grow beyond the basic Scrum Master role",
    "Learn how to support teams and Agile Release Trains in SAFe®",
    "Improve flow, collaboration, and delivery performance",
    "Build stronger coaching and facilitation skills",
    "Learn practical ways to use AI in Agile work",
    "Prepare for a globally recognized advanced SAFe® certification",
  ],
  prerequisites: [
    "All professionals are welcome to attend. The following are highly recommended:",
    "SAFe® Scrum Master (SSM), Professional Scrum Master™ (PSM), or Certified ScrumMaster® (CSM) certification.",
    "At least one year of Scrum Master experience, and experience working within Agile Release Trains (ARTs) or scaled Agile environments.",
  ],
  whoShouldAttend: [
    "Scrum Masters and Senior Scrum Masters",
    "Agile Coaches and Team Coaches",
    "Release Train Engineers (RTEs)",
    "Program Managers and Project Managers",
    "Engineering Managers",
    "Agile Transformation Leaders",
    "SAFe® Practitioners seeking advanced coaching skills",
  ],
  curriculum: [
    {
      title: "Module 1: The Role of the Advanced Scrum Master",
      topics: ["Evolving beyond traditional Scrum Master responsibilities", "Servant leadership at scale", "Advanced facilitation techniques", "Coaching individuals, teams, and stakeholders", "Supporting Business Agility"],
    },
    {
      title: "Module 2: Applying SAFe® Principles in a Multi-Team Environment",
      topics: ["Lean-Agile leadership practices", "Systems thinking", "Enabling collaboration across teams", "Facilitating value delivery at scale", "Supporting Agile Release Trains (ARTs)"],
    },
    {
      title: "Module 3: Optimizing Flow",
      topics: ["Understanding flow metrics", "Identifying bottlenecks and delays", "Applying Kanban practices", "Managing Work in Progress (WIP)", "Improving predictability and delivery performance"],
    },
    {
      title: "Module 4: Facilitating Program Execution",
      topics: ["Supporting Program Increment (PI) execution", "Managing dependencies across teams", "Facilitating collaboration across the ART", "Enhancing transparency and alignment", "Driving continuous value delivery"],
    },
    {
      title: "Module 5: Addressing Agile and Scrum Anti-Patterns",
      topics: ["Identifying common anti-patterns", "Diagnosing organizational impediments", "Resolving team dysfunctions", "Improving Agile maturity", "Coaching teams toward sustainable practices"],
    },
    {
      title: "Module 6: Building High-Performing Teams",
      topics: ["Team dynamics and team development", "Psychological safety", "Conflict resolution and collaboration", "Coaching for accountability and ownership", "Developing resilient Agile teams"],
    },
    {
      title: "Module 7: Improving ART Performance",
      topics: ["Inspect and Adapt (I&A)", "Problem-solving workshops", "Continuous improvement techniques", "Measuring outcomes and value delivery", "Facilitating relentless improvement"],
    },
    {
      title: "Module 8: AI-Empowered Scrum Master Practices",
      topics: ["Foundations of Artificial Intelligence", "AI-assisted facilitation and coaching", "AI-powered meeting preparation and summaries", "Leveraging AI for flow insights and metrics", "AI-enabled collaboration and knowledge management", "Responsible and ethical use of AI in Agile environments"],
    },
  ],
  learningOutcomes: [
    "Apply advanced Scrum Master skills within a SAFe® enterprise",
    "Coach teams and stakeholders more effectively",
    "Facilitate collaboration across multiple Agile teams",
    "Optimize workflow using Kanban and flow-based practices",
    "Identify and address Agile and Scrum anti-patterns",
    "Build and sustain high-performing teams",
    "Improve ART performance through continuous improvement practices",
    "Facilitate Program Increment execution and value delivery",
    "Apply AI-powered tools to support facilitation, coaching, and decision-making",
    "Promote responsible AI adoption within Agile organizations",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "AI-Empowered SAFe® Advanced Scrum Master (SASM)" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "60" },
    { label: "Duration", value: "120 Minutes" },
    { label: "Passing Score", value: "80%" },
    { label: "Delivery", value: "Web-Based" },
    { label: "Language", value: "English" },
    { label: "Exam Access", value: "Available through SAFe Studio™ following course completion" },
    { label: "Attempts Included", value: "First two attempts if taken within 60 days of course completion" },
    { label: "Validity", value: "Annual renewal through Scaled Agile" },
  ],
  courseHighlights: [
    "Advanced SAFe® Scrum Master training",
    "AI-powered facilitation and coaching techniques",
    "Flow optimization and Kanban practices",
    "Support for Program Increment (PI) execution",
    "Team coaching and conflict resolution",
    "Continuous improvement practices",
    "Responsible use of AI in Agile environments",
    "Certification exam preparation",
  ],
  faq: [
    {
      q: "Do I need to be a certified Scrum Master to attend?",
      a: "All professionals are welcome, but a SAFe® Scrum Master (SSM), PSM, or CSM certification plus about a year of Scrum Master experience is highly recommended.",
    },
    {
      q: "Is the certification exam included?",
      a: "Yes. The SASM exam is accessed via SAFe Studio™ after the course, and the first two attempts are included if taken within 60 days.",
    },
    {
      q: "What is the exam format?",
      a: "60 multiple-choice questions in 120 minutes, web-based, with an 80% pass mark.",
    },
    {
      q: "How long is the certification valid?",
      a: "SAFe certifications are renewed annually through Scaled Agile.",
    },
  ],
  disclaimer:
    "SAFe®, Scaled Agile Framework®, SAFe Scrum Master®, SAFe Advanced Scrum Master®, SASM®, and all related trademarks are the property of Scaled Agile, Inc. Any potential trademark or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function SAFeAdvancedScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
