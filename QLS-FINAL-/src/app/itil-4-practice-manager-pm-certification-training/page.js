import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-4-practice-manager-pm-certification-training" },
  title: "ITIL® 4 Practice Manager (PM) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Achieve the ITIL® 4 Practice Manager designation by mastering 15 ITIL management practices across the MSF, PIC, and CAI specialist modules. Expert-led, accredited training with exam preparation.",
  keywords: "ITIL 4 Practice Manager training Hyderabad, ITIL 4 PM designation, MSF PIC CAI, ITIL management practices, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Practice Manager (PM) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master 15 ITIL management practices across the MSF, PIC, and CAI modules to earn the ITIL 4 Practice Manager designation.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® 4 Practice Manager (PM) Certification Training",
  subtitle: "Master 15 Essential ITIL Management Practices to Earn the ITIL 4 Practice Manager Designation",
  breadcrumbTitle: "ITIL® 4 Practice Manager",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Practice Manager (PM) designation recognises professionals who have developed practical, hands-on expertise across a broad set of ITIL management practices used to run, control, and improve modern digital services.",
    "The designation is achieved by completing three specialist modules — Monitor, Support and Fulfil (MSF); Plan, Implement and Control (PIC); and Collaborate, Assure and Improve (CAI) — which together cover 15 key ITIL management practices.",
    "This pathway equips practitioners and managers to apply ITIL practices in real-world scenarios, balancing speed, quality, governance, and value across the service value system.",
  ],
  whyHead: "Why Achieve the ITIL® 4 Practice Manager Designation?",
  why: [
    "Develop practical expertise across 15 ITIL management practices",
    "Cover the full run-control-improve lifecycle of digital services",
    "Combine service desk, change, release, supplier, and improvement skills",
    "Strengthen governance, quality assurance, and collaboration",
    "Earn a globally recognised, career-advancing ITIL designation",
    "Build on your ITIL 4 Foundation toward Managing Professional",
  ],
  prerequisites: [
    "Valid ITIL® 4 Foundation certification (or an eligible equivalent).",
    "Completion of the three specialist modules (MSF, PIC, and CAI) to be awarded the designation.",
  ],
  whoShouldAttend: [
    "IT Service Managers",
    "Practice and Process Owners",
    "Service Desk and Operations Managers",
    "Change, Release, and Deployment Managers",
    "Supplier and Service Level Managers",
    "Continual Improvement Managers",
    "IT Consultants pursuing the ITIL 4 Practice Manager designation",
  ],
  curriculum: [
    {
      title: "Module A: ITIL® 4 Specialist — Monitor, Support and Fulfil (MSF)",
      topics: ["Service Desk", "Incident Management", "Problem Management", "Service Request Management", "Monitoring and Event Management"],
    },
    {
      title: "Module B: ITIL® 4 Specialist — Plan, Implement and Control (PIC)",
      topics: ["Change Enablement", "Release Management", "Deployment Management", "Service Configuration Management", "IT Asset Management"],
    },
    {
      title: "Module C: ITIL® 4 Specialist — Collaborate, Assure and Improve (CAI)",
      topics: ["Relationship Management", "Supplier Management", "Service Level Management", "Information Security Management", "Continual Improvement"],
    },
  ],
  learningOutcomes: [
    "Apply 15 ITIL management practices in real-world contexts",
    "Run and support services through effective operational practices",
    "Plan, implement, and control changes, releases, and deployments",
    "Assure quality through collaboration, governance, and improvement",
    "Integrate practices across the ITIL service value system",
    "Progress confidently toward the ITIL 4 Managing Professional designation",
  ],
  certificationHeading: "Designation & Exam Details",
  certification: [
    { label: "Designation", value: "ITIL® 4 Practice Manager (PM)" },
    { label: "Required Modules", value: "MSF, PIC, and CAI (three specialist modules)" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice (one exam per module)" },
    { label: "Questions per Module", value: "60" },
    { label: "Duration per Module", value: "90 Minutes" },
    { label: "Passing Score", value: "65% (39/60) per module" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Complete pathway to the ITIL® 4 Practice Manager designation",
    "Covers 15 ITIL management practices",
    "Delivered by accredited ITIL® trainers",
    "Instructor-led live online or classroom training",
    "Certification exam vouchers included",
    "Real-world case studies and practical workshops",
    "Comprehensive exam preparation and post-training support",
  ],
};

export default function ITIL4PracticeManagerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
