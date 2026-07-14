import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "DevOps Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master DevOps fundamentals with DevOps Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led training covering DevOps culture, practices, automation, and continuous delivery principles. Enroll today!",
  keywords: "DevOps Foundation training Hyderabad, DevOps Foundation certification Hyderabad, best DevOps training institute Hyderabad, DevOps certification course Hyderabad, DevOps training India, DevOps Foundation, DevOps certification, continuous integration, continuous delivery, automation, DevOps culture, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "DevOps Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led DevOps Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/devops_foundation.jpg"],
  },
};

const courseData = {
  "title": "DevOps Foundation℠ Certification Training",
  "subtitle": "Build a High-Performance DevOps Culture and Accelerate Software Delivery",
  "backgroundImage": "/devops_foundation.jpg",
  "overview": [
    "The DevOps Foundation℠ certification provides a comprehensive introduction to DevOps principles, practices, culture, and automation. Designed for IT professionals, developers, operations teams, and business leaders, this course helps organizations improve collaboration, accelerate software delivery, enhance service quality, and achieve faster business outcomes.",
    "Aligned with the latest PeopleCert / DevOps Institute certification syllabus, the course covers the complete DevOps lifecycle, including Continuous Integration (CI), Continuous Delivery (CD), Infrastructure as Code (IaC), automation, cloud-native practices, observability, DevSecOps, value stream management, and the role of Artificial Intelligence (AI) in modern DevOps.",
    "Participants gain practical knowledge of how DevOps enables organizations to deliver high-quality software faster while fostering a culture of collaboration, continuous learning, and continuous improvement."
  ],
  "whyHead": "Why Choose DevOps Foundation℠?",
  "why": [
    "Learn globally recognized DevOps principles and practices",
    "Improve collaboration between Development, Operations, Security, and Business teams",
    "Accelerate software delivery through automation",
    "Understand Continuous Integration and Continuous Delivery (CI/CD)",
    "Improve reliability, quality, and customer satisfaction",
    "Build a strong foundation for advanced DevOps certifications"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, basic knowledge of software development, IT operations, Agile, cloud computing, or project management is beneficial."
  ],
  "whoShouldAttend": [
    "Software Developers",
    "DevOps Engineers",
    "Cloud Engineers",
    "Site Reliability Engineers (SREs)",
    "IT Operations Professionals",
    "System Administrators",
    "Infrastructure Engineers",
    "Release Managers",
    "Scrum Masters",
    "Agile Coaches",
    "Project Managers",
    "Product Managers",
    "Quality Assurance Professionals",
    "IT Managers",
    "Anyone interested in DevOps practices"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introducing DevOps",
      "topics": [
        "What is DevOps?",
        "Evolution of DevOps",
        "DevOps Culture",
        "Business Benefits",
        "CALMS Framework",
        "DevOps Principles"
      ]
    },
    {
      "title": "Module 2: DevOps Culture & Collaboration",
      "topics": [
        "Collaboration Across Teams",
        "Shared Responsibility",
        "Psychological Safety",
        "Continuous Learning",
        "Lean Thinking",
        "Agile and DevOps"
      ]
    },
    {
      "title": "Module 3: Lean, Agile & Value Stream Management",
      "topics": [
        "Lean Principles",
        "Agile Delivery",
        "Flow Optimization",
        "Value Stream Mapping",
        "Waste Reduction",
        "Continuous Improvement"
      ]
    },
    {
      "title": "Module 4: DevOps Practices",
      "topics": [
        "Continuous Integration (CI)",
        "Continuous Delivery (CD)",
        "Continuous Deployment",
        "Infrastructure as Code (IaC)",
        "Configuration Management",
        "Version Control"
      ]
    },
    {
      "title": "Module 5: Automation & Toolchains",
      "topics": [
        "DevOps Pipelines",
        "Build Automation",
        "Deployment Automation",
        "Containerization",
        "Kubernetes Fundamentals",
        "GitOps Overview"
      ]
    },
    {
      "title": "Module 6: Observability & Reliability",
      "topics": [
        "Monitoring",
        "Logging",
        "Distributed Tracing",
        "Metrics and Dashboards",
        "Incident Management",
        "Feedback Loops"
      ]
    },
    {
      "title": "Module 7: Security & DevSecOps",
      "topics": [
        "Shift Left Security",
        "Secure Software Development",
        "Vulnerability Management",
        "Compliance Automation",
        "Security in CI/CD Pipelines"
      ]
    },
    {
      "title": "Module 8: Cloud, AI & Modern DevOps",
      "topics": [
        "Cloud-Native Applications",
        "Platform Engineering",
        "Artificial Intelligence in DevOps",
        "AIOps Overview",
        "Intelligent Automation",
        "Future Trends"
      ]
    },
    {
      "title": "Module 9: DevOps Metrics & Continuous Improvement",
      "topics": [
        "DORA Metrics",
        "Lead Time",
        "Deployment Frequency",
        "Change Failure Rate",
        "Mean Time to Recovery (MTTR)",
        "Continuous Measurement"
      ]
    },
    {
      "title": "Module 10: DevOps Foundation Exam Preparation",
      "topics": [
        "Exam Structure",
        "Practice Questions",
        "Mock Examination",
        "Revision Sessions",
        "Exam Strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand DevOps culture, principles, and practices",
    "Apply Lean and Agile concepts to DevOps environments",
    "Implement CI/CD pipelines and automation",
    "Improve collaboration across Development, Operations, and Security teams",
    "Understand Infrastructure as Code and cloud-native practices",
    "Apply observability and reliability engineering concepts",
    "Understand the role of AI and AIOps in modern DevOps",
    "Measure DevOps performance using industry-standard metrics",
    "Prepare confidently for the DevOps Foundation certification examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "DevOps Foundation℠"
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
    "Real-world DevOps Case Studies",
    "Hands-on Discussions and Exercises",
    "Practice Questions & Mock Exam",
    "Comprehensive Study Material",
    "Certification Exam Preparation",
    "Post-training Support"
  ],
  "disclaimer": "DevOps Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function DevopsFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}