import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Strategic Leader (SL) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Earn the ITIL® 4 Strategic Leader (SL) designation through the Direct, Plan and Improve (DPI) and Digital & IT Strategy (DITS) modules. Position IT as a driver of business strategy and digital transformation. Expert-led, accredited training.",
  keywords: "ITIL 4 Strategic Leader training Hyderabad, ITIL 4 SL designation, DPI DITS, digital and IT strategy, ITIL leadership certification, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Strategic Leader (SL) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Earn the ITIL 4 Strategic Leader designation through the DPI and Digital & IT Strategy modules.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® 4 Strategic Leader (SL), PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® 4 Strategic Leader (SL) Certification Training",
  subtitle: "Recognise the Impact of IT and Digital Technology on Business Strategy",
  breadcrumbTitle: "ITIL® 4 Strategic Leader",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Strategic Leader (SL) designation recognises the value of ITIL not just for IT operations, but for all digitally-enabled services. It demonstrates a clear understanding of how IT and digital technology influence and direct business strategy.",
    "The designation is achieved by completing two modules — Direct, Plan and Improve (DPI) and Leader: Digital & IT Strategy (DITS).",
    "Together, these modules equip senior professionals to shape strategy, govern and direct organisations, drive digital transformation, and lead sustainable, enterprise-wide improvement.",
  ],
  whyHead: "Why Achieve the ITIL® 4 Strategic Leader Designation?",
  why: [
    "Understand how digital technology shapes business strategy",
    "Direct, plan, and improve organisations and teams",
    "Craft and lead digital and IT strategy",
    "Drive digital transformation and organisational change",
    "Position IT as a strategic differentiator",
    "Earn a globally recognised, leadership-level ITIL designation",
  ],
  prerequisites: [
    "Valid ITIL® 4 Foundation certification (or an eligible equivalent).",
    "Completion of the DPI and Digital & IT Strategy (DITS) modules to be awarded the designation.",
  ],
  whoShouldAttend: [
    "CIOs, CTOs, and CDOs",
    "IT Directors and Heads of IT",
    "Digital Transformation Leaders",
    "Enterprise and IT Architects",
    "Strategy, Portfolio, and Governance Leads",
    "Senior IT and business consultants",
  ],
  curriculum: [
    {
      title: "Module A: ITIL® 4 Strategist — Direct, Plan and Improve (DPI)",
      topics: ["Strategic direction, planning, and governance", "Risk and controls", "Organisational change management", "Continual improvement and measurement"],
    },
    {
      title: "Module B: ITIL® 4 Leader — Digital & IT Strategy (DITS)",
      topics: ["Crafting digital and IT strategy", "Digital disruption and positioning", "Operating models and strategic risk", "Leading digital transformation"],
    },
  ],
  learningOutcomes: [
    "Direct, plan, and improve organisations and services",
    "Craft and align digital and IT strategy with business goals",
    "Assess digital disruption and strategic positioning",
    "Lead digital transformation and organisational change",
    "Govern strategic risk, controls, and measurement",
    "Progress toward the ITIL Master qualification",
  ],
  certificationHeading: "Designation & Exam Details",
  certification: [
    { label: "Designation", value: "ITIL® 4 Strategic Leader (SL)" },
    { label: "Required Modules", value: "DPI and Digital & IT Strategy (DITS)" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice (one exam per module)" },
    { label: "Questions per Module", value: "40" },
    { label: "Duration per Module", value: "60–90 Minutes (varies by module)" },
    { label: "Passing Score", value: "70% per module" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Complete pathway to the ITIL® 4 Strategic Leader designation",
    "Covers DPI and Digital & IT Strategy modules",
    "Delivered by accredited ITIL® trainers",
    "Instructor-led live online or classroom training",
    "Certification exam vouchers included",
    "Strategy and transformation case studies",
    "Comprehensive exam preparation and post-training support",
  ],
};

export default function ITIL4StrategicLeaderPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
