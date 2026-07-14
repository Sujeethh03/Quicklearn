import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL 4 Acquiring & Managing Cloud Services Training in Hyderabad | QuickLearn Systems",
  description:
    "Master ITIL 4 Acquiring and Managing Cloud Services certification training in Hyderabad. QuickLearn Systems offers expert-led ACP training covering cloud strategies, governance, risk, and financial management for cloud environments. Enroll today!",
  keywords:
    "ITIL 4 ACP training Hyderabad, Acquiring Managing Cloud Services Hyderabad, ITIL ACP certification Hyderabad, best ITIL cloud training institute Hyderabad, cloud service management course Hyderabad, ITIL training India, ITIL 4 Specialist, Acquiring and Managing Cloud Services, ITIL ACP, Cloud Strategy, Cloud Governance, Cloud Procurement, ITSM, Cloud Service Management, Cloud Financial Management, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "ITIL 4 Acquiring & Managing Cloud Services Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led ITIL 4 ACP certification training in Hyderabad by QuickLearn Systems",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "title": "PMI Agile Certified Practitioner (PMI-ACP®) Certification Training",
  "subtitle": "Master Agile Practices. Lead High-Performing Teams. Deliver Business Value.",
  "backgroundImage": "/acp_certification.jpg",
  "overview": [
    "The PMI Agile Certified Practitioner (PMI-ACP®) certification from the Project Management Institute (PMI®) is one of the world's most respected Agile certifications. It validates your ability to apply Agile principles, practices, and techniques across multiple Agile approaches, including Scrum, Kanban, Lean, XP, and other adaptive methodologies.",
    "Our PMI-ACP® Certification Training is aligned with the latest PMI-ACP® Examination Content Outline (March 2026) and prepares professionals to lead Agile teams, optimize value delivery, foster Enterprise Agility, and successfully pass the PMI-ACP certification examination.",
    "This instructor-led course combines practical Agile concepts, real-world case studies, hands-on exercises, and exam-focused preparation to help professionals confidently implement Agile practices across projects and organizations."
  ],
  "whyHead": "Why Choose PMI-ACP® Certification?",
  "why": [
    "The PMI-ACP® certification demonstrates your ability to:",
    "Apply Agile values, principles, and practices across multiple frameworks",
    "Lead Agile teams in dynamic business environments",
    "Deliver customer value through iterative and incremental delivery",
    "Foster collaboration, transparency, and continuous improvement",
    "Improve organizational agility and business outcomes",
    "Support Agile transformations across teams and enterprises",
    "Advance your career as an Agile practitioner and leader"
  ],
  "prerequisites": [
    "Training Prerequisites - There are no mandatory prerequisites to attend this training. However, a basic understanding of Agile concepts or experience working in Agile environments is beneficial.",
    "PMI-ACP® Certification Eligibility",
    "To be eligible for the PMI-ACP® certification, candidates must meet the requirements established by PMI:",
    "Secondary diploma (high school, associate degree, or global equivalent) or higher",
    "28 hours of formal training in Agile practices, frameworks, or methodologies",
    "Meet one of the following experience requirements:",
    "Two years of Agile experience within the past five years, or",
    "One year of Agile experience plus a degree from a PMI Global Accreditation Center (GAC) program, or",
    "One year of Agile experience plus an active qualifying third-party Agile certification, or",
    "Hold an active PMP® certification."
  ],
  "whoShouldAttend": [
    "Scrum Masters Agile Coaches",
    "Product Owners",
    "Product Managers",
    "Project Managers",
    "Delivery Managers",
    "Business Analysts",
    "Team Leads",
    "Software Developers",
    "QA Professionals",
    "PMO Professionals",
    "Professionals involved in Agile transformations"
  ],
  "curriculum": [
    {
      "title": "Module 1: Agile Mindset",
      "topics": [
        "Agile values and principles",
        "Enterprise Agility",
        "Customer-centric thinking",
        "Systems thinking",
        "Continuous learning and improvement",
        "Lean thinking and experimentation"
      ]
    },
    {
      "title": "Module 2: Agile Leadership",
      "topics": [
        "Servant leadership",
        "Coaching Agile teams",
        "Building high-performing teams",
        "Psychological safety",
        "Conflict management",
        "Facilitating collaboration",
        "Stakeholder engagement"
      ]
    },
    {
      "title": "Module 3: Agile Product Management",
      "topics": [
        "Product vision and strategy",
        "Product backlog management",
        "Value prioritization",
        "Customer feedback loops",
        "Incremental value delivery",
        "Product metrics and outcomes"
      ]
    },
    {
      "title": "Module 4: Agile Delivery",
      "topics": [
        "Scrum Framework",
        "Kanban practices",
        "Lean principles",
        "Extreme Programming (XP)",
        "Flow optimization",
        "Adaptive planning",
        "Agile estimation techniques",
        "Continuous delivery and improvement"
      ]
    },
    {
      "title": "Module 5: Agile Metrics & Value Delivery",
      "topics": [
        "Measuring business outcomes",
        "Agile performance metrics",
        "Forecasting and predictability",
        "Managing risks and dependencies",
        "Evidence-based decision making"
      ]
    },
    {
      "title": "Module 6: Enterprise Agility",
      "topics": [
        "Scaling Agile concepts",
        "Organizational agility",
        "Cross-functional collaboration",
        "Governance in Agile environments",
        "Change enablement",
        "Business value realization"
      ]
    },
    {
      "title": "Module 7: PMI-ACP® Exam Preparation",
      "topics": [
        "Latest PMI-ACP® exam structure",
        "Scenario-based practice questions",
        "Mock examinations",
        "Exam strategies and techniques",
        "Application guidance"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply Agile principles across multiple frameworks",
    "Build and lead high-performing Agile teams",
    "Foster Enterprise Agility within organizations",
    "Prioritize work based on customer and business value",
    "Improve collaboration among stakeholders and teams",
    "Optimize Agile delivery through continuous improvement",
    "Apply Agile leadership techniques in complex environments",
    "Prepare confidently for the latest PMI-ACP® certification examination",
    "PMI-ACP® Exam Information"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "Certification",
      "value": "PMI Agile Certified Practitioner (PMI-ACP®)"
    },
    {
      "label": "Exam Provider",
      "value": "Project Management Institute (PMI®)"
    },
    {
      "label": "Exam Duration",
      "value": "3 Hours"
    },
    {
      "label": "Questions",
      "value": "120 (100 scored + 20 pretest questions)"
    },
    {
      "label": "Question Types",
      "value": "Multiple Choice, Multiple Response, Drag-and-Drop, Matching, and Scenario-Based"
    },
    {
      "label": "Break",
      "value": "One optional 10-minute break"
    },
    {
      "label": "Delivery",
      "value": "Pearson VUE Test Centre or Online Proctored"
    },
    {
      "label": "Exam Domains",
      "value": ""
    },
    {
      "label": "",
      "value": "Mindset – 28%"
    },
    {
      "label": "",
      "value": "Leadership – 25%"
    },
    {
      "label": "",
      "value": "Product – 19%"
    },
    {
      "label": "",
      "value": "Delivery – 28%"
    }
  ],
  "courseHighlights": [
    "Aligned with the Latest PMI-ACP® Exam Content Outline (March 2026)",
    "Covers Scrum, Kanban, Lean, XP, and Enterprise Agility concepts",
    "28 Contact Hours Certificate",
    "Instructor-led Live Training",
    "Real-world Agile Case Studies",
    "Practice Questions & Mock Exams",
    "Agile Mindset and Leadership Development",
    "PMI-ACP® Application Guidance",
    "Comprehensive Course Material",
    "Post-training Mentor Support"
  ],
  "disclaimer": "PMI®, PMI-ACP®, Agile Certified Practitioner®, PMP®, PMBOK®, and all related trademarks are the property of the Project Management Institute, Inc. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PMI®. All trademarks are the property of their respective owner"
};

export default function AcquiringManagingCloudPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
