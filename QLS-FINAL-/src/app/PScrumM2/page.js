import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master™ II (PSM II) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Elevate your Scrum leadership with advanced facilitation, coaching, and Agile practices. Professional Scrum Master™ II (PSM II) covers servant leadership, supporting Scrum Teams, organizational agility, and value delivery. Prepare for the PSM II assessment.",
  keywords: "PSM II training Hyderabad, Professional Scrum Master II certification, advanced Scrum Master, servant leadership, organizational agility, Scrum.org, QuickLearn Systems",
  openGraph: {
    title: "Professional Scrum Master™ II (PSM II) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Elevate your Scrum leadership with advanced facilitation, coaching, and Agile practices.",
    images: ["/professional_scrum_master_2.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Master™ II (PSM II) Certification Training",
  subtitle: "Elevate Your Scrum Leadership with Advanced Facilitation, Coaching, and Agile Practices",
  breadcrumbTitle: "Professional Scrum Master II (PSM II)",
  backgroundImage: "/professional_scrum_master_2.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "Professional Scrum Master™ II (PSM II) is an advanced Scrum Master course designed for experienced Scrum practitioners who want to deepen their understanding of servant leadership, coaching, facilitation, and organizational agility.",
    "The course focuses on helping Scrum Masters maximize value delivery by improving team effectiveness and enabling organizational change.",
    "Participants will be prepared to take the globally recognized Professional Scrum Master™ II (PSM II) certification assessment.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Deepen your expertise as an advanced Scrum Master",
    "Strengthen your servant leadership, coaching, and facilitation skills",
    "Learn how to support high-performing Scrum Teams",
    "Improve your ability to enable organizational agility and change",
    "Gain practical insights into value delivery and continuous improvement",
    "Prepare for the globally recognized PSM II certification exam",
  ],
  prerequisites: [
    "This course is intended for experienced Scrum professionals.",
    "A strong understanding of Scrum principles and practices, and practical experience working as a Scrum Master or in a Scrum environment.",
    "PSM I certification recommended, along with experience supporting teams, stakeholders, or agile transformation initiatives.",
  ],
  whoShouldAttend: [
    "Experienced Scrum Masters",
    "Agile Coaches and Team Coaches",
    "Delivery Managers",
    "Agile Leaders",
    "Transformation Leaders",
  ],
  curriculum: [
    {
      title: "Module 1: The Scrum Master as a Leader",
      topics: ["Servant Leadership", "Leadership Styles", "Coaching Stances", "Facilitating Change"],
    },
    {
      title: "Module 2: Supporting Scrum Teams",
      topics: ["Team Dynamics", "Conflict Resolution", "Psychological Safety", "Self-Management"],
    },
    {
      title: "Module 3: Organizational Agility",
      topics: ["Organizational Design", "Agile Culture", "Change Management", "Scaling Agile"],
    },
    {
      title: "Module 4: Product Delivery",
      topics: ["Maximizing Value", "Product Goals", "Stakeholder Engagement", "Continuous Improvement"],
    },
    {
      title: "Module 5: Advanced Facilitation & Coaching",
      topics: ["Facilitation Techniques", "Coaching Conversations", "Mentoring Approaches", "Professional Development"],
    },
  ],
  learningOutcomes: [
    "Act as an effective servant leader",
    "Coach teams and stakeholders",
    "Improve team effectiveness",
    "Facilitate organizational change",
    "Support agile transformation initiatives",
    "Enhance value delivery",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "Professional Scrum Master™ II (PSM II)" },
    { label: "Exam Format", value: "Scenario-Based Assessment" },
    { label: "Number of Questions", value: "30" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "85%" },
    { label: "Delivery", value: "Online" },
    { label: "Validity", value: "Lifetime certification — no annual renewal fee" },
    { label: "Credential", value: "Free Credly digital credential included" },
  ],
  courseHighlights: [
    "Advanced Scrum Master training for experienced professionals",
    "Focus on servant leadership, coaching, and facilitation",
    "Practical guidance on supporting Scrum Teams and stakeholders",
    "Coverage of organizational agility and change management",
    "Scenario-based learning and real-world examples",
    "Exam-focused preparation for PSM II certification",
    "Delivered by experienced Agile and Scrum trainers",
  ],
  faq: [
    {
      q: "Do I need PSM I before taking PSM II?",
      a: "PSM I is recommended but not mandatory. This course is intended for experienced Scrum practitioners with practical Scrum Master experience.",
    },
    {
      q: "What is the exam format?",
      a: "A scenario-based assessment of 30 questions in 90 minutes, online, with an 85% pass mark.",
    },
    {
      q: "Does the certification expire?",
      a: "No. PSM II is a lifetime certification with no annual renewal fee, and includes a free Credly digital credential.",
    },
    {
      q: "Who is this course best suited for?",
      a: "Experienced Scrum Masters, Agile coaches, delivery managers, and transformation leaders wanting to deepen their leadership impact.",
    },
  ],
  disclaimer:
    "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function PScrumM2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
