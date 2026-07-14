import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "MSP Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master MSP Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led Managing Successful Programmes Foundation training covering MSP principles, governance, and transformational flow. Enroll today!",
  keywords: "MSP Foundation training Hyderabad, Managing Successful Programmes certification Hyderabad, best MSP training institute Hyderabad, MSP Foundation course Hyderabad, programme management training India, MSP Foundation, Managing Successful Programmes, programme management, MSP certification, transformational flow, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "MSP Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led MSP Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/msp_foundation.jpg"],
  },
};

const courseData = {
  "title": "Managing Successful Programmes (MSP®) Foundation Certification Training (5th Edition)",
  "subtitle": "Build the Knowledge to Lead Successful Programme Management and Business Transformation",
  "backgroundImage": "/msp_foundation.jpg",
  "overview": [
    "Managing Successful Programmes (MSP®) is a globally recognized framework for managing complex programmes that deliver strategic change and organizational transformation. It provides proven principles, governance themes, and transformational flows to help organizations successfully coordinate multiple related projects while realizing business benefits.",
    "The MSP® Foundation (5th Edition) course introduces participants to the MSP framework, enabling them to understand how programmes differ from projects and how effective programme management supports strategic objectives, governance, stakeholder engagement, and benefits realization.",
    "This course prepares participants for the MSP® Foundation certification examination and provides the knowledge required to contribute effectively to programme management initiatives."
  ],
  "whyHead": "Why Choose MSP® Foundation?",
  "why": [
    "Learn a globally recognized programme management framework",
    "Understand how to manage transformational change",
    "Align programmes with organizational strategy",
    "Improve governance and benefits realization",
    "Build a strong foundation for MSP® Practitioner certification",
    "Enhance career opportunities in programme and portfolio management"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the MSP® Foundation course.",
    "This course is suitable for professionals who are new to programme management as well as those involved in strategic change initiatives."
  ],
  "whoShouldAttend": [
    "Programme Managers",
    "Project Managers",
    "PMO Professionals",
    "Portfolio Managers",
    "Change Managers",
    "Business Transformation Managers",
    "Senior Business Analysts",
    "Delivery Managers",
    "Executives and Senior Leaders",
    "Professionals involved in organizational change"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to MSP®",
      "topics": [
        "Programme Management Fundamentals",
        "Projects vs Programmes",
        "Organizational Transformation",
        "Programme Lifecycle"
      ]
    },
    {
      "title": "Module 2: MSP® Principles",
      "topics": [
        "Remaining aligned with organizational strategy",
        "Leading change",
        "Envisioning and communicating a better future",
        "Focusing on benefits and threats",
        "Adding value",
        "Designing and delivering a coherent capability",
        "Learning from experience"
      ]
    },
    {
      "title": "Module 3: MSP® Governance Themes",
      "topics": [
        "Organization",
        "Design",
        "Justification",
        "Structure",
        "Knowledge",
        "Assurance",
        "Decisions"
      ]
    },
    {
      "title": "Module 4: Transformational Flow",
      "topics": [
        "Identifying a Programme",
        "Designing Outcomes",
        "Planning Progressive Delivery",
        "Delivering Capabilities",
        "Embedding Outcomes",
        "Evaluating New Information",
        "Closing the Programme"
      ]
    },
    {
      "title": "Module 5: Leadership & Stakeholder Engagement",
      "topics": [
        "Programme Leadership",
        "Stakeholder Engagement",
        "Communication Strategy",
        "Governance and Decision-Making"
      ]
    },
    {
      "title": "Module 6: Benefits Management",
      "topics": [
        "Benefits Identification",
        "Benefits Realization",
        "Risk and Issue Management",
        "Continuous Improvement"
      ]
    },
    {
      "title": "Module 7: MSP® Foundation Exam Preparation",
      "topics": [
        "Exam Structure",
        "Sample Questions",
        "Revision Sessions",
        "Exam Strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand MSP® principles, governance themes, and transformational flow",
    "Differentiate between project and programme management",
    "Support successful programme governance",
    "Understand benefits management and stakeholder engagement",
    "Contribute effectively to business transformation initiatives",
    "Prepare confidently for the MSP® Foundation examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "MSP® Foundation (5th Edition)"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
    },
    {
      "label": "Number of Questions",
      "value": "60"
    },
    {
      "label": "Passing Score",
      "value": "60% (36 out of 60)"
    },
    {
      "label": "Exam Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Open Book",
      "value": "No"
    },
    {
      "label": "Delivery",
      "value": "Online Proctored"
    }
  ],
  "courseHighlights": [
    "Based on MSP® 5th Edition",
    "Instructor-led Live Training",
    "Interactive Workshops",
    "Real-world Programme Case Studies",
    "Practice Questions & Mock Exams",
    "Comprehensive Course Material",
    "Post-training Support"
  ],
  "disclaimer": ""
};

export default function MSPFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}