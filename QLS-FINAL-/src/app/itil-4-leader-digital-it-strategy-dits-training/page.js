import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/itil-4-leader-digital-it-strategy-dits-training" },
  title: "ITIL® 4 Leader: Digital & IT Strategy (DITS) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Lead digital transformation and align business strategy with technology using ITIL® 4 Leader: Digital & IT Strategy (DITS). Accredited training covering digital operating models, governance, innovation, digital leadership, and strategy execution — the leadership module of the ITIL 4 Strategic Leader designation.",
  keywords: "ITIL 4 Digital and IT Strategy training Hyderabad, DITS certification, ITIL 4 Strategic Leader, digital transformation, digital business strategy, IT leadership, QuickLearn Systems, IT service management training Hyderabad",
  openGraph: {
    title: "ITIL® 4 Leader: Digital & IT Strategy (DITS) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Lead digital transformation and align business strategy with technology for sustainable growth and innovation.",
    images: ["/digital_it_services.jpg"],
  },
};

const courseData = {
  "disclaimer": "ITIL® is a registered trademark of PeopleCert. All rights reserved. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "ITIL® 4 Leader: Digital & IT Strategy (DITS) Certification Training",
  subtitle: "Lead Digital Transformation and Align Business Strategy with Technology for Sustainable Growth and Innovation",
  breadcrumbTitle: "ITIL® 4 Leader: Digital & IT Strategy",
  backgroundImage: "/digital_it_services.jpg",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Leader: Digital & IT Strategy (DITS) certification is designed for business leaders, IT executives, and digital transformation professionals who are responsible for shaping organizational strategy and leveraging technology to achieve business objectives.",
    "As the leadership module within the ITIL® 4 Strategic Leader (SL) qualification, DITS provides a comprehensive understanding of how digital business strategy and IT strategy work together to create value, foster innovation, and build resilient organizations in an increasingly digital economy.",
    "Participants will explore how emerging technologies, digital operating models, governance, organizational culture, innovation, risk management, and strategic decision-making contribute to successful digital transformation. The course also examines leadership approaches that enable organizations to respond effectively to market changes while delivering sustainable business value.",
  ],
  whyHead: "Why Choose ITIL® 4 Leader: Digital & IT Strategy?",
  why: [
    "Align business strategy with digital and IT capabilities",
    "Develop executive leadership skills for digital transformation",
    "Build innovation-driven and customer-focused organizations",
    "Strengthen governance and strategic decision-making",
    "Understand emerging technologies and digital operating models",
    "Drive organizational resilience and long-term business growth",
    "Progress toward the ITIL® 4 Strategic Leader designation",
  ],
  prerequisites: [
    "ITIL® 4 Foundation Certificate (or an eligible equivalent recognized within the ITIL qualification scheme).",
    "Recommended: experience in IT management, business leadership, digital transformation, or strategic planning.",
    "Recommended: familiarity with organizational governance and IT service management concepts.",
  ],
  whoShouldAttend: [
    "CIOs and IT Directors",
    "Digital Transformation Leaders",
    "Senior IT Managers",
    "Business Executives",
    "Enterprise Architects",
    "Strategy Consultants and PMO Leaders",
    "Governance and Risk Managers",
    "Service Management Leaders and Innovation Managers",
    "Technology Leaders and IT Consultants",
    "Professionals pursuing the ITIL® 4 Strategic Leader qualification",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to Digital & IT Strategy",
      topics: ["Understanding digital business strategy", "Relationship between business strategy and IT strategy", "Digital transformation fundamentals", "Value creation in digital enterprises", "Strategic leadership principles"],
    },
    {
      title: "Module 2: Building a Digital Organization",
      topics: ["Characteristics of digital enterprises", "Digital operating models", "Organizational capabilities", "Customer-centric business models", "Business agility and adaptability"],
    },
    {
      title: "Module 3: Strategic Governance",
      topics: ["Governance frameworks", "Strategic decision-making", "Risk management", "Compliance and accountability", "Portfolio governance", "Performance oversight"],
    },
    {
      title: "Module 4: Innovation and Emerging Technologies",
      topics: ["Innovation management", "Technology trends and business impact", "Artificial Intelligence (AI)", "Automation and intelligent services", "Cloud computing", "Data-driven organizations", "Continuous innovation"],
    },
    {
      title: "Module 5: Digital Leadership",
      topics: ["Leadership competencies", "Leading organizational change", "Building high-performing teams", "Communication and stakeholder engagement", "Developing a culture of innovation", "Ethical leadership"],
    },
    {
      title: "Module 6: Strategy Development and Execution",
      topics: ["Strategic planning methodologies", "Defining business objectives", "Aligning technology investments", "Resource optimization", "Monitoring strategic initiatives", "Delivering measurable business outcomes"],
    },
    {
      title: "Module 7: Organizational Resilience",
      topics: ["Business resilience principles", "Risk identification and mitigation", "Business continuity", "Service resilience", "Crisis management", "Sustainable organizational growth"],
    },
    {
      title: "Module 8: Measurement and Value Realization",
      topics: ["Key Performance Indicators (KPIs)", "Strategic performance measurement", "Business value metrics", "Customer value assessment", "Continual evaluation and improvement"],
    },
    {
      title: "Module 9: Digital Transformation in Practice",
      topics: ["Transformation roadmaps", "Organizational readiness", "Managing transformation programs", "Stakeholder alignment", "Scaling digital initiatives", "Lessons from successful transformations"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["Digital strategy workshops", "Executive decision-making scenarios", "Governance and leadership case studies", "Innovation planning exercises", "Digital transformation implementation examples"],
    },
  ],
  learningOutcomes: [
    "Understand the relationship between digital business strategy and IT strategy",
    "Develop governance models that support organizational objectives",
    "Lead digital transformation initiatives with confidence",
    "Promote innovation while managing risk effectively",
    "Align technology investments with business priorities",
    "Build resilient organizations capable of adapting to change",
    "Deliver measurable value through strategic leadership",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Leader: Digital & IT Strategy" },
    { label: "Certification Body", value: "PeopleCert" },
    { label: "Exam Format", value: "Multiple Choice" },
    { label: "Number of Questions", value: "30" },
    { label: "Duration", value: "60 Minutes" },
    { label: "Passing Score", value: "70% (21/30)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored" },
    { label: "Assessment", value: "Includes course-based assessment activities as required by the certification scheme" },
    { label: "Prerequisite", value: "Valid ITIL® 4 Foundation certification (or eligible equivalent)" },
  ],
  courseHighlights: [
    "Latest ITIL® Strategic Leader curriculum",
    "Digital transformation strategies",
    "Business and IT alignment",
    "Innovation and organizational resilience",
    "Governance, risk, and compliance",
    "Strategic leadership and decision-making",
    "Interactive case studies and workshops",
    "Comprehensive certification exam preparation",
  ],
};

export default function DigitalItServicePage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
