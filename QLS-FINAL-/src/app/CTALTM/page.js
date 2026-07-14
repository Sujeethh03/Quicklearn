import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead Test Strategies, Manage QA Teams, and Drive End-to-End Software Quality Governance",
  openGraph: {
    title: "Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead Test Strategies, Manage QA Teams, and Drive End-to-End Software Quality Governance",
    images: ["/istqb_advanced.jpg"],
  },
};

const courseData = {
  "title": "Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 Certification Training",
  "subtitle": "Lead Test Strategies, Manage QA Teams, and Drive End-to-End Software Quality Governance",
  "backgroundImage": "/istqb_advanced.jpg",
  "overview": [
    "The ISTQB® Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 certification is an advanced qualification designed for professionals responsible for test leadership, strategy, planning, estimation, monitoring, and governance of software testing activities.",
    "This certification focuses on equipping Test Managers and QA leaders with the skills required to manage testing across projects, programs, and enterprise-level initiatives in Agile, DevOps, and traditional SDLC environments.",
    "CTAL-TM v3.0 emphasizes test strategy development, risk-based testing, test planning, defect management, resource management, metrics, and continuous improvement. It also strengthens leadership capabilities required to manage distributed testing teams and ensure alignment with business objectives.",
    "Participants will learn how to define and implement effective test management strategies that ensure high-quality software delivery, optimized testing effort, and measurable business value."
  ],
  "whyHead": "Why Choose ISTQB® CTAL-TM v3.0?",
  "why": [
    "Develop strong test leadership and management skills",
    "Learn to design enterprise-level test strategies",
    "Improve risk-based testing decision-making",
    "Manage QA teams across Agile and traditional projects",
    "Strengthen test planning and estimation capabilities",
    "Enhance governance and reporting in testing projects",
    "Align testing with business and product objectives"
  ],
  "prerequisites": [
    "Mandatory: ISTQB® Certified Tester Foundation Level (CTFL)",
    "Recommended:",
    "Experience in software testing or QA roles",
    "Understanding of Agile or traditional project management",
    "Exposure to test planning and execution activities"
  ],
  "whoShouldAttend": [
    "Test Managers",
    "QA Managers",
    "Test Leads",
    "Senior QA Engineers",
    "Project Managers",
    "Delivery Managers",
    "Quality Assurance Consultants",
    "Release Managers",
    "Agile Test Leads",
    "Program Managers"
  ],
  "curriculum": [
    {
      "title": "Module 1: Test Management Fundamentals",
      "topics": [
        "Role of Test Manager",
        "Test management process",
        "Test management in SDLC",
        "Agile vs traditional test management"
      ]
    },
    {
      "title": "Module 2: Test Strategy and Test Approach",
      "topics": [
        "Test strategy development",
        "Risk-based testing strategy",
        "Test policy and governance",
        "Alignment with business objectives"
      ]
    },
    {
      "title": "Module 3: Test Planning and Estimation",
      "topics": [
        "Test planning process",
        "Estimation techniques",
        "Resource allocation",
        "Scheduling and budgeting",
        "Test effort estimation models"
      ]
    },
    {
      "title": "Module 4: Risk-Based Testing",
      "topics": [
        "Risk identification and analysis",
        "Product and project risks",
        "Risk mitigation strategies",
        "Prioritization based on risk"
      ]
    },
    {
      "title": "Module 5: Test Monitoring and Control",
      "topics": [
        "Test progress tracking",
        "Metrics and KPIs",
        "Status reporting",
        "Test control mechanisms",
        "Defect tracking and reporting"
      ]
    },
    {
      "title": "Module 6: Defect and Incident Management",
      "topics": [
        "Defect lifecycle",
        "Severity and priority classification",
        "Root cause analysis",
        "Defect prevention strategies"
      ]
    },
    {
      "title": "Module 7: Team and Stakeholder Management",
      "topics": [
        "Managing test teams",
        "Stakeholder communication",
        "Conflict management",
        "Leadership in QA environments"
      ]
    },
    {
      "title": "Module 8: Test Improvement and Process Optimization",
      "topics": [
        "Test process improvement models",
        "Retrospectives and lessons learned",
        "Metrics-driven improvement",
        "Continuous improvement in QA"
      ]
    },
    {
      "title": "Module 9: Test Tools and Automation Governance",
      "topics": [
        "Tool strategy and selection",
        "Automation governance",
        "Tool integration into QA processes",
        "Reporting and dashboards"
      ]
    },
    {
      "title": "Skills You'll Gain",
      "topics": [
        "After completing this course, participants will be able to:",
        "Design and manage test strategies for projects and enterprises",
        "Lead QA and testing teams effectively",
        "Apply risk-based testing techniques",
        "Estimate and plan testing efforts accurately",
        "Monitor test progress using metrics and KPIs",
        "Improve test processes and governance frameworks",
        "Align testing activities with business goals"
      ]
    }
  ],
  "learningOutcomes": [
    "Manage end-to-end test lifecycle activities",
    "Develop effective test strategies and plans",
    "Lead testing teams in Agile and traditional environments",
    "Apply risk-based decision-making in testing",
    "Improve quality through structured test governance",
    "Communicate effectively with stakeholders",
    "Drive continuous improvement in QA processes"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ISTQB® Certified Tester Advanced Level Test Management (CTAL-TM) v3.0"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice Questions"
    },
    {
      "label": "Number of Questions",
      "value": "60"
    },
    {
      "label": "Duration",
      "value": "180 Minutes"
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
    "Latest ISTQB® CTAL-TM v3.0 syllabus",
    "Focus on real-world test management scenarios",
    "Test strategy and governance frameworks",
    "Agile and DevOps test management integration",
    "Case studies from enterprise QA environments",
    "Risk-based testing and prioritization techniques",
    "Exam-oriented preparation and mock tests"
  ],
  "disclaimer": "ISTQB®, Certified Tester Advanced Level Test Management (CTAL-TM)®, and all related terms are trademarks of the International Software Testing Qualifications Board (ISTQB®). QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by ISTQB®. All trademarks are acknowledged as the property of their respective owners."
};

export default function CTALTMPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
