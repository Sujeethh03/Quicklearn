"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { ChevronRight, ChevronDown, Menu, X, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Nested IT Service Management menu structure (ITIL 4 / ITIL V5 / SIAM).
// Parent items that have a `children` array are both a link and expandable.
const ITSM_MENU = [
  {
    group: "ITIL® 4",
    items: [
      { name: "ITIL® 4 Foundation", href: "/itil-4-foundation-certification-training" },
      {
        name: "ITIL® 4 Practice Manager",
        href: "/itil-4-practice-manager-pm-certification-training",
        id: "itsm-pm",
        children: [
          { name: "ITIL® 4 Specialist: Monitor, Support and Fulfil", href: "/itil-4-specialist-monitor-support-fulfil-msf-training" },
          { name: "ITIL® 4 Specialist: Plan, Implement and Control", href: "/itil-4-specialist-plan-implement-control-pic-training" },
          { name: "ITIL® 4 Specialist: Collaborate, Assure and Improve", href: "/itil-4-specialist-collaborate-assure-improve-cai-training" },
        ],
      },
      {
        name: "ITIL® 4 Managing Professional",
        href: "/itil-4-managing-professional-mp-certification-training",
        id: "itsm-mp4",
        children: [
          { name: "ITIL® 4 Specialist: Create, Deliver and Support", href: "/itil-4-specialist-create-deliver-support-cds-training" },
          { name: "ITIL® 4 Specialist: Drive Stakeholder Value", href: "/itil-4-specialist-drive-stakeholder-value-dsv-training" },
          { name: "ITIL® 4 Specialist: High Velocity IT", href: "/itil-4-specialist-high-velocity-it-hvit-training" },
          { name: "ITIL® 4 Strategist: Direct, Plan and Improve", href: "/itil-4-strategist-direct-plan-improve-dpi-training" },
        ],
      },
      {
        name: "ITIL® 4 Strategic Leader",
        href: "/itil-4-strategic-leader-sl-certification-training",
        id: "itsm-sl4",
        children: [
          { name: "ITIL® 4 Leader: Digital & IT Strategy", href: "/itil-4-leader-digital-it-strategy-dits-training" },
        ],
      },
    ],
  },
  {
    group: "ITIL® V5",
    items: [
      { name: "ITIL® V5 Foundation", href: "/itil-v5-foundation-certification-training" },
      { name: "ITIL® V5 Foundation Bridge", href: "/itil-v5-foundation-bridge-certification-training" },
      {
        name: "ITIL® V5 Managing Professional",
        href: "/itil-v5-managing-professional-transition-training",
        id: "itsm-mp5",
        children: [
          { name: "ITIL Product", href: "/itil-v5-product-certification-training" },
          { name: "ITIL Service", href: "/itil-v5-service-certification-training" },
          { name: "ITIL Experience", href: "/itil-v5-experience-certification-training" },
        ],
      },
      {
        name: "ITIL® V5 Strategic Leader",
        href: "/itil-v5-strategic-leader-certification-training",
        id: "itsm-sl5",
        children: [
          { name: "ITIL Strategy", href: "/itil-v5-strategy-certification-training" },
        ],
      },
      { name: "ITIL® V5 Transformation", href: "/itil-v5-transformation-certification-training" },
      { name: "ITIL® V5 AI Governance", href: "/itil-v5-ai-governance-certification-training" },
      { name: "ITIL® V5 Master", href: "/itil-v5-master-certification-training" },
    ],
  },
  {
    group: "SIAM",
    items: [
      { name: "SIAM Foundation", href: "/siam-foundation-certification-training" },
      { name: "SIAM Practitioner", href: "/siam-professional-certification-training" },
    ],
  },
];

// Renders the nested ITSM menu for either the desktop dropdown or the mobile drawer.
function ItsmTree({ variant = "desktop", onNavigate }) {
  const [openGroup, setOpenGroup] = useState(null);
  const [openId, setOpenId] = useState(null);
  const isMobile = variant === "mobile";

  const groupBtnCls = isMobile
    ? "w-full flex items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-[#1E7BA3]"
    : "w-full flex items-center justify-between px-6 py-2 font-semibold hover:bg-[#5B6F81] hover:text-white text-left";
  const parentBtnCls = isMobile
    ? "w-full flex items-center justify-between px-4 py-1 text-xs text-gray-600 hover:text-[#1E7BA3] text-left"
    : "w-full flex items-center justify-between px-6 py-2 hover:bg-[#5B6F81] hover:text-white text-left";
  const leafCls = isMobile
    ? "block px-4 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]"
    : "block px-6 py-2 hover:bg-[#5B6F81] hover:text-white";
  const childWrapCls = isMobile
    ? "ml-3 mt-1 space-y-1"
    : "";
  const childCls = isMobile
    ? "block px-3 py-1 text-xs text-gray-500 hover:text-[#1E7BA3]"
    : "block px-10 py-2 hover:bg-[#5B6F81] hover:text-white";

  const chevron = (open) => (
    <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
  );

  // Leaf -> link; parent -> whole-row toggle that reveals its child pages.
  const renderItem = (item) => {
    if (!item.children) {
      const leaf = (
        <Link href={item.href} className={leafCls} onClick={onNavigate}>{item.name}</Link>
      );
      return isMobile ? <div key={item.href}>{leaf}</div> : <li key={item.href}>{leaf}</li>;
    }
    const open = openId === item.id;
    const body = (
      <>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpenId(open ? null : item.id)}
          className={parentBtnCls}
        >
          <span>{item.name}</span>
          {chevron(open)}
        </button>
        {open && (
          <div className={childWrapCls}>
            {item.children.map((c) => (
              <Link key={c.href} href={c.href} className={childCls} onClick={onNavigate}>{c.name}</Link>
            ))}
          </div>
        )}
      </>
    );
    return isMobile ? <div key={item.id}>{body}</div> : <li key={item.id}>{body}</li>;
  };

  // Each group (ITIL 4 / ITIL V5 / SIAM) is itself a collapsible dropdown.
  return (
    <>
      {ITSM_MENU.map((grp) => {
        const gopen = openGroup === grp.group;
        const groupBody = (
          <>
            <button
              type="button"
              aria-expanded={gopen}
              onClick={() => setOpenGroup(gopen ? null : grp.group)}
              className={groupBtnCls}
            >
              <span>{grp.group}</span>
              {chevron(gopen)}
            </button>
            {gopen &&
              (isMobile ? (
                <div className="space-y-1">{grp.items.map(renderItem)}</div>
              ) : (
                <ul>{grp.items.map(renderItem)}</ul>
              ))}
          </>
        );
        return isMobile ? <div key={grp.group}>{groupBody}</div> : <li key={grp.group}>{groupBody}</li>;
      })}
    </>
  );
}

export default function Headers() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [openMobileSubSection, setOpenMobileSubSection] = useState(null);
  const [openMobileSubSubSection, setOpenMobileSubSubSection] = useState(null);
  const [openMobilePracticeManager, setOpenMobilePracticeManager] = useState(null);
  const [openItsmSection, setOpenItsmSection] = useState(null);
  const [openPMSection, setOpenPMSection] = useState(null);

  const toggleItsmSection = (section) => {
    setOpenItsmSection(openItsmSection === section ? null : section);
    setOpenPMSection(null);
  };

  const togglePMSection = (section) => {
    setOpenPMSection(openPMSection === section ? null : section);
  };

  const resetItsmState = () => {
    setOpenItsmSection(null);
    setOpenPMSection(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSection(null);
    setOpenMobileSubSection(null);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSection = (section) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
    setOpenMobileSubSection(null);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSubSection = (subSection) => {
    setOpenMobileSubSection(openMobileSubSection === subSection ? null : subSection);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSubSubSection = (subSubSection) => {
    setOpenMobileSubSubSection(openMobileSubSubSection === subSubSection ? null : subSubSection);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobilePracticeManager = (section) => {
    setOpenMobilePracticeManager(openMobilePracticeManager === section ? null : section);
  };

  return (
    <>
      {/* Animated Professional Top Bar */}
      <div className="hidden lg:block bg-[#162229] border-b border-[#CBD5E1]/40
animate-in slide-in-from-top-2 duration-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6">
          <div className="flex items-center space-x-8 text-sm text-white">
            <span className="flex items-center gap-2.5 hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-105 group bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 hover:shadow-sm">
              <FaPhone className="w-3.5 h-3.5 text-white group-hover:animate-bounce" />
              <span className="font-medium">{process.env.NEXT_PUBLIC_PHONE_PRIMARY} / {process.env.NEXT_PUBLIC_PHONE_SECONDARY}</span>
            </span>
            <span className="flex items-center gap-2.5 hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-105 group bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 hover:shadow-sm">
              <span className="w-4 h-4 text-white group-hover:animate-bounce">✉️</span>
              <span className="font-medium">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">

              <span className="text-xs text-white font-medium">Follow:</span>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickLearn Systems on Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5 text-white hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickLearn Systems on X"
              >
                <FaXTwitter className="w-3.5 h-3.5 text-white hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickLearn Systems on LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 text-white hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickLearn Systems on Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5 text-white hover:text-[#b3bfc8] transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
            </div>

            <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-[100] backdrop-blur-sm bg-white/95 animate-in slide-in-from-top-4 duration-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/" className="flex items-center space-x-4 group transition-transform duration-300 hover:scale-105">
            {/* QuickLearn Logo */}
            <div className="relative h-14 flex items-center bg-white rounded-lg px-1 py-0.5 transition-transform duration-300 group-hover:scale-110">
  <Image
    src="/QLSLOGO.png"
    alt="QuickLearn Systems Logo"
    width={120}
    height={56}
    className="object-contain h-14 w-auto"
    priority
  />
</div>

            <div className="flex flex-col leading-tight">
            {/* QuickLearn Text - Professional */}
            <span className="text-2xl sm:text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight transition-all duration-300 group-hover:text-[#1E7BA3]
">
              QuickLearn Systems
            </span>
            <span className="text-xs sm:text-sm text-slate-1000 tracking-wide">
                Learn. Certify. Excel
            </span>
            </div>
            {/* Clean Underline Effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 group-hover:text-[#1E7BA3]
 opacity-0 group-hover:opacity-100"
              initial={{ width: 0 }}
              whileHover={{
                width: "100%",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-5 font-medium text-slate-1000 text-sm relative">
            <Link href="/" className="hover:text-[#1E7BA3] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2D3A] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/about" className="hover:text-[#1E7BA3] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2D3A] transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <div className="relative group">
              {/* Main COURSES Dropdown */}
              <button className="flex items-center hover:text-[#1E7BA3] transition-all duration-300 py-2 px-1 relative hover:scale-105">
                <span className="pr-2 relative z-10">Courses</span>
                <ChevronDown className="w-4 h-4 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2D3A] transition-all duration-300 group-hover:w-full"></div>
              </button>

              {/* Dropdown Content */}
              <div className="absolute right-2 mt-1 w-64 bg-white shadow-xl rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-sm transform scale-95 group-hover:scale-100 group-hover:translate-y-1">
                <ul className="flex flex-col text-gray-700">

                  {/* IT Service Management */}
                  <li className="relative group/item" onMouseLeave={resetItsmState}>
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>IT Service Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {/* Submenu — opens right, sub-items expand on click */}
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <ItsmTree variant="desktop" />
                    </ul>
                  </li>

                  {/* Project & Program Management */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white"
                    >
                      <span>Project & Program Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {/* Submenu */}
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><Link href="/pmp-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">PMP</Link></li>
                      <li><Link href="/pmi-acp-agile-certified-practitioner-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">PMI-ACP</Link></li>
                      <li><Link href="/prince2-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Prince2 Foundation</Link></li>
                      <li><Link href="/prince2-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Prince2 Practitioner</Link></li>
                      <li><Link href="/prince2-agile-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Prince2 Agile Foundation</Link></li>
                      <li><Link href="/prince2-agile-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Prince2 Agile Practitioner</Link></li>
                      <li><Link href="/msp-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">MSP Foundation</Link></li>
                      <li><Link href="/msp-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">MSP Practitioner</Link></li>
                    </ul>
                  </li>

                  {/* Agile, Scrum & Kanban */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white"
                    >
                      <span>Agile, Scrum & Kanban</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-80 overflow-y-auto">
                      <li><Link href="/leading-safe-agilist-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">AI-Empowered Leading SAFe Agilist 6</Link></li>
                      <li><Link href="/safe-product-owner-product-manager-popm-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">AI-Empowered SAFe POPM 6</Link></li>
                      <li><Link href="/safe-scrum-master-ssm-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">AI-Empowered SAFe Scrum Master 6</Link></li>
                      <li><Link href="/safe-advanced-scrum-master-sasm-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">AI-Empowered SAFe Advanced Scrum Master 6</Link></li>
                      <li><Link href="/professional-scrum-master-i-psm-i-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Master I (PSM I)</Link></li>
                      <li><Link href="/professional-scrum-master-ii-psm-ii-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Master II (PSM II)</Link></li>
                      <li><Link href="/professional-scrum-master-ai-essentials-psm-aie-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Master – AI Essentials (PSM-AIE)</Link></li>
                      <li><Link href="/professional-scrum-product-owner-i-pspo-i-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Product Owner I (PSPO I)</Link></li>
                      <li><Link href="/professional-scrum-product-owner-ii-pspo-ii-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Product Owner II (PSPO II)</Link></li>
                      <li><Link href="/professional-scrum-product-owner-ai-essentials-pspo-aie-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum Product Owner – AI Essentials (PSPO-AIE)</Link></li>
                      <li><Link href="/professional-scrum-with-kanban-psk-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Professional Scrum with Kanban (PSK)</Link></li>
                      <li><Link href="/certified-scrummaster-csm-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Scrum Master (CSM) Certification</Link></li>
                      <li><Link href="/certified-scrum-product-owner-cspo-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Scrum Product Owner (CSPO) Certification</Link></li>
                      <li><Link href="/icagile-agile-coaching-icp-acc-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">ICP-ACC</Link></li>
                    </ul>
                  </li>

                  {/* DevOps & SRE */}
                  <li className="relative group/item">
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>DevOps & SRE</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><Link href="/devops-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">DevOps Foundation</Link></li>
                      <li><Link href="/aiops-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">AIOps Foundation</Link></li>
                      <li><Link href="/devsecops-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">DevSecOps Foundation</Link></li>
                      <li><Link href="/devsecops-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">DevSecOps Practitioner</Link></li>
                      <li><Link href="/sre-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">SRE Foundation</Link></li>
                      <li><Link href="/sre-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">SRE Practitioner</Link></li>
                    </ul>
                  </li>

                  {/* Business Analysis */}
                  <li className="relative group/item">
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>Business Analysis</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><Link href="/business-analysis-foundation-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Business Analysis Foundation</Link></li>
                      <li><Link href="/business-analysis-practitioner-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Business Analysis Practice</Link></li>
                    </ul>
                  </li>

                  {/* Lean & Quality Management */}
                  <li className="relative group/item">
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>Lean &amp; Quality Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><Link href="/lean-six-sigma-green-belt-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Lean Six Sigma Green Belt</Link></li>
                      <li><Link href="/lean-six-sigma-black-belt-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Lean Six Sigma Black Belt</Link></li>
                    </ul>
                  </li>

                  {/* Software Testing */}
                  <li className="relative group/item">
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>Software Testing</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><Link href="/istqb-foundation-level-ctfl-certification-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Tester Foundation Level (CTFL)</Link></li>
                      <li><Link href="/istqb-certified-tester-ai-testing-ct-ai-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Tester AI Testing (CT-AI)</Link></li>
                      <li><Link href="/istqb-advanced-level-agile-tester-ctal-at-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Tester Advanced Level Agile Tester (CTAL-AT)</Link></li>
                      <li><Link href="/istqb-advanced-test-automation-engineering-ctal-tae-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)</Link></li>
                      <li><Link href="/istqb-advanced-level-test-management-ctal-tm-training" className="block px-6 py-2 hover:bg-[#5B6F81] hover:text-white">Certified Tester Advanced Level Test Management (CTAL-TM)</Link></li>
                    </ul>
                  </li>

                  {/* Cloud, AI & Other Technical Courses */}
                  <li className="relative group/item">
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#5B6F81] hover:text-white">
                      <span>Cloud, AI &amp; Other Technical Courses</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 max-h-[75vh] overflow-y-auto">
                      <li><span className="block px-6 py-2 text-gray-400">Azure, AWS, Google Cloud, AI &amp; GenAI certifications (future additions)</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/events" className="hover:text-[#2BA6D9] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Training Calendar</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BA6D9] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/corporate-training" className="hover:text-[#2BA6D9] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Corporate Training</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BA6D9] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/contact" className="hover:text-[#2BA6D9] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BA6D9] transition-all duration-300 group-hover:w-full"></div>
            </Link>

          </nav>

          {/* Mobile Actions & Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link href="/contact">
              <Button className="bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Contact
              </Button>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-[#2BA6D9] focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={22} className="transition-all duration-300" />
              ) : (
                <Menu size={22} className="transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">

            <Link href="/register" className="bg-[#2BA6D9] hover:bg-[#1E7BA3] text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group inline-block">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E7BA3] to-[#2BA6D9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg max-h-[70vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 relative z-40">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-75"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* COURSES Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('courses')}
                  className="w-full flex justify-between items-center px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-150"
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-500 ${openMobileSection === 'courses' ? 'rotate-180 scale-110' : ''}`} />
                </button>

                {openMobileSection === 'courses' && (
                  <div className="ml-4 mt-1 space-y-1">
                    {/* IT Service Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('itil')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>IT Service Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'itil' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'itil' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <ItsmTree variant="mobile" onNavigate={() => setIsMobileMenuOpen(false)} />
                        </div>
                      )}
                    </div>

                    {/* Project & Program Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('project')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Project & Program Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'project' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'project' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/pmp-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>PMP</Link>
                          <Link href="/pmi-acp-agile-certified-practitioner-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>PMI-ACP</Link>
                          <Link href="/prince2-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Foundation</Link>
                          <Link href="/prince2-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Practitioner</Link>
                          <Link href="/prince2-agile-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Agile Foundation</Link>
                          <Link href="/prince2-agile-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Agile Practitioner</Link>
                          <Link href="/msp-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>MSP Foundation</Link>
                          <Link href="/msp-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>MSP Practitioner</Link>
                        </div>
                      )}
                    </div>

                    {/* Agile, Scrum & Kanban */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('agile')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Agile, Scrum & Kanban</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'agile' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'agile' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/leading-safe-agilist-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>AI-Empowered Leading SAFe Agilist 6</Link>
                          <Link href="/safe-product-owner-product-manager-popm-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>AI-Empowered SAFe POPM 6</Link>
                          <Link href="/safe-scrum-master-ssm-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>AI-Empowered SAFe Scrum Master 6</Link>
                          <Link href="/safe-advanced-scrum-master-sasm-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>AI-Empowered SAFe Advanced Scrum Master 6</Link>
                          <Link href="/professional-scrum-master-i-psm-i-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Master I (PSM I)</Link>
                          <Link href="/professional-scrum-master-ii-psm-ii-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Master II (PSM II)</Link>
                          <Link href="/professional-scrum-master-ai-essentials-psm-aie-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Master – AI Essentials (PSM-AIE)</Link>
                          <Link href="/professional-scrum-product-owner-i-pspo-i-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Product Owner I (PSPO I)</Link>
                          <Link href="/professional-scrum-product-owner-ii-pspo-ii-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Product Owner II (PSPO II)</Link>
                          <Link href="/professional-scrum-product-owner-ai-essentials-pspo-aie-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Product Owner – AI Essentials (PSPO-AIE)</Link>
                          <Link href="/professional-scrum-with-kanban-psk-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum with Kanban (PSK)</Link>
                          <Link href="/certified-scrummaster-csm-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Scrum Master (CSM) Certification</Link>
                          <Link href="/certified-scrum-product-owner-cspo-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Scrum Product Owner (CSPO) Certification</Link>
                          <Link href="/icagile-agile-coaching-icp-acc-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>ICP-ACC</Link>
                        </div>
                      )}
                    </div>

                    {/* DevOps & SRE */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('devops')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>DevOps &amp; SRE</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'devops' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'devops' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/devops-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>DevOps Foundation</Link>
                          <Link href="/aiops-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>AIOps Foundation</Link>
                          <Link href="/devsecops-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>DevSecOps Foundation</Link>
                          <Link href="/devsecops-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>DevSecOps Practitioner</Link>
                          <Link href="/sre-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>SRE Foundation</Link>
                          <Link href="/sre-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>SRE Practitioner</Link>
                        </div>
                      )}
                    </div>

                    {/* Business Analysis */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('business-analysis')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Business Analysis</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'business-analysis' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'business-analysis' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/business-analysis-foundation-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Business Analysis Foundation</Link>
                          <Link href="/business-analysis-practitioner-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Business Analysis Practice</Link>
                        </div>
                      )}
                    </div>

                    {/* Lean & Quality Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('quality')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Lean &amp; Quality Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'quality' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'quality' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/lean-six-sigma-green-belt-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Lean Six Sigma Green Belt</Link>
                          <Link href="/lean-six-sigma-black-belt-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Lean Six Sigma Black Belt</Link>
                        </div>
                      )}
                    </div>

                    {/* Software Testing */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('testing')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Software Testing</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'testing' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'testing' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/istqb-foundation-level-ctfl-certification-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Tester Foundation Level (CTFL)</Link>
                          <Link href="/istqb-certified-tester-ai-testing-ct-ai-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Tester AI Testing (CT-AI)</Link>
                          <Link href="/istqb-advanced-level-agile-tester-ctal-at-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Tester Advanced Level Agile Tester (CTAL-AT)</Link>
                          <Link href="/istqb-advanced-test-automation-engineering-ctal-tae-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)</Link>
                          <Link href="/istqb-advanced-level-test-management-ctal-tm-training" className="block px-3 py-1 text-xs text-gray-600 hover:text-[#1E7BA3]" onClick={() => setIsMobileMenuOpen(false)}>Certified Tester Advanced Level Test Management (CTAL-TM)</Link>
                        </div>
                      )}
                    </div>

                    {/* Cloud, AI & Other Technical Courses */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('cloud-ai')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-[#f0f3f5] hover:text-[#1E7BA3] rounded-md"
                      >
                        <span>Cloud, AI &amp; Other Technical Courses</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'cloud-ai' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'cloud-ai' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <span className="block px-3 py-1 text-xs text-gray-400">Azure, AWS, Google Cloud, AI &amp; GenAI certifications (future additions)</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/events"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Calendar
              </Link>
              
              <Link
                href="/corporate-training"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-[375ms]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Corporate Training
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-[#f0f3f5] hover:text-[#2BA6D9] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-[450ms]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-200 mt-3 animate-in slide-in-from-bottom-4 duration-300 delay-500">

              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
