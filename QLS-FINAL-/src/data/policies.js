// Single source of truth for the four legal/policy pages.
// Content transcribed from the approved policy documents.
// Update the copy here — the pages under /src/app render straight from it.

export const POLICY_EFFECTIVE_DATE = "13 August 2026";

export const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const privacyPolicy = {
  slug: "/privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | QuickLearn Systems",
  metaDescription:
    "How QuickLearn Systems collects, uses, stores, and protects your personal information when you visit our website or register for our training programs.",
  intro: [
    "At QuickLearn Systems, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, register for our training programs, or interact with our services.",
    "By using our website, you agree to the collection and use of information in accordance with this Privacy Policy.",
  ],
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: ["We may collect the following types of information:"],
      subsections: [
        {
          heading: "Personal Information",
          paragraphs: [
            "When you register for a course, submit an enquiry, or contact us, we may collect:",
          ],
          bullets: [
            "Full Name",
            "Email Address",
            "Mobile Number",
            "Company Name",
            "Job Title",
            "Professional Experience",
            "Country/Location",
          ],
        },
        {
          heading: "Course & Learning Information",
          paragraphs: ["We may collect information related to:"],
          bullets: [
            "Course registrations",
            "Training attendance",
            "Learning progress",
            "Certification details (where applicable)",
            "Feedback and survey responses",
          ],
        },
        {
          heading: "Payment Information",
          paragraphs: [
            "Payments are processed securely through trusted third-party payment gateways. QuickLearn Systems does not store your debit card, credit card, or banking information on our servers.",
          ],
        },
        {
          heading: "Website Usage Information",
          paragraphs: ["When you browse our website, we may automatically collect:"],
          bullets: [
            "IP Address",
            "Browser Type",
            "Device Information",
            "Operating System",
            "Pages Visited",
            "Time Spent on Website",
            "Cookies and Similar Technologies",
          ],
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: ["We use your information to:"],
      bullets: [
        "Deliver training programs and certification services",
        "Process course registrations and payments",
        "Provide customer support",
        "Share course schedules and training updates",
        "Send invoices, receipts, and enrolment confirmations",
        "Improve our website, services, and user experience",
        "Respond to enquiries and feedback",
        "Inform you about new courses, webinars, events, and promotional offers (you may opt out at any time)",
        "Meet legal and regulatory requirements",
      ],
    },
    {
      heading: "Information Sharing",
      paragraphs: [
        "Your privacy is important to us. QuickLearn Systems does not sell, rent, or trade your personal information to third parties.",
        "We may share information only in the following situations:",
      ],
      bullets: [
        "With accredited certification partners or examination bodies for certification processing (where applicable)",
        "With trusted third-party service providers who assist in delivering our services (payment gateways, email providers, learning platforms, etc.)",
        "When required by law or government authorities",
        "To protect the rights, safety, or property of QuickLearn Systems and its users",
      ],
      footnote:
        "All third-party partners are expected to maintain appropriate confidentiality and security standards.",
    },
    {
      heading: "Cookies",
      paragraphs: ["Our website may use cookies and similar technologies to:"],
      bullets: [
        "Improve website performance",
        "Remember your preferences",
        "Analyse website traffic",
        "Enhance your browsing experience",
      ],
      footnote:
        "You may disable cookies through your browser settings; however, some website features may not function properly.",
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, misuse, alteration, disclosure, or destruction.",
        "While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet or electronic storage is completely secure.",
      ],
    },
    {
      heading: "Data Retention",
      paragraphs: ["We retain your information only for as long as necessary to:"],
      bullets: [
        "Provide our services",
        "Maintain training records",
        "Comply with legal and regulatory obligations",
        "Resolve disputes and enforce agreements",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: ["Subject to applicable laws, you have the right to:"],
      bullets: [
        "Access your personal information",
        "Correct inaccurate or incomplete information",
        "Request deletion of your personal information",
        "Withdraw consent for marketing communications",
        "Request a copy of your personal data",
        "Raise concerns regarding the processing of your information",
      ],
      footnote: "To exercise these rights, please contact us using the details below.",
    },
    {
      heading: "Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites. QuickLearn Systems is not responsible for the privacy practices or content of those websites. We encourage users to review the privacy policies of external websites before providing personal information.",
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      paragraphs: [
        "QuickLearn Systems reserves the right to update or modify this Privacy Policy at any time to reflect changes in our services, legal requirements, or business practices.",
        "Any updates will be posted on this page along with the revised effective date.",
      ],
    },
  ],
  contactIntro:
    "If you have any questions or concerns regarding this Privacy Policy or how we handle your personal information, please contact us:",
};

export const termsConditions = {
  slug: "/terms-conditions",
  title: "Terms & Conditions",
  metaTitle: "Terms & Conditions | QuickLearn Systems",
  metaDescription:
    "The terms governing your use of the QuickLearn Systems website, course registrations, payments, certification training, and services.",
  numbered: true,
  intro: [
    "Welcome to QuickLearn Systems. By accessing our website, registering for our training programs, or using our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our website or enrolling in any course.",
  ],
  sections: [
    {
      heading: "Acceptance of Terms",
      paragraphs: [
        "By accessing or using the QuickLearn Systems website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.",
      ],
    },
    {
      heading: "Our Services",
      paragraphs: [
        "QuickLearn Systems provides professional training and certification programs, including:",
      ],
      bullets: [
        "Live Online Instructor-Led Training",
        "Classroom Training",
        "E-Learning Courses",
        "Corporate Training",
        "Customized Learning Solutions",
        "Certification Preparation Programs",
      ],
      footnote:
        "Course availability, schedules, fees, and content are subject to change without prior notice.",
    },
    {
      heading: "Registration & Account Responsibility",
      paragraphs: ["When registering for a course, you agree to:"],
      bullets: [
        "Provide accurate and complete information.",
        "Keep your contact details up to date.",
        "Maintain the confidentiality of your account credentials.",
        "Be responsible for all activities conducted through your account.",
      ],
      footnote:
        "QuickLearn Systems reserves the right to suspend or terminate accounts containing false or misleading information.",
    },
    {
      heading: "Payments",
      bullets: [
        "Course fees must be paid before the commencement of the training unless otherwise agreed.",
        "Payments are processed securely through authorized third-party payment providers.",
        "All applicable taxes will be charged as per government regulations.",
        "Invoices and payment confirmations will be shared electronically.",
      ],
    },
    {
      heading: "Training & Certification",
      bullets: [
        "Course completion does not automatically guarantee certification.",
        "Participants are responsible for meeting the requirements of the respective certification body.",
        "Certification exams are conducted according to the policies of the relevant accreditation or examination organization.",
        "QuickLearn Systems provides training and guidance but does not control examination results or certification decisions made by third-party certification bodies.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "All training materials, presentations, videos, course content, documents, logos, trademarks, and website content are the intellectual property of QuickLearn Systems or their respective owners.",
        "Participants may use the materials only for personal learning purposes and may not:",
      ],
      bullets: [
        "Copy or reproduce materials",
        "Share training recordings",
        "Distribute course content",
        "Sell or commercially use any material without prior written permission",
      ],
    },
    {
      heading: "Code of Conduct",
      paragraphs: [
        "Participants are expected to maintain a professional and respectful learning environment.",
        "QuickLearn Systems reserves the right to remove any participant from a training program without refund in cases of:",
      ],
      bullets: [
        "Disruptive behaviour",
        "Harassment or abuse",
        "Misuse of training materials",
        "Violation of these Terms & Conditions",
      ],
    },
    {
      heading: "Cancellation & Refunds",
      paragraphs: [
        "Refunds, cancellations, and rescheduling requests are governed by our Refund & Cancellation Policy.",
        "Participants are advised to review the policy before enrolling in any course.",
      ],
      link: { href: "/refund-policy", label: "Read the Refund & Cancellation Policy" },
    },
    {
      heading: "Website Usage",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Attempt unauthorized access to our systems.",
        "Introduce malicious software or viruses.",
        "Copy website content without permission.",
        "Use the website for unlawful purposes.",
        "Interfere with the operation or security of the website.",
      ],
    },
    {
      heading: "Third-Party Services",
      paragraphs: [
        "Our website may include links to third-party websites, payment gateways, certification providers, or learning platforms.",
        "QuickLearn Systems is not responsible for the content, privacy practices, or services offered by these third-party websites.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "While we strive to provide accurate information and high-quality training, QuickLearn Systems shall not be liable for:",
      ],
      bullets: [
        "Technical interruptions or website downtime",
        "Delays caused by third-party service providers",
        "Individual examination outcomes",
        "Career or employment decisions made by employers",
        "Any indirect, incidental, or consequential damages arising from the use of our services",
      ],
      footnote:
        "Our liability, where applicable, shall not exceed the amount paid by the participant for the specific training program.",
    },
    {
      heading: "Privacy",
      paragraphs: [
        "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
      ],
      link: { href: "/privacy-policy", label: "Read the Privacy Policy" },
    },
    {
      heading: "Changes to Terms",
      paragraphs: [
        "QuickLearn Systems reserves the right to update or modify these Terms & Conditions at any time.",
        "Any changes will become effective immediately upon publication on this website.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
        "Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.",
      ],
    },
  ],
  contactIntro: "If you have any questions regarding these Terms & Conditions, please contact us:",
};

export const refundPolicy = {
  slug: "/refund-policy",
  title: "Refund & Cancellation Policy",
  metaTitle: "Refund & Cancellation Policy | QuickLearn Systems",
  metaDescription:
    "Terms governing course registrations, cancellations, batch transfers, and refunds for QuickLearn Systems training programs.",
  numbered: true,
  intro: [
    "At QuickLearn Systems, we are committed to delivering high-quality training and an exceptional learning experience. This Refund & Cancellation Policy outlines the terms governing course registrations, cancellations, transfers, and refunds.",
    "By registering for any of our training programs, you agree to the terms outlined below.",
  ],
  sections: [
    {
      heading: "Course Registration",
      paragraphs: ["Your seat is confirmed only after:"],
      bullets: [
        "Successful payment of the applicable course fee, and",
        "Receipt of an official confirmation email from QuickLearn Systems.",
      ],
      footnote: "Seats are allotted on a first-come, first-served basis.",
    },
    {
      heading: "Cancellation by the Participant",
      table: {
        head: ["When you cancel", "What you receive"],
        rows: [
          [
            "10 or more days before the training",
            "Full refund, after deducting any applicable payment gateway or administrative charges.",
          ],
          ["Between 5 and 9 days before the training", "50% refund of the course fee."],
          [
            "Less than 5 days before the training",
            "No refund. Participants may request a one-time transfer to a future batch (subject to availability and approval).",
          ],
        ],
      },
    },
    {
      heading: "Batch Rescheduling",
      paragraphs: ["If you are unable to attend your registered batch:"],
      bullets: [
        "You may request a transfer to another available batch before the course begins.",
        "Requests are subject to seat availability and management approval.",
        "One complimentary batch transfer may be permitted. Additional transfers may incur administrative charges.",
      ],
    },
    {
      heading: "No-Show Policy",
      paragraphs: [
        "Participants who do not attend the training without prior notice will be considered No Shows.",
        "No refund or batch transfer will be provided for no-show registrations.",
      ],
    },
    {
      heading: "Cancellation by QuickLearn Systems",
      paragraphs: [
        "QuickLearn Systems reserves the right to postpone, reschedule, or cancel a training program due to circumstances such as:",
      ],
      bullets: [
        "Insufficient registrations",
        "Trainer unavailability",
        "Technical issues",
        "Force majeure events",
        "Any unforeseen circumstances beyond our control",
      ],
      trailingParagraphs: ["In such cases, participants may choose one of the following:"],
      trailingBullets: [
        "Transfer to the next available batch",
        "Enroll in another course of equal value",
        "Receive a full refund of the amount paid",
      ],
    },
    {
      heading: "Certification Exam Fees",
      paragraphs: ["Where applicable:"],
      bullets: [
        "Certification exam vouchers issued by third-party certification bodies are generally non-refundable and non-transferable once purchased or issued.",
        "Voucher validity, rescheduling, and cancellation are governed by the respective certification provider's policies.",
      ],
    },
    {
      heading: "Corporate Training",
      paragraphs: [
        "Corporate training engagements are governed by the terms specified in the respective proposal, quotation, purchase order, or service agreement.",
        "Cancellation or rescheduling terms may vary based on contractual commitments.",
      ],
    },
    {
      heading: "Refund Processing",
      paragraphs: [
        "Approved refunds will be processed within 7–10 business days through the original payment method.",
        "Processing times may vary depending on the payment gateway or banking institution.",
      ],
    },
    {
      heading: "Exceptional Circumstances",
      paragraphs: [
        "QuickLearn Systems may consider refund or transfer requests outside this policy under exceptional circumstances at its sole discretion.",
        "Supporting documentation may be required.",
      ],
    },
  ],
  contactIntro:
    "For any cancellation, refund, or rescheduling requests, please contact us:",
};

export const disclaimerPolicy = {
  slug: "/disclaimer",
  title: "Disclaimer",
  metaTitle: "Disclaimer | QuickLearn Systems",
  metaDescription:
    "Terms covering the accuracy of information, training and certification outcomes, third-party links, liability, and intellectual property on the QuickLearn Systems website.",
  intro: [
    "The information provided on the QuickLearn Systems website is for general informational and educational purposes only. While we strive to ensure that all information is accurate, current, and reliable, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or suitability of the information, services, or materials available on this Website.",
    "By accessing and using this Website, you acknowledge and agree to the terms of this Disclaimer.",
  ],
  sections: [
    {
      heading: "Training & Certification Disclaimer",
      paragraphs: [
        "QuickLearn Systems provides professional training programs designed to help individuals and organizations develop their knowledge, skills, and competencies.",
        "Where certification exams are offered, the certification is awarded solely by the respective certification or accreditation body. QuickLearn Systems acts as a training provider and, where applicable, partners with accredited organizations to facilitate certification.",
        "Completion of a training program does not guarantee certification or examination success. Certification outcomes depend on the participant's preparation, performance, and the policies of the respective certification provider.",
      ],
    },
    {
      heading: "Accuracy of Information",
      paragraphs: [
        "We make every effort to keep the information on this Website accurate and up to date. However, course content, schedules, trainers, pricing, certification details, and other information may change without prior notice.",
        "Users are encouraged to contact QuickLearn Systems directly for the latest information before making any enrolment or business decisions.",
      ],
    },
    {
      heading: "Professional Advice",
      paragraphs: [
        "The information provided through our website, training programs, webinars, blogs, and learning materials is intended for educational purposes only.",
        "It should not be considered professional, legal, financial, or career advice. Participants are encouraged to seek appropriate professional guidance where necessary.",
      ],
    },
    {
      heading: "Trademarks",
      paragraphs: [
        "All trademarks, certification names, service marks, and logos referenced on this Website are the property of their respective owners and are used solely for identification and informational purposes. Their use does not imply any affiliation with or endorsement by the respective owners unless expressly stated.",
        "Any potential trademark, copyright, or content-related concerns may be reported to training@quicklearnsys.com for review and correction.",
      ],
    },
    {
      heading: "Third-Party Links",
      paragraphs: [
        "This Website may contain links to third-party websites, certification bodies, payment gateways, or external resources for your convenience.",
        "QuickLearn Systems does not control or endorse the content, policies, or practices of these third-party websites and is not responsible for any information, products, or services provided by them.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, QuickLearn Systems shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:",
      ],
      bullets: [
        "Use or inability to use this Website",
        "Reliance on information published on this Website",
        "Technical interruptions or website downtime",
        "Errors or omissions in website content",
        "Third-party services or external websites",
        "Examination outcomes or certification decisions made by external certification bodies",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "All content available on this Website, including text, graphics, logos, course materials, images, videos, and other intellectual property, is owned by or licensed to QuickLearn Systems unless otherwise stated.",
        "No content may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission from QuickLearn Systems.",
      ],
    },
    {
      heading: "Changes to This Disclaimer",
      paragraphs: [
        "QuickLearn Systems reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will become effective immediately upon publication on this Website.",
      ],
    },
  ],
  contactIntro: "If you have any questions regarding this Disclaimer, please contact us:",
};
