import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "AIOps Foundation℠ Certification Training in Hyderabad | QuickLearn Systems",
  description: "Transform IT Operations with Artificial Intelligence, Machine Learning, and Intelligent Automation",
  openGraph: {
    title: "AIOps Foundation℠ Certification Training in Hyderabad | QuickLearn Systems",
    description: "Transform IT Operations with Artificial Intelligence, Machine Learning, and Intelligent Automation",
    images: ["/devops_foundation.jpg"],
  },
};

const courseData = {
  "title": "AIOps Foundation℠ Certification Training",
  "subtitle": "Transform IT Operations with Artificial Intelligence, Machine Learning, and Intelligent Automation",
  "backgroundImage": "/devops_foundation.jpg",
  "overview": [
    "The AIOps Foundation℠ certification provides a comprehensive introduction to Artificial Intelligence for IT Operations (AIOps), enabling organizations to modernize IT operations through intelligent automation, predictive analytics, machine learning, and advanced observability.",
    "As modern IT environments become increasingly complex with cloud-native architectures, microservices, containers, hybrid cloud, and distributed systems, traditional monitoring approaches are no longer sufficient. AIOps combines Big Data, Artificial Intelligence (AI), Machine Learning (ML), and automation to improve operational efficiency, proactively detect issues, reduce outages, and accelerate incident resolution.",
    "Aligned with the latest PeopleCert / DevOps Institute certification syllabus, this course introduces participants to the principles, technologies, and practical applications of AIOps while demonstrating how AI-powered operations enhance reliability, customer experience, and business value.",
    "Upon successful completion, participants will be prepared to take the AIOps Foundation℠ certification examination."
  ],
  "whyHead": "Why Choose AIOps Foundation℠?",
  "why": [
    "Learn how AI is transforming IT Operations",
    "Understand Machine Learning and predictive analytics for operations",
    "Improve service reliability through intelligent automation",
    "Reduce Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR)",
    "Enhance observability and operational intelligence",
    "Build a strong foundation for AI-driven IT Operations"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, a basic understanding of any of the following is recommended:",
    "IT Operations",
    "DevOps",
    "Cloud Computing",
    "IT Service Management (ITSM)",
    "Monitoring and Observability",
    "Artificial Intelligence fundamentals"
  ],
  "whoShouldAttend": [
    "IT Operations Engineers",
    "DevOps Engineers",
    "Site Reliability Engineers (SREs)",
    "Cloud Engineers",
    "Platform Engineers",
    "System Administrators",
    "Infrastructure Engineers",
    "Network Engineers",
    "IT Service Management Professionals",
    "IT Managers",
    "Operations Managers",
    "Digital Transformation Leaders",
    "AI and Automation Professionals",
    "anyone interested in intelligent IT operations"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to AIOps",
      "topics": [
        "Evolution of IT Operations",
        "What is AIOps?",
        "Business Drivers for AIOps",
        "AIOps Architecture",
        "Benefits and Challenges"
      ]
    },
    {
      "title": "Module 2: Artificial Intelligence & Machine Learning Fundamentals",
      "topics": [
        "Artificial Intelligence Concepts",
        "Machine Learning Basics",
        "Supervised and Unsupervised Learning",
        "Predictive Analytics",
        "Natural Language Processing (NLP)",
        "Generative AI in IT Operations"
      ]
    },
    {
      "title": "Module 3: Big Data & Operational Intelligence",
      "topics": [
        "Big Data Fundamentals",
        "Data Collection and Aggregation",
        "Event Correlation",
        "Data Lakes",
        "Operational Analytics",
        "Intelligent Insights"
      ]
    },
    {
      "title": "Module 4: Monitoring, Observability & Telemetry",
      "topics": [
        "Modern Monitoring",
        "Observability Principles",
        "Metrics, Logs, and Traces",
        "Distributed Systems Monitoring",
        "Service Health Dashboards",
        "Real-time Analytics"
      ]
    },
    {
      "title": "Module 5: Intelligent Incident Management",
      "topics": [
        "Event Correlation",
        "Root Cause Analysis",
        "Predictive Incident Detection",
        "Automated Alert Management",
        "Incident Prioritization",
        "Intelligent Remediation"
      ]
    },
    {
      "title": "Module 6: Automation & AIOps",
      "topics": [
        "Intelligent Automation",
        "Workflow Automation",
        "Self-Healing Systems",
        "Robotic Process Automation (RPA)",
        "AI-assisted Operations",
        "Autonomous Operations"
      ]
    },
    {
      "title": "Module 7: AIOps in Modern IT Environments",
      "topics": [
        "Cloud-native Operations",
        "Kubernetes and Containers",
        "Hybrid Cloud Monitoring",
        "DevOps Integration",
        "SRE Practices",
        "Platform Engineering"
      ]
    },
    {
      "title": "Module 8: Governance, Ethics & Responsible AI",
      "topics": [
        "Responsible AI",
        "AI Governance",
        "Data Privacy",
        "Explainable AI",
        "Risk Management",
        "Human Oversight"
      ]
    },
    {
      "title": "Module 9: Measuring Business Value",
      "topics": [
        "Operational KPIs",
        "Mean Time to Detect (MTTD)",
        "Mean Time to Resolve (MTTR)",
        "Service Availability",
        "Customer Experience Metrics",
        "Continuous Improvement"
      ]
    },
    {
      "title": "Module 10: AIOps Foundation Exam Preparation",
      "topics": [
        "Certification Overview",
        "Exam Structure",
        "Practice Questions",
        "Mock Examination",
        "Revision and Exam Strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Explain the core concepts and benefits of AIOps",
    "Understand AI and Machine Learning applications in IT Operations",
    "Improve observability using metrics, logs, and traces",
    "Apply predictive analytics to detect operational issues",
    "Automate incident management and operational workflows",
    "Integrate AIOps with DevOps, SRE, and Cloud Operations",
    "Understand governance and ethical considerations for AI",
    "Measure operational performance using industry-standard metrics",
    "Prepare confidently for the AIOps Foundation certification examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "AIOps Foundation℠"
    },
    {
      "label": "Certification Provider",
      "value": "PeopleCert / DevOps Institute"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice"
    },
    {
      "label": "Questions",
      "value": "40"
    },
    {
      "label": "Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "65%"
    },
    {
      "label": "Open Book",
      "value": "Yes"
    },
    {
      "label": "Delivery",
      "value": "Online Proctored"
    },
    {
      "label": "Certification Validity",
      "value": "3 Years (subject to PeopleCert Continuing Professional Development requirements)"
    }
  ],
  "courseHighlights": [
    "Latest PeopleCert / DevOps Institute Curriculum",
    "Instructor-led Live Training",
    "Real-world AIOps Case Studies",
    "Interactive Workshops",
    "Practice Questions & Mock Exam",
    "Comprehensive Course Material",
    "Certification Exam Preparation",
    "Post-training Support"
  ],
  "disclaimer": "AIOps Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function AIOpsFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
