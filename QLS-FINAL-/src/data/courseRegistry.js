export const COURSE_GROUPS = [
  {
    group: "IT Service Management",
    options: [
      "ITIL® 4 Foundation",
      "ITIL® 4 Practice Manager",
      "MSF - Monitor, Support and Fulfil",
      "PIC - Plan, Implement and Control",
      "CAI - Collaborate, Assure and Improve",
      "ITIL® 4 Specialist Create, Deliver and Support",
      "ITIL® 4 Specialist Drive Stakeholder Value",
      "ITIL® 4 Specialist High Velocity IT",
      "ITIL® 4 Strategist Direct Plan & Improve",
      "ITIL® 4 Specialist - Acquiring And Managing Cloud Service",
      "ITIL® 4 Specialist - Sustainability In Digital and IT",
      "ITIL® 4 Specialist - Business Relationship Management",
      "ITIL® 4 Specialist - IT Asset Management",
      "ITIL® 4 Specialist - Monitor, Support and Fulfil",
      "ITIL® 4 Strategist Digital IT & Services",
      "SIAM Foundation",
      "SIAM Professional",
    ],
  },
  {
    group: "Project & Program Management",
    options: [
      "PMP",
      "ACP",
      "Prince2 Foundation",
      "Prince2 Practitioner",
      "Prince2 Agile Foundation",
      "Prince2 Agile Practitioner",
      "MSP Foundation",
      "MSP Practitioner",
    ],
  },
  {
    group: "Agile, Scrum & Kanban",
    options: [
      "Leading SAFe Agilist",
      "SAFe PO/PM",
      "SAFe for Teams",
      "SAFe Scrum Master",
      "SAFe Advanced Scrum Master",
      "Professional Scrum Master I (PSM I)",
      "Professional Scrum Master II (PSM II)",
      "Professional Scrum Product Owner I (PSPO I)",
      "Professional Scrum Product Owner II (PSPO II)",
      "Professional Scrum with Kanban (PSK I)",
      "Certified Scrum Master",
      "Certified Advanced Scrum Master",
      "Certified Scrum Product Owner",
      "ICP-ACC",
    ],
  },
  {
    group: "Quality Management",
    options: [
      "Lean Six Sigma Green Belt",
      "Lean Six Sigma Black Belt",
    ],
  },
  {
    group: "DevOps & Business Analysis",
    options: [
      "SRE Foundation",
      "SRE Practitioner",
      "DevOps Foundation",
      "DevOps Master",
      "Business Analysis Foundation",
      "Business Analysis Practice",
      "Agile Business Analysis",
    ],
  },
  {
    group: "Software Testing",
    options: [
      "ISTQB Foundation",
      "ISTQB Advanced",
    ],
  },
];

// Flat list for contexts that just need option values
export const ALL_COURSES = COURSE_GROUPS.flatMap((g) => g.options);
