import Link from "next/link";

// Footer SEO course listing — grouped to match the site's course categories.
const LISTINGS = [
  {
    category: "IT Service Management",
    courses: [
      { name: "ITIL® 4 Foundation", href: "/itil-4-foundation-certification-training" },
      { name: "ITIL® 4 Practice Manager", href: "/itil-4-practice-manager-pm-certification-training" },
      { name: "ITIL® 4 Specialist: Monitor, Support & Fulfil", href: "/itil-4-specialist-monitor-support-fulfil-msf-training" },
      { name: "ITIL® 4 Specialist: Plan, Implement & Control", href: "/itil-4-specialist-plan-implement-control-pic-training" },
      { name: "ITIL® 4 Specialist: Collaborate, Assure & Improve", href: "/itil-4-specialist-collaborate-assure-improve-cai-training" },
      { name: "ITIL® 4 Managing Professional", href: "/itil-4-managing-professional-mp-certification-training" },
      { name: "ITIL® 4 Specialist: Create, Deliver & Support", href: "/itil-4-specialist-create-deliver-support-cds-training" },
      { name: "ITIL® 4 Specialist: Drive Stakeholder Value", href: "/itil-4-specialist-drive-stakeholder-value-dsv-training" },
      { name: "ITIL® 4 Specialist: High Velocity IT", href: "/itil-4-specialist-high-velocity-it-hvit-training" },
      { name: "ITIL® 4 Strategist: Direct, Plan & Improve", href: "/itil-4-strategist-direct-plan-improve-dpi-training" },
      { name: "ITIL® 4 Strategic Leader", href: "/itil-4-strategic-leader-sl-certification-training" },
      { name: "ITIL® 4 Leader: Digital & IT Strategy", href: "/itil-4-leader-digital-it-strategy-dits-training" },
      { name: "ITIL® V5 Foundation", href: "/itil-v5-foundation-certification-training" },
      { name: "ITIL® V5 Foundation Bridge", href: "/itil-v5-foundation-bridge-certification-training" },
      { name: "ITIL® V5 Managing Professional", href: "/itil-v5-managing-professional-transition-training" },
      { name: "ITIL® Product", href: "/itil-v5-product-certification-training" },
      { name: "ITIL® Service", href: "/itil-v5-service-certification-training" },
      { name: "ITIL® Experience", href: "/itil-v5-experience-certification-training" },
      { name: "ITIL® V5 Strategic Leader", href: "/itil-v5-strategic-leader-certification-training" },
      { name: "ITIL® Strategy", href: "/itil-v5-strategy-certification-training" },
      { name: "ITIL® V5 Transformation", href: "/itil-v5-transformation-certification-training" },
      { name: "ITIL® V5 AI Governance", href: "/itil-v5-ai-governance-certification-training" },
      { name: "ITIL® V5 Master", href: "/itil-v5-master-certification-training" },
      { name: "SIAM Foundation", href: "/siam-foundation-certification-training" },
      { name: "SIAM Practitioner", href: "/siam-professional-certification-training" },
      { name: "Acquiring & Managing Cloud Services", href: "/itil-4-acquiring-managing-cloud-services-training" },
      { name: "Sustainability in Digital & AI", href: "/itil-4-sustainability-in-digital-it-training" },
      { name: "Business Relationship Management", href: "/itil-business-relationship-management-training" },
      { name: "IT Asset Management", href: "/itil-it-asset-management-itam-certification-training" },
      { name: "Service Desk", href: "/itil-service-desk-certification-training" },
      { name: "Incident Management", href: "/itil-incident-management-certification-training" },
      { name: "Problem Management", href: "/itil-problem-management-certification-training" },
      { name: "Service Request Management", href: "/itil-service-request-management-training" },
      { name: "Monitoring & Event Management", href: "/itil-monitoring-event-management-training" },
      { name: "Change Enablement", href: "/itil-change-enablement-certification-training" },
      { name: "Release Management", href: "/itil-release-management-certification-training" },
      { name: "Service Configuration Management", href: "/itil-service-configuration-management-training" },
      { name: "Deployment Management", href: "/itil-deployment-management-certification-training" },
      { name: "Continual Improvement", href: "/itil-continual-improvement-certification-training" },
      { name: "Relationship Management", href: "/itil-relationship-management-certification-training" },
      { name: "Service Level Management", href: "/itil-service-level-management-training" },
      { name: "Information Security Management", href: "/itil-information-security-management-training" },
      { name: "Supplier Management", href: "/itil-supplier-management-certification-training" },
    ],
  },
  {
    category: "Project & Program Management",
    courses: [
      { name: "PMP Certification Training", href: "/pmp-certification-training" },
      { name: "PMI-ACP Certification Training", href: "/pmi-acp-agile-certified-practitioner-training" },
      { name: "PRINCE2 Foundation Training", href: "/prince2-foundation-certification-training" },
      { name: "PRINCE2 Practitioner Training", href: "/prince2-practitioner-certification-training" },
      { name: "PRINCE2 Agile Foundation", href: "/prince2-agile-foundation-certification-training" },
      { name: "PRINCE2 Agile Practitioner", href: "/prince2-agile-practitioner-certification-training" },
      { name: "MSP Foundation Training", href: "/msp-foundation-certification-training" },
      { name: "MSP Practitioner Training", href: "/msp-practitioner-certification-training" },
    ],
  },
  {
    category: "Agile, Scrum & Kanban",
    courses: [
      { name: "AI-Empowered Leading SAFe Agilist 6", href: "/leading-safe-agilist-certification-training" },
      { name: "AI-Empowered SAFe POPM 6", href: "/safe-product-owner-product-manager-popm-training" },
      { name: "AI-Empowered SAFe Scrum Master 6", href: "/safe-scrum-master-ssm-certification-training" },
      { name: "AI-Empowered SAFe Advanced Scrum Master 6", href: "/safe-advanced-scrum-master-sasm-certification-training" },
      { name: "Professional Scrum Master I (PSM I)", href: "/professional-scrum-master-i-psm-i-certification-training" },
      { name: "Professional Scrum Master II (PSM II)", href: "/professional-scrum-master-ii-psm-ii-certification-training" },
      { name: "Professional Scrum Master – AI Essentials (PSM-AIE)", href: "/professional-scrum-master-ai-essentials-psm-aie-training" },
      { name: "Professional Scrum Product Owner I (PSPO I)", href: "/professional-scrum-product-owner-i-pspo-i-training" },
      { name: "Professional Scrum Product Owner II (PSPO II)", href: "/professional-scrum-product-owner-ii-pspo-ii-training" },
      { name: "Professional Scrum Product Owner – AI Essentials (PSPO-AIE)", href: "/professional-scrum-product-owner-ai-essentials-pspo-aie-training" },
      { name: "Professional Scrum with Kanban (PSK)", href: "/professional-scrum-with-kanban-psk-certification-training" },
      { name: "Certified Scrum Master (CSM)", href: "/certified-scrummaster-csm-certification-training" },
      { name: "Certified Scrum Product Owner (CSPO)", href: "/certified-scrum-product-owner-cspo-certification-training" },
      { name: "ICP-ACC Agile Coaching", href: "/icagile-agile-coaching-icp-acc-certification-training" },
    ],
  },
  {
    category: "DevOps & SRE",
    courses: [
      { name: "DevOps Foundation Certification Training", href: "/devops-foundation-certification-training" },
      { name: "AIOps Foundation Certification Training", href: "/aiops-foundation-certification-training" },
      { name: "DevSecOps Foundation Certification Training", href: "/devsecops-foundation-certification-training" },
      { name: "DevSecOps Practitioner Certification Training", href: "/devsecops-practitioner-certification-training" },
      { name: "SRE Foundation Training", href: "/sre-foundation-certification-training" },
      { name: "SRE Practitioner Training", href: "/sre-practitioner-certification-training" },
    ],
  },
  {
    category: "Business Analysis",
    courses: [
      { name: "Business Analysis Foundation", href: "/business-analysis-foundation-certification-training" },
      { name: "Business Analysis Practice", href: "/business-analysis-practitioner-certification-training" },
    ],
  },
  {
    category: "Lean & Quality Management",
    courses: [
      { name: "Lean Six Sigma Green Belt Training & Certification", href: "/lean-six-sigma-green-belt-certification-training" },
      { name: "Lean Six Sigma Black Belt Training & Certification", href: "/lean-six-sigma-black-belt-certification-training" },
    ],
  },
  {
    category: "Software Testing",
    courses: [
      { name: "Certified Tester Foundation Level (CTFL)", href: "/istqb-foundation-level-ctfl-certification-training" },
      { name: "Certified Tester AI Testing (CT-AI)", href: "/istqb-certified-tester-ai-testing-ct-ai-training" },
      { name: "Certified Tester Advanced Level Agile Tester (CTAL-AT)", href: "/istqb-advanced-level-agile-tester-ctal-at-training" },
      { name: "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)", href: "/istqb-advanced-test-automation-engineering-ctal-tae-training" },
      { name: "Certified Tester Advanced Level Test Management (CTAL-TM)", href: "/istqb-advanced-level-test-management-ctal-tm-training" },
    ],
  },
];

export default function CourseListings() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-bold text-gray-800 mb-5 uppercase tracking-wide">
          Course Listings
        </h3>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          {LISTINGS.map((group) => (
            <p key={group.category}>
              <span className="font-bold text-gray-900">{group.category}: </span>
              {group.courses.map((course, i) => (
                <span key={course.href}>
                  <Link href={course.href} className="hover:text-[#1E7BA3] hover:underline">
                    {course.name}
                  </Link>
                  {i < group.courses.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
