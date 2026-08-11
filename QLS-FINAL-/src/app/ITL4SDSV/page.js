import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist: Drive Stakeholder Value (DSV) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Build strong customer relationships and deliver exceptional service experiences with ITIL® 4 Specialist: Drive Stakeholder Value (DSV). Accredited training covering the customer journey, service relationship management, SLAs, CX, and continual improvement toward the ITIL 4 Managing Professional qualification.",
  keywords: "ITIL 4 DSV training Hyderabad, Drive Stakeholder Value certification, ITIL 4 Managing Professional, customer journey management, service relationship management, customer experience, QuickLearn Systems",
  openGraph: {
    title: "ITIL® 4 Specialist: Drive Stakeholder Value (DSV) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Build strong customer relationships and deliver exceptional service experiences through effective stakeholder engagement.",
    images: ["/drive_stakeholder_value.jpg"],
  },
};

const courseData = {
  "disclaimer": "ITIL®, ITIL® 4 Specialist: Drive Stakeholder Value (DSV), PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
  title: "ITIL® 4 Specialist: Drive Stakeholder Value (DSV) Certification Training",
  subtitle: "Build Strong Customer Relationships and Deliver Exceptional Service Experiences Through Effective Stakeholder Engagement",
  breadcrumbTitle: "ITIL® 4 Specialist: Drive Stakeholder Value",
  backgroundImage: "/drive_stakeholder_value.jpg",
  category: "IT Service Management",
  overview: [
    "The ITIL® 4 Specialist: Drive Stakeholder Value (DSV) certification focuses on creating, maintaining, and enhancing value through effective relationships with customers, users, suppliers, and other stakeholders.",
    "As a key module within the ITIL® 4 Managing Professional pathway, this course provides practical guidance on managing the complete customer journey, from understanding demand and designing service offerings to onboarding, service delivery, support, and continual improvement.",
    "Participants will learn how to strengthen customer relationships, improve user experiences, establish service agreements, measure satisfaction, and create value-driven interactions throughout the service lifecycle. The course also explores modern approaches to customer experience (CX), digital services, communication, and service relationship management.",
  ],
  whyHead: "Why Choose ITIL® 4 Specialist: Drive Stakeholder Value?",
  why: [
    "Develop customer-centric service management capabilities",
    "Improve stakeholder communication and engagement",
    "Enhance customer experience across the service lifecycle",
    "Learn practical approaches to demand and relationship management",
    "Strengthen service level and customer journey management",
    "Build long-term business relationships through value creation",
    "Prepare for the ITIL® 4 Managing Professional designation",
  ],
  prerequisites: [
    "ITIL® 4 Foundation Certificate (or an eligible equivalent recognized within the ITIL qualification scheme).",
    "Recommended: experience in IT service management or customer-facing roles.",
    "Recommended: basic understanding of service delivery and support processes, and familiarity with ITIL concepts and digital services.",
  ],
  whoShouldAttend: [
    "IT Service Managers",
    "Service Delivery Managers",
    "Customer Success Managers",
    "Service Level Managers",
    "Business Relationship Managers",
    "Service Desk Managers and Account Managers",
    "Supplier Managers",
    "Customer Experience (CX) Professionals",
    "Digital Transformation Leaders and IT Consultants",
    "Professionals pursuing the ITIL® 4 Managing Professional qualification",
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to Stakeholder Value",
      topics: ["Understanding stakeholder value", "Customer-focused service management", "Service relationships and collaboration", "Value co-creation principles", "Business outcomes and customer expectations"],
    },
    {
      title: "Module 2: Understanding Customer Needs",
      topics: ["Identifying customer requirements", "Demand management concepts", "Understanding user expectations", "Service consumption patterns", "Building customer profiles"],
    },
    {
      title: "Module 3: Customer Journey Management",
      topics: ["Mapping the customer journey", "Key interaction points", "Customer touchpoints", "Managing service experiences", "Identifying opportunities for improvement"],
    },
    {
      title: "Module 4: Service Relationship Management",
      topics: ["Establishing effective service relationships", "Communication strategies", "Managing stakeholder expectations", "Building trust and long-term partnerships", "Handling customer feedback"],
    },
    {
      title: "Module 5: Designing and Delivering Services",
      topics: ["Developing service offerings", "Service catalog management", "Service level agreements (SLAs)", "Service request fulfillment", "Delivering value through quality services"],
    },
    {
      title: "Module 6: Customer Onboarding and Offboarding",
      topics: ["Service onboarding practices", "User adoption strategies", "Knowledge sharing and training", "Transition planning", "Service retirement and offboarding"],
    },
    {
      title: "Module 7: Measuring Customer Satisfaction",
      topics: ["Customer satisfaction metrics", "Service quality indicators", "Voice of the customer", "Experience measurement", "Reporting and performance reviews"],
    },
    {
      title: "Module 8: Continual Improvement of Stakeholder Value",
      topics: ["Gathering feedback", "Identifying improvement opportunities", "Improving customer journeys", "Enhancing service quality", "Building a culture of continual improvement"],
    },
    {
      title: "Module 9: Digital Services and Modern Engagement",
      topics: ["Digital communication channels", "Self-service capabilities", "Knowledge management", "Automation in customer interactions", "Supporting omnichannel service experiences"],
    },
    {
      title: "Module 10: Practical Application and Case Studies",
      topics: ["Customer journey mapping exercises", "Stakeholder communication scenarios", "Service improvement workshops", "SLA review and optimization", "Real-world customer relationship case studies"],
    },
  ],
  learningOutcomes: [
    "Understand the principles of stakeholder value management",
    "Apply customer-centric approaches to service delivery",
    "Improve communication and collaboration with stakeholders",
    "Design services that meet customer needs and business objectives",
    "Measure and enhance customer satisfaction",
    "Support organizational growth through effective relationship management",
    "Contribute to continual service improvement initiatives",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® 4 Specialist: Drive Stakeholder Value" },
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
    "Customer journey and experience management",
    "Stakeholder relationship best practices",
    "Practical service relationship scenarios",
    "Service level and expectation management",
    "Interactive exercises and case studies",
    "Comprehensive certification exam preparation",
  ],
};

export default function ITL4SDSVPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
