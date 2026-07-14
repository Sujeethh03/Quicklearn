import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SRE Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Site Reliability Engineering (SRE) Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led SRE training covering reliability principles, monitoring, incident response, and automation. Enroll today!",
  keywords: "SRE Foundation training Hyderabad, Site Reliability Engineering certification Hyderabad, best SRE training institute Hyderabad, SRE Foundation course Hyderabad, SRE training India, SRE Foundation, Site Reliability Engineering, system reliability, monitoring, incident response, automation, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SRE Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led SRE Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/sre_foundation.jpg"],
  },
};

const courseData = {
  "title": "Site Reliability Engineering (SRE) Foundation℠ Certification Training",
  "subtitle": "Build Reliable, Scalable, and Resilient Digital Services",
  "backgroundImage": "/sre_foundation.jpg",
  "overview": [
    "The Site Reliability Engineering (SRE) Foundation℠ certification introduces professionals to the principles, practices, and culture of Site Reliability Engineering (SRE). Originally pioneered to improve the reliability and scalability of large-scale systems, SRE combines software engineering with IT operations to build highly available, resilient, and automated services.",
    "This course provides a practical understanding of reliability engineering, Service Level Objectives (SLOs), Service Level Indicators (SLIs), Error Budgets, observability, automation, and incident management. Participants learn how to balance innovation with operational stability while improving customer experience and reducing operational risk.",
    "Aligned with the latest PeopleCert / DevOps Institute certification blueprint, this course prepares participants for the SRE Foundation certification exam and equips them with practical skills applicable to modern cloud-native and DevOps environments."
  ],
  "whyHead": "Why Choose SRE Foundation℠?",
  "why": [
    "Learn industry-recognized SRE principles and practices",
    "Improve system reliability and service resilience",
    "Understand SLOs, SLIs, and Error Budgets",
    "Reduce operational toil through automation",
    "Strengthen monitoring and observability capabilities",
    "Build a strong foundation for advanced SRE practices"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "A basic understanding of IT operations, cloud computing, DevOps, Agile, or software development is beneficial but not mandatory."
  ],
  "whoShouldAttend": [
    "Site Reliability Engineers",
    "DevOps Engineers",
    "Cloud Engineers",
    "System Administrators",
    "Platform Engineers",
    "Software Developers",
    "IT Operations Professionals",
    "Infrastructure Engineers",
    "Release Engineers",
    "IT Managers",
    "Technical Leads",
    "anyone interested in improving service reliability"
  ],
  "curriculum": [
    {
      "title": "Module 1: SRE Principles & Practices",
      "topics": [
        "Introduction to Site Reliability Engineering",
        "Evolution of SRE",
        "DevOps vs SRE",
        "Reliability Engineering Concepts",
        "Engineering Operations"
      ]
    },
    {
      "title": "Module 2: Service Level Objectives & Error Budgets",
      "topics": [
        "Service Level Indicators (SLIs)",
        "Service Level Objectives (SLOs)",
        "Service Level Agreements (SLAs)",
        "Error Budgets",
        "Reliability Trade-offs"
      ]
    },
    {
      "title": "Module 3: Reducing Toil",
      "topics": [
        "Understanding Operational Toil",
        "Automation Strategies",
        "Eliminating Repetitive Work",
        "Infrastructure as Code",
        "Self-healing Systems"
      ]
    },
    {
      "title": "Module 4: Monitoring & Service Level Indicators",
      "topics": [
        "Observability Fundamentals",
        "Metrics, Logs & Traces",
        "Monitoring Strategies",
        "Alerting Best Practices",
        "Performance Measurement"
      ]
    },
    {
      "title": "Module 5: SRE Tools & Automation",
      "topics": [
        "CI/CD Integration",
        "Automation Platforms",
        "Cloud-native Tooling",
        "Kubernetes & Containers",
        "Reliability Automation"
      ]
    },
    {
      "title": "Module 6: Anti-Fragility & Learning from Failure",
      "topics": [
        "Incident Response",
        "Blameless Postmortems",
        "Chaos Engineering Fundamentals",
        "Continuous Learning",
        "Resilience Engineering"
      ]
    },
    {
      "title": "Module 7: Organizational Impact of SRE",
      "topics": [
        "SRE Team Structures",
        "Collaboration with Development Teams",
        "Reliability Culture",
        "Governance",
        "Scaling SRE Practices"
      ]
    },
    {
      "title": "Module 8: SRE and the Future",
      "topics": [
        "SRE and DevOps",
        "Platform Engineering",
        "AI-assisted Operations",
        "AIOps Overview",
        "Emerging Trends in Reliability Engineering"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand core Site Reliability Engineering principles",
    "Define and implement SLIs, SLOs, and Error Budgets",
    "Improve service reliability through automation",
    "Implement effective monitoring and observability practices",
    "Reduce operational toil",
    "Build resilient systems using modern engineering practices",
    "Support organizational adoption of SRE",
    "Prepare confidently for the SRE Foundation certification exam"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Site Reliability Engineering (SRE) Foundation℠"
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
      "value": "3 Years (subject to PeopleCert CPD requirements)"
    }
  ],
  "courseHighlights": [
    "Latest SRE Foundation Curriculum",
    "Instructor-led Live Training",
    "Real-world Reliability Case Studies",
    "Hands-on Discussions",
    "Practice Questions & Mock Exam",
    "Comprehensive Study Material",
    "Certification Preparation",
    "Post-training Support"
  ],
  "disclaimer": "Site Reliability Engineering (SRE) Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function SREFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}