import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Strategy (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Shape and lead digital and IT strategy with ITIL® Strategy (Version 5). Expert-led, accredited training covering strategic alignment, digital positioning, governance, risk, and leading organisational change in AI-enabled enterprises.",
  keywords: "ITIL Strategy Version 5, ITIL 5 strategy certification Hyderabad, digital and IT strategy ITIL, ITIL strategic leader, ITIL governance, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® Strategy (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Shape and lead digital and IT strategy with ITIL® Strategy (Version 5).",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® Strategy (Version 5), PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® Strategy (Version 5) Certification Training",
  subtitle: "Align Digital and IT Strategy with Business Direction in AI-Enabled Enterprises",
  breadcrumbTitle: "ITIL® Strategy (Version 5)",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "ITIL® Strategy (Version 5) equips senior professionals and leaders to define, direct, and evolve digital and IT strategy in alignment with overall business strategy and desired outcomes.",
    "The course explores how organisations use digital capabilities to compete, adapt, and create sustained value — covering strategic positioning, governance, risk, and the leadership behaviours needed to drive enterprise-wide change.",
    "Reflecting the latest evolution of ITIL, the module embeds AI-native thinking throughout, helping leaders shape strategy for organisations where automation, data, and AI are integral to how products and services are delivered.",
  ],
  whyHead: "Why Choose ITIL® Strategy (Version 5)?",
  why: [
    "Translate business strategy into a coherent digital and IT strategy",
    "Position the organisation to compete and adapt in a digital economy",
    "Lead governance, risk, and compliance at a strategic level",
    "Drive enterprise-wide, sustainable organisational change",
    "Embed AI and automation into strategic decision-making",
    "Prepare for a recognised, leadership-level ITIL qualification",
  ],
  prerequisites: [
    "Any ITIL 4 certification, OR",
    "ITIL Foundation (Version 5), OR",
    "ITIL Foundation Bridge (Version 5)",
    "Practical experience in an IT leadership, strategy, or management role is strongly recommended.",
  ],
  whoShouldAttend: [
    "CIOs, CTOs and CDOs",
    "IT Directors and Heads of IT",
    "Digital Transformation Leaders",
    "Enterprise and IT Architects",
    "Service Strategy and Portfolio Managers",
    "IT Governance and Risk Leads",
    "Senior IT and Business Consultants",
    "Aspiring IT leaders seeking a strategic qualification",
  ],
  curriculum: [
    {
      title: "Module 1: Strategy in a Digital Organisation",
      topics: ["Purpose and scope of digital and IT strategy", "The relationship between business strategy and IT strategy", "Value, vision, and strategic outcomes"],
    },
    {
      title: "Module 2: Strategic Environment and Positioning",
      topics: ["Analysing internal and external environments (PESTLE, competitive forces)", "Digital positioning and operating models", "Responding to disruption and market change"],
    },
    {
      title: "Module 3: Defining Digital and IT Strategy",
      topics: ["Setting strategic direction and objectives", "Strategy planning and roadmapping", "Aligning capabilities, investment, and priorities"],
    },
    {
      title: "Module 4: Governance, Risk and Compliance",
      topics: ["Strategic governance and decision rights", "Managing strategic risk and resilience", "Compliance, ethics, and sustainability considerations"],
    },
    {
      title: "Module 5: Leading Strategic Change",
      topics: ["Driving organisational change and transformation", "Culture, capability, and leadership behaviours", "Measuring and communicating strategic progress"],
    },
    {
      title: "Module 6: AI and the Future of Strategy",
      topics: ["The strategic impact of AI and automation", "Data-driven and AI-informed decision-making", "Building an adaptive, AI-enabled operating model"],
    },
  ],
  learningOutcomes: [
    "Define a digital and IT strategy aligned to business direction",
    "Analyse the strategic environment and position the organisation to compete",
    "Establish strategic governance, risk, and compliance approaches",
    "Lead sustainable, enterprise-wide organisational change",
    "Apply AI and data to strategic decision-making",
    "Prepare confidently for the ITIL Strategy (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Strategy (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (open book)" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "90 Minutes" },
    { label: "Passing Score", value: "70% (28 out of 40)" },
    { label: "Language", value: "English" },
    { label: "Delivery", value: "Online Proctored (exam voucher included)" },
    { label: "Prerequisite", value: "Any ITIL 4 certification, ITIL Foundation (V5), or ITIL Foundation Bridge (V5)" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Leadership-focused, strategy-level content",
    "Instructor-led live online or classroom training",
    "Certification exam voucher included",
    "Real-world strategy and governance scenarios",
    "Comprehensive course material and exam preparation",
    "Post-training support",
  ],
};

export default function ITILStrategyV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
