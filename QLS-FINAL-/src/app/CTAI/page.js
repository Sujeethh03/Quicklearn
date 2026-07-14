import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Certified Tester AI Testing (CT-AI) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master Testing of AI Systems, Machine Learning Models, and Generative AI Applications",
  openGraph: {
    title: "Certified Tester AI Testing (CT-AI) v2.0 Certification Training in Hyderabad | QuickLearn Systems",
    description: "Master Testing of AI Systems, Machine Learning Models, and Generative AI Applications",
    images: ["/istqb_advanced.jpg"],
  },
};

const courseData = {
  "title": "Certified Tester AI Testing (CT-AI) v2.0 Certification Training",
  "subtitle": "Master Testing of AI Systems, Machine Learning Models, and Generative AI Applications",
  "backgroundImage": "/istqb_advanced.jpg",
  "overview": [
    "The ISTQB® Certified Tester AI Testing (CT-AI) v2.0 certification is a specialist-level qualification designed for professionals who want to validate their expertise in testing AI-based systems, machine learning models, and generative AI applications.",
    "With AI rapidly transforming industries, traditional testing methods are no longer sufficient to validate probabilistic, data-driven, and self-learning systems. CT-AI v2.0 addresses these challenges by providing a structured, lifecycle-based approach to testing AI systems.",
    "The latest version of the syllabus introduces a modernized and streamlined structure focused on real-world AI systems, including:",
    "Machine Learning (ML) systems",
    "Deep learning models",
    "Generative AI and Large Language Models (LLMs)",
    "Data-driven system validation",
    "AI quality characteristics and risks",
    "AI-specific testing techniques such as metamorphic testing and red teaming",
    "Unlike traditional software testing, AI testing requires validating data quality, model behaviour, bias, explainability, robustness, and statistical correctness, all of which are covered in this certification.",
    "This certification is ideal for testers who want to stay relevant in the era of AI-driven software systems and expand their career into advanced quality engineering roles."
  ],
  "whyHead": "Why Choose ISTQB® CT-AI v2.0?",
  "why": [
    "Gain specialized expertise in AI system testing",
    "Understand machine learning lifecycle validation",
    "Learn how to test generative AI and LLM-based systems",
    "Master AI-specific testing techniques and strategies",
    "Improve ability to detect bias, drift, and model failures",
    "Understand AI risk, governance, and compliance requirements",
    "Stay future-ready in AI-driven quality engineering roles"
  ],
  "prerequisites": [
    "Mandatory: ISTQB® Certified Tester Foundation Level (CTFL)",
    "Recommended:",
    "Basic understanding of software testing",
    "Familiarity with AI / ML concepts (not mandatory)",
    "Experience in QA, development, or data-related roles"
  ],
  "whoShouldAttend": [
    "Software Test Engineers",
    "QA Engineers",
    "Test Analysts",
    "Automation Test Engineers",
    "AI/ML Test Engineers",
    "Data Analysts involved in testing",
    "Developers working on AI systems",
    "Test Managers Quality Engineers",
    "Product Owners in AI-driven teams",
    "anyone working with AI-based applications"
  ],
  "curriculum": [
    {
      "title": "Module 1: Introduction to AI-Based Systems",
      "topics": [
        "What is Artificial Intelligence?",
        "Machine Learning fundamentals",
        "Differences between traditional and AI systems",
        "AI system lifecycle overview",
        "AI risks and challenges in testing"
      ]
    },
    {
      "title": "Module 2: Quality Characteristics of AI Systems",
      "topics": [
        "Functional vs non-functional AI quality",
        "AI-specific quality attributes:",
        "Accuracy",
        "Robustness",
        "Fairness",
        "Explainability",
        "Bias in AI systems",
        "Trustworthiness and ethics"
      ]
    },
    {
      "title": "Module 3: Machine Learning Fundamentals for Testers",
      "topics": [
        "Supervised, unsupervised, and reinforcement learning",
        "Training, validation, and test datasets",
        "Model training lifecycle",
        "Performance metrics (accuracy, precision, recall, F1-score)",
        "Overfitting and underfitting"
      ]
    },
    {
      "title": "Module 4: Testing ML Data Pipelines",
      "topics": [
        "Data quality testing",
        "Data bias detection",
        "Data completeness and correctness",
        "Data labelling validation",
        "Data drift and data leakage risks"
      ]
    },
    {
      "title": "Module 5: Testing Machine Learning Models",
      "topics": [
        "Model validation techniques",
        "Metamorphic testing",
        "Back-to-back testing",
        "Adversarial testing",
        "Model drift detection",
        "Statistical testing approaches"
      ]
    },
    {
      "title": "Module 6: Testing AI System Integration",
      "topics": [
        "System-level AI testing",
        "API testing for AI systems",
        "End-to-end validation",
        "AI system performance testing",
        "Real-world scenario testing"
      ]
    },
    {
      "title": "Module 7: Generative AI & LLM Testing",
      "topics": [
        "Introduction to Generative AI systems",
        "Testing Large Language Models (LLMs)",
        "Prompt-based testing techniques",
        "Hallucination detection",
        "Red teaming for AI systems",
        "Safety and ethical testing"
      ]
    },
    {
      "title": "Module 8: AI Testing Strategies & Risk Management",
      "topics": [
        "Risk-based AI testing",
        "AI system failure modes",
        "Validation of AI decision-making systems",
        "Explainability testing",
        "Regulatory and compliance considerations (AI governance)"
      ]
    },
    {
      "title": "Skills You'll Gain",
      "topics": [
        "After completing this course, participants will be able to:",
        "Test AI-based and machine learning systems effectively",
        "Design test strategies for AI-driven applications",
        "Validate data quality and model performance",
        "Detect bias, drift, and anomalies in AI systems",
        "Perform generative AI and LLM testing",
        "Apply AI-specific testing techniques",
        "Improve AI system reliability and trustworthiness"
      ]
    }
  ],
  "learningOutcomes": [
    "Understand AI system architecture and behaviour",
    "Apply structured techniques for AI testing",
    "Evaluate ML models using statistical methods",
    "Test data pipelines and AI training datasets",
    "Identify risks in AI-based applications",
    "Validate generative AI outputs for correctness and safety",
    "Contribute to AI quality engineering initiatives"
  ],
  "certificationHeading": "Certification Exam Information",
  "certification": [
    {
      "label": "Certification",
      "value": "ISTQB® Certified Tester AI Testing (CT-AI) v2.0"
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
      "value": "65%"
    },
    {
      "label": "Prerequisite",
      "value": "ISTQB CTFL certification"
    },
    {
      "label": "Certification Body",
      "value": "ISTQB® International Software Testing Qualifications Board"
    },
    {
      "label": "Delivery",
      "value": "Online / Authorized exam provider"
    }
  ],
  "courseHighlights": [
    "Latest ISTQB® CT-AI v2.0 syllabus (2026 update)",
    "Focus on real-world AI testing scenarios",
    "Deep coverage of ML systems and generative AI",
    "Case studies on AI failures and risk analysis",
    "Hands-on exercises in AI test design approaches",
    "Exam-oriented preparation and mock tests",
    "Expert-led interactive training sessions"
  ],
  "disclaimer": "ISTQB®, Certified Tester AI Testing (CT-AI)®, and all related terms are trademarks of the International Software Testing Qualifications Board (ISTQB®). QuickLearn Systems is an independent training provider and is not affiliated with or endorsed by ISTQB®. All trademarks are acknowledged as the property of their respective owners."
};

export default function CTAIPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
