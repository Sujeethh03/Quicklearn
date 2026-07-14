import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Agile Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master PRINCE2 Agile Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led training covering agile project principles, PRINCE2 governance, and hybrid project management. Enroll today!",
  keywords:
    "PRINCE2 Agile Foundation training Hyderabad, PRINCE2 Agile certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Agile Foundation course Hyderabad, PRINCE2 training India, PRINCE2 Agile, PRINCE2 Foundation, Agile Project Management, PRINCE2 Agile Foundation, Project Governance, Risk Management, Agile Delivery, IT Project Management, Hybrid Project Management, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Agile Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PRINCE2 Agile Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/prince2_agile_foundation.jpg"],
  },
};

const courseData = {
  "title": "PRINCE2 Agile® Foundation Certification Training (Version 2)",
  "subtitle": "Combine the Flexibility of Agile with the Governance of PRINCE2®",
  "backgroundImage": "/prince2_agile_foundation.jpg",
  "overview": [
    "PRINCE2 Agile® Foundation provides professionals with a practical understanding of how Agile delivery approaches can be successfully integrated with the structured governance of the PRINCE2® project management methodology.",
    "The latest PRINCE2 Agile® Version 2 has been updated to reflect modern Agile ways of working, enabling organizations to combine effective project governance with iterative delivery, customer collaboration, continuous improvement, and rapid value realization.",
    "This course introduces Agile concepts, frameworks, and techniques—including Scrum, Kanban, Lean Startup, and DevOps—and explains how they work within the PRINCE2 governance framework. Participants learn how to tailor PRINCE2® for Agile projects while maintaining control, transparency, and business justification.",
    "Upon successful completion, participants will be prepared to take the PRINCE2 Agile® Foundation certification examination."
  ],
  "whyHead": "Why Choose PRINCE2 Agile®?",
  "why": [
    "Combine Agile flexibility with PRINCE2 governance",
    "Deliver projects faster while maintaining control",
    "Improve collaboration between business and delivery teams",
    "Apply Agile practices within enterprise project environments",
    "Learn globally recognized Agile project management practices",
    "Build a strong foundation for PRINCE2 Agile® Practitioner certification"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the PRINCE2 Agile® Foundation course.",
    "Basic knowledge of project management or Agile practices is beneficial but not required."
  ],
  "whoShouldAttend": [
    "Project Managers",
    "Agile Project Managers",
    "Scrum Masters",
    "Product Owners",
    "Agile Coaches",
    "Delivery Managers",
    "Business Analysts",
    "PMO Professionals",
    "Team Leads",
    "Developers",
    "Professionals working in Agile or hybrid project environments"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to PRINCE2 Agile®",
      "topics": [
        "Overview of PRINCE2 Agile®",
        "Agile fundamentals",
        "Benefits of combining Agile and PRINCE2",
        "Project governance in Agile environments"
      ]
    },
    {
      "title": "Module 2: Agile Concepts and Mindset",
      "topics": [
        "Agile values and principles",
        "Agile culture",
        "Customer collaboration",
        "Incremental delivery",
        "Continuous improvement"
      ]
    },
    {
      "title": "Module 3: PRINCE2 Governance",
      "topics": [
        "PRINCE2 principles",
        "Practices",
        "Processes",
        "Roles and responsibilities",
        "Business Case"
      ]
    },
    {
      "title": "Module 4: Agile Frameworks and Techniques",
      "topics": [
        "Scrum",
        "Kanban",
        "Lean Startup",
        "DevOps",
        "Cynefin Framework",
        "Rich Communication",
        "Workshops"
      ]
    },
    {
      "title": "Module 5: Tailoring PRINCE2 for Agile",
      "topics": [
        "Agile delivery lifecycle",
        "Managing product delivery",
        "Agile planning",
        "Risk management",
        "Quality management",
        "Progress monitoring"
      ]
    },
    {
      "title": "Module 6: Focus Areas",
      "topics": [
        "Flexibility vs Governance",
        "Prioritization using MoSCoW",
        "Timeboxing",
        "Servant Leadership",
        "Stakeholder Engagement",
        "Frequent Releases"
      ]
    },
    {
      "title": "Module 7: PRINCE2 Agile® Foundation Exam Preparation",
      "topics": [
        "Exam structure",
        "Practice questions",
        "Revision sessions",
        "Exam strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand Agile principles and practices",
    "Explain how PRINCE2® and Agile complement each other",
    "Apply Agile concepts within PRINCE2 projects",
    "Tailor PRINCE2® governance for Agile delivery",
    "Understand Scrum, Kanban, Lean Startup, and DevOps concepts",
    "Manage Agile projects while maintaining governance and control",
    "Prepare confidently for the PRINCE2 Agile® Foundation examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "PRINCE2 Agile® Foundation (Version 2)"
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
    "Aligned with PRINCE2 Agile® Version 2",
    "Instructor-led Live Training",
    "Interactive Workshops",
    "Agile Simulations",
    "Practical Case Studies",
    "Practice Exams",
    "Comprehensive Course Material",
    "Post-training Support"
  ],
  "disclaimer": "PRINCE2®, PRINCE2 Agile®, MSP®, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners."
};

export default function PRINCE2AgileFoundation() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
