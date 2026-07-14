import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ISTQB Foundation Level Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master software testing fundamentals with ISTQB Foundation Level certification training in Hyderabad. QuickLearn Systems offers expert-led ISTQB training covering testing principles, techniques, and best practices. Enroll today!",
  keywords: "ISTQB Foundation training Hyderabad, ISTQB Foundation certification Hyderabad, best ISTQB training institute Hyderabad, software testing course Hyderabad, ISTQB training India, ISTQB Foundation, software testing, test automation, quality assurance, testing certification, test design, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "ISTQB Foundation Level Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led ISTQB Foundation Level certification training in Hyderabad by QuickLearn Systems",
    images: ["/istqb_foundation.jpg"],
  },
};

const courseData = {
  "title": "Certified Tester Foundation Level (CTFL) v4.0 Certification Training",
  "subtitle": "Build a Strong Foundation in Software Testing and Quality Assurance for Modern Software Development",
  "backgroundImage": "/istqb_foundation.jpg",
  "overview": [
    "The ISTQB® Certified Tester Foundation Level (CTFL) v4.0 certification is the world's leading entry-level software testing certification, providing professionals with a comprehensive understanding of software testing principles, techniques, processes, and best practices.",
    "Developed by the International Software Testing Qualifications Board (ISTQB®), the CTFL certification equips learners with the knowledge required to effectively plan, design, execute, and manage software testing activities throughout the Software Development Life Cycle (SDLC).",
    "The latest CTFL v4.0 syllabus reflects today's software delivery practices, incorporating Agile methodologies, risk-based testing, test automation awareness, and quality engineering concepts. Participants learn how testing contributes to delivering reliable, secure, and high-quality software products while reducing business risks and improving customer satisfaction.",
    "Whether you are beginning your testing career or looking to formalize your software quality knowledge, the CTFL certification provides a globally recognized credential that serves as the foundation for advanced ISTQB certifications and career growth in Quality Assurance (QA), Test Automation, Agile Testing, and Quality Engineering."
  ],
  "whyHead": "Why Choose ISTQB® CTFL v4.0?",
  "why": [
    "The Certified Tester Foundation Level certification is recognized worldwide by employers as the benchmark qualification for software testing professionals.",
    "Benefits of earning the CTFL certification include:",
    "Gain internationally recognized software testing credentials.",
    "Build a strong understanding of software testing fundamentals.",
    "Learn structured testing techniques and industry best practices.",
    "Improve software quality through systematic testing approaches.",
    "Understand the role of testing within Agile and DevOps environments.",
    "Develop practical skills for designing and executing effective test cases.",
    "Enhance career opportunities in software quality assurance and testing.",
    "Establish the prerequisite knowledge for advanced ISTQB certifications."
  ],
  "prerequisites": [
    "There are no formal prerequisites for attending the ISTQB® Certified Tester Foundation Level course or taking the certification examination.",
    "This certification is suitable for both beginners and experienced professionals who wish to build or validate their software testing knowledge.",
    "A basic understanding of software development concepts, software lifecycle models, or Agile methodologies is helpful but not mandatory."
  ],
  "whoShouldAttend": [
    "Software Testers",
    "QA Engineers",
    "Manual Test Engineers",
    "Automation Test Engineers",
    "Test Analysts",
    "Test Consultants",
    "Software Developers",
    "Business Analysts",
    "Scrum Masters",
    "Product Owners",
    "Project Managers",
    "Release Managers",
    "DevOps Engineers",
    "Agile Team Members",
    "Fresh graduates aspiring to build a career in Software Testing",
    "anyone interested in software quality assurance"
  ],
  "curriculum": [
    {
      "title": "Course Content",
      "topics": [
        "The CTFL v4.0 syllabus is structured to provide a complete understanding of software testing fundamentals, including principles, lifecycle integration, static and dynamic testing techniques, test management basics, and tool support."
      ]
    },
    {
      "title": "Module 1: Fundamentals of Testing",
      "topics": [
        "What is software testing?",
        "Objectives of testing",
        "Testing and quality assurance",
        "Errors, defects, and failures",
        "Seven testing principles",
        "Testing and debugging",
        "Test process and basic test activities"
      ]
    },
    {
      "title": "Module 2: Testing Throughout the Software Development Lifecycle (SDLC)",
      "topics": [
        "Software development models (Waterfall, V-Model, Iterative, Agile)",
        "Test levels:",
        "Component testing",
        "Integration testing",
        "System testing",
        "Acceptance testing",
        "Test types:",
        "Functional testing",
        "Non-functional testing",
        "Regression testing",
        "Maintenance testing"
      ]
    },
    {
      "title": "Module 3: Static Testing",
      "topics": [
        "Static testing basics",
        "Reviews and review process",
        "Roles and responsibilities in reviews",
        "Types of reviews:",
        "Informal review",
        "Walkthrough",
        "Technical review",
        "Inspection",
        "Static analysis tools"
      ]
    },
    {
      "title": "Module 4: Test Techniques",
      "topics": [
        "Black-box test techniques:",
        "Equivalence partitioning",
        "Boundary value analysis",
        "Decision table testing",
        "State transition testing",
        "White-box test techniques:",
        "Statement testing",
        "Branch testing",
        "Experience-based techniques:",
        "Error guessing",
        "Exploratory testing"
      ]
    },
    {
      "title": "Module 5: Test Management",
      "topics": [
        "Test planning and estimation",
        "Test strategy and test approach",
        "Risk-based testing",
        "Test monitoring and control",
        "Configuration management",
        "Defect management process",
        "Test reporting"
      ]
    },
    {
      "title": "Module 6: Tool Support for Testing",
      "topics": [
        "Types of test tools:",
        "Test management tools",
        "Test design tools",
        "Test execution tools",
        "Benefits of automation tools",
        "Tool selection and implementation",
        "Risks and considerations of test tools"
      ]
    },
    {
      "title": "Skills You'll Gain",
      "topics": [
        "After completing this course, participants will be able to:",
        "Understand core principles of software testing",
        "Design effective manual test cases",
        "Apply black-box and white-box testing techniques",
        "Perform static testing and reviews",
        "Understand Agile and traditional testing approaches",
        "Manage basic test activities and reporting",
        "Identify and document software defects effectively",
        "Work effectively in Agile and DevOps teams",
        "Prepare confidently for the ISTQB CTFL v4.0 certification exam"
      ]
    }
  ],
  "learningOutcomes": [
    "Explain fundamental testing concepts and terminology",
    "Apply structured testing techniques in real projects",
    "Understand testing across all SDLC stages",
    "Participate effectively in review processes",
    "Contribute to test planning and execution activities",
    "Use tools to support testing activities",
    "Improve software quality through systematic testing approaches"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ISTQB® Certified Tester Foundation Level (CTFL) v4.0"
    },
    {
      "label": "Exam Format",
      "value": "Multiple Choice Questions"
    },
    {
      "label": "Number of Questions",
      "value": "40"
    },
    {
      "label": "Duration",
      "value": "60 Minutes"
    },
    {
      "label": "Passing Score",
      "value": "65% (approx. 26 correct answers)"
    },
    {
      "label": "Open Book",
      "value": "No"
    },
    {
      "label": "Language",
      "value": "English (varies by region)"
    },
    {
      "label": "Certification Body",
      "value": "ISTQB® International Software Testing Qualifications Board"
    }
  ],
  "courseHighlights": [
    "Latest ISTQB® CTFL v4.0 syllabus",
    "Instructor-led live online or classroom training",
    "Practical examples and real-world testing scenarios",
    "Interactive exercises and discussions",
    "Comprehensive course material",
    "Practice questions and mock examinations",
    "Exam preparation guidance",
    "Post-training support from certified instructors"
  ],
  "disclaimer": ""
};

export default function ISTQBFPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}