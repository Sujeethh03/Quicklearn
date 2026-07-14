import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Become a certified SAFe® Advanced Scrum Master (SASM) with expert-led training in Hyderabad. QuickLearn Systems offers SASM certification courses covering advanced facilitation, Agile coaching, and enterprise agility. Enroll today!",
  keywords:
    "SAFe Advanced Scrum Master training Hyderabad, SASM certification Hyderabad, best SAFe training institute Hyderabad, SAFe Advanced Scrum Master course Hyderabad, SAFe training India, SAFe Advanced Scrum Master, SASM certification, SAFe Scrum Master advanced, Agile coaching, Scaled Agile Framework, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SAFe Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led SAFe Advanced Scrum Master (SASM) certification training in Hyderabad by QuickLearn Systems",
    images: ["/safe_advanced_scrum_master.jpg"],
  },
};

const courseData = {
  "title": "AI-Empowered SAFe® Advanced Scrum Master (SASM) Certification Training",
  "subtitle": "Advance Your Scrum Master Expertise to Coach High-Performing Teams and Agile Release Trains",
  "backgroundImage": "/safe_advanced_scrum_master.jpg",
  "overview": [
    "The AI-Empowered SAFe® Advanced Scrum Master (SASM) course is designed for experienced Scrum Masters who want to strengthen their coaching, facilitation, leadership, and Agile scaling skills in a SAFe® environment.",
    "This advanced-level course builds on the Scrum Master role and focuses on improving team and Agile Release Train (ART) performance, optimizing flow, resolving conflicts, coaching high-performing teams, and supporting program execution at scale.",
    "The course also introduces practical AI skills that help Scrum Masters use AI-powered tools for facilitation, collaboration, decision-making, flow improvement, and continuous improvement while following responsible AI practices.",
    "Upon successful completion of the course and certification exam, participants earn the globally recognized AI-Empowered SAFe® Advanced Scrum Master (SASM) certification."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Grow beyond the basic Scrum Master role",
    "Learn how to support teams and Agile Release Trains in SAFe®",
    "Improve flow, collaboration, and delivery performance",
    "Build stronger coaching and facilitation skills",
    "Learn practical ways to use AI in Agile work",
    "Prepare for a globally recognized advanced SAFe® certification"
  ],
  "prerequisites": [
    "All professionals are welcome to attend the course. However, the following are highly recommended:",
    "SAFe® Scrum Master (SSM) certification",
    "Professional Scrum Master™ (PSM) certification",
    "Certified ScrumMaster® (CSM) certification",
    "At least one year of Scrum Master experience",
    "Experience working within Agile Release Trains (ARTs) or scaled Agile environments"
  ],
  "whoShouldAttend": [
    "Scrum Masters",
    "Senior Scrum Masters",
    "Agile Coaches",
    "Release Train Engineers (RTEs)",
    "Team Coaches",
    "Program Managers",
    "Project Managers",
    "Engineering Managers",
    "Agile Transformation Leaders",
    "SAFe® Practitioners seeking advanced coaching skills"
  ],
  "curriculum": [
    {
      "title": "1. The Role of the Advanced Scrum Master",
      "topics": [
        "Evolving beyond traditional Scrum Master responsibilities",
        "Servant leadership at scale",
        "Advanced facilitation techniques",
        "Coaching individuals, teams, and stakeholders",
        "Supporting Business Agility"
      ]
    },
    {
      "title": "2. Applying SAFe® Principles in a Multi-Team Environment",
      "topics": [
        "Lean-Agile leadership practices",
        "Systems thinking",
        "Enabling collaboration across teams",
        "Facilitating value delivery at scale",
        "Supporting Agile Release Trains (ARTs)"
      ]
    },
    {
      "title": "3. Optimizing Flow",
      "topics": [
        "Understanding flow metrics",
        "Identifying bottlenecks and delays",
        "Applying Kanban practices",
        "Managing Work in Progress (WIP)",
        "Improving predictability and delivery performance"
      ]
    },
    {
      "title": "4. Facilitating Program Execution",
      "topics": [
        "Supporting Program Increment (PI) execution",
        "Managing dependencies across teams",
        "Facilitating collaboration across the ART",
        "Enhancing transparency and alignment",
        "Driving continuous value delivery"
      ]
    },
    {
      "title": "5. Addressing Agile and Scrum Anti-Patterns",
      "topics": [
        "Identifying common anti-patterns",
        "Diagnosing organizational impediments",
        "Resolving team dysfunctions",
        "Improving Agile maturity",
        "Coaching teams toward sustainable practices"
      ]
    },
    {
      "title": "6. Building High-Performing Teams",
      "topics": [
        "Team dynamics and team development",
        "Psychological safety",
        "Conflict resolution and collaboration",
        "Coaching for accountability and ownership",
        "Developing resilient Agile teams"
      ]
    },
    {
      "title": "7. Improving ART Performance",
      "topics": [
        "Inspect and Adapt (I&A)",
        "Problem-solving workshops",
        "Continuous improvement techniques",
        "Measuring outcomes and value delivery",
        "Facilitating relentless improvement"
      ]
    },
    {
      "title": "8. AI-Empowered Scrum Master Practices",
      "topics": [
        "Foundations of Artificial Intelligence",
        "AI-assisted facilitation and coaching",
        "AI-powered meeting preparation and summaries",
        "Leveraging AI for flow insights and metrics",
        "AI-enabled collaboration and knowledge management",
        "Responsible and ethical use of AI in Agile environments"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply advanced Scrum Master skills within a SAFe® enterprise",
    "Coach teams and stakeholders more effectively",
    "Facilitate collaboration across multiple Agile teams",
    "Optimize workflow using Kanban and flow-based practices",
    "Identify and address Agile and Scrum anti-patterns",
    "Build and sustain high-performing teams",
    "Improve ART performance through continuous improvement practices",
    "Facilitate Program Increment execution and value delivery",
    "Apply AI-powered tools to support facilitation, coaching, and decision-making",
    "Promote responsible AI adoption within Agile organizations"
  ],
  "certificationHeading": "Certification Exam Details",
  "certification": [
    {
      "label": "",
      "value": "AI-Empowered SAFe® Advanced Scrum Master (SASM) Exam"
    },
    {
      "label": "Certification",
      "value": "AI-Empowered SAFe® Advanced Scrum Master (SASM)"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
    },
    {
      "label": "Exam Delivery",
      "value": "Web-Based"
    },
    {
      "label": "Duration",
      "value": "120 Minutes"
    },
    {
      "label": "Number of Questions",
      "value": "60"
    },
    {
      "label": "Passing Score",
      "value": "80%"
    },
    {
      "label": "Language",
      "value": "English"
    },
    {
      "label": "Exam Access",
      "value": "Available through SAFe Studio™ following course completion"
    },
    {
      "label": "Exam Attempts Included",
      "value": "First two attempts included if taken within 60 days of course completion"
    },
    {
      "label": "Certification Validity",
      "value": "Annual renewal through Scaled Agile"
    }
  ],
  "courseHighlights": [
    "Advanced SAFe® Scrum Master training",
    "AI-powered facilitation and coaching techniques",
    "Flow optimization and Kanban practices",
    "Support for Program Increment (PI) execution",
    "Team coaching and conflict resolution",
    "Continuous improvement practices",
    "Responsible use of AI in Agile environments",
    "Certification exam preparation"
  ],
  "disclaimer": "SAFe®, Scaled Agile Framework®, SAFe Scrum Master®, SAFe Advanced Scrum Master®, SASM®, and all related trademarks are the property of Scaled Agile, Inc. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark or content concerns may be reported to training@quicklearnsys.com for review and correction."
};

export default function SAFeAdvancedScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
