import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "AI-Empowered SAFe® Scrum Master (SSM) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Empower Agile teams with SAFe®, servant leadership, and AI-enhanced delivery. AI-Empowered SAFe® Scrum Master 6.0 covers the Scrum Master role in SAFe, PI Planning, iteration execution, team coaching, and AI-empowered facilitation. SAFe® Scrum Master (SSM) certification included.",
  keywords: "SAFe Scrum Master training Hyderabad, SSM certification, AI-Empowered SAFe 6.0, PI Planning, Agile team facilitation, servant leadership, QuickLearn Systems",
  openGraph: {
    title: "AI-Empowered SAFe® Scrum Master (SSM) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Empower Agile teams with SAFe®, servant leadership, and AI-enhanced delivery.",
    images: ["/safe_scrum_master.jpg"],
  },
};

const courseData = {
  title: "AI-Empowered SAFe® Scrum Master (SSM) 6.0 Certification Training",
  subtitle: "Empower Agile Teams with SAFe®, Servant Leadership, and AI-Enhanced Delivery",
  breadcrumbTitle: "AI-Empowered SAFe® Scrum Master 6",
  backgroundImage: "/safe_scrum_master.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "The AI-Empowered SAFe® Scrum Master (SSM) 6.0 course equips professionals with the knowledge and practical skills needed to perform the Scrum Master role within a SAFe® enterprise.",
    "This interactive training focuses on facilitating Agile team effectiveness, supporting Agile Release Trains (ARTs), enabling Program Increment (PI) Planning, coaching high-performing teams, and fostering continuous improvement. Participants learn how Scrum Masters support team agility, collaboration, and value delivery while aligning execution with organizational objectives.",
    "The course also explores AI-enabled practices and tools that can assist Scrum Masters in planning, facilitation, collaboration, workflow visibility, and continuous improvement within modern Agile organizations. Upon successful completion, participants earn the globally recognized SAFe® Scrum Master (SSM) certification.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Learn the Scrum Master role in a SAFe environment",
    "Understand how to support Agile teams and PI Planning",
    "Improve team collaboration and delivery",
    "Learn simple ways to use AI in Agile work",
    "Prepare for the SAFe® Scrum Master certification exam",
    "Build skills that are useful for Agile careers",
  ],
  prerequisites: [
    "There are no mandatory prerequisites for attending this course.",
    "Recommended: familiarity with Agile principles and practices.",
    "Recommended: basic understanding of Scrum, Kanban, or Lean methodologies; experience working in Agile teams is beneficial but not required.",
  ],
  whoShouldAttend: [
    "Scrum Masters and Team Leads",
    "Agile Coaches",
    "Project Managers and Program Managers",
    "Release Train Engineers (RTEs)",
    "Product Owners",
    "Developers and Team Members",
    "Engineering Managers",
    "Anyone supporting Agile teams in a SAFe environment",
  ],
  curriculum: [
    {
      title: "Module 1: Introducing Scrum in SAFe®",
      topics: ["Understanding SAFe® and Business Agility", "Agile and Scrum fundamentals", "The role of Agile teams in a SAFe enterprise", "Scrum fundamentals within SAFe", "Team and Technical Agility", "DevOps and Release on Demand"],
    },
    {
      title: "Module 2: Characterizing the Role of the Scrum Master",
      topics: ["Scrum Master responsibilities", "Servant leadership", "Coaching Agile teams", "Facilitating team effectiveness", "Supporting continuous improvement", "Enabling collaboration across the organization"],
    },
    {
      title: "Module 3: Experiencing Program Increment (PI) Planning",
      topics: ["Purpose and benefits of PI Planning", "Preparing teams for PI Planning", "Facilitating team breakout sessions", "Managing dependencies and risks", "Establishing PI Objectives", "Supporting alignment across Agile Release Trains"],
    },
    {
      title: "Module 4: Facilitating Iteration Execution",
      topics: ["Iteration Planning", "Team Sync events", "Backlog refinement", "Iteration Reviews", "Retrospectives", "Managing flow and removing impediments"],
    },
    {
      title: "Module 5: Finishing the Program Increment",
      topics: ["System Demo participation", "Inspect & Adapt workshop", "Measuring outcomes and progress", "Problem-solving workshops", "Continuous improvement practices"],
    },
    {
      title: "Module 6: Coaching the Agile Team",
      topics: ["Developing high-performing teams", "Coaching Agile team members", "Resolving conflicts", "Building psychological safety", "Supporting self-management and accountability", "Facilitating effective collaboration"],
    },
    {
      title: "Module 7: AI-Empowered Agile Facilitation",
      topics: ["Using AI tools to support planning and facilitation", "AI-assisted meeting preparation and summarization", "Leveraging AI for workflow visibility and insights", "Improving team collaboration through AI-enabled tools", "Responsible and ethical use of AI in Agile environments"],
    },
  ],
  learningOutcomes: [
    "Describe the Scrum Master role within a SAFe enterprise",
    "Apply SAFe principles to support Agile teams and Agile Release Trains",
    "Facilitate Program Increment (PI) Planning and Iteration events",
    "Coach Agile teams toward high performance",
    "Support continuous improvement and value delivery",
    "Facilitate collaboration across teams and stakeholders",
    "Identify and remove impediments that affect team performance",
    "Foster team accountability, engagement, and self-management",
    "Apply AI-enabled practices to improve facilitation, planning, and collaboration",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "SAFe® Scrum Master (SSM)" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "45" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "73% (33 out of 45)" },
    { label: "Delivery", value: "Web-Based, Closed Book, No Outside Assistance" },
    { label: "Language", value: "English" },
    { label: "Exam Access", value: "Available through SAFe Studio™ after course completion" },
    { label: "Attempts Included", value: "First attempt included with course registration; retake fees may apply" },
    { label: "Validity", value: "Annual renewal through Scaled Agile" },
  ],
  courseHighlights: [
    "Official SAFe® Scrum Master 6.0 curriculum",
    "Instructor-led live training",
    "Interactive sessions and practical exercises",
    "PI Planning and team facilitation practice",
    "Coaching techniques for Agile teams",
    "AI-enabled tools for Agile work",
    "Exam preparation support",
    "Course materials included",
  ],
  faq: [
    {
      q: "Are there prerequisites to attend?",
      a: "No mandatory prerequisites. Familiarity with Agile and a basic understanding of Scrum, Kanban, or Lean are recommended.",
    },
    {
      q: "Is the certification exam included?",
      a: "Yes. The SAFe® Scrum Master (SSM) exam is accessed via SAFe Studio™ after the course; the first attempt is included with course registration.",
    },
    {
      q: "What is the exam format?",
      a: "45 multiple-choice questions in 90 minutes, web-based and closed book, with a 73% pass mark (33/45).",
    },
    {
      q: "How long is the certification valid?",
      a: "SAFe certifications are renewed annually through Scaled Agile.",
    },
  ],
  disclaimer:
    "SAFe®, Scaled Agile Framework®, SAFe Scrum Master®, and all related trademarks are the property of Scaled Agile, Inc. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function SAFeScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
