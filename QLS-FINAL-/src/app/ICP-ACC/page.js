import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ICAgile Certified Professional in Agile Coaching (ICP-ACC®) Certification Training in Hyderabad | QuickLearn Systems",
  description: "Develop the Mindset, Skills, and Techniques of an Effective Agile Coach",
  openGraph: {
    title: "ICAgile Certified Professional in Agile Coaching (ICP-ACC®) Certification Training in Hyderabad | QuickLearn Systems",
    description: "Develop the Mindset, Skills, and Techniques of an Effective Agile Coach",
    images: ["/agile_business_analysis.jpg"],
  },
};

const courseData = {
  "title": "ICAgile Certified Professional in Agile Coaching (ICP-ACC®)",
  "subtitle": "Develop the Mindset, Skills, and Techniques of an Effective Agile Coach",
  "backgroundImage": "/agile_business_analysis.jpg",
  "overview": [
    "The ICAgile Certified Professional in Agile Coaching (ICP-ACC®) certification is one of the most respected Agile Coaching credentials worldwide. Designed by the International Consortium for Agile (ICAgile®), this certification helps Agile practitioners develop the professional coaching skills required to support individuals, teams, and organizations in their Agile transformation journey.",
    "The ICP-ACC course goes beyond frameworks and practices to focus on the human side of Agile. Participants learn how to coach, facilitate, mentor, and teach effectively while helping teams improve collaboration, performance, and value delivery.",
    "Through highly interactive exercises, coaching practice sessions, simulations, self-reflection, and real-world case studies, participants gain practical experience in applying Agile coaching techniques in diverse organizational environments.",
    "Upon successful completion of the course, participants earn the ICAgile Certified Professional in Agile Coaching (ICP-ACC®) certification."
  ],
  "whyHead": "Why Choose ICP-ACC®?",
  "why": [
    "Globally recognized Agile Coaching certification",
    "Develop professional coaching skills beyond Scrum and Agile frameworks",
    "Learn practical coaching, mentoring, facilitation, and teaching techniques",
    "Improve team effectiveness and collaboration",
    "Build a strong foundation for Agile Coach career paths",
    "Enhance leadership and communication capabilities"
  ],
  "prerequisites": [
    "There are no mandatory prerequisites for attending the ICP-ACC® course.",
    "However, the course is most beneficial for professionals who have:",
    "Basic Agile and Scrum knowledge",
    "Experience working with Agile teams",
    "Exposure to Scrum Master, Agile Coach, Product Owner, Project Manager, or Leadership roles"
  ],
  "whoShouldAttend": [
    "Scrum Masters",
    "Agile Coaches",
    "Team Coaches",
    "Delivery Managers",
    "Project Managers",
    "Product Owners",
    "Product Managers",
    "Agile Team Leads",
    "Engineering Managers",
    "Change Agents",
    "Transformation Leaders",
    "Professionals aspiring to become Agile Coaches"
  ],
  "curriculum": [
    {
      "title": "Module 1: The Agile Coaching Mindset",
      "topics": [
        "What is Agile Coaching?",
        "Agile Coach Responsibilities",
        "Coaching Stance",
        "Agile Coaching Competencies",
        "Self-Awareness and Self-Management",
        "Ethical Considerations in Coaching",
        "Servant Leadership"
      ]
    },
    {
      "title": "Module 2: Foundational Professional Coaching Skills",
      "topics": [
        "Active Listening",
        "Powerful Questioning",
        "Coaching Presence",
        "Emotional Intelligence",
        "Building Trust",
        "Creating Awareness",
        "Giving and Receiving Feedback"
      ]
    },
    {
      "title": "Module 3: Coaching Conversations",
      "topics": [
        "Coaching for Action",
        "Structuring Coaching Conversations",
        "Identifying Coaching Opportunities",
        "Supporting Client Growth",
        "Goal Setting and Accountability"
      ]
    },
    {
      "title": "Module 4: Mentoring Agile Teams",
      "topics": [
        "Coaching vs Mentoring",
        "Teaching vs Facilitating",
        "Agile Role Mentoring",
        "Knowledge Sharing",
        "Developing Team Capability"
      ]
    },
    {
      "title": "Module 5: Facilitation Skills",
      "topics": [
        "Facilitation Mindset",
        "Designing Effective Workshops",
        "Facilitating Agile Events",
        "Group Decision-Making",
        "Managing Participation",
        "Creating Collaborative Environments"
      ]
    },
    {
      "title": "Module 6: Coaching Teams",
      "topics": [
        "Team Development Models",
        "Building High-Performing Teams",
        "Team Dynamics",
        "Psychological Safety",
        "Team Health Assessment",
        "Coaching Team Performance"
      ]
    },
    {
      "title": "Module 7: Conflict and Dysfunction",
      "topics": [
        "Understanding Team Conflict",
        "Conflict Resolution Techniques",
        "Healthy Disagreement",
        "Difficult Conversations",
        "Building Trust within Teams",
        "Supporting Team Resilience"
      ]
    },
    {
      "title": "Module 8: Coaching Alliances and Agreements",
      "topics": [
        "Establishing Coaching Relationships",
        "Coaching Contracts",
        "Designing Coaching Alliances",
        "Internal vs External Coaching",
        "Setting Expectations and Boundaries"
      ]
    },
    {
      "title": "Module 9: Organizational Coaching Awareness",
      "topics": [
        "Organizational Systems Thinking",
        "Identifying Organizational Impediments",
        "Leadership Engagement",
        "Supporting Agile Transformation",
        "Scaling Coaching Impact"
      ]
    }
  ],
  "learningOutcomes": [
    "Apply the Agile Coaching mindset effectively",
    "Differentiate coaching, mentoring, facilitation, and teaching approaches",
    "Conduct effective coaching conversations",
    "Use active listening and powerful questioning techniques",
    "Facilitate Agile events and collaborative workshops",
    "Coach individuals and teams toward higher performance",
    "Address conflict and dysfunction constructively",
    "Build coaching alliances and professional coaching relationships",
    "Support Agile adoption and organizational transformation"
  ],
  "certificationHeading": "Certification Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ICAgile Certified Professional in Agile Coaching (ICP-ACC®)"
    },
    {
      "label": "Certification Body",
      "value": "ICAgile®"
    },
    {
      "label": "Course Duration",
      "value": "Typically 21 Hours (3 Days) or equivalent format"
    },
    {
      "label": "Exam",
      "value": "No Exam Required"
    },
    {
      "label": "Certification Method",
      "value": "Successful completion of all course learning objectives and active participation"
    },
    {
      "label": "Validity",
      "value": "Lifetime Certification (No Renewal Required)"
    }
  ],
  "courseHighlights": [
    "ICAgile Accredited Curriculum",
    "Instructor-led Interactive Training",
    "Coaching Practice Sessions",
    "Team Coaching Simulations",
    "Real-world Agile Coaching Scenarios",
    "Peer Learning and Feedback",
    "Practical Exercises and Workshops",
    "Lifetime ICAgile Certification (No Renewal Fees)"
  ],
  "disclaimer": "ICAgile®, ICP-ACC®, ICP®, and all related trademarks are the property of the International Consortium for Agile (ICAgile®). QuickLearn Systems is an independent training provider and is not affiliated with, endorsed by, or sponsored by ICAgile®. All trademarks are acknowledged as the property of their respective owners."
};

export default function ICPACCPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
