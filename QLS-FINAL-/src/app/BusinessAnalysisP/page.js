import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Business Analysis Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Business Analysis Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led BA Practitioner training covering stakeholder analysis, requirements engineering, and solution evaluation. Enroll today!",
  keywords:
    "Business Analysis Practitioner training Hyderabad, BA Practitioner certification Hyderabad, best business analysis training institute Hyderabad, business analyst practitioner course Hyderabad, business analysis training India, Business Analysis Practice training, business analyst certification, requirements gathering, stakeholder management, business case development, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Business Analysis Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led Business Analysis Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/business_analysis_practice.jpg"],
  },
};

const courseData = {
  "title": "EXIN BCS Practitioner Certificate in Business Analysis Practice",
  "subtitle": "Apply Business Analysis Techniques to Drive Strategic Change and Deliver Effective Solutions",
  "backgroundImage": "/business_analysis_practice.jpg",
  "overview": [
    "The EXIN BCS Practitioner Certificate in Business Analysis Practice is an advanced-level certification designed for professionals who want to apply business analysis techniques in real-world organizational contexts.",
    "This course focuses on developing a holistic approach to analysing business situations, identifying improvement opportunities, and delivering effective, feasible business solutions aligned with strategic objectives.",
    "Participants learn how to apply structured business analysis methods across the entire lifecycle—from understanding the current situation to defining solutions and building business cases."
  ],
  "whyHead": "Why Choose This Certification?",
  "why": [
    "Apply advanced business analysis techniques in real projects",
    "Improve strategic thinking and problem-solving ability",
    "Enhance decision-making in complex business environments",
    "Strengthen stakeholder engagement and analysis skills",
    "Build capability to deliver business transformation outcomes",
    "Advance your career in business analysis and consulting"
  ],
  "prerequisites": [
    "There are no strict prerequisites for attending the course.",
    "However, it is recommended that participants have:",
    "Basic understanding of business analysis concepts",
    "Experience in project or business environments"
  ],
  "whoShouldAttend": [
    "Business Analysts",
    "Senior Business Analysts",
    "Business Managers",
    "Project Managers",
    "Change Managers",
    "Product Owners",
    "Consultants",
    "PMO Professionals",
    "Professionals involved in business transformation initiatives"
  ],
  "curriculum": [
    {
      "title": "Module 1: Rationale for Business Analysis",
      "topics": [
        "Purpose of business analysis",
        "Business improvement lifecycle",
        "Value-driven analysis approach"
      ]
    },
    {
      "title": "Module 2: Understanding the Strategic Context",
      "topics": [
        "Business environment analysis",
        "Internal and external factors",
        "Strategy alignment",
        "PESTLE and SWOT techniques"
      ]
    },
    {
      "title": "Module 3: Understanding the Current Situation",
      "topics": [
        "As-is analysis",
        "Business process evaluation",
        "Performance assessment",
        "Identifying gaps and inefficiencies"
      ]
    },
    {
      "title": "Module 4: Stakeholder Analysis & Management",
      "topics": [
        "Stakeholder identification and mapping",
        "Stakeholder perspectives",
        "Managing conflicts and expectations"
      ]
    },
    {
      "title": "Module 5: Analysing Business Activities",
      "topics": [
        "Business process modelling",
        "Value chain analysis",
        "Functional decomposition",
        "Workflow analysis"
      ]
    },
    {
      "title": "Module 6: Identifying Potential Solutions",
      "topics": [
        "Solution evaluation techniques",
        "Option assessment",
        "Risk and impact analysis"
      ]
    },
    {
      "title": "Module 7: Building the Business Case",
      "topics": [
        "Cost-benefit analysis",
        "Feasibility and viability",
        "Risk assessment",
        "Recommendation development"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply structured business analysis techniques in real scenarios",
    "Analyse business problems and define improvement opportunities",
    "Evaluate strategic and operational business contexts",
    "Identify and assess potential solutions",
    "Develop strong business cases for decision-making",
    "Support business transformation initiatives effectively"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "EXIN BCS Practitioner Certificate in Business Analysis Practice"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
    },
    {
      "label": "Number of Questions",
      "value": "40"
    },
    {
      "label": "Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "65%"
    },
    {
      "label": "Open Book",
      "value": "No"
    },
    {
      "label": "Level",
      "value": "Practitioner"
    }
  ],
  "courseHighlights": [
    "Advanced EXIN BCS Practitioner syllabus coverage",
    "Scenario-based learning approach",
    "Real-world business case studies",
    "Hands-on analytical exercises",
    "Exam-focused preparation",
    "Practice questions and mock tests"
  ],
  "disclaimer": "EXIN®, BCS®, Business Analysis Practice®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by EXIN or BCS."
};

export default function BusinessAnalysisPracticePage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
