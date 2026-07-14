import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Agile Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master PRINCE2 Agile Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led training covering tailoring PRINCE2 for agile environments, risk management, and complex project delivery. Enroll today!",
  keywords:
    "PRINCE2 Agile Practitioner training Hyderabad, PRINCE2 Agile Practitioner certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Agile Practitioner course Hyderabad, PRINCE2 training India, PRINCE2 Agile Practitioner, PRINCE2 Practitioner, Advanced Project Management, Agile Project Management, PRINCE2 Agile, Project Governance, Agile Delivery, Risk Management, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Agile Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PRINCE2 Agile Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/prince2_agile_practitioner.jpg"],
  },
};

const courseData = {
  "title": "PRINCE2 Agile® Practitioner Certification Training (Version 2)",
  "subtitle": "Apply Agile Delivery with PRINCE2® Governance for Successful Project Outcomes",
  "backgroundImage": "/prince2_agile_practitioner.jpg",
  "overview": [
    "The PRINCE2 Agile® Practitioner (Version 2) certification is designed for professionals who want to apply Agile delivery approaches within the structured governance framework of PRINCE2®. This advanced course builds on the Foundation level and focuses on tailoring PRINCE2 to Agile environments while maintaining effective project control, governance, and business alignment.",
    "Participants learn how to combine Agile frameworks such as Scrum, Kanban, and Lean with PRINCE2 practices to deliver products incrementally, respond to change quickly, and maximize customer value without compromising governance.",
    "Using real-world scenarios and practical exercises, this course prepares participants to confidently apply PRINCE2 Agile in their organizations and successfully pass the PRINCE2 Agile® Practitioner certification examination."
  ],
  "whyHead": "Why Choose PRINCE2 Agile® Practitioner?",
  "why": [
    "Learn to apply PRINCE2® in Agile and hybrid environments",
    "Balance governance with Agile flexibility",
    "Improve collaboration between business, project, and delivery teams",
    "Deliver value through iterative and incremental development",
    "Enhance decision-making and stakeholder engagement",
    "Earn a globally recognized Agile project management certification"
  ],
  "prerequisites": [
    "To take the PRINCE2 Agile® Practitioner examination, candidates must hold one of the following certifications:",
    "PRINCE2 Agile® Foundation",
    "PRINCE2® Foundation",
    "PRINCE2® Practitioner",
    "Project Management Professional (PMP®)",
    "Certified Associate in Project Management (CAPM®)",
    "IPMA® Level A, B, C, or D",
    "Other recognized prerequisites accepted by PeopleCert"
  ],
  "whoShouldAttend": [
    "Project Managers",
    "Agile Project Managers",
    "Scrum Masters",
    "Product Owners",
    "Agile Coaches",
    "Delivery Managers",
    "PMO Professionals",
    "Business Analysts",
    "Change Managers",
    "Team Leads",
    "Professionals managing Agile or hybrid projects"
  ],
  "curriculum": [
    {
      "title": "Module 1: Applying PRINCE2 Agile®",
      "topics": [
        "PRINCE2 Agile concepts",
        "Agile mindset",
        "Governance in Agile projects",
        "Tailoring PRINCE2®"
      ]
    },
    {
      "title": "Module 2: Agile Frameworks in Practice",
      "topics": [
        "Scrum",
        "Kanban",
        "Lean",
        "Lean Startup",
        "DevOps",
        "Flow-based delivery"
      ]
    },
    {
      "title": "Module 3: Tailoring PRINCE2 Practices",
      "topics": [
        "Business Case",
        "Organization",
        "Plans",
        "Risk",
        "Quality",
        "Issues",
        "Progress"
      ]
    },
    {
      "title": "Module 4: Applying PRINCE2 Processes",
      "topics": [
        "Starting Up a Project",
        "Initiating a Project",
        "Directing a Project",
        "Controlling a Stage",
        "Managing Product Delivery",
        "Managing Stage Boundaries",
        "Closing a Project"
      ]
    },
    {
      "title": "Module 5: Agile Behaviors and Techniques",
      "topics": [
        "Servant Leadership",
        "MoSCoW Prioritization",
        "Timeboxing",
        "Rich Communication",
        "Frequent Releases",
        "Continuous Feedback",
        "Retrospectives"
      ]
    },
    {
      "title": "Module 6: Managing Agile Delivery",
      "topics": [
        "Product-based planning",
        "Incremental delivery",
        "Stakeholder engagement",
        "Risk management",
        "Governance checkpoints",
        "Measuring value delivery"
      ]
    },
    {
      "title": "Module 7: Practitioner Exam Preparation",
      "topics": [
        "Scenario-based application",
        "Practice examinations",
        "Exam strategies",
        "Revision sessions",
        "Time management techniques"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply PRINCE2® governance within Agile projects",
    "Tailor PRINCE2® for different Agile delivery environments",
    "Integrate Scrum, Kanban, and Lean practices with PRINCE2",
    "Balance flexibility with effective project governance",
    "Manage Agile risks, quality, progress, and stakeholder expectations",
    "Deliver customer value through iterative project delivery",
    "Prepare confidently for the PRINCE2 Agile® Practitioner examination"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "PRINCE2 Agile® Practitioner (Version 2)"
    },
    {
      "label": "Exam Format",
      "value": "Objective Testing (Scenario-Based)"
    },
    {
      "label": "Number of Questions",
      "value": "70"
    },
    {
      "label": "Passing Score",
      "value": "60% (42 out of 70)"
    },
    {
      "label": "Exam Duration",
      "value": "150 Minutes"
    },
    {
      "label": "Open Book",
      "value": "Yes (Official PRINCE2 Agile® Manual)"
    },
    {
      "label": "Delivery",
      "value": "Online Proctored"
    }
  ],
  "courseHighlights": [
    "Aligned with PRINCE2 Agile® Version 2",
    "Instructor-led Live Training",
    "Scenario-Based Learning",
    "Practical Agile Workshops",
    "Real-world Project Case Studies",
    "Mock Exams and Practice Questions",
    "Comprehensive Course Material",
    "Post-training Mentor Support"
  ],
  "disclaimer": "PRINCE2®, PRINCE2 Agile®, MSP®, PeopleCert®, AXELOS®, and all related trademarks are the property of their respective owners. QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by PeopleCert or AXELOS. All trademarks are acknowledged as the property of their respective owners."
};

export default function PRINCE2AgilePractitioner() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
