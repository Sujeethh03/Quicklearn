import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Project Management Professional (PMP®) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead Projects with Confidence Using the World's Most Recognized Project Management Certification",
  openGraph: {
    title: "Project Management Professional (PMP®) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead Projects with Confidence Using the World's Most Recognized Project Management Certification",
    images: ["/pmp_certification.jpg"],
  },
};

const courseData = {
  "title": "Project Management Professional (PMP®) Certification Training",
  "subtitle": "Lead Projects with Confidence Using the World's Most Recognized Project Management Certification",
  "backgroundImage": "/pmp_certification.jpg",
  "overview": [
    "The Project Management Professional (PMP®) certification from the Project Management Institute (PMI®) is the world's most recognized project management credential. It validates your ability to lead projects, teams, and business initiatives using predictive, agile, and hybrid delivery approaches.",
    "Our comprehensive PMP® Certification Training is aligned with the latest PMI Examination Content Outline (ECO) and PMBOK® Guide – Eighth Edition. The course prepares professionals to successfully pass the PMP certification exam while developing practical project leadership skills required in today's AI-enabled, value-driven business environment.",
    "Whether you manage software projects, infrastructure programs, digital transformation initiatives, or business operations, this course equips you with globally accepted project management practices and real-world application techniques."
  ],
  "whyHead": "Why Choose PMP® Certification?",
  "why": [
    "Earning the PMP® certification demonstrates your ability to:",
    "Lead projects using predictive, agile, and hybrid approaches",
    "Deliver measurable business value and strategic outcomes",
    "Manage stakeholders across complex environments",
    "Apply modern project leadership techniques",
    "Integrate AI-enabled tools into project planning and delivery",
    "Navigate uncertainty, change, and organizational transformation",
    "Enhance career growth and global employment opportunities"
  ],
  "prerequisites": [
    "Training Prerequisites",
    "There are no mandatory prerequisites to attend the PMP® Certification Training. Anyone interested in developing project management knowledge and preparing for the PMP® certification exam is welcome to enroll.",
    "However, a basic understanding of project management concepts and experience working on projects will help participants gain maximum value from the training.",
    "PMP® Certification Exam Eligibility",
    "To apply for the PMP® certification exam, candidates must meet one of the following eligibility requirements established by the Project Management Institute (PMI®):",
    "Option 1 – Four-Year Degree",
    "Bachelor's degree or global equivalent",
    "Minimum 36 months of experience leading or directing projects within the past eight years",
    "35 hours of formal project management education/training or a valid Certified Associate in Project Management (CAPM®) certification",
    "Option 2 – Secondary Degree",
    "High school diploma, associate degree, or global equivalent",
    "Minimum 60 months of experience leading or directing projects within the past eight years",
    "35 hours of formal project management education/training or a valid CAPM® certification"
  ],
  "whoShouldAttend": [
    "Project Managers",
    "Program Managers",
    "Delivery Managers",
    "PMO Professionals",
    "Technical Leads",
    "Team Leads",
    "Product Managers",
    "Engineering Managers",
    "Consultants",
    "Business Analysts",
    "Project Coordinators Professionals aspiring to become certified Project Managers"
  ],
  "curriculum": [
    {
      "title": "Module 1: Foundations of Modern Project Management",
      "topics": [
        "Project management principles",
        "Value-driven project delivery",
        "Business agility",
        "Project life cycles",
        "Project performance domains"
      ]
    },
    {
      "title": "Module 2: Leadership and High-Performing Teams",
      "topics": [
        "Building effective teams",
        "Servant leadership",
        "Emotional intelligence",
        "Conflict management",
        "Team motivation and collaboration"
      ]
    },
    {
      "title": "Module 3: Stakeholder Engagement",
      "topics": [
        "Stakeholder identification",
        "Communication planning",
        "Negotiation and influence",
        "Managing expectations",
        "Customer and sponsor engagement"
      ]
    },
    {
      "title": "Module 4: Planning for Success",
      "topics": [
        "Project planning",
        "Scope management",
        "Schedule development",
        "Cost estimation",
        "Resource planning",
        "Procurement planning"
      ]
    },
    {
      "title": "Module 5: Managing Project Delivery",
      "topics": [
        "Executing project work",
        "Managing quality",
        "Risk and issue management",
        "Monitoring and controlling",
        "Change management"
      ]
    },
    {
      "title": "Module 6: Agile & Hybrid Project Management",
      "topics": [
        "Agile principles",
        "Scrum fundamentals",
        "Kanban",
        "Hybrid delivery models",
        "Adaptive planning"
      ]
    },
    {
      "title": "Module 7: Business Value & Strategic Alignment",
      "topics": [
        "Benefits realization",
        "Value delivery",
        "Product thinking",
        "Portfolio alignment",
        "Organizational strategy"
      ]
    },
    {
      "title": "Module 8: AI, Sustainability & Emerging Practices",
      "topics": [
        "AI-assisted project management",
        "Responsible AI adoption",
        "Sustainability in project delivery",
        "Data-driven decision making",
        "Digital transformation projects"
      ]
    },
    {
      "title": "Module 9: PMP® Exam Preparation",
      "topics": [
        "Latest PMP exam structure",
        "Scenario-based questions",
        "Mock examinations",
        "Exam-taking strategies",
        "Application and audit guidance"
      ]
    }
  ],
  "learningOutcomes": [
    "Lead projects using predictive, agile, and hybrid methodologies",
    "Build and manage high-performing project teams",
    "Deliver projects aligned with organizational strategy and business value",
    "Apply modern project management principles and performance domains",
    "Manage risk, uncertainty, and stakeholder expectations effectively",
    "Utilize AI-enabled tools to improve planning, reporting, and decision-making",
    "Prepare confidently for the latest PMP® certification examination",
    "PMP® Exam Information"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "Certification",
      "value": "Project Management Professional (PMP®)"
    },
    {
      "label": "Exam Provider",
      "value": "Project Management Institute (PMI®)"
    },
    {
      "label": "Exam Duration",
      "value": "230 Minutes"
    },
    {
      "label": "Questions",
      "value": "180"
    },
    {
      "label": "Question Types",
      "value": "Multiple Choice, Multiple Response, Matching, Hotspot, Fill-in-the-Blank, and other scenario-based formats"
    },
    {
      "label": "Delivery",
      "value": "Pearson VUE Test centres or Online Proctored"
    },
    {
      "label": "Approach Covered",
      "value": "Predictive, Agile, and Hybrid"
    },
    {
      "label": "Eligibility",
      "value": "As defined by PMI®"
    }
  ],
  "courseHighlights": [
    "Latest PMP® Exam Preparation (July 2026)",
    "Based on PMBOK® Guide – Eighth Edition",
    "35 Contact Hours Certificate",
    "Instructor-led Live Training",
    "Real-world Case Studies",
    "Agile, Hybrid & Predictive Project Management",
    "AI and Digital Project Management Concepts",
    "Mock Exams & Practice Questions",
    "Application Guidance for PMP® Certification",
    "Comprehensive Study Material",
    "Post-training Support"
  ],
  "disclaimer": "PMP®, PMI®, PMBOK®, Project Management Professional®, and all related trademarks are the property of the Project Management Institute, Inc. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PMI®. All trademarks are the property of their respective owners."
};

export default function PMPPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
