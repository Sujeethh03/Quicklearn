import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified ScrumMaster® (CSM®) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Build a Strong Foundation in Scrum and Agile Leadership",
  openGraph: {
    title: "Certified ScrumMaster® (CSM®) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Build a Strong Foundation in Scrum and Agile Leadership",
    images: ["/certified_scrum_master.jpg"],
  },
};

const courseData = {
  "title": "Certified ScrumMaster® (CSM®) Certification Training",
  "subtitle": "Build a Strong Foundation in Scrum and Agile Leadership",
  "backgroundImage": "/certified_scrum_master.jpg",
  "overview": [
    "The Certified ScrumMaster® (CSM®) certification is one of the world's most recognized Agile and Scrum credentials. Designed by Scrum Alliance®, this interactive training provides a comprehensive understanding of the Scrum framework, Agile principles, and the Scrum Master's role in helping teams deliver value effectively.",
    "Participants learn how to facilitate Scrum events, coach self-managing teams, remove impediments, foster collaboration, and create an environment of continuous improvement. The course combines theory, practical exercises, simulations, and real-world case studies to prepare participants for success as Scrum Masters and Agile practitioners.",
    "Upon successful completion of the course and assessment requirements, participants earn the Certified ScrumMaster® (CSM®) certification from Scrum Alliance®."
  ],
  "whyHead": "Why Choose CSM®?",
  "why": [
    "Globally recognized Scrum certification",
    "Learn directly from a Certified Scrum Trainer® (CST®)",
    "Develop practical Scrum facilitation skills",
    "Understand Agile values and Scrum principles",
    "Improve team collaboration and productivity",
    "Prepare for Scrum Master and Agile leadership roles"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the CSM® course.",
    "The course is suitable for both beginners and experienced professionals interested in Agile and Scrum. Reading the Scrum Guide before attending is recommended but not mandatory."
  ],
  "whoShouldAttend": [
    "Aspiring Scrum Masters",
    "Project Managers",
    "Team Leads",
    "Product Owners",
    "Software Developers",
    "Business Analysts",
    "QA Professionals",
    "Delivery Managers",
    "Agile Coaches Anyone interested in Agile and Scrum"
  ],
  "curriculum": [
    {
      "title": "Module 1: Agile Foundations",
      "topics": [
        "Agile Manifesto",
        "Agile Values and Principles",
        "Empirical Process Control",
        "Lean Thinking",
        "Scrum Overview"
      ]
    },
    {
      "title": "Module 2: Understanding the Scrum Framework",
      "topics": [
        "Scrum Theory",
        "Scrum Values",
        "Scrum Pillars",
        "Scrum Team",
        "Accountabilities"
      ]
    },
    {
      "title": "Module 3: Scrum Events",
      "topics": [
        "Sprint",
        "Sprint Planning",
        "Daily Scrum",
        "Sprint Review",
        "Sprint Retrospective"
      ]
    },
    {
      "title": "Module 4: Scrum Artifacts",
      "topics": [
        "Product Backlog",
        "Sprint Backlog",
        "Increment",
        "Product Goal",
        "Sprint Goal",
        "Definition of Done"
      ]
    },
    {
      "title": "Module 5: The Scrum Master Role",
      "topics": [
        "Servant Leadership",
        "Coaching Teams",
        "Facilitating Scrum Events",
        "Removing Impediments",
        "Supporting Organizational Agility"
      ]
    },
    {
      "title": "Module 6: Building High-Performing Teams",
      "topics": [
        "Self-Management",
        "Collaboration",
        "Team Dynamics",
        "Continuous Improvement",
        "Stakeholder Engagement"
      ]
    },
    {
      "title": "Module 7: Applying Scrum Successfully",
      "topics": [
        "Scrum Adoption",
        "Common Challenges",
        "Scaling Considerations",
        "Practical Case Studies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand Scrum theory, principles, and values",
    "Explain Scrum roles, events, and artifacts",
    "Facilitate Scrum events effectively",
    "Coach self-managing Scrum Teams",
    "Foster collaboration and continuous improvement",
    "Support Agile adoption within organizations"
  ],
  "certificationHeading": "Certification Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Certified ScrumMaster® (CSM®)"
    },
    {
      "label": "Certification Body",
      "value": "Scrum Alliance®"
    },
    {
      "label": "Course Duration",
      "value": "16 Hours (2 Days)"
    },
    {
      "label": "Assessment",
      "value": "Online assessment after course completion"
    },
    {
      "label": "Membership",
      "value": "Two-year Scrum Alliance membership included, subject to Scrum Alliance policies"
    },
    {
      "label": "Renewal",
      "value": "Certification is renewed through Scrum Alliance's continuing education and renewal process."
    }
  ],
  "courseHighlights": [
    "16-hour Instructor-led Live Training",
    "Interactive Workshops & Group Activities",
    "Real-world Scrum Simulations",
    "Comprehensive Learning Materials",
    "Exam Preparation Support",
    "Two-Year Scrum Alliance Membership (subject to Scrum Alliance policies)"
  ],
  "disclaimer": "Certified ScrumMaster®, CSM®, Scrum Alliance®, Certified Scrum Trainer®, CST®, and all related trademarks are the property of Scrum Alliance®. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by Scrum Alliance®. All trademarks are the property of their respective owners."
};

export default function CSMPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
