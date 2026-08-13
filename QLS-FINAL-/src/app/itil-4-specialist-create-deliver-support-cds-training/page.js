import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-4-specialist-create-deliver-support-cds-training" },
  title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master the core capabilities of IT service delivery, support, and value creation with ITIL® 4 Specialist: Create, Deliver and Support (CDS). Accredited training covering value streams, service design and transition, Agile/Lean/DevOps integration, and continual improvement toward the ITIL 4 Managing Professional qualification.",
  keywords: "ITIL 4 CDS training Hyderabad, Create Deliver and Support certification, ITIL 4 Managing Professional, value streams, service design and transition, Agile Lean DevOps, QuickLearn Systems",
  openGraph: {
    title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master the core capabilities of IT service delivery, support, and value creation across the service lifecycle.",
    images: ["/create_deliver_support.jpg"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS) Certification Training",
  subtitle: "Master the Core Capabilities of IT Service Delivery, Support, and Value Creation Across the Service Lifecycle",
  breadcrumbTitle: "ITIL® 4 Specialist: Create, Deliver and Support",
  backgroundImage: "/create_deliver_support.jpg",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Specialist: Create, Deliver and Support (CDS) certification equips IT professionals with the practical knowledge and skills required to design, build, deliver, and support high-quality IT-enabled products and services.",
    "As one of the core modules within the ITIL 4 Managing Professional qualification, CDS focuses on integrating people, processes, technology, and partners to deliver value throughout the service lifecycle. The course explores how organizations can improve service quality, optimize workflows, adopt Agile and DevOps practices, and enable continual improvement while meeting customer expectations.",
    "Participants will gain a practical understanding of service design, service transition, deployment, support operations, value streams, and performance measurement in modern digital environments.",
  ],
  whyHead: "Why Choose ITIL® 4 Specialist: Create, Deliver and Support?",
  why: [
    "Develop practical expertise in managing end-to-end service delivery",
    "Learn how to design and transition services efficiently",
    "Improve operational performance using ITIL best practices",
    "Understand value streams and workflow optimization",
    "Integrate Agile, Lean, and DevOps into service management",
    "Enhance collaboration across teams and stakeholders",
    "Prepare for the ITIL 4 Managing Professional qualification",
  ],
  prerequisites: [
    "ITIL 4 Foundation Certificate (or an eligible ITIL Foundation certification recognized within the current qualification scheme).",
    "Recommended: experience in IT Service Management.",
    "Recommended: familiarity with IT operations or service delivery; knowledge of Agile, Lean, or DevOps concepts is beneficial.",
  ],
  whoShouldAttend: [
    "IT Service Managers",
    "Service Delivery Managers",
    "IT Operations Managers",
    "Service Desk Managers",
    "Incident and Problem Managers",
    "Change Enablement and Release Managers",
    "DevOps Professionals",
    "Infrastructure Managers and Cloud Operations Engineers",
    "IT Architects and Digital Transformation Professionals",
    "Professionals pursuing the ITIL Managing Professional designation",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to Create, Deliver and Support",
      topics: ["Purpose and objectives of the CDS practice", "The role of service management in modern organizations", "Value creation through products and services", "Service relationships and stakeholder expectations"],
    },
    {
      title: "Module 2: Planning and Building Value Streams",
      topics: ["Understanding value streams", "Mapping service workflows", "Identifying activities and dependencies", "Eliminating bottlenecks", "Improving service efficiency"],
    },
    {
      title: "Module 3: Organizing People and Teams",
      topics: ["Building effective service teams", "Roles and responsibilities", "Skills management and workforce planning", "Communication and collaboration", "Leadership in service management"],
    },
    {
      title: "Module 4: Information, Technology and Tools",
      topics: ["Supporting service delivery with technology", "Automation opportunities", "Knowledge management", "Collaboration platforms", "Service management tools", "Data-driven decision making"],
    },
    {
      title: "Module 5: Designing and Transitioning Services",
      topics: ["Service design principles", "Service transition planning", "Release planning", "Deployment approaches", "Change enablement", "Validation and testing considerations"],
    },
    {
      title: "Module 6: Delivering and Supporting Services",
      topics: ["Incident management", "Service request management", "Problem management", "Monitoring and event management", "Service continuity considerations", "Service desk capabilities", "Operational excellence"],
    },
    {
      title: "Module 7: Service Performance and Continual Improvement",
      topics: ["Measuring service performance", "Key performance indicators (KPIs)", "Service metrics and reporting", "Customer satisfaction measurement", "Continual improvement practices", "Value realization"],
    },
    {
      title: "Module 8: Integrating Agile, Lean and DevOps",
      topics: ["Agile principles in service management", "Lean thinking for waste reduction", "DevOps culture and collaboration", "Continuous integration and delivery concepts", "Improving service flow and feedback loops"],
    },
    {
      title: "Module 9: Managing Risks and Governance",
      topics: ["Risk identification and assessment", "Governance considerations", "Compliance requirements", "Supplier collaboration", "Managing service resilience"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["End-to-end service lifecycle scenarios", "Designing efficient value streams", "Service improvement workshops", "Operational decision-making exercises", "Real-world implementation examples"],
    },
  ],
  learningOutcomes: [
    "Explain the principles of creating, delivering, and supporting services",
    "Apply value stream concepts to improve service delivery",
    "Organize people, technology, and processes for effective service management",
    "Improve customer experience through efficient service operations",
    "Integrate modern ways of working into IT service management",
    "Evaluate service performance using meaningful metrics",
    "Support organizational goals through continual improvement",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Specialist: Create, Deliver and Support" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28/40)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Prerequisite", value: "Valid ITIL 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Latest ITIL 4 Managing Professional syllabus",
    "Practical approach to service creation and delivery",
    "Real-world case studies and implementation scenarios",
    "Value stream design and optimization",
    "Agile, Lean, and DevOps integration",
    "Interactive exercises and discussions",
    "Comprehensive exam preparation",
  ],
};

export default function ITL4SCDSPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
