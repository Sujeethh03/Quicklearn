import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "DevSecOps Practitioner℠ Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Advanced DevSecOps Practices to Build, Secure, and Scale Modern Software Delivery",
  openGraph: {
    title: "DevSecOps Practitioner℠ Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master Advanced DevSecOps Practices to Build, Secure, and Scale Modern Software Delivery",
    images: ["/devops_master.jpg"],
  },
};

const courseData = {
  "title": "DevSecOps Practitioner℠ Certification Training",
  "subtitle": "Master Advanced DevSecOps Practices to Build, Secure, and Scale Modern Software Delivery",
  "backgroundImage": "/devops_master.jpg",
  "overview": [
    "The DevSecOps Practitioner℠ certification is an advanced program designed for professionals responsible for implementing, scaling, and governing security across modern software delivery pipelines.",
    "Building upon DevSecOps Foundation concepts, this course focuses on implementing enterprise-grade DevSecOps practices by integrating security throughout the Software Development Life Cycle (SDLC), Continuous Integration/Continuous Delivery (CI/CD) pipelines, cloud-native platforms, Infrastructure as Code (IaC), containers, Kubernetes, and software supply chains.",
    "Aligned with the latest PeopleCert / DevOps Institute certification objectives, participants learn how to embed security into engineering workflows while balancing speed, quality, compliance, and business value.",
    "The course also covers emerging industry practices including Zero Trust, Policy as Code, Software Bill of Materials (SBOM), Secure Supply Chain, AI-assisted Security Operations, Continuous Compliance, Threat Modeling, and DevSecOps Maturity Models.",
    "Upon successful completion, participants will be prepared for the DevSecOps Practitioner℠ certification examination and equipped to lead DevSecOps initiatives across enterprise environments."
  ],
  "whyHead": "Why Choose DevSecOps Practitioner℠?",
  "why": [
    "Implement enterprise-scale DevSecOps practices",
    "Secure CI/CD pipelines through automation",
    "Strengthen cloud-native and Kubernetes security",
    "Reduce software supply chain risks",
    "Build security into every phase of software delivery",
    "Lead DevSecOps transformation initiatives"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "However, participants are strongly encouraged to have:",
    "DevSecOps Foundation℠ certification (recommended)",
    "Knowledge of DevOps practices and CI/CD",
    "Familiarity with cloud computing and containers",
    "Basic understanding of cybersecurity principles",
    "Experience with Agile or software development"
  ],
  "whoShouldAttend": [
    "DevSecOps Engineers",
    "DevOps Engineers",
    "Security Engineers",
    "Cloud Security Engineers",
    "Application Security Engineers",
    "Platform Engineers",
    "Site Reliability Engineers (SREs)",
    "Cloud Architects",
    "Software Developers",
    "Security Architects",
    "Infrastructure Engineers",
    "Technical Leads",
    "Engineering Managers",
    "IT Security Professionals",
    "Enterprise Architects"
  ],
  "curriculum": [
    {
      "title": "Module 1: Advanced DevSecOps Principles",
      "topics": [
        "DevSecOps evolution",
        "Enterprise DevSecOps operating model",
        "Security culture",
        "Shared responsibility",
        "DevSecOps value streams",
        "DevSecOps maturity models"
      ]
    },
    {
      "title": "Module 2: Secure Software Development Lifecycle (SSDLC)",
      "topics": [
        "Secure requirements engineering",
        "Threat modeling",
        "Secure architecture",
        "Secure coding standards",
        "Code review practices",
        "Security design principles"
      ]
    },
    {
      "title": "Module 3: Secure CI/CD Pipelines",
      "topics": [
        "Pipeline architecture",
        "Security gates",
        "Build pipeline security",
        "Artifact management",
        "Secrets management",
        "Continuous verification"
      ]
    },
    {
      "title": "Module 4: Advanced Application Security Testing",
      "topics": [
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Interactive Application Security Testing (IAST)",
        "Runtime Application Self-Protection (RASP)",
        "Software Composition Analysis (SCA)",
        "API Security Testing",
        "Fuzz Testing"
      ]
    },
    {
      "title": "Module 5: Cloud-Native Security",
      "topics": [
        "Cloud security architecture",
        "Container security",
        "Kubernetes security",
        "Infrastructure as Code (IaC) security",
        "Policy as Code",
        "Admission controllers",
        "Runtime protection"
      ]
    },
    {
      "title": "Module 6: Software Supply Chain Security",
      "topics": [
        "Software Bill of Materials (SBOM)",
        "Secure dependency management",
        "Third-party risk",
        "Artifact signing",
        "Software provenance",
        "Supply chain security frameworks",
        "Open-source governance"
      ]
    },
    {
      "title": "Module 7: Governance, Risk & Compliance",
      "topics": [
        "Security governance",
        "Compliance as Code",
        "Continuous compliance",
        "Risk management",
        "Audit automation",
        "Security metrics",
        "Regulatory frameworks"
      ]
    },
    {
      "title": "Module 8: AI, Automation & Security Intelligence",
      "topics": [
        "AI-assisted vulnerability management",
        "Intelligent threat detection",
        "Security orchestration and automation (SOAR)",
        "Machine learning in cybersecurity",
        "Predictive risk analytics",
        "Security analytics",
        "Responsible AI in security"
      ]
    },
    {
      "title": "Module 9: Enterprise DevSecOps Adoption",
      "topics": [
        "Organizational transformation",
        "DevSecOps operating models",
        "Team structures",
        "Leadership",
        "Security champions",
        "Change management",
        "Measuring business value"
      ]
    },
    {
      "title": "Module 10: Practitioner Exam Preparation",
      "topics": [
        "Certification overview",
        "Exam structure",
        "Scenario-based questions",
        "Practice examinations",
        "Revision workshops",
        "Exam strategies"
      ]
    }
  ],
  "learningOutcomes": [
    "Design and implement enterprise DevSecOps practices",
    "Integrate automated security into CI/CD pipelines",
    "Apply secure software engineering principles throughout the SDLC",
    "Protect cloud-native applications, containers, and Kubernetes environments",
    "Secure software supply chains using SBOM and dependency management",
    "Implement Policy as Code and Infrastructure as Code security",
    "Apply governance, compliance, and risk management practices",
    "Use AI-assisted security tools to improve operational efficiency",
    "Lead enterprise DevSecOps transformation initiatives",
    "Prepare confidently for the DevSecOps Practitioner certification examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "DevSecOps Practitioner℠"
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
      "value": "90 Minutes"
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
      "value": "Subject to the current PeopleCert Continuing Professional Development (CPD) policy."
    }
  ],
  "courseHighlights": [
    "Latest PeopleCert / DevOps Institute Curriculum",
    "Instructor-led Live Training",
    "Enterprise Case Studies",
    "Practical DevSecOps Workshops",
    "Hands-on Security Discussions",
    "Practice Questions & Mock Exam",
    "Comprehensive Course Material",
    "Certification Exam Preparation"
  ],
  "disclaimer": "DevSecOps Practitioner℠, DevSecOps Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function DevSecOpsPractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
