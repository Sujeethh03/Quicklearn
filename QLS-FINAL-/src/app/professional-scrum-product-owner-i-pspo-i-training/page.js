import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  alternates: { canonical: "/professional-scrum-product-owner-i-pspo-i-training" },
  title: "Professional Scrum Product Owner™ I (PSPO I) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Create customer value through effective product ownership and Agile product management. Professional Scrum Product Owner™ I (PSPO I) covers product ownership, backlog management, value delivery, product strategy, and working with Scrum Teams. Prepare for the PSPO I assessment.",
  keywords: "PSPO I training Hyderabad, Professional Scrum Product Owner certification, product ownership, product backlog management, product strategy, Scrum.org, QuickLearn Systems",
  openGraph: {
    title: "Professional Scrum Product Owner™ I (PSPO I) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Create customer value through effective product ownership and Agile product management.",
    images: ["/professional_scrum_product_owner_1.jpg"],
  },
};

const courseData = {
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, and registered trademarks are the property of their respective owners. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
  title: "Professional Scrum Product Owner™ I (PSPO I) Certification Training",
  subtitle: "Create Customer Value Through Effective Product Ownership and Agile Product Management",
  breadcrumbTitle: "Professional Scrum Product Owner I (PSPO I)",
  backgroundImage: "/professional_scrum_product_owner_1.jpg",
  category: "Agile, Scrum & Kanban",
  overview: [
    "Professional Scrum Product Owner™ I (PSPO I) provides participants with a comprehensive understanding of the Product Owner accountability and how Product Owners maximize product value using Scrum.",
    "Participants learn product strategy, stakeholder management, value-driven delivery, backlog management, and customer-centric product development.",
    "Upon completion, participants will be prepared to take the globally recognized Professional Scrum Product Owner™ I (PSPO I) certification assessment.",
  ],
  whyHead: "Why Choose This Course?",
  why: [
    "Learn the Product Owner role in a simple way",
    "Understand how to get the most value from a product",
    "Improve how you manage and prioritize the product backlog",
    "Learn how to work better with stakeholders and teams",
    "Build skills in product vision, strategy, and planning",
    "Prepare for the PSPO I certification exam",
    "Become more confident in product ownership",
  ],
  prerequisites: [
    "No mandatory prerequisites.",
    "Recommended: basic Scrum knowledge.",
    "Recommended: product development experience and business or stakeholder-facing experience.",
  ],
  whoShouldAttend: [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Scrum Masters",
    "Project Managers",
    "Product Leaders",
    "Entrepreneurs",
  ],
  curriculum: [
    {
      title: "Module 1: Understanding Product Ownership",
      topics: ["Product Owner Accountability", "Product Value", "Product Goals", "Stakeholder Management"],
    },
    {
      title: "Module 2: Product Backlog Management",
      topics: ["Backlog Creation", "Refinement", "Prioritization", "Transparency"],
    },
    {
      title: "Module 3: Value Delivery",
      topics: ["Measuring Value", "Product Metrics", "Outcomes vs Outputs", "Customer Feedback"],
    },
    {
      title: "Module 4: Product Strategy",
      topics: ["Vision", "Roadmaps", "Market Understanding", "Business Strategy Alignment"],
    },
    {
      title: "Module 5: Working with Scrum Teams",
      topics: ["Sprint Planning", "Reviews", "Collaboration", "Increment Inspection"],
    },
  ],
  learningOutcomes: [
    "Maximize product value",
    "Manage Product Backlogs effectively",
    "Create Product Goals",
    "Collaborate with stakeholders",
    "Use metrics to guide decisions",
    "Deliver customer-centric products",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "Professional Scrum Product Owner™ I (PSPO I)" },
    { label: "Number of Questions", value: "80" },
    { label: "Duration", value: "60 Minutes" },
    { label: "Passing Score", value: "85%" },
    { label: "Delivery", value: "Online" },
    { label: "Language", value: "English" },
    { label: "Validity", value: "Lifetime certification — no annual renewal fee" },
    { label: "Credential", value: "Free Credly digital credential included" },
  ],
  courseHighlights: [
    "Comprehensive coverage of the PSPO I syllabus",
    "Instructor-led interactive training",
    "Practical examples and real-world product scenarios",
    "Focus on product ownership, value delivery, and stakeholder collaboration",
    "Backlog management and prioritization techniques",
    "Product strategy, vision, and roadmap planning",
    "Exam-focused preparation and practice questions",
  ],
  faq: [
    {
      q: "Are there prerequisites for PSPO I?",
      a: "No mandatory prerequisites. Basic Scrum knowledge and some product or stakeholder-facing experience are helpful.",
    },
    {
      q: "What is the exam format?",
      a: "80 questions in 60 minutes, online, with an 85% pass mark.",
    },
    {
      q: "Does the certification expire?",
      a: "No. PSPO I is a lifetime certification with no annual renewal fee, and includes a free Credly digital credential.",
    },
    {
      q: "Who should take this course?",
      a: "Product Owners, Product Managers, Business Analysts, and anyone responsible for maximizing product value with Scrum.",
    },
  ],
  disclaimer:
    "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
};

export default function PSPO1Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
