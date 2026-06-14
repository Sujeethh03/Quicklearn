import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SRE Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Site Reliability Engineering (SRE) Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led SRE training covering reliability principles, monitoring, incident response, and automation. Enroll today!",
  keywords: "SRE Foundation training Hyderabad, Site Reliability Engineering certification Hyderabad, best SRE training institute Hyderabad, SRE Foundation course Hyderabad, SRE training India, SRE Foundation, Site Reliability Engineering, system reliability, monitoring, incident response, automation, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SRE Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led SRE Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/sre_foundation.jpg"],
  },
};

const courseData = {
  title: "SRE Foundation",
  subtitle: "Master Site Reliability Engineering principles for scalable and reliable systems",
  backgroundImage: "/sre_foundation.jpg",
  overview: [
    "Site Reliability Engineering (SRE) Foundation provides comprehensive training in reliability engineering principles, practices, and tools used to build and maintain large-scale distributed systems.",
    "Learn to balance system reliability with feature velocity, implement effective monitoring and alerting, and respond to incidents with systematic approaches.",
    "Develop skills in automation, capacity planning, and performance optimization that enable organizations to deliver reliable services at scale."
  ],
  courseOutline: [
    "SRE principles and philosophy",
    "Service Level Objectives (SLOs) and Error Budgets",
    "Monitoring, alerting, and observability",
    "Incident response and post-mortem analysis",
    "Automation and toil reduction",
    "Capacity planning and performance",
    "Release engineering and deployment",
    "Organizational aspects of SRE"
  ],
  learningObjectives: [
    "Understand SRE principles and practices",
    "Define and manage Service Level Objectives",
    "Implement effective monitoring and alerting",
    "Respond to incidents systematically",
    "Reduce toil through automation",
    "Plan capacity and optimize performance",
    "Apply SRE practices in organizations"
  ],
  targetGroup: [
    "Site Reliability Engineers",
    "DevOps engineers and practitioners",
    "System administrators and operators",
    "Software engineers interested in reliability",
    "IT operations professionals"
  ],

  prerequisite: [
    "No formal prerequisites are required for SRE Foundation",
    "Basic IT awareness and familiarity with software development or operations is recommended",
    "Understanding of fundamental networking, systems, or cloud concepts is beneficial",
    "Some experience in IT operations, development, or system administration is helpful"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "DevOps & Business Analysis",
  tagline: "Reliable. Scalable. Automated.",
  relatedCourses: [
    {
      title: "DevOps Foundation",
      image: "/sre_foundation.jpg",
      description: "Learn DevOps culture and practices",
      href: "/DevopsFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    },
    {
      title: "SRE Practitioner",
      image: "/sre_foundation.jpg",
      description: "Advanced SRE practices and implementation",
      href: "/SREPractitioner",
      duration: "3 Days",
      level: "Foundation",
      badge: "SRE",
      badgeColor: "bg-[#2BA6D9]"
    },
    {
      title: "Monitoring & Event Management",
      image: "/monitoring_event_management.png",
      description: "Master monitoring and event management",
      href: "/MonitoringEventManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#2BA6D9]"
    }
  ]
};

export default function SREFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}