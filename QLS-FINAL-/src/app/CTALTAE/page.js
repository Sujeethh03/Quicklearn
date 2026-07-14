import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Design, Build, and Scale Robust Test Automation Solutions for Modern Software Systems",
  openGraph: {
    title: "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Design, Build, and Scale Robust Test Automation Solutions for Modern Software Systems",
    images: ["/istqb_advanced.jpg"],
  },
};

const courseData = {
  "title": "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0 Certification Training",
  "subtitle": "Design, Build, and Scale Robust Test Automation Solutions for Modern Software Systems",
  "backgroundImage": "/istqb_advanced.jpg",
  "overview": [
    "The ISTQB® Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0 certification is an advanced-level qualification designed for professionals who want to specialize in test automation architecture, strategy, design, and implementation.",
    "This certification focuses on building scalable, maintainable, and efficient test automation solutions that support modern software delivery models such as Agile, DevOps, CI/CD, and continuous testing pipelines.",
    "Unlike basic automation courses, CTAL-TAE v2.0 emphasizes engineering principles, automation architecture, framework design, tool evaluation, and integration with enterprise systems.",
    "Participants will gain the ability to design automation solutions that are robust, reusable, scalable, and aligned with business and technical requirements, while also understanding ROI, risks, and maintenance strategies."
  ],
  "whyHead": "Why Choose ISTQB® CTAL-TAE v2.0?",
  "why": [
    "Become an expert in test automation engineering and architecture",
    "Learn to design scalable automation frameworks",
    "Improve CI/CD integration with automated testing",
    "Understand tool selection and evaluation strategies",
    "Reduce automation maintenance cost and effort",
    "Build enterprise-grade automation solutions",
    "Strengthen DevOps and continuous testing capabilities"
  ],
  "prerequisites": [
    "Mandatory: ISTQB® Certified Tester Foundation Level (CTFL)",
    "Recommended:",
    "Experience in test automation or software testing",
    "Basic knowledge of programming concepts",
    "Familiarity with CI/CD pipelines and Agile environments"
  ],
  "whoShouldAttend": [
    "Test Automation Engineers",
    "QA Automation Engineers",
    "Software Test Engineers",
    "DevOps Engineers",
    "SDET Professionals",
    "Software Developers in Test roles",
    "QA Architects",
    "Test Leads and Managers",
    "Quality Engineers",
    "CI/CD Engineers"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to Test Automation Engineering",
      "topics": [
        "Purpose of test automation",
        "Automation vs manual testing",
        "Automation lifecycle",
        "Benefits and challenges of automation"
      ]
    },
    {
      "title": "Module 2: Test Automation Architecture",
      "topics": [
        "Automation architecture layers",
        "Framework design principles",
        "Scalable automation structures",
        "Maintainability and reusability",
        "Design patterns in automation"
      ]
    },
    {
      "title": "Module 3: Designing Test Automation Solutions",
      "topics": [
        "Identifying automation candidates",
        "Test automation strategy design",
        "Risk-based automation selection",
        "Automation ROI analysis",
        "Framework selection criteria"
      ]
    },
    {
      "title": "Module 4: Automation Tools & Technologies",
      "topics": [
        "Tool evaluation criteria",
        "Open-source vs commercial tools",
        "Scripting languages for automation",
        "Tool integration strategies",
        "CI/CD tool integration"
      ]
    },
    {
      "title": "Module 5: CI/CD & Continuous Testing",
      "topics": [
        "Continuous integration pipelines",
        "Continuous testing strategies",
        "Pipeline integration for automation",
        "Test execution optimization",
        "Feedback loops in DevOps"
      ]
    },
    {
      "title": "Module 6: Automation Implementation",
      "topics": [
        "Framework development lifecycle",
        "Test script design",
        "Data-driven testing",
        "Keyword-driven frameworks",
        "Hybrid automation frameworks"
      ]
    },
    {
      "title": "Module 7: Test Automation Maintenance",
      "topics": [
        "Handling flaky tests",
        "Test stability and reliability",
        "Maintenance strategies",
        "Refactoring automation suites",
        "Version control for test scripts"
      ]
    },
    {
      "title": "Module 8: Metrics, ROI & Reporting",
      "topics": [
        "Automation success metrics",
        "ROI calculation for automation",
        "Coverage metrics",
        "Execution performance metrics",
        "Reporting dashboards"
      ]
    },
    {
      "title": "Module 9: Risks & Challenges in Automation",
      "topics": [
        "Common automation failures",
        "Technical risks",
        "Organizational challenges",
        "Tool limitations",
        "Mitigation strategies"
      ]
    },
    {
      "title": "Skills You'll Gain",
      "topics": [
        "After completing this course, participants will be able to:",
        "Design scalable test automation frameworks",
        "Select appropriate automation tools and strategies",
        "Integrate automation into CI/CD pipelines",
        "Improve test execution efficiency",
        "Reduce maintenance overhead in automation suites",
        "Evaluate automation ROI and effectiveness",
        "Build enterprise-level automation solutions"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand advanced automation engineering principles",
    "Design and implement robust automation frameworks",
    "Integrate testing into DevOps pipelines effectively",
    "Improve automation reliability and maintainability",
    "Evaluate and select automation tools strategically",
    "Apply engineering principles to test automation",
    "Support continuous testing initiatives in enterprises"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ISTQB® Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0"
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
    "Latest ISTQB® CTAL-TAE v2.0 syllabus",
    "Focus on real-world automation architecture",
    "Hands-on framework design concepts",
    "CI/CD pipeline integration strategies",
    "Case studies on enterprise automation",
    "Automation ROI and risk analysis",
    "Exam-focused preparation and mock tests"
  ],
  "disclaimer": "ISTQB®, Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)®, and all related terms are trademarks of the International Software Testing Qualifications Board (ISTQB®). QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by ISTQB®. All trademarks are acknowledged as the property of their respective owners"
};

export default function CTALTAEPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
