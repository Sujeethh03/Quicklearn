"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Users, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";



export default function CoursesWeOffer() {
  const [activeFilter, setActiveFilter] = useState("Popular Courses");
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(true);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  const stopAndScheduleResume = () => {
    autoScrollRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      autoScrollRef.current = true;
    }, 3000);
  };

  const scrollLeft = () => {
    stopAndScheduleResume();
    scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    stopAndScheduleResume();
    scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const SPEED = 40; // px per second — consistent across all frame rates
    let animId;
    let lastTime = null;

    const animate = (now) => {
      if (autoScrollRef.current && !pausedRef.current) {
        if (lastTime !== null) {
          const dx = (SPEED * (now - lastTime)) / 1000;
          const isDuped = !searchTerm && activeFilter === "Popular Courses";
          // Seamless reset: halfway through duplicated list, not at the very end
          const limit = isDuped
            ? container.scrollWidth / 2
            : container.scrollWidth - container.clientWidth;
          container.scrollLeft =
            container.scrollLeft >= limit ? 0 : container.scrollLeft + dx;
        }
        lastTime = now;
      } else {
        lastTime = null; // Reset so resume doesn't cause a position jump
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => { pausedRef.current = true; };
    const onLeave = () => { pausedRef.current = false; };

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      stopAndScheduleResume();
    };
    const onTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      container.scrollBy({ left: diff * 1.5, behavior: 'smooth' });
    };

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resumeTimerRef.current);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [activeFilter, searchTerm]);

  // Course categories
  const categories = [
    "Popular Courses",
    "All",
    "IT Service Management",
    "Project & Program Management",
    "Agile, Scrum & Kanban",
    "DevOps & SRE",
    "Business Analysis",
    "Lean & Quality Management",
    "Software Testing"
  ];

  // Complete course data
  const courses = [
    {
      id: 1,
      title: "ITIL® 4 Foundation",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-foundation-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "2 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 2,
      title: "Problem Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-problem-management-certification-training",
      imageSrc: "/problem_management.png",
      description: "Advanced ITIL® practices for service management professionals.",
      duration: "5 Days",
      level: "Advanced",
      students: "1.8K+",
      rating: 4.9,
      price: 599
    },
    {
      id: 3,
      title: "SIAM Foundation",
      category: "IT Service Management",
      subcategory: "SIAM",
      href: "/siam-foundation-certification-training",
      imageSrc: "/siam_foundation.jpg",
      description: "Service Integration and Management fundamentals for multi-vendor environments.",
      duration: "2 Days",
      level: "Foundation",
      students: "950+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 4,
      title: "Service Desk",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-service-desk-certification-training",
      imageSrc: "/service_desk.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 5,
      title: "Incident Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-incident-management-certification-training",
      imageSrc: "/incident_management.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 6,
      title: "Service Request Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-service-request-management-training",
      imageSrc: "/service_request_management.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 7,
      title: "Monitoring & Event Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-monitoring-event-management-training",
      imageSrc: "/monitoring_event_management.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 8,
      title: "Change Enablement",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-change-enablement-certification-training",
      imageSrc: "/change_enablement.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 9,
      title: "Release Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-release-management-certification-training",
      imageSrc: "/release_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 10,
      title: "Service Configuration Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-service-configuration-management-training",
      imageSrc: "/service_configuration_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 11,
      title: "Deployment Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-deployment-management-certification-training",
      imageSrc: "/deployment_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 12,
      title: "IT Asset Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-it-asset-management-itam-certification-training",
      imageSrc: "/it_asset_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 13,
      title: "Continual improvement",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-continual-improvement-certification-training",
      imageSrc: "/continual_improvement.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 14,
      title: "Relationship Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-relationship-management-certification-training",
      imageSrc: "/relationship_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 15,
      title: "Service Level Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-service-level-management-training",
      imageSrc: "/service_level_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 16,
      title: "Information Security Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-information-security-management-training",
      imageSrc: "/information_security_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 17,
      title: "Supplier Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-supplier-management-certification-training",
      imageSrc: "/supplier_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 18,
      title: "ITIL® 4 Specialist Create, Deliver and Support",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-create-deliver-support-cds-training",
      imageSrc: "/create_deliver_support.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 19,
      title: "ITIL® 4 Specialist Drive Stakeholder value",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-drive-stakeholder-value-dsv-training",
      imageSrc: "/drive_stakeholder_value.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 20,
      title: "ITIL® 4 Specialist High Velocity IT",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-high-velocity-it-hvit-training",
      imageSrc: "/high_velocity_it.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 21,
      title: "ITIL® 4 Strategist Direct Plan & Improve",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-strategist-direct-plan-improve-dpi-training",
      imageSrc: "/direct_plan_improve.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 22,
      title: "Acquiring And Managing Cloud Service",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-acquiring-managing-cloud-services-training",
      imageSrc: "/acquiring_managing_cloud_services.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 23,
      title: "Sustainability In Digital and IT",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-sustainability-in-digital-it-training",
      imageSrc: "/sustainability_digital_it.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 24,
      title: "Business Relationship Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-business-relationship-management-training",
      imageSrc: "/business_relationship_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 25,
      title: "Monitor,Support and Fulfil",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-monitor-support-fulfil-msf-training",
      imageSrc: "/monitor_support_fulfil.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 26,
      title: "Digital IT & Services",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-leader-digital-it-strategy-dits-training",
      imageSrc: "/digital_it_services.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 27,
      title: "SIAM Professional",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/siam-professional-certification-training",
      imageSrc: "/siam_professional.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "4 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 28,
      title: "PMP Certification",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/pmp-certification-training",
      imageSrc: "/pmp_certification.jpg",
      description: "Project Management Professional certification for experienced project managers.",
      duration: "4 Days",
      level: "Professional",
      students: "3.2K+",
      rating: 4.9,
      price: 599,
      popular: true
    },
    {
      id: 29,
      title: "PRINCE2 Foundation",
      category: "Project & Program Management",
      subcategory: "PRINCE2",
      href: "/prince2-foundation-certification-training",
      imageSrc: "/prince2_foundation.jpg",
      description: "Structured project management methodology with PRINCE2 Foundation.",
      duration: "2 Days",
      level: "Foundation",
      students: "2.1K+",
      rating: 4.8,
      price: 399,
      popular: true
    },
    {
      id: 30,
      title: "PMI-ACP",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/pmi-acp-agile-certified-practitioner-training",
      imageSrc: "/acp_certification.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 31,
      title: "Prince2 Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/prince2-practitioner-certification-training",
      imageSrc: "/prince2_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499,
      popular: true
    },
    {
      id: 32,
      title: "Prince2 Agile Foundation",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/prince2-agile-foundation-certification-training",
      imageSrc: "/prince2_agile_foundation.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "2 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 33,
      title: "Prince2 Agile Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/prince2-agile-practitioner-certification-training",
      imageSrc: "/prince2_agile_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 34,
      title: "MSP Foundation",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/msp-foundation-certification-training",
      imageSrc: "/msp_foundation.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "2 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 35,
      title: "MSP Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/msp-practitioner-certification-training",
      imageSrc: "/msp_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 36,
      title: "AI-Empowered Leading SAFe Agilist 6",
      category: "Agile, Scrum & Kanban",
      subcategory: "SAFe",
      href: "/leading-safe-agilist-certification-training",
      imageSrc: "/leading_safe_agilist.jpg",
      description: "Scale Agile practices across enterprise with SAFe framework.",
      duration: "2 Days",
      level: "Professional",
      students: "2.8K+",
      rating: 4.9,
      price: 499,
      popular: true
    },
    {
      id: 37,
      title: "Professional Scrum Master I (PSM I)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum.org",
      href: "/professional-scrum-master-i-psm-i-certification-training",
      imageSrc: "/professional_scrum_master_1.jpg",
      description: "Master Scrum framework and become an effective Scrum Master.",
      duration: "2 Days",
      level: "Professional",
      students: "4.1K+",
      rating: 4.8,
      price: 399,
      popular: true
    },
    {
      id: 38,
      title: "Certified Scrum Master (CSM)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/certified-scrummaster-csm-certification-training",
      imageSrc: "/certified_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 39,
      title: "AI-Empowered SAFe POPM 6",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/safe-product-owner-product-manager-popm-training",
      imageSrc: "/safe_product_owner_manager.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 40,
      title: "AI-Empowered SAFe Scrum Master 6",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/safe-scrum-master-ssm-certification-training",
      imageSrc: "/safe_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 41,
      title: "AI-Empowered SAFe Advanced Scrum Master 6",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/safe-advanced-scrum-master-sasm-certification-training",
      imageSrc: "/safe_advanced_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 42,
      title: "Professional Scrum Master II (PSM II)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/professional-scrum-master-ii-psm-ii-certification-training",
      imageSrc: "/professional_scrum_master_2.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 43,
      title: "Professional Scrum Product Owner I (PSPO I)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/professional-scrum-product-owner-i-pspo-i-training",
      imageSrc: "/professional_scrum_product_owner_1.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 44,
      title: "Professional Scrum Product Owner II (PSPO II)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/professional-scrum-product-owner-ii-pspo-ii-training",
      imageSrc: "/professional_scrum_product_owner_2.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 45,
      title: "Professional Scrum with Kanban (PSK)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/professional-scrum-with-kanban-psk-certification-training",
      imageSrc: "/professional_scrum_with_kanban.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 46,
      title: "Certified Scrum Product Owner (CSPO)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/certified-scrum-product-owner-cspo-certification-training",
      imageSrc: "/certified_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 47,
      title: "ICP-ACC",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/icagile-agile-coaching-icp-acc-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 48,
      title: "Lean Six Sigma Green Belt",
      category: "Lean & Quality Management",
      subcategory: "Six Sigma",
      href: "/lean-six-sigma-green-belt-certification-training",
      imageSrc: "/green_belt.png",
      description: "Process improvement and quality management with Six Sigma methodology.",
      duration: "4 Days",
      level: "Professional",
      students: "1.9K+",
      rating: 4.8,
      price: 549,
      popular: true
    },
    {
      id: 49,
      title: "Lean Six Sigma Black Belt",
      category: "Lean & Quality Management",
      subcategory: "Six Sigma",
      href: "/lean-six-sigma-black-belt-certification-training",
      imageSrc: "/black_belt.png",
      description: "Advanced Six Sigma leadership and project management skills.",
      duration: "5 Days",
      level: "Expert",
      students: "1.2K+",
      rating: 4.9,
      price: 799
    },
    {
      id: 50,
      title: "DevOps Foundation",
      category: "DevOps & SRE",
      subcategory: "DevOps",
      href: "/devops-foundation-certification-training",
      imageSrc: "/devops_foundation.jpg",
      description: "DevOps culture, practices, and tools for continuous delivery.",
      duration: "2 Days",
      level: "Foundation",
      students: "2.3K+",
      rating: 4.8,
      price: 349,
      popular: true
    },
    {
      id: 51,
      title: "SRE Foundation",
      category: "DevOps & SRE",
      subcategory: "SRE",
      href: "/sre-foundation-certification-training",
      imageSrc: "/sre_foundation.jpg",
      description: "Site Reliability Engineering principles and practices.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.6K+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 52,
      title: "Business Analysis Foundation",
      category: "Business Analysis",
      subcategory: "Business Analysis",
      href: "/business-analysis-foundation-certification-training",
      imageSrc: "/business_analysis_foundation.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 349
    },
    {
      id: 53,
      title: "Business Analysis Practice",
      category: "Business Analysis",
      subcategory: "Business Analysis",
      href: "/business-analysis-practitioner-certification-training",
      imageSrc: "/business_analysis_practice.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 349
    },
    {
      id: 54,
      title: "SRE Practitioner",
      category: "DevOps & SRE",
      subcategory: "Business Analysis",
      href: "/sre-practitioner-certification-training",
      imageSrc: "/sre_practitioner.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 399
    },
    {
      id: 55,
      title: "Certified Tester Foundation Level (CTFL)",
      category: "Software Testing",
      subcategory: "ISTQB",
      href: "/istqb-foundation-level-ctfl-certification-training",
      imageSrc: "/istqb_foundation.jpg",
      description: "Software testing fundamentals and ISTQB certification.",
      duration: "2 Days",
      level: "Foundation",
      students: "2.7K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 56,
      title: "Professional Scrum Master – AI Essentials (PSM-AIE)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum.org",
      href: "/professional-scrum-master-ai-essentials-psm-aie-training",
      imageSrc: "/professional_scrum_master_1.jpg",
      description: "Apply AI to strengthen the Scrum Master role and team facilitation.",
      duration: "1 Day",
      level: "Professional",
      students: "900+",
      rating: 4.7,
      price: 199
    },
    {
      id: 57,
      title: "Professional Scrum Product Owner – AI Essentials (PSPO-AIE)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum.org",
      href: "/professional-scrum-product-owner-ai-essentials-pspo-aie-training",
      imageSrc: "/professional_scrum_product_owner_1.jpg",
      description: "Use AI to improve product ownership, discovery and decision-making.",
      duration: "1 Day",
      level: "Professional",
      students: "800+",
      rating: 4.7,
      price: 199
    },
    {
      id: 58,
      title: "AIOps Foundation",
      category: "DevOps & SRE",
      subcategory: "DevOps",
      href: "/aiops-foundation-certification-training",
      imageSrc: "/devops_foundation.jpg",
      description: "Apply AI and machine learning to modern IT operations.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.1K+",
      rating: 4.7,
      price: 399,
      popular: true
    },
    {
      id: 59,
      title: "DevSecOps Foundation",
      category: "DevOps & SRE",
      subcategory: "DevOps",
      href: "/devsecops-foundation-certification-training",
      imageSrc: "/devops_foundation.jpg",
      description: "Integrate security into DevOps pipelines and culture.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.3K+",
      rating: 4.8,
      price: 399
    },
    {
      id: 60,
      title: "DevSecOps Practitioner",
      category: "DevOps & SRE",
      subcategory: "DevOps",
      href: "/devsecops-practitioner-certification-training",
      imageSrc: "/devops_foundation.jpg",
      description: "Advance DevSecOps practices for secure continuous delivery.",
      duration: "2 Days",
      level: "Professional",
      students: "900+",
      rating: 4.7,
      price: 499
    },
    {
      id: 61,
      title: "Certified Tester AI Testing (CT-AI)",
      category: "Software Testing",
      subcategory: "ISTQB",
      href: "/istqb-certified-tester-ai-testing-ct-ai-training",
      imageSrc: "/istqb_foundation.jpg",
      description: "Test AI-based systems with the ISTQB CT-AI certification.",
      duration: "2 Days",
      level: "Advanced",
      students: "700+",
      rating: 4.7,
      price: 449
    },
    {
      id: 62,
      title: "Certified Tester Advanced Level Agile Tester (CTAL-AT)",
      category: "Software Testing",
      subcategory: "ISTQB",
      href: "/istqb-advanced-level-agile-tester-ctal-at-training",
      imageSrc: "/istqb_foundation.jpg",
      description: "Advanced agile testing skills with ISTQB CTAL-AT.",
      duration: "2 Days",
      level: "Advanced",
      students: "650+",
      rating: 4.7,
      price: 449
    },
    {
      id: 63,
      title: "Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE)",
      category: "Software Testing",
      subcategory: "ISTQB",
      href: "/istqb-advanced-test-automation-engineering-ctal-tae-training",
      imageSrc: "/istqb_foundation.jpg",
      description: "Design and build effective test automation solutions.",
      duration: "3 Days",
      level: "Advanced",
      students: "600+",
      rating: 4.7,
      price: 499
    },
    {
      id: 64,
      title: "Certified Tester Advanced Level Test Management (CTAL-TM)",
      category: "Software Testing",
      subcategory: "ISTQB",
      href: "/istqb-advanced-level-test-management-ctal-tm-training",
      imageSrc: "/istqb_foundation.jpg",
      description: "Lead and manage testing with ISTQB CTAL-TM.",
      duration: "3 Days",
      level: "Advanced",
      students: "600+",
      rating: 4.7,
      price: 499
    },
    {
      id: 65,
      title: "ITIL® 4 Practice Manager",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-practice-manager-pm-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Master 15 ITIL management practices across MSF, PIC and CAI.",
      duration: "5 Days",
      level: "Professional",
      students: "1.0K+",
      rating: 4.8,
      price: 899
    },
    {
      id: 66,
      title: "ITIL® 4 Managing Professional",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-managing-professional-mp-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Practical and technical skills to run modern IT-enabled services.",
      duration: "4 Days",
      level: "Professional",
      students: "950+",
      rating: 4.8,
      price: 999
    },
    {
      id: 67,
      title: "ITIL® 4 Strategic Leader",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-strategic-leader-sl-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Align digital and IT strategy with business direction.",
      duration: "3 Days",
      level: "Professional",
      students: "800+",
      rating: 4.8,
      price: 999
    },
    {
      id: 68,
      title: "ITIL® 4 Specialist: Plan, Implement and Control",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-plan-implement-control-pic-training",
      imageSrc: "/itl4_foundation.png",
      description: "Change, release, deployment, configuration and asset management.",
      duration: "3 Days",
      level: "Professional",
      students: "700+",
      rating: 4.7,
      price: 599
    },
    {
      id: 69,
      title: "ITIL® 4 Specialist: Collaborate, Assure and Improve",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-4-specialist-collaborate-assure-improve-cai-training",
      imageSrc: "/itl4_foundation.png",
      description: "Relationship, supplier, SLM, security and continual improvement.",
      duration: "3 Days",
      level: "Professional",
      students: "700+",
      rating: 4.7,
      price: 599
    },
    {
      id: 70,
      title: "ITIL® V5 Foundation",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-foundation-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "The latest AI-native ITIL Foundation for digital services.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.2K+",
      rating: 4.8,
      price: 349,
      popular: true
    },
    {
      id: 71,
      title: "ITIL® V5 Foundation Bridge",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-foundation-bridge-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Upgrade your ITIL 4 knowledge to ITIL (Version 5).",
      duration: "2 Days",
      level: "Foundation",
      students: "600+",
      rating: 4.7,
      price: 299
    },
    {
      id: 72,
      title: "ITIL® V5 Managing Professional",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-managing-professional-transition-training",
      imageSrc: "/itl4_foundation.png",
      description: "Advance to ITIL V5 Managing Professional.",
      duration: "4 Days",
      level: "Professional",
      students: "500+",
      rating: 4.7,
      price: 899
    },
    {
      id: 73,
      title: "ITIL® Product (V5)",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-product-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Manage digital products as integrated value streams.",
      duration: "3 Days",
      level: "Professional",
      students: "500+",
      rating: 4.7,
      price: 599
    },
    {
      id: 74,
      title: "ITIL® Service (V5)",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-service-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Deliver and support services across the ITIL V5 lifecycle.",
      duration: "3 Days",
      level: "Professional",
      students: "480+",
      rating: 4.7,
      price: 599
    },
    {
      id: 75,
      title: "ITIL® Experience (V5)",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-experience-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Design and manage great digital experiences with ITIL V5.",
      duration: "3 Days",
      level: "Professional",
      students: "450+",
      rating: 4.7,
      price: 599
    },
    {
      id: 76,
      title: "ITIL® V5 Strategic Leader",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-strategic-leader-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Lead digital and IT strategy with ITIL (Version 5).",
      duration: "3 Days",
      level: "Professional",
      students: "420+",
      rating: 4.7,
      price: 899
    },
    {
      id: 77,
      title: "ITIL® Strategy",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-strategy-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Align digital and IT strategy in AI-enabled enterprises.",
      duration: "2 Days",
      level: "Professional",
      students: "400+",
      rating: 4.7,
      price: 599
    },
    {
      id: 78,
      title: "ITIL® V5 Transformation",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-transformation-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Lead service management transformation with ITIL V5.",
      duration: "3 Days",
      level: "Professional",
      students: "380+",
      rating: 4.7,
      price: 599
    },
    {
      id: 79,
      title: "ITIL® V5 AI Governance",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-ai-governance-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "Adopt and govern AI responsibly across digital services.",
      duration: "2 Days",
      level: "Professional",
      students: "360+",
      rating: 4.8,
      price: 599
    },
    {
      id: 80,
      title: "ITIL® V5 Master",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/itil-v5-master-certification-training",
      imageSrc: "/itl4_foundation.png",
      description: "The pinnacle of the ITIL qualification scheme.",
      duration: "Flexible",
      level: "Expert",
      students: "200+",
      rating: 4.9,
      price: 1499
    }
  ];

  // Fixed filtering logic
  let filteredCourses;

  // First apply category filter
  if (activeFilter === "All") {
    // Show all courses when "All" is selected
    filteredCourses = courses;
  } else if (activeFilter === "Popular Courses") {
    // Popular courses are grouped by category in the same order as the filter bar
    // above, then alphabetically by title, so the carousel reads deliberately.
    const categoryRank = (c) => {
      const i = categories.indexOf(c);
      return i === -1 ? categories.length : i;
    };
    filteredCourses = courses
      .filter(course => course.popular === true)
      .sort((a, b) =>
        categoryRank(a.category) - categoryRank(b.category) ||
        a.title.localeCompare(b.title)
      );
  } else {
    // Show courses from selected category
    filteredCourses = courses.filter(course => course.category === activeFilter);
  }

  // Then apply search filter
  if (searchTerm.trim()) {
    filteredCourses = filteredCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-full max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
                Explore our top <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-black bg-clip-text text-transparent">categories</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
                Advance your career with expert-led certifications
              </p>
            </motion.div>
          </div>
        </div>


        {/* Search Bar */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-2xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for courses, certifications, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2BA6D9] focus:ring-inset"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>


        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === category
                  ? 'bg-[#2BA6D9] text-white shadow-md'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Auto-scrolling Course Container with Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-[#2BA6D9] transition-all duration-300 border border-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-[#2BA6D9] transition-all duration-300 border border-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Course Container */}
          <div className="overflow-hidden mx-8 sm:mx-10 md:mx-12">

            {/* Scrolling container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto py-4 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Duplicate courses for seamless loop only when not searching/filtering */}
              {(searchTerm || activeFilter !== "Popular Courses" ? filteredCourses : [...filteredCourses, ...filteredCourses]).map((course, index) => (
                <motion.div
                  key={`${course.id}-${index}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % filteredCourses.length) * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Link href={course.href}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full w-80 flex-shrink-0">

                      {/* Image */}
                      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                        <Image
                          src={course.imageSrc}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="bg-[#2BA6D9] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                            {course.level}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">

                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                          {course.title}
                        </h3>

                        <p className="text-gray-800 text-sm mb-3 sm:mb-4 line-clamp-3">
                          {course.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-800 font-medium mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students}</span>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-2 text-[#2BA6D9] font-medium">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-800 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchTerm("");
              }}
              className="bg-[#2BA6D9] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E7BA3] transition-colors duration-300"
            >
              Show All Courses
            </button>
          </motion.div>
        )}

        {/* Call to Action */}

      </div>
    </section>
  );
}