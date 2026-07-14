import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SRE Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Site Reliability Engineering (SRE) Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led SRE Practitioner training covering SLOs, error budgets, observability, and DevOps reliability. Enroll today!",
  keywords:
    "SRE Practitioner training Hyderabad, Site Reliability Engineering Practitioner certification Hyderabad, best SRE training institute Hyderabad, SRE Practitioner course Hyderabad, SRE training India, SRE Practitioner, Site Reliability Engineering training, SLO, SLA, error budgets, DevOps reliability, observability, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SRE Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led SRE Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/sre_practitioner.jpg"],
  },
};

const courseData = {
  "title": "Site Reliability Engineering (SRE) Practitioner℠ Certification Training",
  "subtitle": "Master Advanced Reliability Engineering for Modern Cloud-Native Enterprises",
  "backgroundImage": "/sre_practitioner.jpg",
  "overview": [
    "The Site Reliability Engineering (SRE) Practitioner℠ certification is an advanced program designed for professionals who want to implement mature Site Reliability Engineering practices across complex enterprise environments.",
    "Building upon foundational SRE concepts, this course focuses on advanced observability, security, resilience engineering, platform engineering, AIOps, incident response, and chaos engineering. Participants learn how to design scalable reliability practices, improve operational excellence, and optimize customer experience using engineering-driven operational models.",
    "The course follows the latest PeopleCert / DevOps Institute certification blueprint and prepares participants for the SRE Practitioner certification examination."
  ],
  "whyHead": "Why Choose SRE Practitioner℠?",
  "why": [
    "Apply advanced SRE implementation techniques",
    "Improve enterprise-scale reliability engineering",
    "Build secure, observable, and resilient systems",
    "Implement Platform Engineering and AIOps",
    "Lead incident response and resilience initiatives",
    "Advance your career as a Site Reliability Engineer"
  ],
  "prerequisites": [
    "Although there are no mandatory prerequisites for attending the training, it is highly recommended that participants:",
    "Hold the SRE Foundation℠ certification, or",
    "Have a solid understanding of SRE concepts, DevOps practices, cloud computing, automation, and modern IT operations."
  ],
  "whoShouldAttend": [
    "Site Reliability Engineers",
    "Senior DevOps Engineers",
    "Platform Engineers",
    "Cloud Architects",
    "Infrastructure Engineers",
    "IT Operations Managers",
    "DevOps Consultants",
    "Software Engineers",
    "Technical Leads",
    "Engineering Managers",
    "Reliability Engineering Leaders"
  ],
  "curriculum": [
    {
      "title": "Module 1: SRE Anti-Patterns",
      "topics": [
        "Common Reliability Pitfalls",
        "Organizational Anti-patterns",
        "Reliability Culture",
        "Continuous Improvement"
      ]
    },
    {
      "title": "Module 2: SLOs as a Measure of Customer Value",
      "topics": [
        "Advanced SLIs & SLOs",
        "Error Budget Policies",
        "Reliability Metrics",
        "Customer-focused Reliability"
      ]
    },
    {
      "title": "Module 3: Building Secure & Reliable Systems",
      "topics": [
        "Secure System Design",
        "Reliability by Design",
        "Zero Trust Concepts",
        "Resilience Engineering"
      ]
    },
    {
      "title": "Module 4: Full-Stack Observability",
      "topics": [
        "Distributed Tracing",
        "Telemetry",
        "Advanced Monitoring",
        "Observability-driven Development"
      ]
    },
    {
      "title": "Module 5: Platform Engineering & AIOps",
      "topics": [
        "Platform Engineering Fundamentals",
        "Internal Developer Platforms",
        "Artificial Intelligence for IT Operations (AIOps)",
        "DataOps",
        "Predictive Operations"
      ]
    },
    {
      "title": "Module 6: Incident Response Management",
      "topics": [
        "Major Incident Management",
        "Incident Command",
        "Blameless Postmortems",
        "Reliability Metrics",
        "Continuous Learning"
      ]
    },
    {
      "title": "Module 7: Chaos Engineering",
      "topics": [
        "Chaos Engineering Principles",
        "Failure Testing",
        "Resilience Validation",
        "Experiment Design"
      ]
    },
    {
      "title": "Module 8: Advanced SRE Practices",
      "topics": [
        "Scaling SRE Across the Enterprise",
        "Organizational Transformation",
        "Reliability Governance",
        "SRE and DevOps Integration",
        "Future Trends in Reliability Engineering"
      ]
    }
  ],
  "learningOutcomes": [
    "Implement advanced Site Reliability Engineering practices",
    "Build secure and resilient cloud-native systems",
    "Design effective observability strategies",
    "Apply AIOps and Platform Engineering concepts",
    "Improve incident response and operational resilience",
    "Implement Chaos Engineering practices",
    "Scale SRE across enterprise environments",
    "Prepare confidently for the SRE Practitioner certification examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Site Reliability Engineering (SRE) Practitioner℠"
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
      "value": "3 Years (subject to PeopleCert CPD requirements)"
    }
  ],
  "courseHighlights": [
    "Latest SRE Practitioner Curriculum",
    "Instructor-led Live Training",
    "Advanced Reliability Engineering Scenarios",
    "Hands-on Workshops",
    "Practice Questions & Mock Exams",
    "Comprehensive Course Material",
    "Certification Preparation",
    "Post-training Support"
  ],
  "disclaimer": "Site Reliability Engineering (SRE) Practitioner℠, Site Reliability Engineering (SRE) Foundation℠, DevOps Institute®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or DevOps Institute. All trademarks are acknowledged as the property of their respective owners."
};

export default function SREPractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
