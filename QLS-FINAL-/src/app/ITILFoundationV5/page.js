import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® Foundation (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master the latest ITIL® Foundation (Version 5) framework for digital product and service management. Expert-led, accredited training covering the ITIL value system, service lifecycle, AI-native practices, and exam preparation. Enroll today!",
  keywords: "ITIL Foundation Version 5 training Hyderabad, ITIL 5 certification Hyderabad, ITIL Foundation course, ITIL service management training, digital product and service management, ITIL AI, QuickLearn Systems, IT training Hyderabad",
  openGraph: {
    title: "ITIL® Foundation (Version 5) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master the latest ITIL® Foundation (Version 5) framework for digital product and service management.",
    images: ["/itl4_foundation.png"],
  },
};

const courseData = {
  title: "ITIL® Foundation (Version 5) Certification Training",
  subtitle: "Master the Latest ITIL Framework for Digital Product and Service Management",
  backgroundImage: "/itl4_foundation.png",
  category: "IT Service Management",
  overview: [
    "The ITIL® Foundation (Version 5) certification introduces the key concepts of digital product and service management and establishes a common language for effective practice across modern organizations.",
    "This course covers the ITIL framework's guiding principles, core models, and fundamental concepts for creating, delivering, and continually improving products and services. It reflects the latest evolution of ITIL, including an AI-native approach to service management and closer alignment with real-world digital delivery.",
    "Participants build a strong foundation in the ITIL value system, the four dimensions of product and service management, the product and service lifecycle, and how ITIL works alongside frameworks such as DevOps and PRINCE2 — preparing them to confidently take the ITIL® Foundation (Version 5) certification examination.",
  ],
  whyHead: "Why Choose ITIL® Foundation (Version 5)?",
  why: [
    "Learn the global best practice for managing digital products and services",
    "Understand the latest AI-native ITIL framework",
    "Gain a comprehensive view of the product and service lifecycle",
    "Follow a qualification scheme aligned to modern job roles",
    "Apply practical, adaptable service management practices",
    "Prepare for a globally recognized IT service management certification",
  ],
  prerequisites: [
    "There are no mandatory prerequisites for attending the ITIL® Foundation (Version 5) course.",
    "The course is suitable for beginners as well as experienced professionals who want a strong foundation in IT service management.",
    "A basic awareness of IT services or working in an IT environment is helpful but not required.",
  ],
  whoShouldAttend: [
    "IT Professionals",
    "IT Service Managers",
    "Service Delivery Managers",
    "Product and Service Owners",
    "Business Analysts",
    "Project and Programme Managers",
    "DevOps and Operations Engineers",
    "IT Consultants",
    "Anyone seeking to upskill in digital product and service management",
  ],
  curriculum: [
    {
      title: "Module 1: Key ITIL Terms and Definitions",
      topics: [
        "Product and service management (continual improvement, lifecycle, utility, warranty, user experience, sustainability)",
        "Experience, strategy and transformation (digital experience, trust, UX, CX, vision, change)",
        "Service offerings, interactions, service actions, and resource access",
        "Value co-creation (value, cost, risk, output vs. outcome, feedback)",
        "Service relationships (providers, consumers, basic/cooperative/collaborative relationships, SLA)",
      ],
    },
    {
      title: "Module 2: The Four Dimensions of Product and Service Management",
      topics: [
        "Organizations and people",
        "Partners and suppliers",
        "Information and technology",
        "Value streams and processes",
        "Internal and external factors (political, economic, social, technology, legal, environmental)",
      ],
    },
    {
      title: "Module 3: The ITIL Product and Service Lifecycle",
      topics: [
        "The eight lifecycle activities: discover, design, acquire, build, transition, operate, deliver, support",
        "Purpose and scope of each activity",
        "Iterative, non-sequential application of the lifecycle",
      ],
    },
    {
      title: "Module 4: The ITIL Value System",
      topics: [
        "Components: guiding principles, governance, value chain, management practices, continual improvement",
        "The seven guiding principles (focus on value, start where you are, progress iteratively, collaborate, think holistically, keep it simple, optimize and automate)",
        "Governance and its enabling activities",
        "Value chain concepts (releases, continuous integration/delivery/deployment, SRE, observability)",
        "Management practice groups and ITIL Practice Guides",
        "The Continual Improvement Model",
      ],
    },
    {
      title: "Module 5: Value Stream Identification, Mapping, and Management",
      topics: [
        "Core and enabling value streams",
        "Value stream mapping and complexity thinking",
        "Applying value streams to workflow optimization",
        "The relationship between mapping and management",
      ],
    },
    {
      title: "Module 6: ITIL and AI",
      topics: [
        "Introduction to AI (maturity, Generative AI, Agentic AI)",
        "AI applications across the development lifecycle and process automation",
        "AI governance and the AI capability model",
      ],
    },
    {
      title: "Module 7: ITIL and Other Frameworks",
      topics: [
        "ITIL and DevOps complementarity",
        "ITIL and PRINCE2 integration in product and service development",
      ],
    },
  ],
  learningOutcomes: [
    "Understand the key concepts of digital product and service management",
    "Explain the ITIL guiding principles and value system",
    "Describe the four dimensions of product and service management",
    "Understand the ITIL product and service lifecycle activities",
    "Identify, map, and manage value streams to optimize workflow",
    "Recognize how AI is applied within modern service management",
    "Understand how ITIL complements DevOps and PRINCE2",
    "Prepare confidently for the ITIL® Foundation (Version 5) examination",
  ],
  certificationHeading: "Certification & Exam Details",
  certification: [
    { label: "Certification", value: "ITIL® Foundation (Version 5)" },
    { label: "Exam Format", value: "Multiple Choice (4 options, 1 mark per question)" },
    { label: "Number of Questions", value: "40" },
    { label: "Duration", value: "60 Minutes (75 minutes for non-native language speakers)" },
    { label: "Passing Score", value: "65% (26 out of 40)" },
    { label: "Open Book", value: "No" },
    { label: "Delivery", value: "Online Proctored (exam included)" },
    { label: "Prerequisite for Exam", value: "None" },
  ],
  courseHighlights: [
    "Delivered by an accredited ITIL® trainer",
    "Instructor-led live online or classroom training",
    "Multiple flexible training delivery modes",
    "Certification exam included",
    "Comprehensive course material and practice questions",
    "Exam preparation guidance and mock tests",
    "Post-training support",
  ],
  disclaimer:
    "ITIL®, PeopleCert®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners.",
};

export default function ITILFoundationV5Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
