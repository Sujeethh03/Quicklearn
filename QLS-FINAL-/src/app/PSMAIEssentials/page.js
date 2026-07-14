import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master™ – AI Essentials (PSM-AIE) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Combine Professional Scrum Mastery with Practical AI Skills for Modern Agile Teams",
  openGraph: {
    title: "Professional Scrum Master™ – AI Essentials (PSM-AIE) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Combine Professional Scrum Mastery with Practical AI Skills for Modern Agile Teams",
    images: ["/professional_scrum_master_1.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Master™ – AI Essentials (PSM-AIE) Certification Training",
  "subtitle": "Combine Professional Scrum Mastery with Practical AI Skills for Modern Agile Teams",
  "backgroundImage": "/professional_scrum_master_1.jpg",
  "overview": [
    "Professional Scrum Master™ – AI Essentials (PSM-AIE) is a hands-on course designed to help Scrum Masters, Agile Coaches, and Agile leaders understand, leverage, and apply Artificial Intelligence (AI) to support their role, teams, and organizations.",
    "Participants explore practical AI tools and techniques that enhance facilitation, coaching, collaboration, Scrum Events, and organizational effectiveness while learning how to adopt AI responsibly and ethically.",
    "The course includes a free attempt at the globally recognized Professional Scrum Master™ – AI Essentials certification assessment."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn how to apply AI practically in Scrum Master and Agile leadership roles",
    "Gain hands-on experience with AI tools that support facilitation, coaching, and collaboration",
    "Understand how AI can improve Scrum Events, team effectiveness, and organizational agility",
    "Build confidence in using Generative AI through effective prompting techniques",
    "Explore responsible and ethical AI adoption within Agile environments",
    "Stay ahead of the evolving intersection of Agile practices and AI innovation",
    "Receive a free attempt at the Professional Scrum Master™ – AI Essentials certification assessment"
  ],
  "prerequisites": [
    "Recommended:",
    "Strong understanding of Scrum",
    "Scrum Master experience preferred",
    "PSM I or equivalent knowledge recommended"
  ],
  "whoShouldAttend": [
    "Scrum Masters",
    "Agile Coaches",
    "Agile Leaders",
    "Team Facilitators",
    "Delivery Managers",
    "Transformation Leaders"
  ],
  "curriculum": [
    {
      "title": "Module 1: Foundations of AI",
      "topics": [
        "AI fundamentals",
        "Machine Learning concepts",
        "Generative AI",
        "Agentic AI",
        "AI opportunities and limitations"
      ]
    },
    {
      "title": "Module 2: AI for Scrum Masters",
      "topics": [
        "AI-assisted facilitation",
        "AI-enabled coaching support",
        "Enhancing Scrum Events",
        "Improving team collaboration"
      ]
    },
    {
      "title": "Module 3: AI for Scrum Teams",
      "topics": [
        "AI in product delivery",
        "AI-assisted estimation and planning",
        "Knowledge management",
        "Improving team effectiveness"
      ]
    },
    {
      "title": "Module 4: Prompt Engineering Essentials",
      "topics": [
        "Effective prompting techniques",
        "Context-driven prompts",
        "Structured prompting approaches",
        "Improving AI output quality"
      ]
    },
    {
      "title": "Module 5: Responsible AI Adoption",
      "topics": [
        "AI ethics",
        "Security and privacy considerations",
        "Governance considerations",
        "Responsible AI usage within Scrum environments"
      ]
    },
    {
      "title": "Module 6: AI and Organizational Agility",
      "topics": [
        "AI-enabled organizational change",
        "Supporting AI adoption",
        "Leading teams through AI transformation",
        "Future of Agile and AI"
      ]
    }
  ],
  "learningOutcomes": [
    "Explain core AI concepts and terminology",
    "Use Generative AI effectively through prompting techniques",
    "Apply AI to improve Scrum Team collaboration",
    "Support Scrum Events using AI tools",
    "Enhance coaching and facilitation effectiveness",
    "Adopt AI responsibly and ethically within Agile organizations"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Assessment"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Master™ – AI Essentials (PSM-AIE)"
    },
    {
      "label": "Questions",
      "value": "20"
    },
    {
      "label": "Duration",
      "value": "30 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "85%"
    },
    {
      "label": "Format",
      "value": "Online Assessment"
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
    "Hands-on, practical learning approach",
    "Focus on AI applications for Scrum Masters and Agile teams",
    "Coverage of Generative AI, Agentic AI, and prompt engineering essentials",
    "Real-world examples of AI use in Scrum Events and team collaboration",
    "Guidance on responsible AI adoption, ethics, privacy, and governance",
    "Insights into AI-enabled organizational agility and transformation",
    "Official Scrum.org course materials included"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function PSMAIEssentialsPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
