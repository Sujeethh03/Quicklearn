import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe Scrum Master Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master SAFe Scrum Master certification training in Hyderabad. QuickLearn Systems offers expert-led training covering Agile team facilitation, PI planning, and continuous improvement in the Scaled Agile Framework. Enroll today!",
  keywords: "SAFe Scrum Master training Hyderabad, SAFe Scrum Master certification Hyderabad, best SAFe training institute Hyderabad, SAFe Scrum Master course Hyderabad, SAFe training India, SAFe Scrum Master, Scaled Agile Framework, Agile teams, PI planning, SAFe certification, Scrum at scale, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SAFe Scrum Master Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led SAFe Scrum Master certification training in Hyderabad by QuickLearn Systems",
    images: ["/safe_scrum_master.jpg"],
  },
};

const courseData = {
  "title": "AI-Empowered SAFe® Scrum Master (SSM) 6.0 Certification Training",
  "subtitle": "Empower Agile Teams with SAFe®, Servant Leadership, and AI-Enhanced Delivery",
  "backgroundImage": "/safe_scrum_master.jpg",
  "overview": [
    "The AI-Empowered SAFe® Scrum Master (SSM) 6.0 course equips professionals with the knowledge and practical skills needed to perform the Scrum Master role within a SAFe® enterprise.",
    "This interactive training focuses on facilitating Agile team effectiveness, supporting Agile Release Trains (ARTs), enabling Program Increment (PI) Planning, coaching high-performing teams, and fostering continuous improvement. Participants learn how Scrum Masters support team agility, collaboration, and value delivery while aligning execution with organizational objectives.",
    "The course also explores AI-enabled practices and tools that can assist Scrum Masters in planning, facilitation, collaboration, workflow visibility, and continuous improvement within modern Agile organizations.",
    "Upon successful completion of the course and certification exam, participants earn the globally recognized SAFe® Scrum Master (SSM) certification."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn the Scrum Master role in a SAFe environment",
    "Understand how to support Agile teams and PI Planning",
    "Improve team collaboration and delivery",
    "Learn simple ways to use AI in Agile work",
    "Prepare for the SAFe® Scrum Master certification exam",
    "Build skills that are useful for Agile careers"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, the following knowledge is recommended:",
    "Familiarity with Agile principles and practices",
    "Basic understanding of Scrum, Kanban, or Lean methodologies",
    "Experience working in Agile teams is beneficial but not required"
  ],
  "whoShouldAttend": [
    "The SAFe® Scrum Master course is designed for professionals who want to understand and perform the Scrum Master role within a SAFe enterprise.",
    "Scrum Masters",
    "Team Leads",
    "Agile Coaches",
    "Project Managers",
    "Program Managers",
    "Release Train Engineers (RTEs)",
    "Product Owners",
    "Developers and Team Members",
    "Engineering Managers",
    "Anyone supporting Agile teams in a SAFe environment"
  ],
  "curriculum": [
    {
      "title": "1. Introducing Scrum in SAFe®",
      "topics": [
        "Understanding SAFe® and Business Agility",
        "Agile and Scrum fundamentals",
        "The role of Agile teams in a SAFe enterprise",
        "Scrum fundamentals within SAFe",
        "Team and Technical Agility",
        "DevOps and Release on Demand"
      ]
    },
    {
      "title": "2. Characterizing the Role of the Scrum Master",
      "topics": [
        "Scrum Master responsibilities",
        "Servant leadership",
        "Coaching Agile teams",
        "Facilitating team effectiveness",
        "Supporting continuous improvement",
        "Enabling collaboration across the organization"
      ]
    },
    {
      "title": "3. Experiencing Program Increment (PI) Planning",
      "topics": [
        "Purpose and benefits of PI Planning",
        "Preparing teams for PI Planning",
        "Facilitating team breakout sessions",
        "Managing dependencies and risks",
        "Establishing PI Objectives",
        "Supporting alignment across Agile Release Trains"
      ]
    },
    {
      "title": "4. Facilitating Iteration Execution",
      "topics": [
        "Iteration Planning",
        "Team Sync events",
        "Backlog refinement",
        "Iteration Reviews",
        "Retrospectives",
        "Managing flow and removing impediments"
      ]
    },
    {
      "title": "5. Finishing the Program Increment",
      "topics": [
        "System Demo participation",
        "Inspect & Adapt workshop",
        "Measuring outcomes and progress",
        "Problem-solving workshops",
        "Continuous improvement practices"
      ]
    },
    {
      "title": "6. Coaching the Agile Team",
      "topics": [
        "Developing high-performing teams",
        "Coaching Agile team members",
        "Resolving conflicts",
        "Building psychological safety",
        "Supporting self-management and accountability",
        "Facilitating effective collaboration"
      ]
    },
    {
      "title": "7. AI-Empowered Agile Facilitation",
      "topics": [
        "Using AI tools to support planning and facilitation",
        "AI-assisted meeting preparation and summarization",
        "Leveraging AI for workflow visibility and insights",
        "Improving team collaboration through AI-enabled tools",
        "Responsible and ethical use of AI in Agile environments"
      ]
    }
  ],
  "learningOutcomes": [
    "What Will You Learn?",
    "By the end of this course, participants will be able to:",
    "Describe the Scrum Master role within a SAFe enterprise",
    "Apply SAFe principles to support Agile teams and Agile Release Trains",
    "Facilitate Program Increment (PI) Planning and Iteration events",
    "Coach Agile teams toward high performance",
    "Support continuous improvement and value delivery",
    "Facilitate collaboration across teams and stakeholders",
    "Identify and remove impediments that affect team performance",
    "Foster team accountability, engagement, and self-management",
    "Apply AI-enabled practices to improve facilitation, planning, and collaboration",
    "Support Business Agility through Lean-Agile leadership practices"
  ],
  "certificationHeading": "Certification Exam Details",
  "certification": [
    {
      "label": "",
      "value": "SAFe® Scrum Master (SSM) Exam"
    },
    {
      "label": "Certification",
      "value": "SAFe® Scrum Master (SSM)"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
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
      "value": "73% (33 out of 45)"
    },
    {
      "label": "Delivery",
      "value": "Web-Based, Closed Book, No Outside Assistance"
    },
    {
      "label": "Language",
      "value": "English"
    },
    {
      "label": "Exam Access",
      "value": "Available through SAFe Studio™ after course completion"
    },
    {
      "label": "Exam Attempts Included",
      "value": "First attempt included with course registration; retake fees may apply"
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
      "value": "SAFe® Scrum Master digital certificate"
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
      "value": "Recognition as a certified Scrum Master capable of supporting Agile teams within a SAFe enterprise"
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
      "value": "Certification holders receive access to ongoing learning and community resources provided by Scaled Agile."
    }
  ],
  "courseHighlights": [
    "Official SAFe® Scrum Master 6.0 curriculum",
    "Instructor-led live training",
    "Interactive sessions and practical exercises",
    "PI Planning and team facilitation practice",
    "Coaching techniques for Agile teams",
    "AI-enabled tools for Agile work",
    "Exam preparation support",
    "Course materials included"
  ],
  "disclaimer": "SAFe®, Scaled Agile Framework®, SAFe Agilist®, Product Owner/Product Manager®, and all related trademarks are the property of Scaled Agile, Inc. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction."
};

export default function SAFeScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}