import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master PRINCE2 Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led training covering PRINCE2 application, tailoring, and advanced project management skills. Enroll today!",
  keywords: "PRINCE2 Practitioner training Hyderabad, PRINCE2 Practitioner certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Practitioner course Hyderabad, project management training India, PRINCE2 Practitioner, advanced project management, PRINCE2 application, project tailoring, project leadership, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led PRINCE2 Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/prince2_practitioner.jpg"],
  },
};

const courseData = {
  "title": "PRINCE2® Practitioner Certification Training (Version 7)",
  "subtitle": "Apply PRINCE2® to Successfully Manage Projects in Real-World Environments",
  "backgroundImage": "/prince2_practitioner.jpg",
  "overview": [
    "The PRINCE2® Practitioner (Version 7) certification is designed for project managers and professionals who want to apply the PRINCE2® methodology to manage projects successfully in real-world environments.",
    "Building upon the Foundation level, this course focuses on applying and tailoring the PRINCE2 methodology to different project contexts, organizational structures, and delivery approaches. Participants learn how to adapt PRINCE2 practices, processes, and principles to effectively manage projects while maintaining governance, business justification, and value delivery.",
    "The latest PRINCE2® Version 7 introduces enhanced guidance on People Management, Sustainability, Digital & Data Management, Commercial Management, and tailoring PRINCE2 for modern project environments.",
    "This course prepares participants to confidently pass the PRINCE2® Practitioner examination and apply PRINCE2 effectively in their organizations."
  ],
  "whyHead": "Why Choose PRINCE2® Practitioner?",
  "why": [
    "Build practical project management expertise",
    "Learn how to tailor PRINCE2® for different project environments",
    "Improve project governance and control",
    "Strengthen stakeholder engagement and leadership skills",
    "Deliver projects aligned with business objectives",
    "Enhance your career with a globally recognized project management certification"
  ],
  "prerequisites": [
    "To take the PRINCE2® Practitioner examination, candidates must hold one of the following certifications:",
    "PRINCE2® Foundation (Version 7 or earlier versions)",
    "Project Management Professional (PMP®)",
    "Certified Associate in Project Management (CAPM®)",
    "IPMA® Level A, B, C, or D",
    "Other recognized prerequisites as specified by PeopleCert."
  ],
  "whoShouldAttend": [
    "Project Managers",
    "Senior Project Managers",
    "Program Managers",
    "PMO Professionals",
    "Project Consultants",
    "Delivery Managers",
    "Change Managers",
    "Project Team Leaders",
    "Portfolio Managers",
    "Professionals responsible for managing projects using PRINCE2®"
  ],
  "curriculum": [
    {
      "title": "Module 1: Applying PRINCE2 Principles",
      "topics": [
        "Applying the seven principles",
        "Business justification",
        "Tailoring principles for different project environments"
      ]
    },
    {
      "title": "Module 2: Applying PRINCE2 Practices",
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
      "title": "Module 3: Applying PRINCE2 Processes",
      "topics": [
        "Starting Up a Project",
        "Directing a Project",
        "Initiating a Project",
        "Controlling a Stage",
        "Managing Product Delivery",
        "Managing Stage Boundaries",
        "Closing a Project"
      ]
    },
    {
      "title": "Module 4: Tailoring PRINCE2®",
      "topics": [
        "Tailoring governance",
        "Tailoring roles and responsibilities",
        "Tailoring management products",
        "Tailoring for project scale and complexity",
        "Tailoring for Agile and hybrid delivery"
      ]
    },
    {
      "title": "Module 5: People in Projects",
      "topics": [
        "Leadership",
        "Communication",
        "Stakeholder engagement",
        "Team performance",
        "Conflict resolution"
      ]
    },
    {
      "title": "Module 6: Modern Project Context",
      "topics": [
        "Sustainability considerations",
        "Commercial management",
        "Digital and data management",
        "Organizational change",
        "Benefits realization"
      ]
    },
    {
      "title": "Module 7: Practitioner Exam Preparation",
      "topics": [
        "Scenario-based application",
        "Sample practitioner questions",
        "Exam techniques",
        "Time management",
        "Revision sessions"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply PRINCE2® principles in real-world projects",
    "Tailor PRINCE2® to suit different organizational environments",
    "Manage risks, quality, issues, and project progress",
    "Lead project teams effectively",
    "Apply governance throughout the project lifecycle",
    "Deliver projects aligned with business objectives",
    "Successfully prepare for the PRINCE2® Practitioner examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "PRINCE2® Practitioner (Version 7)"
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
      "value": "Yes (Official PRINCE2® 7 Manual)"
    },
    {
      "label": "Delivery",
      "value": "Online Proctored"
    }
  ],
  "courseHighlights": [
    "Aligned with PRINCE2® Version 7",
    "Instructor-led Live Training",
    "Scenario-Based Learning",
    "Practical Project Case Studies",
    "Official Practice Exams",
    "Tailoring Workshops",
    "Comprehensive Exam Preparation",
    "Post-training Support"
  ],
  "disclaimer": "PRINCE2®, PRINCE2 Agile®, MSP®, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners."
};

export default function Prince2PractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}