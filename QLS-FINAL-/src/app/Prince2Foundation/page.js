import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master PRINCE2 Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led training covering PRINCE2 principles, themes, and processes for structured project management. Enroll today!",
  keywords: "PRINCE2 Foundation training Hyderabad, PRINCE2 Foundation certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Foundation course Hyderabad, project management training India, PRINCE2 Foundation, project management, PRINCE2 certification, structured methodology, project control, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led PRINCE2 Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/prince2_foundation.jpg"],
  },
};

const courseData = {
  "title": "PRINCE2® Foundation Certification Training (Version 7)",
  "subtitle": "Learn the World's Leading Project Management Methodology",
  "backgroundImage": "/prince2_foundation.jpg",
  "overview": [
    "PRINCE2® (Projects IN Controlled Environments) is one of the world's most widely adopted project management methodologies. It provides a structured, scalable, and proven approach for managing projects of any size, industry, or complexity.",
    "The PRINCE2® Foundation (Version 7) course introduces participants to the principles, practices, processes, and people-focused approach that make PRINCE2 one of the most effective project management frameworks used by organizations worldwide.",
    "The latest PRINCE2® 7 update emphasizes People Management, Sustainability, Digital & Data Management, Commercial Management, and tailoring the methodology to different project environments while maintaining the proven governance structure that PRINCE2 is known for.",
    "This course prepares participants to successfully pass the PRINCE2® Foundation examination and provides the knowledge required to work effectively within a PRINCE2 project environment."
  ],
  "whyHead": "Why Choose PRINCE2® Foundation?",
  "why": [
    "Globally recognized project management certification",
    "Applicable across all industries and sectors",
    "Structured and scalable project management methodology",
    "Supports predictive, agile, and hybrid project environments",
    "Strong focus on governance, business justification, and value delivery",
    "Excellent complement to Agile and PMP® certifications"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the PRINCE2® Foundation course.",
    "The course is suitable for beginners as well as experienced professionals who want to build a strong foundation in structured project management.",
    "Basic knowledge of projects or project environments is beneficial but not required."
  ],
  "whoShouldAttend": [
    "Project Managers",
    "Associate Project Managers",
    "Project Coordinators",
    "PMO Professionals",
    "Team Leads",
    "Delivery Managers",
    "Business Analysts",
    "Consultants",
    "Engineers",
    "IT Professionals",
    "Aspiring Project Managers",
    "anyone working in project environments"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to PRINCE2®",
      "topics": [
        "What is PRINCE2?",
        "Benefits of PRINCE2",
        "Project characteristics",
        "Project environment",
        "Integrated elements of PRINCE2"
      ]
    },
    {
      "title": "Module 2: PRINCE2 Principles",
      "topics": [
        "Ensure continued business justification",
        "Learn from experience",
        "Define roles, responsibilities, and relationships",
        "Manage by stages",
        "Manage by exception",
        "Focus on products",
        "Tailor to suit the project"
      ]
    },
    {
      "title": "Module 3: People",
      "topics": [
        "Leading successful teams",
        "Communication",
        "Stakeholder engagement",
        "Organizational change",
        "Collaboration",
        "Team performance"
      ]
    },
    {
      "title": "Module 4: PRINCE2 Practices",
      "topics": [
        "Business Case",
        "Organizing",
        "Plans",
        "Quality",
        "Risk",
        "Issues",
        "Progress"
      ]
    },
    {
      "title": "Module 5: PRINCE2 Processes",
      "topics": [
        "Starting Up a Project",
        "Directing a Project",
        "Initiating a Project",
        "Controlling a Stage",
        "Managing Product Delivery",
        "Managing a Stage Boundary",
        "Closing a Project"
      ]
    },
    {
      "title": "Module 6: Project Context",
      "topics": [
        "Commercial Management",
        "Sustainability",
        "Data Management",
        "Digital and Technology Considerations",
        "Organizational Context"
      ]
    },
    {
      "title": "Module 7: Tailoring PRINCE2®",
      "topics": [
        "Tailoring for project size",
        "Tailoring for project complexity",
        "Tailoring for Agile environments",
        "Tailoring governance",
        "Best practices"
      ]
    },
    {
      "title": "Module 8: PRINCE2® Foundation Exam Preparation",
      "topics": [
        "Exam structure",
        "Question analysis",
        "Sample papers",
        "Exam strategies",
        "Revision sessions"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand the PRINCE2® methodology and terminology",
    "Explain the seven PRINCE2 principles",
    "Apply the seven practices throughout the project lifecycle",
    "Understand the seven PRINCE2 processes",
    "Recognize project roles and responsibilities",
    "Tailor PRINCE2® for different organizational environments",
    "Support successful project delivery using PRINCE2®",
    "Prepare confidently for the PRINCE2® Foundation examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "PRINCE2® Foundation (Version 7)"
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
    },
    {
      "label": "Prerequisite for Exam",
      "value": "None"
    }
  ],
  "courseHighlights": [
    "Aligned with PRINCE2® Version 7",
    "Instructor-led Live Training",
    "Comprehensive Course Material",
    "Practical Examples and Case Studies",
    "Exam Preparation Sessions",
    "Mock Tests",
    "Real-world Project Scenarios",
    "Post-training Support"
  ],
  "disclaimer": "PRINCE2®, PRINCE2 Agile®, MSP®, ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners."
};

export default function Prince2FoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}