import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Business Analysis Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Business Analysis Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led BA Foundation training covering requirements management, stakeholder analysis, process modeling, and solution evaluation. Enroll today!",
  keywords: "Business Analysis Foundation training Hyderabad, BA Foundation certification Hyderabad, best business analysis training institute Hyderabad, business analyst course Hyderabad, business analysis training India, Business Analysis Foundation, requirements management, stakeholder analysis, process modeling, business analyst, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Business Analysis Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led Business Analysis Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/business_analysis_foundation.jpg"],
  },
};

const courseData = {
  "title": "EXIN BCS Foundation Certificate in Business Analysis",
  "subtitle": "Build Strong Business Analysis Foundations to Drive Effective Business Change",
  "backgroundImage": "/business_analysis_foundation.jpg",
  "overview": [
    "The EXIN BCS Foundation Certificate in Business Analysis provides a comprehensive introduction to the principles, techniques, and practices of business analysis. It is designed to help professionals understand how businesses identify needs, define requirements, evaluate solutions, and deliver successful business change.",
    "This certification focuses on developing core competencies in business analysis including stakeholder management, strategy analysis, business process modelling, requirements engineering, and business case development.",
    "Aligned with the globally recognized BCS syllabus, this course helps participants build a strong foundation in business analysis that can be applied across projects, products, and transformation initiatives."
  ],
  "whyHead": "Why Choose This Certification?",
  "why": [
    "Gain globally recognized business analysis knowledge",
    "Understand end-to-end business change lifecycle",
    "Improve requirements gathering and documentation skills",
    "Strengthen stakeholder analysis and communication",
    "Build a strong foundation for advanced BA certifications",
    "Enhance career opportunities in business and IT transformation roles"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for this certification.",
    "However, the course is ideal for individuals who want to build or strengthen their understanding of business analysis concepts."
  ],
  "whoShouldAttend": [
    "Aspiring Business Analysts",
    "Project Managers",
    "Product Owners",
    "Business Managers",
    "Change Managers",
    "IT Professionals",
    "PMO Team Members",
    "Professionals involved in business transformation"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to Business Analysis",
      "topics": [
        "What is Business Analysis",
        "Role of a Business Analyst",
        "Business change lifecycle",
        "BA competencies and responsibilities"
      ]
    },
    {
      "title": "Module 2: Strategy Analysis",
      "topics": [
        "Understanding business context",
        "PESTLE analysis",
        "SWOT analysis",
        "Business model evaluation"
      ]
    },
    {
      "title": "Module 3: Stakeholder Analysis & Management",
      "topics": [
        "Stakeholder identification",
        "Stakeholder mapping",
        "Engagement strategies",
        "Communication planning"
      ]
    },
    {
      "title": "Module 4: Business Analysis Process Model",
      "topics": [
        "Investigating business situations",
        "Analysing requirements",
        "Defining solutions",
        "Delivering business outcomes"
      ]
    },
    {
      "title": "Module 5: Investigation & Elicitation Techniques",
      "topics": [
        "Interviews and workshops",
        "Observation techniques",
        "Prototyping",
        "Scenarios and questionnaires"
      ]
    },
    {
      "title": "Module 6: Requirements Engineering",
      "topics": [
        "Requirements gathering",
        "Documentation techniques",
        "Validation and verification",
        "Requirements management"
      ]
    },
    {
      "title": "Module 7: Business Case Development",
      "topics": [
        "Cost-benefit analysis",
        "Feasibility studies",
        "Risk assessment",
        "Investment justification"
      ]
    },
    {
      "title": "Module 8: Modelling Business Processes",
      "topics": [
        "Process modelling techniques",
        "As-Is and To-Be analysis",
        "BPMN basics",
        "Improving business processes"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand the business analysis lifecycle",
    "Identify and analyse business needs and stakeholders",
    "Apply strategy analysis techniques effectively",
    "Gather, document, and manage requirements",
    "Model business processes and workflows",
    "Support development of business cases",
    "Contribute to successful business transformation initiatives"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "EXIN BCS Foundation Certificate in Business Analysis"
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
      "value": "Foundation"
    }
  ],
  "courseHighlights": [
    "Latest EXIN BCS Foundation syllabus coverage",
    "Instructor-led interactive training",
    "Real-world business analysis case studies",
    "Practical exercises and workshops",
    "Exam-oriented preparation",
    "Mock tests and revision sessions"
  ],
  "disclaimer": "EXIN®, BCS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by EXIN or BCS."
};

export default function BusinessAnalysisFPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}