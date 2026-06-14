import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner II (PSPO II) Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Professional Scrum Product Owner II (PSPO II) certification training in Hyderabad. QuickLearn Systems offers expert-led PSPO II training covering advanced product ownership, stakeholder management, and value-driven delivery. Enroll today!",
  keywords:
    "PSPO II training Hyderabad, Professional Scrum Product Owner 2 certification Hyderabad, best Scrum training institute Hyderabad, PSPO II course Hyderabad, Scrum Product Owner training India, PSPO II, Professional Scrum Product Owner 2, advanced Product Owner certification, Scrum Product Owner training, Agile product strategy, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Professional Scrum Product Owner II (PSPO II) Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PSPO II certification training in Hyderabad by QuickLearn Systems",
    images: ["/professional_scrum_product_owner_2.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Product Owner™ II (PSPO II)",
  subtitle:
    "Master advanced Product Ownership and value-driven product strategy",
  backgroundImage: "/professional_scrum_product_owner_2.jpg",

  overview: [
    "Professional Scrum Product Owner™ II (PSPO II) is an advanced course designed for experienced Product Owners who want to deepen their understanding of product strategy, stakeholder collaboration, and value maximization.",
    "This course focuses on advanced Product Backlog management, forecasting and release planning, stakeholder communication, and aligning product initiatives with business goals.",
    "Participants will strengthen their ability to make evidence-based decisions, manage complex product ecosystems, and drive measurable business outcomes."
  ],

  courseOutline: [
    "Advanced Product Ownership principles",
    "Product vision and strategy alignment",
    "Value-driven Product Backlog management",
    "Stakeholder engagement and communication",
    "Forecasting and release planning",
    "Measuring value and outcomes",
    "Managing complexity in product ecosystems",
    "Scaling Product Ownership practices"
  ],

  learningObjectives: [
    "Develop advanced product strategy skills",
    "Align product initiatives with business objectives",
    "Optimize Product Backlog for maximum value",
    "Enhance stakeholder collaboration",
    "Apply evidence-based product management",
    "Forecast delivery effectively",
    "Measure and improve product outcomes"
  ],

  targetGroup: [
    "Experienced Product Owners",
    "Product Managers",
    "Business Analysts in Agile environments",
    "Agile Coaches",
    "Professionals who have passed PSPO I"
  ],

  prerequisite: [
    "Professional Scrum Product Owner™ I (PSPO I) certification is required",
    "At least one year of practical experience as a Product Owner or in a similar role",
    "Strong understanding of Scrum framework and backlog management practices",
    "Experience with stakeholder management and product strategy is recommended"
  ],

  examDetails: [
    "Duration: 90 minutes",
    "30 multiple choice questions",
    "Passing score: 85%",
    "Online, open book examination",
    "Certification issued by Scrum.org"
  ],

  category: "Agile & Scrum",
  tagline: "Strategize. Prioritize. Maximize Value.",

  relatedCourses: [
    {
      title: "Professional Scrum Product Owner™ I (PSPO I)",
      image: "/professional_scrum_product_owner_2.jpg",
      description: "Foundational Product Owner certification",
      href: "/professional-scrum-product-owner",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-[#2BA6D9]"
    },
    {
      title: "Professional Scrum Master™ II (PSM II)",
      image: "/professional_scrum_product_owner_2.jpg",
      description: "Advanced Scrum Master leadership skills",
      href: "/professional-scrum-master-2",
      duration: "2 Days",
      level: "Advanced",
      badge: "Scrum",
      badgeColor: "bg-[#2BA6D9]"
    },
    {
      title: "SAFe® Product Owner / Product Manager",
      image: "/professional_scrum_product_owner_2.jpg",
      description: "Product Ownership within scaled Agile environments",
      href: "/safe-product-owner-product-manager",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-[#2BA6D9]"
    }
  ]
};

export default function ProfessionalScrumProductOwner2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
