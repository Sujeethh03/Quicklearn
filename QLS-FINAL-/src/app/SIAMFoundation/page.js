import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SIAM Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master SIAM Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led Service Integration and Management training covering multi-vendor environments, governance, and best practices. Enroll today!",
  keywords: "SIAM Foundation training Hyderabad, SIAM certification Hyderabad, best SIAM training institute Hyderabad, service integration management course Hyderabad, SIAM training India, SIAM Foundation, Service Integration and Management, multi-vendor management, service integration, SIAM methodology, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SIAM Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led SIAM Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/siam_foundation.jpg"],
  },
};

const courseData = {
  title: "SIAM Foundation",
  subtitle: "Master Service Integration and Management in multi-vendor environments",
  backgroundImage: "/siam_foundation.jpg",
  overview: [
    "Service Integration and Management (SIAM) is a methodology for managing services where multiple service providers contribute to the delivery of services. SIAM Foundation provides comprehensive training in managing complex multi-vendor environments.",
    "Learn to implement SIAM governance structures, manage service provider relationships, and ensure seamless service delivery across multiple vendors while maintaining service quality and customer satisfaction.",
    "Develop skills in service integration, vendor management, and governance frameworks that enable organizations to leverage multiple service providers effectively while reducing complexity and risk."
  ],
  courseOutline: [
    "SIAM fundamentals and methodology overview",
    "SIAM ecosystem and stakeholder management",
    "Service integration governance and structures",
    "Multi-vendor service management",
    "SIAM roles and responsibilities",
    "Service provider management and coordination",
    "Performance management and reporting",
    "SIAM implementation and transition"
  ],
  learningObjectives: [
    "Understand SIAM methodology and principles",
    "Master multi-vendor service management",
    "Implement effective governance structures",
    "Manage service provider relationships",
    "Coordinate service integration activities",
    "Develop performance management frameworks",
    "Lead SIAM implementation initiatives"
  ],
  targetGroup: [
    "Service Integration Managers",
    "Vendor and supplier managers",
    "IT Service Management professionals",
    "Contract and procurement managers",
    "Service delivery managers"
  ],

  prerequisite: [
    "No formal prerequisites are required for the SIAM Foundation course",
    "Basic awareness of IT service management concepts is recommended",
    "Familiarity with multi-supplier or outsourced IT environments is beneficial",
    "Understanding of general IT operations and service delivery is helpful"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Integrate. Coordinate. Deliver.",
  relatedCourses: [
    {
      title: "SIAM Professional",
      image: "/siam_foundation.jpg",
      description: "Advanced SIAM practices and implementation",
      href: "/SIAMProfessional",
      duration: "3 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-purple-600"
    },
    {
      title: "Supplier Management",
      image: "/siam_foundation.jpg",
      description: "Master supplier relationship management",
      href: "/SupplierManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#2BA6D9]"
    },
    {
      title: "Relationship Management",
      image: "/siam_foundation.jpg",
      description: "Master stakeholder relationship management",
      href: "/RelationshipManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#2BA6D9]"
    }
  ]
};

export default function SIAMFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}