import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master II (PSM II) Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Professional Scrum Master II (PSM II) certification training in Hyderabad. QuickLearn Systems offers expert-led PSM II training covering advanced Scrum leadership, facilitation, and coaching skills. Enroll today!",
  keywords:
    "PSM II training Hyderabad, Professional Scrum Master 2 certification Hyderabad, best Scrum training institute Hyderabad, PSM II course Hyderabad, Scrum Master advanced training India, PSM II, Professional Scrum Master 2, Scrum Master advanced certification, Agile leadership, Scrum.org PSM2, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Professional Scrum Master II (PSM II) Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PSM II certification training in Hyderabad by QuickLearn Systems",
    images: ["/professional_scrum_master_2.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Master™ II (PSM II) Certification Training",
  "subtitle": "Elevate Your Scrum Leadership with Advanced Facilitation, Coaching, and Agile Practices",
  "backgroundImage": "/professional_scrum_master_2.jpg",
  "overview": [
    "Professional Scrum Master™ II (PSM II) is an advanced Scrum Master course designed for experienced Scrum practitioners who want to deepen their understanding of servant leadership, coaching, facilitation, and organizational agility.",
    "The course focuses on helping Scrum Masters maximize value delivery by improving team effectiveness and enabling organizational change."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Deepen your expertise as an advanced Scrum Master",
    "Strengthen your servant leadership, coaching, and facilitation skills",
    "Learn how to support high-performing Scrum Teams",
    "Improve your ability to enable organizational agility and change",
    "Gain practical insights into value delivery and continuous improvement",
    "Prepare for the globally recognized PSM II certification exam"
  ],
  "prerequisites": [
    "This course is intended for experienced Scrum professionals. Participants should have:",
    "A strong understanding of Scrum principles and practices",
    "Practical experience working as a Scrum Master or in a Scrum environment",
    "PSM I certification recommended",
    "Experience supporting teams, stakeholders, or agile transformation initiatives"
  ],
  "whoShouldAttend": [
    "Experienced Scrum Masters",
    "Agile Coaches",
    "Team Coaches",
    "Delivery Managers",
    "Agile Leaders",
    "Transformation Leaders"
  ],
  "curriculum": [
    {
      "title": "The Scrum Master as a Leader",
      "topics": [
        "Servant Leadership",
        "Leadership Styles",
        "Coaching Stances",
        "Facilitating Change"
      ]
    },
    {
      "title": "Supporting Scrum Teams",
      "topics": [
        "Team Dynamics",
        "Conflict Resolution",
        "Psychological Safety",
        "Self-Management"
      ]
    },
    {
      "title": "Organizational Agility",
      "topics": [
        "Organizational Design",
        "Agile Culture",
        "Change Management",
        "Scaling Agile"
      ]
    },
    {
      "title": "Product Delivery",
      "topics": [
        "Maximizing Value",
        "Product Goals",
        "Stakeholder Engagement",
        "Continuous Improvement"
      ]
    },
    {
      "title": "Advanced Facilitation & Coaching",
      "topics": [
        "Facilitation Techniques",
        "Coaching Conversations",
        "Mentoring Approaches",
        "Professional Development"
      ]
    }
  ],
  "learningOutcomes": [
    "Act as an effective servant leader",
    "Coach teams and stakeholders",
    "Improve team effectiveness",
    "Facilitate organizational change",
    "Support agile transformation initiatives",
    "Enhance value delivery"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Exam"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Master™ II (PSM II)"
    },
    {
      "label": "Questions",
      "value": "30"
    },
    {
      "label": "Duration",
      "value": "90 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "85%"
    },
    {
      "label": "Delivery",
      "value": "Online"
    },
    {
      "label": "Format",
      "value": "Scenario-Based Assessment"
    },
    {
      "label": "",
      "value": "Lifetime certification - no annual renewal fee required"
    },
    {
      "label": "",
      "value": "Free Credly digital credential included"
    }
  ],
  "courseHighlights": [
    "Advanced Scrum Master training for experienced professionals",
    "Focus on servant leadership, coaching, and facilitation",
    "Practical guidance on supporting Scrum Teams and stakeholders",
    "Coverage of organizational agility and change management",
    "Scenario-based learning and real-world examples",
    "Exam-focused preparation for PSM II certification",
    "Delivered by experienced Agile and Scrum trainers"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function ProfessionalScrumMaster2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
