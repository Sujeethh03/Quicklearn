import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "DevSecOps Foundation℠ Certification Training in Hyderabad | QuickLearn Systems",
  description: "Integrate Security into DevOps and Build Secure Software at Speed",
  openGraph: {
    title: "DevSecOps Foundation℠ Certification Training in Hyderabad | QuickLearn Systems",
    description: "Integrate Security into DevOps and Build Secure Software at Speed",
    images: ["/devops_foundation.jpg"],
  },
};

const courseData = {
  "title": "DevSecOps Foundation℠ Certification Training",
  "subtitle": "Integrate Security into DevOps and Build Secure Software at Speed",
  "backgroundImage": "/devops_foundation.jpg",
  "overview": [
    "The DevSecOps Foundation℠ certification introduces professionals to the principles, practices, and culture of integrating security throughout the entire Software Development Life Cycle (SDLC). Rather than treating security as a final checkpoint, DevSecOps embeds security into planning, development, testing, deployment, and operations, enabling organizations to deliver secure, high-quality software rapidly and continuously.",
    "Aligned with the latest PeopleCert / DevOps Institute certification syllabus, this course explores how security can become a shared responsibility across Development, Security, and Operations teams. Participants learn how to implement secure CI/CD pipelines, automate security testing, manage software supply chain risks, strengthen cloud security, and adopt a \"Shift Left\" approach to identify and remediate vulnerabilities early.",
    "The course also introduces modern topics such as DevSecOps culture, Zero Trust principles, Software Bill of Materials (SBOM), supply chain security, Infrastructure as Code (IaC) security, container and Kubernetes security, cloud-native security, AI-assisted security operations, and compliance automation.",
    "Upon successful completion, participants will be prepared to take the DevSecOps Foundation℠ certification examination."
  ],
  "whyHead": "Why Choose DevSecOps Foundation℠?",
  "why": [
    "Learn how to integrate security into every stage of software delivery",
    "Reduce vulnerabilities through early security testing",
    "Understand secure CI/CD pipelines and DevSecOps automation",
    "Improve cloud-native and container security",
    "Strengthen software supply chain security",
    "Build a solid foundation for modern application security practices"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, basic knowledge of any of the following is beneficial:",
    "Software Development",
    "DevOps",
    "Agile",
    "Cloud Computing",
    "IT Operations",
    "Cybersecurity Fundamentals"
  ],
  "whoShouldAttend": [
    "Software Developers",
    "DevOps Engineers",
    "DevSecOps Engineers",
    "Security Engineers",
    "Application Security Professionals",
    "Cloud Engineers",
    "Site Reliability Engineers (SREs)",
    "Platform Engineers",
    "Infrastructure Engineers",
    "IT Operations Professionals",
    "Security Architects",
    "Release Managers",
    "QA and Test Engineers",
    "Technical Leads",
    "IT Managers",
    "Anyone responsible for secure software delivery"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to DevSecOps",
      "topics": [
        "What is DevSecOps?",
        "Evolution from DevOps to DevSecOps",
        "Business Value of DevSecOps",
        "DevSecOps Culture",
        "Shared Responsibility Model",
        "Secure Software Delivery Lifecycle"
      ]
    },
    {
      "title": "Module 2: DevSecOps Principles",
      "topics": [
        "Shift Left Security",
        "Shift Right Security",
        "Secure by Design",
        "Security as Code",
        "Continuous Security",
        "Risk-Based Security"
      ]
    },
    {
      "title": "Module 3: Secure Software Development Lifecycle (SSDLC)",
      "topics": [
        "Secure Requirements",
        "Secure Design Principles",
        "Secure Coding Practices",
        "Threat Modeling",
        "Code Review",
        "Secure Development Standards"
      ]
    },
    {
      "title": "Module 4: CI/CD Pipeline Security",
      "topics": [
        "Secure Build Pipelines",
        "Automated Security Gates",
        "Continuous Integration Security",
        "Continuous Delivery Security",
        "Continuous Compliance",
        "Secrets Management"
      ]
    },
    {
      "title": "Module 5: Application Security Testing",
      "topics": [
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Interactive Application Security Testing (IAST)",
        "Software Composition Analysis (SCA)",
        "Vulnerability Scanning",
        "Penetration Testing Overview"
      ]
    },
    {
      "title": "Module 6: Cloud-Native & Container Security",
      "topics": [
        "Cloud Security Fundamentals",
        "Container Security",
        "Kubernetes Security",
        "Infrastructure as Code (IaC) Security",
        "Policy as Code",
        "Runtime Protection"
      ]
    },
    {
      "title": "Module 7: Software Supply Chain Security",
      "topics": [
        "Software Bill of Materials (SBOM)",
        "Dependency Management",
        "Third-Party Risk Management",
        "Open Source Security",
        "Artifact Integrity",
        "Supply Chain Threats"
      ]
    },
    {
      "title": "Module 8: Governance, Risk & Compliance (GRC)",
      "topics": [
        "Security Governance",
        "Risk Assessment",
        "Compliance Automation",
        "Regulatory Requirements",
        "Security Metrics",
        "Audit Readiness"
      ]
    },
    {
      "title": "Module 9: AI, Automation & the Future of DevSecOps",
      "topics": [
        "AI-assisted Security Operations",
        "Security Automation",
        "Intelligent Threat Detection",
        "Zero Trust Architecture",
        "Platform Engineering and Security",
        "Emerging DevSecOps Trends"
      ]
    },
    {
      "title": "Module 10: DevSecOps Foundation Exam Preparation",
      "topics": [
        "Certification Overview",
        "Exam Structure",
        "Practice Questions",
        "Mock Examination",
        "Revision Sessions",
        "Exam Strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand DevSecOps culture, principles, and practices",
    "Integrate security throughout the software development lifecycle",
    "Apply Shift Left and Shift Right security strategies",
    "Secure CI/CD pipelines using automation",
    "Implement application security testing techniques",
    "Protect cloud-native applications, containers, and Kubernetes environments",
    "Manage software supply chain risks using SBOM and dependency management",
    "Apply governance, compliance, and security metrics effectively",
    "Understand the role of AI and automation in modern DevSecOps",
    "Prepare confidently for the DevSecOps Foundation certification examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "DevSecOps Foundation℠"
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
    "Real-world DevSecOps Case Studies",
    "Interactive Workshops",
    "Practice Questions & Mock Exam",
    "Comprehensive Course Material",
    "Certification Exam Preparation",
    "Post-training Support"
  ],
  "disclaimer": "DevSecOps Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function DevSecOpsFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
