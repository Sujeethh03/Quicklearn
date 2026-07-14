import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner™ I (PSPO I) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Create Customer Value Through Effective Product Ownership and Agile Product Management",
  openGraph: {
    title: "Professional Scrum Product Owner™ I (PSPO I) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Create Customer Value Through Effective Product Ownership and Agile Product Management",
    images: ["/professional_scrum_product_owner_1.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Product Owner™ I (PSPO I) Certification Training",
  "subtitle": "Create Customer Value Through Effective Product Ownership and Agile Product Management",
  "backgroundImage": "/professional_scrum_product_owner_1.jpg",
  "overview": [
    "Professional Scrum Product Owner™ I (PSPO I) provides participants with a comprehensive understanding of the Product Owner accountability and how Product Owners maximize product value using Scrum.",
    "Participants learn product strategy, stakeholder management, value-driven delivery, backlog management, and customer-centric product development."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn the Product Owner role in a simple way",
    "Understand how to get the most value from a product",
    "Improve how you manage and prioritize the product backlog",
    "Learn how to work better with stakeholders and teams",
    "Build skills in product vision, strategy, and planning",
    "Prepare for the PSPO I certification exam",
    "Become more confident in product ownership"
  ],
  "prerequisites": [
    "No mandatory prerequisites. Recommended:",
    "Basic Scrum knowledge",
    "Product development experience",
    "Business or stakeholder-facing experience"
  ],
  "whoShouldAttend": [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Scrum Masters",
    "Project Managers",
    "Product Leaders",
    "Entrepreneurs"
  ],
  "curriculum": [
    {
      "title": "Understanding Product Ownership",
      "topics": [
        "Product Owner Accountability",
        "Product Value",
        "Product Goals",
        "Stakeholder Management"
      ]
    },
    {
      "title": "Product Backlog Management",
      "topics": [
        "Backlog Creation",
        "Refinement",
        "Prioritization",
        "Transparency"
      ]
    },
    {
      "title": "Value Delivery",
      "topics": [
        "Measuring Value",
        "Product Metrics",
        "Outcomes vs Outputs",
        "Customer Feedback"
      ]
    },
    {
      "title": "Product Strategy",
      "topics": [
        "Vision",
        "Roadmaps",
        "Market Understanding",
        "Business Strategy Alignment"
      ]
    },
    {
      "title": "Working with Scrum Teams",
      "topics": [
        "Sprint Planning",
        "Reviews",
        "Collaboration",
        "Increment Inspection"
      ]
    }
  ],
  "learningOutcomes": [
    "Maximize product value",
    "Manage Product Backlogs effectively",
    "Create Product Goals",
    "Collaborate with stakeholders",
    "Use metrics to guide decisions",
    "Deliver customer-centric products"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Exam"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Product Owner™ I (PSPO I)"
    },
    {
      "label": "Questions",
      "value": "80"
    },
    {
      "label": "Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "85%"
    },
    {
      "label": "Delivery",
      "value": "Online"
    },
    {
      "label": "Language",
      "value": "English"
    },
    {
      "label": "",
      "value": "Lifetime certification - no annual renewal fee required"
    },
    {
      "label": "",
      "value": "Free Credly digital credential included"
    }
  ],
  "courseHighlights": [
    "Comprehensive coverage of the PSPO I syllabus",
    "Instructor-led interactive training",
    "Practical examples and real-world product scenarios",
    "Focus on product ownership, value delivery, and stakeholder collaboration",
    "Backlog management and prioritization techniques",
    "Product strategy, vision, and roadmap planning",
    "Exam-focused preparation and practice questions"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction."
};

export default function PSPO1Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
