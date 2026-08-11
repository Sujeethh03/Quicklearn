import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist: High-Velocity IT (HVIT) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Accelerate digital transformation with Agile, Lean, DevOps, and High-Velocity IT service management. ITIL® 4 Specialist: High-Velocity IT (HVIT) covers digital operating models, automation, SRE, resilience, and rapid value delivery toward the ITIL 4 Managing Professional qualification.",
  keywords: "ITIL 4 HVIT training Hyderabad, High Velocity IT certification, ITIL 4 Managing Professional, Agile Lean DevOps SRE, digital operating models, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Specialist: High-Velocity IT (HVIT) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Accelerate digital transformation with Agile, Lean, DevOps, and High-Velocity IT service management.",
    images: ["/high_velocity_it.jpg"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® 4 Specialist: High-Velocity IT (HVIT), PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® 4 Specialist: High-Velocity IT (HVIT) Certification Training",
  subtitle: "Accelerate Digital Transformation with Agile, Lean, DevOps, and High-Velocity IT Service Management",
  breadcrumbTitle: "ITIL® 4 Specialist: High-Velocity IT",
  backgroundImage: "/high_velocity_it.jpg",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Specialist: High-Velocity IT (HVIT) certification equips IT professionals with the knowledge and practical skills required to operate successfully in fast-paced digital environments. As organizations increasingly adopt cloud technologies, automation, Agile, DevOps, and AI-driven operations, IT teams must deliver products and services rapidly while maintaining quality, resilience, and customer satisfaction.",
    "As a core module within the ITIL® 4 Managing Professional qualification, this course explores how digital organizations can create value through rapid service delivery, continuous innovation, Lean governance, and modern operating models. Participants will learn how to optimize digital products and services using Agile, Lean, DevOps, Site Reliability Engineering (SRE), automation, and continual improvement practices.",
    "The course also focuses on balancing speed, quality, governance, and risk while enabling organizations to respond quickly to changing business and customer needs.",
  ],
  whyHead: "Why Choose ITIL® 4 Specialist: High-Velocity IT?",
  why: [
    "Understand how digital organizations deliver value rapidly",
    "Learn to integrate Agile, Lean, DevOps, and ITIL practices",
    "Improve operational resilience and service reliability",
    "Enable faster innovation through modern delivery models",
    "Support cloud-native and digital transformation initiatives",
    "Optimize automation and continuous delivery practices",
    "Prepare for the ITIL® 4 Managing Professional designation",
  ],
  prerequisites: [
    "ITIL® 4 Foundation Certificate (or an eligible equivalent recognized within the ITIL qualification scheme).",
    "Recommended: experience in IT service management, software delivery, cloud operations, or digital transformation.",
    "Recommended: familiarity with Agile, Lean, DevOps, or IT operations.",
  ],
  whoShouldAttend: [
    "IT Managers and Service Delivery Managers",
    "DevOps Engineers",
    "Site Reliability Engineers (SRE)",
    "Cloud Engineers and Platform Engineers",
    "Digital Transformation Leaders",
    "Release Managers and Product Managers",
    "IT Architects and Software Development Managers",
    "Agile Coaches and IT Consultants",
    "Professionals pursuing the ITIL® 4 Managing Professional qualification",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to High-Velocity IT",
      topics: ["Understanding High-Velocity IT", "Characteristics of digital organizations", "Digital transformation and business agility", "Value creation in fast-changing environments", "Customer-focused service delivery"],
    },
    {
      title: "Module 2: Digital Operating Models",
      topics: ["Digital products and digital services", "Product-centric operating models", "Cross-functional teams", "Value stream thinking", "Product lifecycle management"],
    },
    {
      title: "Module 3: Agile, Lean and DevOps Integration",
      topics: ["Agile principles for service management", "Lean practices for optimizing flow", "DevOps culture and collaboration", "Continuous integration and continuous delivery concepts", "Eliminating waste and improving efficiency"],
    },
    {
      title: "Module 4: Automation and Intelligent Operations",
      topics: ["Service automation opportunities", "Workflow automation", "Infrastructure automation concepts", "AI-assisted operational decision-making", "Observability and operational insights"],
    },
    {
      title: "Module 5: Building Resilient Digital Services",
      topics: ["Service reliability principles", "Resilience engineering", "Risk awareness", "Availability and continuity considerations", "Incident preparedness and response"],
    },
    {
      title: "Module 6: Rapid Value Delivery",
      topics: ["Accelerating service delivery", "Continuous feedback loops", "Experimentation and innovation", "Incremental delivery approaches", "Measuring business outcomes"],
    },
    {
      title: "Module 7: Governance in High-Velocity Environments",
      topics: ["Balancing speed with governance", "Decision-making frameworks", "Compliance considerations", "Risk management", "Performance measurement"],
    },
    {
      title: "Module 8: Continual Improvement",
      topics: ["Continuous learning culture", "Service optimization", "Performance metrics and KPIs", "Value realization", "Organizational improvement strategies"],
    },
    {
      title: "Module 9: Collaboration Across Digital Teams",
      topics: ["Shared responsibility models", "Communication and transparency", "Stakeholder engagement", "Knowledge sharing", "Building high-performing teams"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["High-velocity IT implementation scenarios", "DevOps and Agile service management examples", "Digital transformation case studies", "Service optimization workshops", "Real-world organizational challenges"],
    },
  ],
  learningOutcomes: [
    "Explain the principles of High-Velocity IT",
    "Design and support modern digital operating models",
    "Improve collaboration across technology and business teams",
    "Apply Agile and DevOps concepts to service management",
    "Balance governance, speed, quality, and risk",
    "Enhance customer value through continuous improvement",
    "Contribute to resilient, high-performing digital services",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Specialist: High-Velocity IT" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28/40)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Latest ITIL® 4 Managing Professional curriculum",
    "High-velocity digital operating models",
    "Agile, Lean, DevOps, and SRE integration",
    "Digital product and service management",
    "Automation and continuous delivery concepts",
    "Real-world implementation scenarios",
    "Comprehensive certification exam preparation",
  ],
};

export default function ITL4SHVIPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
