import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified Scrum Product Owner® (CSPO®) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Learn to Maximize Product Value and Deliver Customer-Centric Solutions",
  openGraph: {
    title: "Certified Scrum Product Owner® (CSPO®) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Learn to Maximize Product Value and Deliver Customer-Centric Solutions",
    images: ["/professional_scrum_product_owner_1.jpg"],
  },
};

const courseData = {
  "title": "Certified Scrum Product Owner® (CSPO®) Certification Training",
  "subtitle": "Learn to Maximize Product Value and Deliver Customer-Centric Solutions",
  "backgroundImage": "/professional_scrum_product_owner_1.jpg",
  "overview": [
    "The Certified Scrum Product Owner® (CSPO®) certification is a globally recognized credential from Scrum Alliance® designed for professionals responsible for maximizing product value and delivering successful products.",
    "This highly interactive course equips participants with the knowledge and practical skills needed to define product vision, manage Product Backlogs, prioritize work based on value, collaborate with stakeholders, and guide Scrum Teams toward delivering customer-focused solutions.",
    "Participants gain hands-on experience through real-world exercises, product planning workshops, and collaborative discussions that strengthen their ability to perform the Product Owner role effectively.",
    "Upon successful completion of the course, participants earn the Certified Scrum Product Owner® (CSPO®) certification from Scrum Alliance®. No certification exam is currently required for CSPO®; certification is awarded upon successful completion of an approved course."
  ],
  "whyHead": "Why Choose CSPO®?",
  "why": [
    "Globally recognized Product Owner certification",
    "Learn product ownership from Certified Scrum Trainers®",
    "Develop customer-centric product thinking",
    "Improve backlog management and prioritization",
    "Strengthen stakeholder collaboration",
    "Deliver greater business value"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the CSPO® course.",
    "The course is suitable for professionals from both technical and business backgrounds who want to develop Product Ownership skills. Familiarity with the Scrum Guide is recommended but not required."
  ],
  "whoShouldAttend": [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Project Managers",
    "Scrum Masters Product Leaders",
    "Entrepreneurs",
    "Business Stakeholders",
    "anyone involved in product development or product strategy"
  ],
  "curriculum": [
    {
      "title": "Module 1: Agile & Scrum Foundations",
      "topics": [
        "Agile Values and Principles",
        "Scrum Framework",
        "Empiricism",
        "Customer-Centric Product Development"
      ]
    },
    {
      "title": "Module 2: Understanding the Product Owner Role",
      "topics": [
        "Product Owner Accountabilities",
        "Value Maximization",
        "Stakeholder Collaboration",
        "Product Ownership Mindset"
      ]
    },
    {
      "title": "Module 3: Product Vision & Strategy",
      "topics": [
        "Product Vision",
        "Product Goals",
        "Product Roadmaps",
        "Product Strategy"
      ]
    },
    {
      "title": "Module 4: Product Backlog Management",
      "topics": [
        "Creating Product Backlogs",
        "Refinement Techniques",
        "Prioritization Methods",
        "User Stories",
        "Acceptance Criteria"
      ]
    },
    {
      "title": "Module 5: Delivering Customer Value",
      "topics": [
        "Incremental Product Delivery",
        "Customer Feedback",
        "Release Planning",
        "Measuring Product Success"
      ]
    },
    {
      "title": "Module 6: Working with Scrum Teams",
      "topics": [
        "Sprint Planning",
        "Sprint Reviews",
        "Collaboration with Developers",
        "Managing Stakeholder Expectations"
      ]
    },
    {
      "title": "Module 7: Product Ownership in Practice",
      "topics": [
        "Product Discovery",
        "Decision Making",
        "Product Metrics",
        "Practical Case Studies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand the Product Owner accountability",
    "Create and communicate a compelling product vision",
    "Build, refine, and prioritize Product Backlogs",
    "Collaborate effectively with Scrum Teams and stakeholders",
    "Maximize customer and business value",
    "Apply Scrum principles to product development"
  ],
  "certificationHeading": "Certification Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Certified Scrum Product Owner® (CSPO®)"
    },
    {
      "label": "Certification Body",
      "value": "Scrum Alliance®"
    },
    {
      "label": "Course Duration",
      "value": "16 Hours (2 Days)"
    },
    {
      "label": "Assessment",
      "value": "Successful completion of an approved CSPO® course (no certification exam currently required)"
    },
    {
      "label": "Membership",
      "value": "Two-year Scrum Alliance membership included, subject to Scrum Alliance policies"
    },
    {
      "label": "Renewal",
      "value": "Certification is renewed through Scrum Alliance's continuing education and renewal process."
    }
  ],
  "courseHighlights": [
    "16-hour Instructor-led Live Training",
    "Product Vision Workshops",
    "Product Backlog Exercises",
    "Practical Scrum Activities",
    "Comprehensive Learning Materials",
    "Two-Year Scrum Alliance Membership (subject to Scrum Alliance policies)"
  ],
  "disclaimer": "Certified Scrum Product Owner®, CSPO®, Scrum Alliance®, Certified Scrum Trainer®, CST®, and all related trademarks are the property of Scrum Alliance®. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by Scrum Alliance®. All trademarks are the property of their respective owners."
};

export default function CSPOPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
