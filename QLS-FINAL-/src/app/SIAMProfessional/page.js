import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SIAM Professional Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master SIAM Professional certification training in Hyderabad. QuickLearn Systems offers expert-led advanced Service Integration and Management training covering multi-supplier governance and ITSM integration. Enroll today!",
  keywords:
    "SIAM Professional training Hyderabad, SIAM Professional certification Hyderabad, best SIAM training institute Hyderabad, SIAM Professional course Hyderabad, service integration management training India, SIAM Professional, Service Integration and Management, advanced SIAM, multi-supplier management, service governance, ITSM integration, vendor coordination, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SIAM Professional Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led SIAM Professional certification training in Hyderabad by QuickLearn Systems",
    images: ["/siam_professional.jpg"],
  },
};

const courseData = {
  "title": "EXIN SIAM™ Practitioner Certificate Training",
  "subtitle": "Lead Enterprise Service Integration and Optimize Multi-Supplier Service Delivery",
  "backgroundImage": "/siam_professional.jpg",
  "overview": [
    "The EXIN SIAM™ Practitioner Certificate is an advanced certification designed for professionals responsible for implementing, operating, and continuously improving Service Integration and Management (SIAM™) within complex enterprise environments.",
    "Building on SIAM Foundation knowledge, this course focuses on applying SIAM concepts in real-world scenarios, including governance, organizational change, process integration, supplier collaboration, service performance management, and continual improvement.",
    "Participants learn how to design and operate an effective SIAM ecosystem, align multiple providers with business objectives, and improve customer outcomes through integrated service management."
  ],
  "whyHead": "Why Choose EXIN SIAM™ Practitioner?",
  "why": [
    "Apply SIAM concepts in enterprise environments",
    "Improve governance across multiple service providers",
    "Design effective SIAM operating models",
    "Strengthen supplier collaboration and performance",
    "Lead SIAM implementation and continual improvement initiatives",
    "Advance your career in service management and governance"
  ],
  "prerequisites": [
    "It is strongly recommended that participants hold the EXIN SIAM™ Foundation Certificate or possess equivalent SIAM knowledge before attending this course.",
    "Experience in IT Service Management, supplier management, or service delivery is beneficial."
  ],
  "whoShouldAttend": [
    "SIAM Professionals",
    "Service Integration Managers",
    "IT Service Managers",
    "Vendor & Supplier Managers",
    "Service Delivery Managers",
    "IT Consultants",
    "Enterprise Architects",
    "IT Governance Professionals",
    "Digital Transformation Managers",
    "Program Managers",
    "Senior IT Leaders"
  ],
  "curriculum": [
    {
      "title": "Module 1: SIAM Strategy & Governance",
      "topics": [
        "SIAM strategic objectives",
        "Governance frameworks",
        "Organizational alignment",
        "Decision-making structures"
      ]
    },
    {
      "title": "Module 2: SIAM Implementation",
      "topics": [
        "Assessment and planning",
        "Transition strategies",
        "Organizational change",
        "Risk management"
      ]
    },
    {
      "title": "Module 3: Service Integration Practices",
      "topics": [
        "Process integration",
        "Cross-provider collaboration",
        "End-to-end service management",
        "Continual improvement"
      ]
    },
    {
      "title": "Module 4: Supplier & Relationship Management",
      "topics": [
        "Supplier performance management",
        "Contract alignment",
        "Relationship management",
        "Collaboration models"
      ]
    },
    {
      "title": "Module 5: Organizational Change Management",
      "topics": [
        "Stakeholder engagement",
        "Communication planning",
        "Change adoption",
        "Cultural transformation"
      ]
    },
    {
      "title": "Module 6: Measurement & Performance",
      "topics": [
        "KPIs and SLAs",
        "XLAs (Experience Level Agreements)",
        "Reporting frameworks",
        "Value realization"
      ]
    },
    {
      "title": "Module 7: Risk, Compliance & Continuous Improvement",
      "topics": [
        "Operational risk management",
        "Compliance considerations",
        "Governance reviews",
        "Improvement planning"
      ]
    },
    {
      "title": "Module 8: Practitioner Exam Preparation",
      "topics": [
        "Scenario-based question techniques",
        "Practice examinations",
        "Revision workshops",
        "Exam strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Design and implement SIAM operating models",
    "Govern complex multi-provider environments",
    "Improve supplier collaboration and accountability",
    "Apply SIAM practices to enterprise service management",
    "Drive continual service improvement",
    "Measure business outcomes using service performance metrics",
    "Lead SIAM transformation initiatives",
    "Prepare successfully for the EXIN SIAM Practitioner examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "EXIN SIAM™ Practitioner Certificate"
    },
    {
      "label": "Exam Format",
      "value": "Scenario-based Multiple Choice"
    },
    {
      "label": "Questions",
      "value": "40"
    },
    {
      "label": "Duration",
      "value": "90 Minutes"
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
      "label": "Delivery",
      "value": "Online Proctored or Authorized Test Center"
    }
  ],
  "courseHighlights": [
    "Latest EXIN SIAM Practitioner syllabus",
    "Scenario-based learning",
    "Enterprise implementation case studies",
    "Interactive workshops",
    "Practical exercises",
    "Practice questions & mock exams",
    "Comprehensive study material",
    "Certification preparation"
  ],
  "disclaimer": "SIAM™, EXIN®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by EXIN."
};


export default function SIAMProfessional() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}