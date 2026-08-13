import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-v5-master-certification-training" },
  title: "ITIL® V5 Master Certification Training in Hyderabad | QuickLearn Systems",
  description: "Reach the pinnacle of the ITIL scheme with the ITIL® V5 Master. Demonstrate the ability to apply ITIL principles, methods, and techniques in real-world situations. Guidance, mentoring, and exam-preparation support from QuickLearn Systems.",
  keywords: "ITIL V5 Master training Hyderabad, ITIL Master certification, highest ITIL qualification, ITIL 5 Master, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® V5 Master Certification Training in Hyderabad | QuickLearn Systems",
    description: "Reach the pinnacle of the ITIL scheme with the ITIL V5 Master qualification.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® V5 Master Certification Training",
  subtitle: "The Pinnacle of the ITIL Qualification Scheme — Apply ITIL in the Real World",
  breadcrumbTitle: "ITIL® V5 Master",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® V5 Master is the highest-level qualification in the ITIL scheme. It recognises individuals who can explain and justify how they have personally selected and applied a range of ITIL principles, methods, and techniques to achieve desired business outcomes in real-world situations.",
    "Unlike lower-level modules, the Master is not achieved through a fixed syllabus and standard exam. Instead, candidates demonstrate their expertise through practical application, supported by a portfolio of work and a professional assessment.",
    "QuickLearn Systems provides guidance, mentoring, and structured preparation to help experienced practitioners plan their journey toward the ITIL Master and present their achievements with confidence.",
  ],
  whyHead: "Why Pursue the ITIL® V5 Master?",
  why: [
    "Achieve the highest recognition in the ITIL scheme",
    "Demonstrate real-world mastery of ITIL principles and practices",
    "Validate strategic and practical service management expertise",
    "Distinguish yourself as a senior ITIL practitioner and leader",
    "Receive mentoring and preparation support from experienced experts",
    "Advance to the most senior IT service management roles",
  ],
  prerequisites: [
    "Achievement of the ITIL Managing Professional and/or Strategic Leader designations (or the required set of qualifying certifications).",
    "A minimum of five years of experience in IT service management in leadership, managerial, or higher-management advisory roles.",
    "Practical experience applying ITIL across a range of real-world situations.",
  ],
  whoShouldAttend: [
    "Senior IT Service Management Professionals",
    "IT Directors and Heads of Service Management",
    "Principal and Lead ITIL Consultants",
    "Enterprise Service Management Architects",
    "Experienced practitioners seeking the highest ITIL qualification",
  ],
  curriculum: [
    {
      title: "Stage 1: Eligibility and Planning",
      topics: ["Confirming prerequisite certifications and experience", "Selecting a suitable real-world scenario", "Planning the Master journey"],
    },
    {
      title: "Stage 2: Applying ITIL in Practice",
      topics: ["Selecting and justifying ITIL principles and methods", "Applying practices to achieve business outcomes", "Evidencing impact and results"],
    },
    {
      title: "Stage 3: Portfolio and Assessment Preparation",
      topics: ["Building the portfolio of work", "Structuring justifications and evidence", "Preparing for professional assessment and interview"],
    },
  ],
  learningOutcomes: [
    "Select and justify appropriate ITIL principles and techniques",
    "Apply ITIL practices to achieve real-world business outcomes",
    "Evidence the impact of decisions and improvements",
    "Present expertise through a structured professional assessment",
    "Demonstrate mastery across the full ITIL service value system",
  ],
  certificationHeading: "Qualification Details",
  certification: [
    { label: "Qualification", value: "ITIL® V5 Master" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Assessment", value: "Portfolio of work and professional assessment (no fixed exam)" },
    { label: "Prerequisite", value: "ITIL Managing Professional and/or Strategic Leader (or qualifying certifications)" },
    { label: "Experience", value: "Minimum 5 years in ITSM leadership/management roles" },
    { label: "Format", value: "Practical, evidence-based demonstration of expertise" },
  ],
  courseHighlights: [
    "Highest qualification in the ITIL scheme",
    "Personalised guidance and mentoring",
    "Portfolio and assessment preparation support",
    "Delivered by experienced ITIL experts",
    "Real-world application focus",
    "Flexible, candidate-led journey",
    "Post-assessment support",
  ],
};

export default function ITILMasterV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
