import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner™ – AI Essentials (PSPO-AIE) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Transform Product Management with Professional Scrum and AI-Powered Decision Making",
  openGraph: {
    title: "Professional Scrum Product Owner™ – AI Essentials (PSPO-AIE) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Transform Product Management with Professional Scrum and AI-Powered Decision Making",
    images: ["/professional_scrum_product_owner_1.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Product Owner™ – AI Essentials (PSPO-AIE) Certification Training",
  "subtitle": "Transform Product Management with Professional Scrum and AI-Powered Decision Making",
  "backgroundImage": "/professional_scrum_product_owner_1.jpg",
  "overview": [
    "Professional Scrum Product Owner™ – AI Essentials (PSPO-AIE) is an interactive course designed to help Product Owners, Product Managers, and Business Analysts leverage Artificial Intelligence (AI) to improve product discovery, validation, strategy, stakeholder collaboration, and value delivery.",
    "Participants explore practical AI tools and techniques that support decision-making throughout the Product Owner's responsibilities while learning how to apply AI responsibly within product organizations.",
    "The course includes a free attempt at the globally recognized Professional Scrum Product Owner™ – AI Essentials certification assessment."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn how to apply AI in real product ownership scenarios",
    "Improve product discovery, validation, and decision-making with AI tools",
    "Strengthen product strategy, vision, and roadmap development",
    "Enhance backlog refinement and prioritization using AI-assisted techniques",
    "Improve stakeholder communication and collaboration",
    "Understand how to use AI responsibly and ethically in product environments",
    "Gain practical skills that can be applied immediately in day-to-day product work",
    "Prepare for the PSPO-AIE certification assessment with confidence"
  ],
  "prerequisites": [
    "Recommended:",
    "Understanding of Scrum fundamentals",
    "Product Owner, Product Manager, or Business Analysis experience",
    "PSPO I or equivalent knowledge beneficial"
  ],
  "whoShouldAttend": [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Product Leaders",
    "Innovation Managers",
    "Entrepreneurs",
    "Agile Professionals involved in product strategy"
  ],
  "curriculum": [
    {
      "title": "Module 1: AI Fundamentals for Product Professionals",
      "topics": [
        "Introduction to AI",
        "Generative AI concepts",
        "AI opportunities in product management",
        "AI capabilities and limitations"
      ]
    },
    {
      "title": "Module 2: Product Discovery with AI",
      "topics": [
        "Market analysis",
        "Customer research",
        "Persona creation",
        "Competitive intelligence"
      ]
    },
    {
      "title": "Module 3: Product Strategy and Vision",
      "topics": [
        "AI-assisted product vision creation",
        "Strategy development",
        "Outcome-based planning",
        "Roadmapping support"
      ]
    },
    {
      "title": "Module 4: Product Validation and Experimentation",
      "topics": [
        "Hypothesis generation",
        "Experiment design",
        "Prototype development",
        "Customer feedback analysis"
      ]
    },
    {
      "title": "Module 5: Product Backlog and Value Optimization",
      "topics": [
        "User Story generation",
        "Backlog refinement",
        "Prioritization support",
        "Decision-making frameworks"
      ]
    },
    {
      "title": "Module 6: Stakeholder Collaboration and Productivity",
      "topics": [
        "AI-assisted communication",
        "Stakeholder alignment",
        "Meeting preparation and summaries",
        "Routine task automation"
      ]
    },
    {
      "title": "Module 7: Responsible AI for Product Owners",
      "topics": [
        "Ethical AI considerations",
        "Privacy and governance",
        "Risk management",
        "Responsible product leadership"
      ]
    }
  ],
  "learningOutcomes": [
    "Leverage AI to better understand markets and customers",
    "Create customer personas using AI techniques",
    "Develop and refine product vision and strategy",
    "Accelerate product discovery and validation",
    "Improve backlog management and prioritization",
    "Enhance stakeholder collaboration and productivity",
    "Apply AI responsibly in product management environments"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Assessment"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Product Owner™ – AI Essentials (PSPO-AIE)"
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
    "Interactive, instructor-led training",
    "Practical AI use cases for Product Owners and product professionals",
    "Hands-on exercises and real-world examples",
    "Coverage of product discovery, strategy, validation, and backlog management",
    "Guidance on responsible and ethical AI usage",
    "Free attempt at the PSPO-AIE certification assessment",
    "Official Scrum.org course materials",
    "Digital certificate and badge upon passing the assessment"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function PSPOAIEssentialsPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
