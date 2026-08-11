import Link from "next/link";

// Footer SEO course listing — grouped to match the site's course categories.
const LISTINGS = [
  {
    category: "IT Service Management",
    courses: [
      { name: "ITIL® 4 Foundation", href: "/ITL4Management" },
      { name: "ITIL® 4 Practice Manager", href: "/ITIL4PracticeManager" },
      { name: "ITIL® 4 Specialist: Monitor, Support & Fulfil", href: "/MonitorSupportFulfil" },
      { name: "ITIL® 4 Specialist: Plan, Implement & Control", href: "/PlanImplementControl" },
      { name: "ITIL® 4 Specialist: Collaborate, Assure & Improve", href: "/CollaborateAssureImprove" },
      { name: "ITIL® 4 Managing Professional", href: "/ITIL4ManagingProfessional" },
      { name: "ITIL® 4 Specialist: Create, Deliver & Support", href: "/ITL4SCDS" },
      { name: "ITIL® 4 Specialist: Drive Stakeholder Value", href: "/ITL4SDSV" },
      { name: "ITIL® 4 Specialist: High Velocity IT", href: "/ITL4SHVI" },
      { name: "ITIL® 4 Strategist: Direct, Plan & Improve", href: "/ITL4SDPI" },
      { name: "ITIL® 4 Strategic Leader", href: "/ITIL4StrategicLeader" },
      { name: "ITIL® 4 Leader: Digital & IT Strategy", href: "/DigitalItService" },
      { name: "ITIL® V5 Foundation", href: "/ITILFoundationV5" },
      { name: "ITIL® V5 Foundation Bridge", href: "/ITILFoundationBridgeV5" },
      { name: "ITIL® V5 Managing Professional", href: "/ITILManagingProfessionalTransitionV5" },
      { name: "ITIL® Product", href: "/ITILProductV5" },
      { name: "ITIL® Service", href: "/ITILServiceV5" },
      { name: "ITIL® Experience", href: "/ITILExperienceV5" },
      { name: "ITIL® V5 Strategic Leader", href: "/ITILStrategicLeaderV5" },
      { name: "ITIL® Strategy", href: "/ITILStrategyV5" },
      { name: "ITIL® V5 Transformation", href: "/ITILTransformationV5" },
      { name: "ITIL® V5 AI Governance", href: "/ITILAIGovernanceV5" },
      { name: "ITIL® V5 Master", href: "/ITILMasterV5" },
      { name: "SIAM Foundation", href: "/SIAMFoundation" },
      { name: "SIAM Practitioner", href: "/SIAMProfessional" },
      { name: "Acquiring & Managing Cloud Services", href: "/AcquiringAndManagingCS" },
      { name: "Sustainability in Digital & AI", href: "/SustainabilityInDigitalAI" },
      { name: "Business Relationship Management", href: "/BusinessRelationshipManage" },
      { name: "IT Asset Management", href: "/ItAssetManagement" },
      { name: "Service Desk", href: "/ServiceDesk" },
      { name: "Incident Management", href: "/IncidentManagement" },
      { name: "Problem Management", href: "/ProblemManagement" },
      { name: "Service Request Management", href: "/ServiceRequestManagement" },
      { name: "Monitoring & Event Management", href: "/MonitoringEventManagement" },
      { name: "Change Enablement", href: "/ChangeEnablement" },
      { name: "Release Management", href: "/ReleaseManagement" },
      { name: "Service Configuration Management", href: "/ServiceConfiguration" },
      { name: "Deployment Management", href: "/DeploymentManagement" },
      { name: "Continual Improvement", href: "/ContinuationImprovement" },
      { name: "Relationship Management", href: "/RelationshipManagement" },
      { name: "Service Level Management", href: "/ServiceLevelManagement" },
      { name: "Information Security Management", href: "/InformationSecurityMan" },
      { name: "Supplier Management", href: "/SupplierManagement" },
    ],
  },
  {
    category: "Project & Program Management",
    courses: [
      { name: "PMP Certification Training", href: "/PMP" },
      { name: "PMI-ACP Certification Training", href: "/PMIACP" },
      { name: "PRINCE2 Foundation Training", href: "/Prince2Foundation" },
      { name: "PRINCE2 Practitioner Training", href: "/Prince2Practitioner" },
      { name: "PRINCE2 Agile Foundation", href: "/Prince2AgileFoundation" },
      { name: "PRINCE2 Agile Practitioner", href: "/Prince2AgilePractitioner" },
      { name: "MSP Foundation Training", href: "/MSPFoundation" },
      { name: "MSP Practitioner Training", href: "/MSPPractitioner" },
    ],
  },
  {
    category: "Agile, Scrum & Kanban",
    courses: [
      { name: "AI-Empowered Leading SAFe Agilist 6", href: "/LeadingSAFeAgilist" },
      { name: "AI-Empowered SAFe POPM 6", href: "/SAFePO-PM" },
      { name: "AI-Empowered SAFe Scrum Master 6", href: "/SAFeScrumMaster" },
      { name: "AI-Empowered SAFe Advanced Scrum Master 6", href: "/SAFeAdvancedScrumMaster" },
      { name: "Professional Scrum Master I (PSM I)", href: "/PScrumM1" },
      { name: "Professional Scrum Master II (PSM II)", href: "/PScrumM2" },
      { name: "Professional Scrum Master – AI Essentials (PSM-AIE)", href: "/PSMAIEssentials" },
      { name: "Professional Scrum Product Owner I (PSPO I)", href: "/PSPO1" },
      { name: "Professional Scrum Product Owner II (PSPO II)", href: "/PSPO2" },
      { name: "Professional Scrum Product Owner – AI Essentials (PSPO-AIE)", href: "/PSPOAIEssentials" },
      { name: "Professional Scrum with Kanban (PSK)", href: "/PSK1" },
      { name: "Certified Scrum Master (CSM)", href: "/CSM" },
      { name: "Certified Scrum Product Owner (CSPO)", href: "/CSPO" },
      { name: "ICP-ACC Agile Coaching", href: "/ICP-ACC" },
    ],
  },
  {
    category: "DevOps & SRE",
    courses: [
      { name: "DevOps Foundation Certification Training", href: "/DevopsFoundation" },
      { name: "AIOps Foundation Certification Training", href: "/AIOpsFoundation" },
      { name: "DevSecOps Foundation Certification Training", href: "/DevSecOpsFoundation" },
      { name: "DevSecOps Practitioner Certification Training", href: "/DevSecOpsPractitioner" },
      { name: "SRE Foundation Training", href: "/SREFoundation" },
      { name: "SRE Practitioner Training", href: "/SREPractitioner" },
    ],
  },
  {
    category: "Business Analysis",
    courses: [
      { name: "Business Analysis Foundation", href: "/BusinessAnalysisF" },
      { name: "Business Analysis Practice", href: "/BusinessAnalysisP" },
    ],
  },
  {
    category: "Lean & Quality Management",
    courses: [
      { name: "Lean Six Sigma Green Belt Training & Certification", href: "/LeanSSGB" },
      { name: "Lean Six Sigma Black Belt Training & Certification", href: "/LeanSSBB" },
    ],
  },
  {
    category: "Software Testing",
    courses: [
      { name: "Certified Tester Foundation Level (CTFL)", href: "/ISTQBF" },
      { name: "Certified Tester AI Testing (CT-AI)", href: "/CTAI" },
      { name: "Certified Tester Advanced Level Agile Tester (CTAL-AT)", href: "/CTALAT" },
      { name: "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)", href: "/CTALTAE" },
      { name: "Certified Tester Advanced Level Test Management (CTAL-TM)", href: "/CTALTM" },
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
