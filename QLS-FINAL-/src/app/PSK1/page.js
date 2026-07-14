import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum with Kanban™ (PSK) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Improve Flow, Increase Predictability, and Maximize Value with Scrum and Kanban",
  openGraph: {
    title: "Professional Scrum with Kanban™ (PSK) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Improve Flow, Increase Predictability, and Maximize Value with Scrum and Kanban",
    images: ["/professional_scrum_with_kanban.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum with Kanban™ (PSK) Certification Training",
  "subtitle": "Improve Flow, Increase Predictability, and Maximize Value with Scrum and Kanban",
  "backgroundImage": "/professional_scrum_with_kanban.jpg",
  "overview": [
    "Professional Scrum with Kanban™ (PSK) is an interactive, activity-based course that teaches Scrum practitioners how to improve the flow of work by applying Kanban practices within the Scrum framework.",
    "Participants learn how Kanban complements Scrum by improving transparency, managing workflow, reducing bottlenecks, optimizing value delivery, and enhancing predictability. Through practical exercises, case studies, and discussions, attendees gain a deeper understanding of flow metrics and how to use them to improve team effectiveness.",
    "Upon completion of the course, participants are prepared to take the globally recognized Professional Scrum with Kanban™ (PSK I) certification assessment."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Learn how to combine Scrum and Kanban effectively",
    "Improve workflow visibility and team transparency",
    "Identify and remove bottlenecks in delivery processes",
    "Use flow metrics to make better decisions",
    "Enhance predictability and delivery performance",
    "Gain practical techniques that can be applied immediately",
    "Prepare for the globally recognized PSK I certification assessment"
  ],
  "prerequisites": [
    "Recommended:",
    "Good understanding of Scrum",
    "Experience working with Scrum Teams",
    "Knowledge of Agile product development practices"
  ],
  "whoShouldAttend": [
    "Scrum Masters",
    "Agile Coaches",
    "Product Owners",
    "Developers",
    "Team Leads",
    "Project Managers",
    "Anyone seeking to improve workflow and delivery performance"
  ],
  "curriculum": [
    {
      "title": "Module 1: Professional Scrum and Flow",
      "topics": [
        "Scrum foundations",
        "Empiricism and transparency",
        "Understanding flow in Scrum",
        "Why Kanban complements Scrum"
      ]
    },
    {
      "title": "Module 2: Introducing Kanban Practices",
      "topics": [
        "Visualizing workflow",
        "Work Item definition",
        "Workflow states",
        "Explicit workflow policies"
      ]
    },
    {
      "title": "Module 3: Managing Flow",
      "topics": [
        "Work In Progress (WIP) limits",
        "Flow efficiency",
        "Identifying bottlenecks",
        "Reducing delays and waste"
      ]
    },
    {
      "title": "Module 4: Flow Metrics",
      "topics": [
        "Cycle Time",
        "Throughput",
        "Work Item Age",
        "Forecasting delivery"
      ]
    },
    {
      "title": "Module 5: Scrum Events Through a Kanban Lens",
      "topics": [
        "Sprint Planning",
        "Daily Scrum",
        "Sprint Review",
        "Sprint Retrospective"
      ]
    },
    {
      "title": "Module 6: Improving Predictability",
      "topics": [
        "Service Level Expectations (SLE)",
        "Forecasting techniques",
        "Data-driven decision making",
        "Continuous improvement"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply Kanban practices within Scrum",
    "Improve workflow visibility",
    "Manage and optimize flow",
    "Use flow metrics effectively",
    "Improve forecasting and predictability",
    "Enhance value delivery through continuous improvement"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Assessment"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum with Kanban™ I (PSK I)"
    },
    {
      "label": "Format",
      "value": "Online Assessment"
    },
    {
      "label": "Questions",
      "value": "45"
    },
    {
      "label": "Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "85%"
    },
    {
      "label": "Language",
      "value": "English"
    },
    {
      "label": "Delivery",
      "value": "Online"
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
    "Interactive, activity-based learning",
    "Practical exercises and real-world case studies",
    "Scrum and Kanban integration techniques",
    "Flow metrics and forecasting methods",
    "Focus on improving predictability and delivery efficiency",
    "Designed for Scrum practitioners and Agile professionals",
    "Preparation for the Professional Scrum with Kanban™ I assessment"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function PSK1Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
