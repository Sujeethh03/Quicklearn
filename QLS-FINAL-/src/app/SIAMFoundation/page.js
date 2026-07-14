import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SIAM Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master SIAM Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led Service Integration and Management training covering multi-vendor environments, governance, and best practices. Enroll today!",
  keywords: "SIAM Foundation training Hyderabad, SIAM certification Hyderabad, best SIAM training institute Hyderabad, service integration management course Hyderabad, SIAM training India, SIAM Foundation, Service Integration and Management, multi-vendor management, service integration, SIAM methodology, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SIAM Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led SIAM Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/siam_foundation.jpg"],
  },
};

const courseData = {
  "title": "EXIN SIAM™ Foundation Certificate Training",
  "subtitle": "Master Service Integration and Management to Deliver Seamless Multi-Supplier IT Services",
  "backgroundImage": "/siam_foundation.jpg",
  "overview": [
    "The EXIN SIAM™ Foundation Certificate provides a comprehensive introduction to Service Integration and Management (SIAM™), a management methodology used to coordinate multiple service providers and internal teams to deliver integrated, business-focused IT services.",
    "As organizations increasingly adopt hybrid IT environments involving cloud providers, managed service providers, SaaS vendors, and internal IT teams, SIAM provides the governance, processes, and operating model needed to ensure seamless collaboration and end-to-end service delivery.",
    "Aligned with the latest EXIN SIAM Foundation Body of Knowledge, this course introduces participants to SIAM principles, governance, service integration, process management, organizational structures, tooling, and implementation approaches. Participants gain practical knowledge of how SIAM enables organizations to improve service quality, reduce operational complexity, and increase business value."
  ],
  "whyHead": "Why Choose EXIN SIAM™ Foundation?",
  "why": [
    "Learn globally recognized SIAM principles and best practices",
    "Understand how to manage multiple service providers effectively",
    "Improve service quality and governance",
    "Enable seamless collaboration across supplier ecosystems",
    "Support digital transformation initiatives",
    "Build a strong foundation for advanced SIAM roles"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, a basic understanding of IT Service Management, ITIL®, Agile, project management, or IT operations is beneficial."
  ],
  "whoShouldAttend": [
    "IT Service Managers",
    "Service Delivery Managers",
    "Vendor Managers",
    "Supplier Managers",
    "IT Operations Professionals",
    "Service Desk Managers",
    "IT Consultants",
    "Program & Project Managers",
    "Enterprise Architects",
    "IT Governance Professionals",
    "Digital Transformation Leaders",
    "Anyone working in multi-supplier environments"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to SIAM",
      "topics": [
        "What is SIAM?",
        "Business drivers",
        "SIAM terminology",
        "SIAM values and principles",
        "Benefits of SIAM"
      ]
    },
    {
      "title": "Module 2: SIAM Implementation Roadmap",
      "topics": [
        "Discovery",
        "Assessment",
        "Planning",
        "Implementation",
        "Continuous improvement"
      ]
    },
    {
      "title": "Module 3: SIAM Governance",
      "topics": [
        "Governance structures",
        "Policies",
        "Decision-making",
        "Service accountability",
        "Performance governance"
      ]
    },
    {
      "title": "Module 4: SIAM Roles & Responsibilities",
      "topics": [
        "Service Integrator",
        "Service Providers",
        "Customer Organization",
        "Process Owners",
        "Functional Responsibilities"
      ]
    },
    {
      "title": "Module 5: SIAM Practices & Processes",
      "topics": [
        "Incident Management",
        "Change Enablement",
        "Problem Management",
        "Service Level Management",
        "Knowledge Management",
        "Continual Improvement"
      ]
    },
    {
      "title": "Module 6: Organizational Structures",
      "topics": [
        "Internal Service Integrator",
        "External Service Integrator",
        "Hybrid SIAM Models",
        "Multi-provider Collaboration"
      ]
    },
    {
      "title": "Module 7: Measurement & Reporting",
      "topics": [
        "KPIs",
        "Service Performance",
        "Supplier Performance",
        "Customer Satisfaction",
        "Value Measurement"
      ]
    },
    {
      "title": "Module 8: Tools & Technology",
      "topics": [
        "Service Management Platforms",
        "Automation",
        "Integration Tools",
        "Reporting Dashboards",
        "Collaboration Platforms"
      ]
    }
  ],
  "learningOutcomes": [
    "Explain SIAM principles and concepts",
    "Understand SIAM governance models",
    "Coordinate multiple service providers effectively",
    "Apply SIAM practices in enterprise environments",
    "Measure service performance and business value",
    "Support SIAM implementation initiatives",
    "Prepare confidently for the EXIN SIAM Foundation examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "EXIN SIAM™ Foundation Certificate"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
    },
    {
      "label": "Questions",
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
      "label": "Delivery",
      "value": "Online Proctored or Authorized Test Center"
    }
  ],
  "courseHighlights": [
    "Latest EXIN SIAM Foundation syllabus",
    "Instructor-led live training",
    "Practical case studies",
    "Real-world implementation examples",
    "Interactive workshops",
    "Practice questions & mock exams",
    "Comprehensive study materials",
    "Certification exam preparation"
  ],
  "disclaimer": "SIAM™, EXIN®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by EXIN."
};

export default function SIAMFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}