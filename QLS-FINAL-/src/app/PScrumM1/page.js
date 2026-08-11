import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master™ I (PSM I) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master the Scrum framework and become a confident, effective Scrum Master. Professional Scrum Master™ I (PSM I) covers Scrum theory, values, the Scrum Team, events, artifacts, and servant leadership. Prepare for the globally recognized PSM I assessment.",
  keywords: "PSM I training Hyderabad, Professional Scrum Master certification, Scrum.org PSM, Scrum framework, servant leadership, Agile Scrum Master, QuickLearn Systems",
  openGraph: {
    title: "Professional Scrum Master™ I (PSM I) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master the Scrum framework and become a confident, effective Scrum Master.",
    images: ["/professional_scrum_master_1.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Master™ I (PSM I) Certification Training",
  subtitle: "Master the Scrum Framework and Become a Confident, Effective Scrum Master",
  breadcrumbTitle: "Professional Scrum Master I (PSM I)",
  backgroundImage: "/professional_scrum_master_1.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "Professional Scrum Master™ I (PSM I) is an interactive course that provides a strong understanding of Scrum theory, principles, and values. Participants learn how Scrum helps teams and organizations deliver value through iterative and incremental product development.",
    "The course focuses on the responsibilities of the Scrum Master, servant leadership, team effectiveness, and the practical application of Scrum within organizations.",
    "Upon completion, participants will be prepared to take the globally recognized Professional Scrum Master™ I (PSM I) certification assessment.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Gain a strong foundation in Scrum theory, principles, and values",
    "Understand the role and responsibilities of an effective Scrum Master",
    "Learn how to support self-managing and cross-functional teams",
    "Improve your ability to facilitate Scrum events and remove impediments",
    "Build practical skills to apply Scrum in real-world environments",
    "Prepare confidently for the Professional Scrum Master™ I certification exam",
    "Strengthen your Agile mindset and servant leadership capabilities",
  ],
  prerequisites: [
    "There are no mandatory prerequisites.",
    "Recommended: a basic understanding of Agile concepts.",
    "Recommended: familiarity with software or product development environments and an interest in Scrum and Agile ways of working.",
  ],
  whoShouldAttend: [
    "Scrum Masters",
    "Project Managers and Team Leads",
    "Agile Coaches",
    "Developers",
    "Product Owners",
    "Business Analysts",
    "Anyone involved in Agile product development",
  ],
  curriculum: [
    {
      title: "Module 1: Understanding Scrum",
      topics: ["Empiricism", "Scrum Values", "Scrum Theory", "Scrum Framework"],
    },
    {
      title: "Module 2: The Scrum Team",
      topics: ["Accountabilities", "Self-Managing Teams", "Cross-Functional Teams", "Team Collaboration"],
    },
    {
      title: "Module 3: Scrum Events",
      topics: ["Sprint", "Sprint Planning", "Daily Scrum", "Sprint Review", "Sprint Retrospective"],
    },
    {
      title: "Module 4: Scrum Artifacts",
      topics: ["Product Backlog", "Sprint Backlog", "Increment", "Commitments"],
    },
    {
      title: "Module 5: Scrum Master Responsibilities",
      topics: ["Servant Leadership", "Coaching Teams", "Facilitating Scrum Events", "Removing Impediments", "Supporting Organizational Change"],
    },
    {
      title: "Module 6: Applying Scrum",
      topics: ["Product Delivery", "Value Creation", "Continuous Improvement", "Scaling Considerations"],
    },
  ],
  learningOutcomes: [
    "Explain Scrum theory and principles",
    "Understand Scrum roles, events, and artifacts",
    "Facilitate Scrum effectively",
    "Coach teams toward self-management",
    "Support continuous improvement",
    "Apply Scrum in real-world environments",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "Professional Scrum Master™ I (PSM I)" },
    { label: "Exam Format", value: "Multiple Choice, Multiple Answer, True/False" },
    { label: "Number of Questions", value: "80" },
    { label: "Duration", value: "60 Minutes" },
    { label: "Passing Score", value: "85%" },
    { label: "Delivery", value: "Online" },
    { label: "Language", value: "English" },
    { label: "Validity", value: "Lifetime certification — no annual renewal fee" },
    { label: "Credential", value: "Free Credly digital credential included" },
  ],
  courseHighlights: [
    "Interactive instructor-led training",
    "Comprehensive coverage of Scrum theory, roles, events, and artifacts",
    "Practical examples and real-world Scrum scenarios",
    "Focus on Scrum Master responsibilities and servant leadership",
    "Exam-oriented preparation for PSM I certification",
    "Engaging discussions, exercises, and knowledge checks",
    "Suitable for both beginners and professionals",
  ],
  faq: [
    {
      q: "Are there prerequisites for PSM I?",
      a: "No mandatory prerequisites. A basic understanding of Agile concepts and product development is helpful.",
    },
    {
      q: "What is the exam format?",
      a: "80 questions (multiple choice, multiple answer, true/false) in 60 minutes, online, with an 85% pass mark.",
    },
    {
      q: "Does the certification expire?",
      a: "No. PSM I is a lifetime certification with no annual renewal fee, and includes a free Credly digital credential.",
    },
    {
      q: "Is this course suitable for beginners?",
      a: "Yes. It is suitable for both beginners and experienced professionals looking to formalize their Scrum knowledge.",
    },
  ],
  disclaimer:
    "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function PScrumM1Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
