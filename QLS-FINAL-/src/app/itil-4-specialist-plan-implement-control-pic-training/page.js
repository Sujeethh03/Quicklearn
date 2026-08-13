import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-4-specialist-plan-implement-control-pic-training" },
  title: "ITIL® 4 Specialist: Plan, Implement and Control (PIC) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Plan, deploy, and control IT services with confidence. ITIL® 4 Specialist: Plan, Implement and Control (PIC) covers Change Enablement, Release, Deployment, Service Configuration, and IT Asset Management. Expert-led, accredited training toward the ITIL 4 Practice Manager qualification.",
  keywords: "ITIL 4 PIC training Hyderabad, Plan Implement and Control certification, ITIL 4 Practice Manager, Change Enablement, Release Management, Deployment Management, IT Asset Management, QuickLearn Systems",
  openGraph: {
    title: "ITIL® 4 Specialist: Plan, Implement and Control (PIC) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Plan, deploy, and control IT services through effective change, release, asset, and configuration management.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® 4 Specialist: Plan, Implement and Control (PIC) Certification Training",
  subtitle: "Plan, Deploy, and Control IT Services with Confidence Through Effective Change, Release, Asset, and Configuration Management",
  breadcrumbTitle: "ITIL® 4 Specialist: Plan, Implement and Control",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Specialist: Plan, Implement and Control (PIC) certification equips IT professionals with the practical knowledge and skills required to successfully plan, implement, and control IT services throughout their lifecycle.",
    "As one of the three specialist modules within the ITIL® 4 Practice Manager (PM) qualification, this course focuses on enabling controlled service changes, effective release management, accurate service configuration, IT asset governance, and deployment planning. Participants learn how to balance speed, quality, governance, and risk while supporting business objectives and maintaining service stability.",
    "The course combines five essential ITIL management practices — Change Enablement, Release Management, Service Configuration Management, IT Asset Management, and Deployment Management — showing how they work together to reduce operational risk, improve service quality, accelerate delivery, and support continual improvement.",
  ],
  whyHead: "Why Choose ITIL® 4 Specialist: Plan, Implement and Control?",
  why: [
    "Learn how to manage IT changes with confidence",
    "Improve release planning and deployment success",
    "Strengthen IT asset and configuration governance",
    "Reduce operational risk during service transitions",
    "Support faster and more reliable service delivery",
    "Improve compliance and service quality",
    "Progress toward the ITIL® 4 Practice Manager qualification",
  ],
  prerequisites: [
    "ITIL® 4 Foundation Certificate (or an eligible equivalent recognized within the ITIL qualification scheme).",
    "Recommended: experience in IT operations, infrastructure management, release management, or IT service management.",
    "Recommended: familiarity with ITIL service management concepts.",
  ],
  whoShouldAttend: [
    "Change Managers",
    "Release Managers",
    "Deployment Managers",
    "Configuration Managers",
    "IT Asset Managers",
    "Service Transition Managers",
    "Infrastructure and IT Operations Managers",
    "Cloud Operations and DevOps Engineers",
    "Service Delivery Managers and IT Consultants",
    "Professionals pursuing the ITIL® 4 Practice Manager designation",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to Plan, Implement and Control",
      topics: ["Purpose and objectives of the PIC module", "Planning and governance in IT service management", "Service lifecycle integration", "Delivering controlled and reliable service changes", "Value creation through operational excellence"],
    },
    {
      title: "Module 2: Change Enablement",
      topics: ["Principles of change enablement", "Types of service changes", "Change assessment and authorization", "Change scheduling and coordination", "Risk-based decision-making", "Measuring change success"],
    },
    {
      title: "Module 3: Release Management",
      topics: ["Release planning and governance", "Release scheduling", "Coordinating releases across environments", "Release validation", "Stakeholder communication", "Release performance measurement"],
    },
    {
      title: "Module 4: Deployment Management",
      topics: ["Deployment planning", "Deployment approaches and strategies", "Deployment verification", "Rollback planning", "Deployment automation concepts", "Minimizing business disruption"],
    },
    {
      title: "Module 5: Service Configuration Management",
      topics: ["Configuration management principles", "Configuration Items (CIs)", "Configuration relationships", "Configuration Management Database (CMDB)", "Maintaining configuration accuracy", "Supporting operational decision-making"],
    },
    {
      title: "Module 6: IT Asset Management",
      topics: ["Managing IT assets throughout their lifecycle", "Asset planning and acquisition", "Asset utilization and optimization", "Software and hardware asset governance", "Asset compliance", "Disposal and retirement planning"],
    },
    {
      title: "Module 7: Risk Management and Governance",
      topics: ["Identifying implementation risks", "Governance principles", "Compliance requirements", "Audit readiness", "Operational controls", "Business continuity considerations"],
    },
    {
      title: "Module 8: Automation and Modern Implementation Practices",
      topics: ["Automation in deployments", "Infrastructure as Code (IaC) concepts", "Continuous Integration and Continuous Delivery (CI/CD)", "Intelligent change analysis", "Digital workflows", "Operational efficiency through automation"],
    },
    {
      title: "Module 9: Measurement and Continual Improvement",
      topics: ["Key Performance Indicators (KPIs)", "Change success metrics", "Release performance indicators", "Configuration accuracy measurement", "Asset optimization metrics", "Continual improvement planning"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["Change advisory scenarios", "Release planning workshops", "Deployment simulations", "CMDB improvement exercises", "IT asset lifecycle case studies", "Organizational implementation examples"],
    },
  ],
  learningOutcomes: [
    "Understand the purpose and value of planning, implementation, and control practices",
    "Apply effective change enablement techniques",
    "Coordinate releases and deployments successfully",
    "Manage service configurations and IT assets efficiently",
    "Strengthen governance and operational control",
    "Measure implementation performance using meaningful metrics",
    "Contribute to reliable, high-quality IT service delivery",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Specialist: Plan, Implement and Control" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "60" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "65% (39/60)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Latest ITIL® 4 Practice Manager curriculum",
    "Covers five essential ITIL management practices",
    "Practical implementation workshops",
    "Change, release, and deployment management",
    "Asset and configuration management best practices",
    "Real-world case studies and exercises",
    "Comprehensive certification exam preparation",
  ],
};

export default function PlanImplementControlPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
