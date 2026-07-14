import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Agile Testing Practices to Deliver High-Quality Software in Fast-Paced Agile Environments",
  openGraph: {
    title: "Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master Agile Testing Practices to Deliver High-Quality Software in Fast-Paced Agile Environments",
    images: ["/istqb_advanced.jpg"],
  },
};

const courseData = {
  "title": "Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0 Certification Training",
  "subtitle": "Master Agile Testing Practices to Deliver High-Quality Software in Fast-Paced Agile Environments",
  "backgroundImage": "/istqb_advanced.jpg",
  "overview": [
    "The ISTQB® Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0 certification is a specialist-level qualification designed for professionals working in Agile and DevOps environments who want to advance their expertise in Agile testing practices.",
    "This certification focuses on how testing is performed in Agile teams, emphasizing continuous testing, collaboration, automation awareness, test strategy in Agile, and quality engineering practices aligned with iterative and incremental delivery models.",
    "The latest CTAL-AT v2.0 syllabus reflects modern Agile delivery environments, including Scrum, Kanban, DevOps pipelines, and scaled Agile frameworks. It focuses on embedding testing activities throughout the Agile lifecycle rather than treating testing as a separate phase.",
    "Participants will learn how Agile testers contribute to user story refinement, acceptance criteria definition, test automation strategy, exploratory testing, and continuous feedback loops."
  ],
  "whyHead": "Why Choose ISTQB® CTAL-AT v2.0?",
  "why": [
    "Gain advanced expertise in Agile testing practices",
    "Learn how testing integrates into Agile development cycles",
    "Improve collaboration between developers, testers, and product owners",
    "Strengthen skills in exploratory and continuous testing",
    "Understand test automation in Agile environments",
    "Learn shift-left and shift-right testing strategies",
    "Improve delivery speed without compromising quality"
  ],
  "prerequisites": [
    "Mandatory: ISTQB® Certified Tester Foundation Level (CTFL)",
    "Recommended:",
    "Experience in Agile teams",
    "Basic understanding of Scrum or Kanban",
    "Familiarity with software testing principles"
  ],
  "whoShouldAttend": [
    "Software Test Engineers",
    "QA Engineers",
    "Agile Testers",
    "Automation Test Engineers",
    "Scrum Team Members",
    "Developers working in Agile teams",
    "Product Owners and Business Analysts",
    "Test Managers transitioning to Agile",
    "DevOps Engineers",
    "Quality Engineers"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to Agile Testing",
      "topics": [
        "Agile manifesto and principles",
        "Role of testing in Agile teams",
        "Whole team approach",
        "Agile testing mindset"
      ]
    },
    {
      "title": "Module 2: Agile Software Development Practices",
      "topics": [
        "Scrum framework overview",
        "Kanban in Agile delivery",
        "Iterative and incremental development",
        "Definition of Done (DoD)",
        "Acceptance criteria"
      ]
    },
    {
      "title": "Module 3: Agile Testing Principles & Practices",
      "topics": [
        "Agile testing quadrants",
        "Test-first approaches (TDD, BDD, ATDD)",
        "Shift-left and shift-right testing",
        "Continuous testing principles"
      ]
    },
    {
      "title": "Module 4: Testing in Agile Teams",
      "topics": [
        "Roles and responsibilities of Agile testers",
        "Collaboration within cross-functional teams",
        "User story refinement",
        "Acceptance test creation",
        "Test estimation in Agile"
      ]
    },
    {
      "title": "Module 5: Test Automation in Agile",
      "topics": [
        "Automation strategy in Agile",
        "Test pyramid concept",
        "Selecting tests for automation",
        "CI/CD integration",
        "Maintaining automated test suites"
      ]
    },
    {
      "title": "Module 6: Exploratory Testing in Agile",
      "topics": [
        "Exploratory testing techniques",
        "Session-based test management (SBTM)",
        "Charter-based testing",
        "Defect discovery strategies",
        "Feedback-driven testing"
      ]
    },
    {
      "title": "Module 7: Agile Testing in DevOps",
      "topics": [
        "Continuous integration and delivery",
        "Continuous testing pipelines",
        "Test environment management",
        "Monitoring and feedback loops",
        "Quality engineering in DevOps"
      ]
    },
    {
      "title": "Module 8: Agile Metrics & Reporting",
      "topics": [
        "Agile testing metrics",
        "Test progress tracking",
        "Defect trends and quality indicators",
        "Velocity and quality alignment",
        "Reporting in Agile environments"
      ]
    },
    {
      "title": "Skills You'll Gain",
      "topics": [
        "After completing this course, participants will be able to:",
        "Work effectively as an Agile tester in Scrum or Kanban teams",
        "Design and execute Agile test strategies",
        "Contribute to user story definition and acceptance criteria",
        "Apply exploratory testing techniques effectively",
        "Integrate testing into CI/CD pipelines",
        "Support test automation in Agile environments",
        "Improve collaboration across Agile teams"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand Agile testing principles and mindset",
    "Contribute effectively to Agile development teams",
    "Design and execute Agile test approaches",
    "Apply test automation strategies in Agile environments",
    "Improve software quality through continuous testing",
    "Participate in DevOps and CI/CD quality practices",
    "Deliver faster feedback in iterative development cycles"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ISTQB® Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice Questions"
    },
    {
      "label": "Number of Questions",
      "value": "40"
    },
    {
      "label": "Duration",
      "value": "120 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "65%"
    },
    {
      "label": "Prerequisite",
      "value": "ISTQB CTFL certification"
    },
    {
      "label": "Certification Body",
      "value": "ISTQB® International Software Testing Qualifications Board"
    },
    {
      "label": "Delivery",
      "value": "Online / Authorized Exam Provider"
    }
  ],
  "courseHighlights": [
    "Latest ISTQB® CTAL-AT v2.0 syllabus",
    "Agile + DevOps testing approach",
    "Real-world Agile testing scenarios",
    "Hands-on exercises and case studies",
    "Test strategy design for Agile teams",
    "Continuous testing and feedback loops",
    "Exam-oriented preparation and mock tests"
  ],
  "disclaimer": "ISTQB®, Certified Tester Advanced Level Agile Tester (CTAL-AT)® and all related terms are trademarks of the International Software Testing Qualifications Board (ISTQB®). QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by ISTQB®. All trademarks are acknowledged as the property of their respective owners."
};

export default function CTALATPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
