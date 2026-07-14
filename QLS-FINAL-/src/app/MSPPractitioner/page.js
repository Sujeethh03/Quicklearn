import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "MSP Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master MSP Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led Managing Successful Programmes Practitioner training covering program coordination, benefits management, and strategic outcomes. Enroll today!",
  keywords:
    "MSP Practitioner training Hyderabad, Managing Successful Programmes certification Hyderabad, best MSP training institute Hyderabad, MSP Practitioner course Hyderabad, programme management training India, MSP Practitioner, Managing Successful Programmes, MSP, Program Management, Benefits Management, Project Coordination, Governance, Strategic Programmes, MSP Certification, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "MSP Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led MSP Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/msp_practitioner.jpg"],
  },
};

const courseData = {
  "title": "Managing Successful Programmes (MSP®) Practitioner Certification Training (5th Edition)",
  "subtitle": "Apply MSP® to Successfully Deliver Strategic Programmes and Organizational Change",
  "backgroundImage": "/msp_practitioner.jpg",
  "overview": [
    "The MSP® Practitioner (5th Edition) certification is designed for professionals responsible for managing programmes, leading organizational transformation, and delivering strategic business outcomes.",
    "Building upon the Foundation level, this course focuses on applying and tailoring the MSP framework in real-world programme environments. Participants learn how to establish programme governance, manage benefits realization, engage stakeholders, oversee multiple projects, and successfully deliver transformational change.",
    "Using scenario-based learning and practical case studies, participants develop the skills required to apply MSP principles, governance themes, and transformational flow in complex organizational settings.",
    "This course prepares participants to successfully pass the MSP® Practitioner certification examination and confidently lead strategic programmes."
  ],
  "whyHead": "Why Choose MSP® Practitioner?",
  "why": [
    "Apply MSP® in real-world programme environments",
    "Lead large-scale business transformation initiatives",
    "Strengthen programme governance and strategic alignment",
    "Improve stakeholder engagement and benefits realization",
    "Enhance leadership in complex organizational change",
    "Earn a globally recognized programme management certification"
  ],
  "prerequisites": [
    "To take the MSP® Practitioner examination, candidates must hold a valid MSP® Foundation certification."
  ],
  "whoShouldAttend": [
    "Programme Managers",
    "Senior Project Managers",
    "Portfolio Managers",
    "PMO Directors",
    "Business Transformation Managers",
    "Change Managers",
    "Enterprise Architects",
    "Senior Consultants",
    "Executives responsible for strategic initiatives",
    "Professionals managing multiple related projects"
  ],
  "curriculum": [
    {
      "title": "Module 1: Applying MSP® Principles",
      "topics": [
        "Applying programme principles",
        "Strategic alignment",
        "Organizational governance",
        "Leading transformational change"
      ]
    },
    {
      "title": "Module 2: Applying Governance Themes",
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
      "title": "Module 3: Applying the Transformational Flow",
      "topics": [
        "Identifying the Programme",
        "Designing Outcomes",
        "Planning Delivery",
        "Delivering Capabilities",
        "Embedding Outcomes",
        "Evaluating Progress",
        "Programme Closure"
      ]
    },
    {
      "title": "Module 4: Benefits Realization",
      "topics": [
        "Benefits Mapping",
        "Measuring Benefits",
        "Benefits Tracking",
        "Continuous Value Delivery"
      ]
    },
    {
      "title": "Module 5: Managing Stakeholders & Risk",
      "topics": [
        "Stakeholder Engagement",
        "Communication Planning",
        "Programme Risk Management",
        "Issue Resolution",
        "Governance Reporting"
      ]
    },
    {
      "title": "Module 6: Tailoring MSP®",
      "topics": [
        "Tailoring governance",
        "Organizational culture",
        "Programme complexity",
        "Hybrid delivery environments"
      ]
    },
    {
      "title": "Module 7: Practitioner Exam Preparation",
      "topics": [
        "Scenario-Based Questions",
        "Practice Examinations",
        "Exam Strategies",
        "Revision Sessions"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply MSP® principles to real-world programme management",
    "Lead strategic transformation programmes",
    "Tailor MSP® to different organizational environments",
    "Establish effective programme governance",
    "Manage benefits realization throughout the programme lifecycle",
    "Engage stakeholders and manage programme risks effectively",
    "Prepare confidently for the MSP® Practitioner examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "MSP® Practitioner (5th Edition)"
    },
    {
      "label": "Exam Format",
      "value": "Objective Testing (Scenario-Based)"
    },
    {
      "label": "Number of Questions",
      "value": "70"
    },
    {
      "label": "Passing Score",
      "value": "60% (42 out of 70)"
    },
    {
      "label": "Exam Duration",
      "value": "150 Minutes"
    },
    {
      "label": "Open Book",
      "value": "Yes (Official MSP® Manual)"
    },
    {
      "label": "Delivery",
      "value": "Online Proctored"
    }
  ],
  "courseHighlights": [
    "Based on MSP® 5th Edition",
    "Instructor-led Live Training",
    "Scenario-Based Learning",
    "Real-world Programme Simulations",
    "Practice Exams",
    "Comprehensive Course Material",
    "Post-training Mentor Support"
  ],
  "disclaimer": "MSP®, PRINCE2®, PRINCE2 Agile®, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners."
};

export default function MSPPractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
