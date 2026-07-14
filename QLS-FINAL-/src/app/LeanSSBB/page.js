import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Lean Six Sigma Black Belt Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Lean Six Sigma Black Belt certification training in Hyderabad. QuickLearn Systems offers expert-led LSSBB training covering advanced statistics, process improvement leadership, and organizational change. Enroll today!",
  keywords: "Lean Six Sigma Black Belt training Hyderabad, LSSBB certification Hyderabad, best Six Sigma training institute Hyderabad, Six Sigma Black Belt course Hyderabad, Lean Six Sigma training India, Lean Six Sigma Black Belt, advanced process improvement, statistical analysis, project leadership, organizational change, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Lean Six Sigma Black Belt Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led Lean Six Sigma Black Belt certification training in Hyderabad by QuickLearn Systems",
    images: ["/black_belt.png"],
  },
};

const courseData = {
  "title": "Lean Six Sigma Black Belt Certification Training",
  "subtitle": "Lead Enterprise-Wide Process Improvement and Operational Excellence",
  "backgroundImage": "/black_belt.png",
  "overview": [
    "Lean Six Sigma Black Belt is an advanced certification designed for professionals responsible for leading complex process improvement initiatives, mentoring Green Belts, and driving operational excellence across the organization.",
    "This advanced course expands upon Green Belt concepts by introducing advanced statistical analysis, leadership techniques, change management, Design of Experiments (DOE), process optimization, and enterprise-level improvement strategies.",
    "Participants learn how to manage large-scale improvement projects, analyze complex business problems, coach improvement teams, and deliver sustainable organizational transformation."
  ],
  "whyHead": "Why Choose Lean Six Sigma Black Belt?",
  "why": [
    "Lead enterprise-wide improvement initiatives",
    "Master advanced DMAIC techniques",
    "Develop strong analytical and leadership capabilities",
    "Coach Green Belt practitioners",
    "Drive measurable business transformation",
    "Improve operational excellence across the organization"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the training.",
    "However, completion of Lean Six Sigma Green Belt certification or equivalent process improvement experience is highly recommended to maximize learning."
  ],
  "whoShouldAttend": [
    "Lean Six Sigma Green Belts",
    "Continuous Improvement Managers",
    "Operations Managers",
    "Quality Managers",
    "Manufacturing Leaders",
    "Project Managers",
    "Process Excellence Consultants",
    "Business Transformation Leaders",
    "Engineering Managers",
    "Senior Business Analysts"
  ],
  "curriculum": [
    {
      "title": "Module 1: Advanced Lean Six Sigma Concepts",
      "topics": [
        "Enterprise Lean Six Sigma",
        "Organizational Process Excellence",
        "Strategic Improvement Planning",
        "Lean Leadership"
      ]
    },
    {
      "title": "Module 2: Advanced Define & Measure",
      "topics": [
        "Enterprise Project Selection",
        "Financial Analysis",
        "Advanced Measurement Systems",
        "Project Portfolio Management"
      ]
    },
    {
      "title": "Module 3: Advanced Analyze",
      "topics": [
        "Advanced Statistical Analysis",
        "Regression Analysis",
        "Correlation",
        "Design of Experiments (DOE)",
        "Risk Analysis",
        "Process Capability Analysis"
      ]
    },
    {
      "title": "Module 4: Advanced Improve",
      "topics": [
        "Optimization Techniques",
        "Lean Transformation",
        "Simulation",
        "Advanced Kaizen",
        "Innovation Methods",
        "Solution Validation"
      ]
    },
    {
      "title": "Module 5: Advanced Control",
      "topics": [
        "Enterprise Control Systems",
        "Statistical Process Control",
        "Process Governance",
        "Performance Dashboards",
        "Sustainability Planning"
      ]
    },
    {
      "title": "Module 6: Leadership & Change Management",
      "topics": [
        "Coaching Green Belts",
        "Stakeholder Engagement",
        "Organizational Change Management",
        "Team Leadership",
        "Executive Communication"
      ]
    },
    {
      "title": "Module 7: Enterprise Continuous Improvement",
      "topics": [
        "Operational Excellence",
        "Business Process Transformation",
        "Lean Enterprise",
        "Strategic Performance Measurement",
        "Continuous Improvement Culture"
      ]
    }
  ],
  "learningOutcomes": [
    "Lead complex Lean Six Sigma initiatives",
    "Apply advanced statistical tools for decision-making",
    "Coach and mentor Green Belt practitioners",
    "Drive enterprise-wide operational excellence",
    "Lead organizational change and transformation",
    "Improve business performance using data-driven methodologies"
  ],
  "certificationHeading": "Certification Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Lean Six Sigma Black Belt"
    },
    {
      "label": "Course Duration",
      "value": "Typically, 4 Days (2 Weekends)"
    },
    {
      "label": "Assessment",
      "value": "Certification exam (format varies by certification body)"
    },
    {
      "label": "",
      "value": "Certificate awarded upon successfully meeting the certification requirements of the chosen certification provider."
    }
  ],
  "courseHighlights": [
    "Advanced Instructor-led Live Training",
    "Enterprise-Level Case Studies",
    "Advanced Statistical Concepts",
    "Leadership & Change Management",
    "Project Coaching Techniques",
    "Certification Preparation",
    "Practical Business Applications"
  ],
  "disclaimer": ""
};

export default function LeanSSBBPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}