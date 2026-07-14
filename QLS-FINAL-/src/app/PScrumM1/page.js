import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master™ I (PSM I) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master the Scrum Framework and Become a Confident, Effective Scrum Master",
  openGraph: {
    title: "Professional Scrum Master™ I (PSM I) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master the Scrum Framework and Become a Confident, Effective Scrum Master",
    images: ["/professional_scrum_master_1.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Master™ I (PSM I) Certification Training",
  "subtitle": "Master the Scrum Framework and Become a Confident, Effective Scrum Master",
  "backgroundImage": "/professional_scrum_master_1.jpg",
  "overview": [
    "Professional Scrum Master™ I (PSM I) is an interactive course that provides a strong understanding of Scrum theory, principles, and values. Participants learn how Scrum helps teams and organizations deliver value through iterative and incremental product development.",
    "The course focuses on the responsibilities of the Scrum Master, servant leadership, team effectiveness, and the practical application of Scrum within organizations.",
    "Upon completion, participants will be prepared to take the globally recognized Professional Scrum Master™ I (PSM I) certification assessment."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Gain a strong foundation in Scrum theory, principles, and values",
    "Understand the role and responsibilities of an effective Scrum Master",
    "Learn how to support self-managing and cross-functional teams",
    "Improve your ability to facilitate Scrum events and remove impediments",
    "Build practical skills to apply Scrum in real-world environments",
    "Prepare confidently for the Professional Scrum Master™ I certification exam",
    "Strengthen your Agile mindset and servant leadership capabilities"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites.",
    "Recommended:",
    "Basic understanding of Agile concepts",
    "Familiarity with software or product development environments",
    "Interest in Scrum and Agile ways of working"
  ],
  "whoShouldAttend": [
    "Scrum Masters",
    "Project Managers",
    "Team Leads",
    "Agile Coaches",
    "Developers",
    "Product Owners",
    "Business Analysts",
    "anyone involved in Agile product development"
  ],
  "curriculum": [
    {
      "title": "Understanding Scrum",
      "topics": [
        "Empiricism",
        "Scrum Values",
        "Scrum Theory",
        "Scrum Framework"
      ]
    },
    {
      "title": "The Scrum Team",
      "topics": [
        "Accountabilities",
        "Self-Managing Teams",
        "Cross-Functional Teams",
        "Team Collaboration"
      ]
    },
    {
      "title": "Scrum Events",
      "topics": [
        "Sprint",
        "Sprint Planning",
        "Daily Scrum",
        "Sprint Review",
        "Sprint Retrospective"
      ]
    },
    {
      "title": "Scrum Artifacts",
      "topics": [
        "Product Backlog",
        "Sprint Backlog",
        "Increment",
        "Commitments"
      ]
    },
    {
      "title": "Scrum Master Responsibilities",
      "topics": [
        "Servant Leadership",
        "Coaching Teams",
        "Facilitating Scrum Events",
        "Removing Impediments",
        "Supporting Organizational Change"
      ]
    },
    {
      "title": "Applying Scrum",
      "topics": [
        "Product Delivery",
        "Value Creation",
        "Continuous Improvement",
        "Scaling Considerations"
      ]
    }
  ],
  "learningOutcomes": [
    "Explain Scrum theory and principles",
    "Understand Scrum roles, events, and artifacts",
    "Facilitate Scrum effectively",
    "Coach teams toward self-management",
    "Support continuous improvement",
    "Apply Scrum in real-world environments"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Exam"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Master™ I (PSM I)"
    },
    {
      "label": "Format",
      "value": "Multiple Choice, Multiple Answer, True/False"
    },
    {
      "label": "Questions",
      "value": "80"
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
      "label": "Delivery",
      "value": "Online"
    },
    {
      "label": "Language",
      "value": "English"
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
    "Interactive instructor-led training",
    "Comprehensive coverage of Scrum theory, roles, events, and artifacts",
    "Practical examples and real-world Scrum scenarios",
    "Focus on Scrum Master responsibilities and servant leadership",
    "Exam-oriented preparation for PSM I certification",
    "Engaging discussions, exercises, and knowledge checks",
    "Suitable for both beginners and professionals"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function PScrumM1Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
