import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-4-managing-professional-mp-certification-training" },
  title: "ITIL® 4 Managing Professional (MP) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Earn the ITIL® 4 Managing Professional (MP) designation across the CDS, DSV, HVIT, and DPI modules. Practical, technical, and strategic ITIL knowledge for IT professionals running modern digital services. Expert-led, accredited training.",
  keywords: "ITIL 4 Managing Professional training Hyderabad, ITIL 4 MP designation, CDS DSV HVIT DPI, ITIL 4 modules, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Managing Professional (MP) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Earn the ITIL 4 Managing Professional designation across the CDS, DSV, HVIT, and DPI modules.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® 4 Managing Professional (MP) Certification Training",
  subtitle: "Gain Practical and Technical Skills to Run Successful, Modern IT-Enabled Services",
  breadcrumbTitle: "ITIL® 4 Managing Professional",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Managing Professional (MP) designation is aimed at IT professionals working within technology and digital teams across a business. It provides practical and technical knowledge about how to run successful IT-enabled services, teams, and workflows.",
    "The designation is achieved by completing four modules — Create, Deliver and Support (CDS); Drive Stakeholder Value (DSV); High Velocity IT (HVIT); and Direct, Plan and Improve (DPI).",
    "Together, these modules give practitioners the end-to-end capability to design and deliver services, engage stakeholders, work at high velocity, and direct and improve teams and ways of working.",
  ],
  whyHead: "Why Achieve the ITIL® 4 Managing Professional Designation?",
  why: [
    "Develop practical and technical ITIL knowledge",
    "Learn to create, deliver, and support digital services",
    "Engage and co-create value with stakeholders",
    "Adopt high-velocity, digitally-enabled ways of working",
    "Direct, plan, and continually improve teams and services",
    "Earn a globally recognised, career-advancing ITIL designation",
  ],
  prerequisites: [
    "Valid ITIL® 4 Foundation certification (or an eligible equivalent).",
    "Completion of the CDS, DSV, HVIT, and DPI modules to be awarded the designation.",
  ],
  whoShouldAttend: [
    "IT Service and Delivery Managers",
    "Digital and Product Team Leads",
    "DevOps and Operations Engineers",
    "Relationship and Customer Experience Managers",
    "Transformation and Improvement Managers",
    "IT Practitioners pursuing the ITIL 4 Managing Professional designation",
  ],
  curriculum: [
    {
      title: "Module A: ITIL® 4 Specialist — Create, Deliver and Support (CDS)",
      topics: ["Designing and delivering services", "Integrating value streams and practices", "Managing teams and supporting services"],
    },
    {
      title: "Module B: ITIL® 4 Specialist — Drive Stakeholder Value (DSV)",
      topics: ["Engaging and co-creating value with stakeholders", "Customer journeys and experience", "Managing service relationships and demand"],
    },
    {
      title: "Module C: ITIL® 4 Specialist — High Velocity IT (HVIT)",
      topics: ["Digital and high-velocity delivery", "Working with agile, lean, and DevOps", "Fast, reliable, and resilient services"],
    },
    {
      title: "Module D: ITIL® 4 Strategist — Direct, Plan and Improve (DPI)",
      topics: ["Direction, planning, and governance", "Continual improvement", "Organisational change and measurement"],
    },
  ],
  learningOutcomes: [
    "Design, deliver, and support modern digital services",
    "Co-create value through strong stakeholder relationships",
    "Apply high-velocity, digitally-enabled ways of working",
    "Direct, plan, and continually improve teams and services",
    "Integrate ITIL practices across the service value system",
    "Progress toward ITIL Master and leadership-level qualifications",
  ],
  certificationHeading: "Designation & Exam Details",
  certification: [
    { label: "Designation", value: "ITIL® 4 Managing Professional (MP)" },
    { label: "Required Modules", value: "CDS, DSV, HVIT, and DPI (four modules)" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice (one exam per module)" },
    { label: "Questions per Module", value: "40" },
    { label: "Duration per Module", value: "90 Minutes" },
    { label: "Passing Score", value: "70% per module" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Complete pathway to the ITIL® 4 Managing Professional designation",
    "Covers CDS, DSV, HVIT, and DPI modules",
    "Delivered by accredited ITIL® trainers",
    "Instructor-led live online or classroom training",
    "Certification exam vouchers included",
    "Real-world case studies and practical workshops",
    "Comprehensive exam preparation and post-training support",
  ],
};

export default function ITIL4ManagingProfessionalPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
