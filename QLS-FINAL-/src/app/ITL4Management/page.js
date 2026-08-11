import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Build a strong foundation in modern IT Service Management with ITIL® 4 Foundation. Expert-led, accredited training covering the ITIL Service Value System, Service Value Chain, Guiding Principles, and key management practices. Certification exam included.",
  keywords: "ITIL 4 Foundation training Hyderabad, ITIL 4 certification Hyderabad, ITSM training Hyderabad, ITIL Service Value System, ITIL guiding principles, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Build a strong foundation in modern IT Service Management and digital transformation with ITIL® 4 Foundation.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® 4 Foundation, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® 4 Foundation Certification Training",
  subtitle: "Build a Strong Foundation in Modern IT Service Management and Digital Transformation",
  breadcrumbTitle: "ITIL® 4 Foundation",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Foundation certification provides a comprehensive introduction to modern IT Service Management (ITSM) and the ITIL framework. It helps professionals understand how organizations create, deliver, and continually improve technology-enabled products and services while aligning IT with business objectives.",
    "The course introduces the ITIL Service Value System (SVS), the Service Value Chain, the Guiding Principles, and the ITIL Management Practices, enabling professionals to adopt a holistic approach to service management.",
    "ITIL 4 Foundation is suitable for individuals beginning their ITSM journey as well as experienced professionals looking to enhance their knowledge of service management best practices.",
  ],
  whyHead: "Why Choose ITIL® 4 Foundation?",
  why: [
    "Learn globally recognized IT Service Management best practices",
    "Understand how IT creates business value",
    "Improve service quality and customer satisfaction",
    "Build a strong foundation for advanced ITIL certifications",
    "Gain knowledge applicable across all industries",
    "Support digital transformation initiatives",
  ],
  prerequisites: [
    "There are no mandatory prerequisites for attending the ITIL 4 Foundation course or taking the certification exam.",
    "This course is ideal for professionals who are new to IT Service Management or want to understand ITIL best practices.",
  ],
  whoShouldAttend: [
    "IT Support Professionals",
    "Service Desk Analysts",
    "Incident & Problem Managers",
    "Change Enablement Professionals",
    "IT Managers and Service Delivery Managers",
    "System Administrators and Infrastructure Engineers",
    "Cloud Professionals and DevOps Engineers",
    "Project Managers and Business Relationship Managers",
    "Anyone involved in delivering or supporting IT services",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to ITIL",
      topics: ["Evolution of IT Service Management", "What is ITIL?", "Benefits of ITIL", "Key concepts of service management"],
    },
    {
      title: "Module 2: Key Concepts of Service Management",
      topics: ["Value and value co-creation", "Organizations, service providers, and consumers", "Products and services", "Service relationships", "Outcomes, outputs, costs, and risks"],
    },
    {
      title: "Module 3: The Four Dimensions of Service Management",
      topics: ["Organizations and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"],
    },
    {
      title: "Module 4: The ITIL Service Value System (SVS)",
      topics: ["Purpose of the SVS", "Components of the SVS", "Governance", "Continual Improvement", "Guiding Principles", "Practices", "Service Value Chain"],
    },
    {
      title: "Module 5: The Service Value Chain",
      topics: ["Plan", "Improve", "Engage", "Design & Transition", "Obtain/Build", "Deliver & Support"],
    },
    {
      title: "Module 6: ITIL Guiding Principles",
      topics: ["Focus on Value", "Start Where You Are", "Progress Iteratively with Feedback", "Collaborate and Promote Visibility", "Think and Work Holistically", "Keep It Simple and Practical", "Optimize and Automate"],
    },
    {
      title: "Module 7: ITIL Practices",
      topics: ["Incident Management", "Problem Management", "Change Enablement", "Service Desk", "Service Request Management", "Service Level Management", "Monitoring and Event Management", "Configuration Management", "Release Management", "Continual Improvement", "Information Security Management", "Relationship Management"],
    },
    {
      title: "Module 8: Continual Improvement",
      topics: ["Continual Improvement Model", "Measurement and Reporting", "Improving Service Value"],
    },
  ],
  learningOutcomes: [
    "Understand the ITIL framework and ITSM concepts",
    "Explain the Service Value System and Service Value Chain",
    "Apply ITIL Guiding Principles",
    "Understand the purpose of key ITIL management practices",
    "Support continual improvement initiatives",
    "Prepare confidently for the ITIL 4 Foundation certification exam",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Foundation" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "60 Minutes" },
    { label: "Passing Score", value: "65% (26/40)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Prerequisite", value: "None" },
  ],
  courseHighlights: [
    "Latest ITIL 4 Foundation syllabus",
    "Instructor-led live online or classroom training",
    "Real-world ITSM examples and case studies",
    "Interactive learning with practical discussions",
    "Exam-focused preparation",
    "Mock exams and practice questions",
    "Experienced certified trainers",
  ],
};

export default function ITL4ManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
