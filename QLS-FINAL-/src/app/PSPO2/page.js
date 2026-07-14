import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner II (PSPO II) Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Professional Scrum Product Owner II (PSPO II) certification training in Hyderabad. QuickLearn Systems offers expert-led PSPO II training covering advanced product ownership, stakeholder management, and value-driven delivery. Enroll today!",
  keywords:
    "PSPO II training Hyderabad, Professional Scrum Product Owner 2 certification Hyderabad, best Scrum training institute Hyderabad, PSPO II course Hyderabad, Scrum Product Owner training India, PSPO II, Professional Scrum Product Owner 2, advanced Product Owner certification, Scrum Product Owner training, Agile product strategy, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Professional Scrum Product Owner II (PSPO II) Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PSPO II certification training in Hyderabad by QuickLearn Systems",
    images: ["/professional_scrum_product_owner_2.jpg"],
  },
};

const courseData = {
  "title": "Professional Scrum Product Owner™ II (PSPO II) Certification Training",
  "subtitle": "Strengthen Strategic Product Leadership with Advanced Product Ownership Techniques",
  "backgroundImage": "/professional_scrum_product_owner_2.jpg",
  "overview": [
    "Professional Scrum Product Owner™ II (PSPO II) is an advanced course for experienced Product Owners seeking to enhance their ability to manage products, maximize value, and drive product strategy in complex environments.",
    "The course emphasizes strategic thinking, stakeholder engagement, evidence-based decision-making, and advanced product management techniques."
  ],
  "whyHead": "Why Choose This Course?",
  "why": [
    "Advance your Product Owner skills beyond the fundamentals",
    "Learn how to maximize product value in complex environments",
    "Strengthen your ability to define and communicate product strategy",
    "Improve stakeholder engagement, influence, and negotiation skills",
    "Apply Evidence-Based Management to make better product decisions",
    "Gain practical techniques for product discovery, validation, and learning",
    "Prepare for the PSPO II certification with scenario-based learning",
    "Build confidence in leading product initiatives across multiple teams and stakeholders"
  ],
  "prerequisites": [
    "Strong understanding of Scrum",
    "Practical experience working as a Product Owner or in a product leadership role",
    "PSPO I certification is strongly recommended",
    "Familiarity with product strategy, stakeholder management, and product metrics"
  ],
  "whoShouldAttend": [
    "Experienced Product Owners",
    "Product Managers",
    "Product Leaders",
    "Portfolio Managers",
    "Business Owners",
    "Agile Leaders"
  ],
  "curriculum": [
    {
      "title": "Advanced Product Ownership",
      "topics": [
        "Product Strategy",
        "Vision and Outcomes",
        "Value Optimization",
        "Product Economics"
      ]
    },
    {
      "title": "Stakeholder Management",
      "topics": [
        "Stakeholder Engagement",
        "Negotiation",
        "Influence",
        "Managing Expectations"
      ]
    },
    {
      "title": "Evidence-Based Management",
      "topics": [
        "Key Value Areas",
        "Product Metrics",
        "Outcome Measurement",
        "Experimentation"
      ]
    },
    {
      "title": "Product Discovery & Validation",
      "topics": [
        "Customer Research",
        "Hypothesis Testing",
        "Innovation",
        "Product Learning"
      ]
    },
    {
      "title": "Scaling Product Ownership",
      "topics": [
        "Multiple Teams",
        "Complex Products",
        "Organizational Alignment",
        "Strategic Road mapping"
      ]
    }
  ],
  "learningOutcomes": [
    "Drive product strategy effectively",
    "Maximize value delivery",
    "Apply Evidence-Based Management",
    "Influence stakeholders successfully",
    "Validate product assumptions",
    "Lead product initiatives in complex environments"
  ],
  "certificationHeading": "Certification & Exam Details",
  "certification": [
    {
      "label": "",
      "value": "Certification Exam"
    },
    {
      "label": "Certification",
      "value": "Professional Scrum Product Owner™ II (PSPO II)"
    },
    {
      "label": "Questions",
      "value": "40"
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
    "Advanced PSPO II certification training",
    "Focus on product strategy, value optimization, and stakeholder management",
    "Evidence-Based Management and product metrics coverage",
    "Product discovery, experimentation, and validation techniques",
    "Scaling product ownership across multiple teams and complex products",
    "Scenario-based learning and practical exercises",
    "Designed for experienced Product Owners and product leaders",
    "Online delivery with flexible learning options"
  ],
  "disclaimer": "Professional Scrum™, PSM™, PSPO™, Scrum.org™, and related marks are trademarks of Scrum.org. All other trademarks, service marks, registered trademarks, product names, and company names mentioned are the property of their respective owners. training@quicklearnsys.com for review and correction."
};

export default function ProfessionalScrumProductOwner2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
