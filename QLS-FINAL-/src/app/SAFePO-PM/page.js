import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe® AI-Empowered Product Owner/Product Manager (POPM) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Deliver Customer-Centric Products at Scale with SAFe® and AI-Driven Product Management",
  openGraph: {
    title: "SAFe® AI-Empowered Product Owner/Product Manager (POPM) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Deliver Customer-Centric Products at Scale with SAFe® and AI-Driven Product Management",
    images: ["/safe_product_owner_manager.jpg"],
  },
};

const courseData = {
  "title": "SAFe® AI-Empowered Product Owner/Product Manager (POPM) 6.0 Certification Training",
  "subtitle": "Deliver Customer-Centric Products at Scale with SAFe® and AI-Driven Product Management",
  "backgroundImage": "/safe_product_owner_manager.jpg",
  "overview": [
    "The SAFe® AI-Empowered Product Owner/Product Manager (POPM) 6.0 course provides Product Owners and Product Managers with the knowledge and skills needed to deliver customer-centric products and solutions using the Scaled Agile Framework® (SAFe®).",
    "This interactive two-day course enables participants to understand their roles in the Agile Release Train (ART), connect strategy to execution, maximize value delivery, and effectively collaborate with Agile teams and stakeholders. Participants learn how to manage backlogs, define and prioritize features, prepare for and participate in Program Increment (PI) Planning, and support continuous value delivery.",
    "The course also introduces AI-enabled practices that help Product Owners and Product Managers improve decision-making, prioritization, forecasting, customer insights, and product strategy within modern digital enterprises.",
    "Upon successful completion of the course and certification exam, participants earn the globally recognized SAFe® AI-Empowered Product Owner/Product Manager (POPM) certification."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn the role of Product Owner and Product Manager in SAFe®",
    "Improve product strategy, backlog management, and prioritization skills",
    "Understand how to work effectively with Agile teams and stakeholders",
    "Gain practical knowledge of PI Planning and value delivery",
    "Explore how AI can support better product decisions",
    "Prepare for a globally recognized SAFe® certification"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, the following experience is highly recommended:",
    "Familiarity with Agile concepts and principles",
    "Experience working in Agile teams",
    "Knowledge of Scrum, Kanban, or Lean practices",
    "Experience in Product Management, Product Ownership, Business Analysis, Project Management, or related roles"
  ],
  "whoShouldAttend": [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Business Owners",
    "Agile Coaches",
    "Scrum Masters",
    "Release Train Engineers (RTEs)",
    "Program and Project Managers",
    "anyone involved in product strategy",
    "backlog management",
    "or value delivery within a SAFe environment"
  ],
  "curriculum": [
    {
      "title": "1. Applying SAFe® in the Enterprise",
      "topics": [
        "Introducing SAFe® and Business Agility",
        "Lean-Agile mindset and principles",
        "Customer-centricity and Design Thinking",
        "The role of Product Owners and Product Managers in SAFe®"
      ]
    },
    {
      "title": "2. Connecting Customer Needs to Product Strategy",
      "topics": [
        "Understanding customer needs",
        "Defining product vision and solution vision",
        "Developing product strategy",
        "Creating roadmaps and aligning stakeholders"
      ]
    },
    {
      "title": "3. Preparing for Program Increment (PI) Planning",
      "topics": [
        "Understanding Program Increment Planning",
        "Creating and refining features",
        "Prioritizing work using economic frameworks",
        "Managing the Program Backlog",
        "Applying WSJF (Weighted Shortest Job First)"
      ]
    },
    {
      "title": "4. Leading Program Increment (PI) Planning",
      "topics": [
        "Communicating vision and priorities",
        "Collaborating with stakeholders and teams",
        "Establishing PI Objectives",
        "Managing dependencies and risks",
        "Supporting ART alignment"
      ]
    },
    {
      "title": "5. Executing Iterations",
      "topics": [
        "Writing effective user stories",
        "Story mapping techniques",
        "Managing Team Backlogs",
        "Backlog refinement and prioritization",
        "Supporting Agile team execution"
      ]
    },
    {
      "title": "6. Delivering Value During the PI",
      "topics": [
        "Participating in PO Sync events",
        "Monitoring progress toward objectives",
        "System Demos and feedback loops",
        "Managing scope and stakeholder expectations",
        "Measuring value delivery"
      ]
    },
    {
      "title": "7. Continuous Delivery and Release on Demand",
      "topics": [
        "Continuous Delivery Pipeline",
        "DevOps culture and practices",
        "Release on Demand",
        "Supporting Built-In Quality",
        "Enabling continuous value delivery"
      ]
    },
    {
      "title": "8. Applying AI-Empowered Product Management Practices",
      "topics": [
        "AI-assisted product discovery",
        "AI-supported backlog prioritization",
        "Leveraging AI for forecasting and planning",
        "AI-enabled customer insights and analytics",
        "Enhancing collaboration and productivity with AI",
        "Responsible use of AI in product management"
      ]
    }
  ],
  "learningOutcomes": [
    "What Will You Learn?",
    "By the end of this course, participants will be able to:",
    "Apply Lean-Agile principles and SAFe® practices to product management",
    "Explain the roles and responsibilities of Product Owners and Product Managers within SAFe®",
    "Connect customer needs to product strategy and execution",
    "Define and communicate product vision and roadmaps",
    "Create, prioritize, and manage Features and User Stories",
    "Apply WSJF and other economic prioritization techniques",
    "Effectively prepare for and participate in Program Increment (PI) Planning",
    "Manage Team and Program Backlogs",
    "Collaborate effectively with Agile Release Trains (ARTs)",
    "Support continuous delivery and Release on Demand",
    "Utilize AI-enabled practices to improve planning, prioritization, customer insights, and decision-making",
    "Drive continuous value delivery and business outcomes"
  ],
  "certificationHeading": "Certification Exam Details",
  "certification": [
    {
      "label": "",
      "value": "SAFe® AI-Empowered Product Owner/Product Manager (POPM) Exam"
    },
    {
      "label": "Certification",
      "value": "SAFe® AI-Empowered Product Owner/Product Manager (POPM)"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice and Multiple Select"
    },
    {
      "label": "Number of Questions",
      "value": "45"
    },
    {
      "label": "Exam Duration",
      "value": "90 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "80%"
    },
    {
      "label": "Delivery",
      "value": "Web-Based, Closed Book, No Outside Assistance"
    },
    {
      "label": "Exam Access",
      "value": "Available through SAFe Studio™ after course completion"
    },
    {
      "label": "Exam Attempts Included",
      "value": "First two attempts are included if taken within 60 days of course completion"
    },
    {
      "label": "Language",
      "value": "English"
    },
    {
      "label": "Certification Validity",
      "value": "Annual renewal through Scaled Agile"
    },
    {
      "label": "",
      "value": "What You Receive"
    },
    {
      "label": "Upon successful certification, participants receive",
      "value": ""
    },
    {
      "label": "",
      "value": "SAFe® AI-Empowered Product Owner/Product Manager digital certificate"
    },
    {
      "label": "",
      "value": "Digital badge for professional networking and social media"
    },
    {
      "label": "",
      "value": "One-year access to SAFe Studio™ membership resources"
    },
    {
      "label": "",
      "value": "Practice exams and study materials"
    },
    {
      "label": "",
      "value": "Eligibility to earn PMI PDUs and Scrum Education Units (SEUs)"
    },
    {
      "label": "",
      "value": "Recognition as a certified Product Owner/Product Manager capable of delivering customer-centric solutions at scale"
    },
    {
      "label": "",
      "value": "Renewal Information"
    },
    {
      "label": "",
      "value": "Certification requires annual renewal through Scaled Agile."
    },
    {
      "label": "",
      "value": "Active members maintain access to SAFe Studio™ resources, learning content, and certification benefits."
    },
    {
      "label": "",
      "value": "Holders of existing SAFe® POPM certifications may be eligible for AI-Empowered credential enhancements as provided by Scaled Agile."
    }
  ],
  "courseHighlights": [
    "SAFe® AI-Empowered POPM 6.0 training",
    "Instructor-led interactive sessions",
    "Practical exercises and examples",
    "PI Planning and backlog management guidance",
    "AI-enabled product management concepts",
    "Exam preparation support",
    "Study materials and practice support"
  ],
  "disclaimer": "SAFe®, Scaled Agile Framework®, SAFe Agilist®, Product Owner/Product Manager®, and all related trademarks are the property of Scaled Agile, Inc. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction."
};

export default function SAFePOPMPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
