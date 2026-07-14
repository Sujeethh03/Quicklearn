import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe® AI-Empowered SAFe Agilist (SA) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead Enterprise Agile Transformation with SAFe® and AI-Powered Decision Making",
  openGraph: {
    title: "SAFe® AI-Empowered SAFe Agilist (SA) 6.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead Enterprise Agile Transformation with SAFe® and AI-Powered Decision Making",
    images: ["/leading_safe_agilist.jpg"],
  },
};

const courseData = {
  "title": "SAFe® AI-Empowered SAFe Agilist (SA) 6.0 Certification Training",
  "subtitle": "Lead Enterprise Agile Transformation with SAFe® and AI-Powered Decision Making",
  "backgroundImage": "/leading_safe_agilist.jpg",
  "overview": [
    "The AI-Empowered Leading SAFe® 6.0 course helps participants learn how to lead a Lean-Agile transformation using the Scaled Agile Framework® (SAFe®).",
    "In this two-day interactive course, participants learn how to build Business Agility, align teams around value, and apply Agile practices at enterprise scale. The course also introduces AI-enabled tools and techniques that support planning, collaboration, decision-making, and continuous improvement.",
    "After completing the course and certification exam, participants earn the globally recognized SAFe® AI-Empowered SAFe Agilist (SA) certification."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn how to lead Agile transformation at scale",
    "Understand SAFe® principles, values, and practices",
    "See how AI can support planning and decision-making",
    "Improve team alignment and value delivery",
    "Build skills for Business Agility",
    "Prepare for the SAFe® Agilist certification",
    "Strengthen your Agile leadership skills"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites to attend this course.",
    "However, the following knowledge and experience are highly recommended:",
    "More than 3 years of experience in software development, testing, business analysis, project management, product management, or related fields",
    "Familiarity with Agile principles and practices",
    "Basic understanding of Scrum, Kanban, or Lean concepts"
  ],
  "whoShouldAttend": [
    "Executives and Senior Leaders",
    "Business and Technology Managers",
    "Program Managers and Project Managers",
    "Product Managers and Product Owners",
    "Scrum Masters and Agile Coaches",
    "Release Train Engineers (RTEs)",
    "Architects and Business Analysts",
    "Change Agents and Transformation Leaders",
    "anyone involved in scaling Agile practices across the enterprise"
  ],
  "curriculum": [
    {
      "title": "1. Adapting and Thriving with SAFe®",
      "topics": [
        "Thrive in the age of disruption",
        "Understand Business Agility",
        "SAFe® as an operating system for Business Agility",
        "Seven Core Competencies of Business Agility"
      ]
    },
    {
      "title": "2. Building a Foundation with Mindset, Values, and Principles",
      "topics": [
        "Lean-Agile Mindset",
        "SAFe® Core Values",
        "SAFe® Lean-Agile Principles",
        "Empowering Agility with AI"
      ]
    },
    {
      "title": "3. Establishing Team and Technical Agility",
      "topics": [
        "Cross-functional Agile Teams",
        "Built-in Quality",
        "Organizing around value",
        "Agile Release Trains (ARTs)"
      ]
    },
    {
      "title": "4. Building Solutions with Agile Product Delivery",
      "topics": [
        "Customer-centric culture",
        "Design Thinking",
        "Program Backlog and WSJF prioritization",
        "Program Increment (PI) Planning",
        "Develop on Cadence, Release on Demand",
        "Continuous Delivery Pipeline and DevOps"
      ]
    },
    {
      "title": "5. Exploring Lean Portfolio Management",
      "topics": [
        "Strategy and execution alignment",
        "Strategic Themes",
        "Portfolio Canvas",
        "Epic Hypothesis Statements",
        "Lean Budgeting",
        "Portfolio Kanban"
      ]
    },
    {
      "title": "6. Leading the Change",
      "topics": [
        "Leading by example",
        "Leading Lean-Agile transformation",
        "SAFe® Implementation Roadmap",
        "Sustaining Business Agility"
      ]
    },
    {
      "title": "7. AI-Empowered SAFe® Practices",
      "topics": [
        "AI-assisted planning and forecasting",
        "AI-enabled decision support",
        "AI-enhanced collaboration and productivity",
        "Applying AI responsibly within Agile environments",
        "Leveraging AI to improve flow, insights, and value delivery"
      ]
    }
  ],
  "learningOutcomes": [
    "What Will You Learn?",
    "By the end of this course, participants will be able to:",
    "Apply the Lean-Agile mindset, values, and principles of SAFe®",
    "Explain how SAFe® enables Business Agility",
    "Align teams, programs, and portfolios around value delivery",
    "Participate effectively in Program Increment (PI) Planning",
    "Organize and support Agile Release Trains (ARTs)",
    "Apply customer-centricity and Design Thinking practices",
    "Align strategy and execution using Lean Portfolio Management",
    "Lead and support enterprise Agile transformations",
    "Utilize AI-enabled practices to improve planning, collaboration, and decision-making",
    "Drive continuous improvement and sustainable business outcomes"
  ],
  "certificationHeading": "Certification Exam Details",
  "certification": [
    {
      "label": "",
      "value": "SAFe® AI-Empowered SAFe Agilist (SA) Exam"
    },
    {
      "label": "Certification",
      "value": "SAFe® AI-Empowered SAFe Agilist (SA)"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice, Single Select"
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
      "value": "SAFe® AI-Empowered SAFe Agilist digital certificate"
    },
    {
      "label": "",
      "value": "Digital badge for professional networking and social media"
    },
    {
      "label": "",
      "value": "Access to SAFe Studio™ learning resources"
    },
    {
      "label": "",
      "value": "Practice exams and study materials"
    },
    {
      "label": "",
      "value": "PMI PDUs and Scrum Education Units (SEUs)"
    },
    {
      "label": "",
      "value": "Recognition as a certified Lean-Agile leader capable of driving Business Agility at enterprise scale"
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
      "value": "Holders of existing SAFe® Agilist certifications may be eligible for AI-Empowered credential enhancements as provided by Scaled Agile."
    }
  ],
  "courseHighlights": [
    "2-day instructor-led training",
    "Based on SAFe® 6.0",
    "Simple and interactive learning",
    "Real-world examples and discussions",
    "Covers Business Agility and Lean-Agile basics",
    "Includes PI Planning and ART concepts",
    "Introduces Lean Portfolio Management",
    "Covers AI-enabled Agile practices",
    "Exam preparation support"
  ],
  "disclaimer": "SAFe®, Scaled Agile Framework®, SAFe Agilist®, Product Owner/Product Manager®, and all related trademarks are the property of Scaled Agile, Inc. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction."
};

export default function LeadingSAFeAgilistPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
