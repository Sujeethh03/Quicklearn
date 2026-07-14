import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Lean Six Sigma Green Belt Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Lean Six Sigma Green Belt certification training in Hyderabad. QuickLearn Systems offers expert-led LSSGB training covering DMAIC methodology, statistical tools, and process improvement. Enroll today!",
  keywords: "Lean Six Sigma Green Belt training Hyderabad, LSSGB certification Hyderabad, best Six Sigma training institute Hyderabad, Six Sigma Green Belt course Hyderabad, Lean Six Sigma training India, Lean Six Sigma Green Belt, DMAIC, process improvement, quality management, statistical analysis, project management, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Lean Six Sigma Green Belt Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led Lean Six Sigma Green Belt certification training in Hyderabad by QuickLearn Systems",
    images: ["/green_belt.png"],
  },
};

const courseData = {
  "title": "Lean Six Sigma Green Belt Certification Training",
  "subtitle": "Improve Processes. Eliminate Waste. Deliver Measurable Business Results.",
  "backgroundImage": "/green_belt.png",
  "overview": [
    "Lean Six Sigma Green Belt is a globally recognized certification designed for professionals who want to improve business processes, reduce defects, eliminate waste, and enhance operational performance using the Lean Six Sigma methodology.",
    "This instructor-led training provides participants with a practical understanding of Lean principles, Six Sigma concepts, statistical problem-solving techniques, and the DMAIC (Define, Measure, Analyze, Improve, Control) methodology. Through real-world case studies and hands-on exercises, participants learn how to identify improvement opportunities, analyze root causes, implement sustainable solutions, and deliver measurable business value.",
    "The course is suitable for professionals seeking to lead process improvement initiatives and contribute to organizational excellence across manufacturing, IT, healthcare, banking, telecommunications, logistics, and service industries."
  ],
  "whyHead": "Why Choose Lean Six Sigma Green Belt?",
  "why": [
    "Learn the globally recognized DMAIC improvement methodology",
    "Improve quality, productivity, and customer satisfaction",
    "Reduce operational costs and process variation",
    "Develop analytical and data-driven decision-making skills",
    "Lead continuous improvement projects",
    "Build a strong foundation for Lean Six Sigma Black Belt certification"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending this course.",
    "Professionals with experience in operations, quality, project management, business analysis, engineering, IT, or service management will benefit the most."
  ],
  "whoShouldAttend": [
    "Process Improvement Professionals",
    "Project Managers",
    "Operations Managers",
    "Quality Assurance Professionals",
    "Business Analysts",
    "Manufacturing Engineers",
    "Production Managers",
    "Supply Chain Professionals. Healthcare Professionals",
    "IT Professionals",
    "Team Leads",
    "Continuous Improvement Practitioners"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to Lean Six Sigma",
      "topics": [
        "Lean Principles",
        "Six Sigma Fundamentals",
        "Voice of the Customer (VOC)",
        "Cost of Poor Quality (COPQ)",
        "Lean Six Sigma Roles and Responsibilities"
      ]
    },
    {
      "title": "Module 2: Define Phase",
      "topics": [
        "Project Charter",
        "Business Case Development",
        "SIPOC Diagram",
        "Stakeholder Analysis",
        "Customer Requirements (CTQs)"
      ]
    },
    {
      "title": "Module 3: Measure Phase",
      "topics": [
        "Process Mapping",
        "Data Collection Planning",
        "Measurement System Analysis (MSA)",
        "Basic Statistics",
        "Process Capability",
        "Performance Baselines"
      ]
    },
    {
      "title": "Module 4: Analyze Phase",
      "topics": [
        "Root Cause Analysis",
        "Fishbone Diagram",
        "5 Whys",
        "Pareto Analysis",
        "Failure Mode and Effects Analysis (FMEA)",
        "Hypothesis Testing Basics"
      ]
    },
    {
      "title": "Module 5: Improve Phase",
      "topics": [
        "Solution Generation",
        "Lean Waste Elimination",
        "Kaizen",
        "Error Proofing (Poka-Yoke)",
        "Pilot Implementation",
        "Risk Assessment"
      ]
    },
    {
      "title": "Module 6: Control Phase",
      "topics": [
        "Control Plans",
        "Standard Operating Procedures (SOPs)",
        "Statistical Process Control (SPC)",
        "Control Charts",
        "Process Monitoring",
        "Sustaining Improvements"
      ]
    },
    {
      "title": "Module 7: Lean Tools",
      "topics": [
        "5S",
        "Value Stream Mapping (VSM)",
        "Visual Management",
        "Kanban",
        "Standard Work",
        "Continuous Flow"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply Lean Six Sigma principles to improve business processes",
    "Lead Green Belt process improvement projects",
    "Use DMAIC methodology effectively",
    "Identify and eliminate process waste",
    "Analyse process performance using statistical tools",
    "Implement sustainable process improvements",
    "Improve quality, productivity, and customer satisfaction"
  ],
  "certificationHeading": "Certification Information",
  "certification": [
    {
      "label": "Certification",
      "value": "Lean Six Sigma Green Belt"
    },
    {
      "label": "Course Duration",
      "value": "Typically, 2 Days (1 Weekend)"
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
    "Instructor-led Live Training",
    "Practical Case Studies",
    "Real-world Process Improvement Exercises",
    "Lean & Six Sigma Tools",
    "Comprehensive Study Material",
    "Practice Assessments",
    "Certification Preparation",
    "Post-training Mentor Support"
  ],
  "disclaimer": ""
};

export default function LeanSSGBPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}