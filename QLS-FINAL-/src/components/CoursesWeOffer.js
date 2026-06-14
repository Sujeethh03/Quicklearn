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
    "Quality Management",
    "DevOps & Business Analysis",
    "Software Testing & Technical"
  ];

  // Complete course data
  const courses = [
    // IT Service Management
    {
      id: 1,
      title: "ITIL® 4 Foundation",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/ITL4Management",
      imageSrc: "/itl4_foundation.png",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299,
      popular: true
    },
    {
      id: 2,
      title: "Problem Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/ProblemManagement",
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
      href: "/SIAMFoundation",
      imageSrc: "/siam_foundation.jpg",
      description: "Service Integration and Management fundamentals for multi-vendor environments.",
      duration: "2 Days",
      level: "Foundation",
      students: "950+",
      rating: 4.7,
      price: 399
    },
    {
      id: 4,
      title: "Service Desk",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/ServiceDesk",
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
      href: "/IncidentManagement",
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
      href: "/ServiceRequestManagement",
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
      href: "/MonitoringEventManagement",
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
      href: "/ChangeEnablement",
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
      href: "/ReleaseManagement",
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
      href: "/ServiceConfiguration",
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
      href: "/DeploymentManagement",
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
      href: "/ItAssetManagement",
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
      href: "/ContinuationImprovement",
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
      href: "/RelationshipManagement",
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
      href: "/ServiceLevelManagement",
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
      href: "/InformationSecurityMan",
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
      href: "/SupplierManagement",
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
      href: "/ITL4SCDS",
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
      href: "/ITL4SDSV",
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
      href: "/ITL4SHVI",
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
      href: "/ITL4SDPI",
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
      title: "Create, Deliver and Support",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/CreateDeliverSupport",
      imageSrc: "/create_deliver_support.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 23,
      title: "Drive Stakeholder Value",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/DriveStakeholderValue",
      imageSrc: "/drive_stakeholder_value.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    
    
    {
      id: 26,
      title: "Acquiring And Managing Cloud Service",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/AcquiringAndManagingCS",
      imageSrc: "/acquiring_managing_cloud_services.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 27,
      title: "Sustainability In Digital and IT",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/SustainabilityInDigitalAI",
      imageSrc: "/sustainability_digital_it.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 28,
      title: "Business Relationship Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/BusinessRelationshipManage",
      imageSrc: "/business_relationship_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 29,
      title: "IT Asset Management",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/ItAssetManage",
      imageSrc: "/it_asset_management.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 30,
      title: "Monitor,Support and Fulfil",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/MonitorSupportFulfil",
      imageSrc: "/monitor_support_fulfil.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 31,
      title: "Digital IT & Services",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/DigitalItService",
      imageSrc: "/digital_it_services.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 32,
      title: "SIAM Foundation",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/SIAMFoundation",
      imageSrc: "/siam_foundation.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },
    {
      id: 33,
      title: "SIAM Professional",
      category: "IT Service Management",
      subcategory: "ITIL®",
      href: "/SIAMProfessional",
      imageSrc: "/siam_professional.jpg",
      description: "Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.5K+",
      rating: 4.8,
      price: 299
    },

    // Project & Program Management
    {
      id: 34,
      title: "PMP Certification",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/PMP",
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
      id: 35,
      title: "PRINCE2 Foundation",
      category: "Project & Program Management",
      subcategory: "PRINCE2",
      href: "/Prince2Foundation",
      imageSrc: "/prince2_foundation.jpg",
      description: "Structured project management methodology with PRINCE2 Foundation.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.1K+",
      rating: 4.8,
      price: 399
    },
    {
      id: 36,
      title: "Agile Certified Practitioner (ACP)",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/courses/acp",
      imageSrc: "/acp_certification.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 37,
      title: "Prince2 Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/Prince2Practitioner",
      imageSrc: "/prince2_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 38,
      title: "Prince2 Agile Foundation",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/Prince2AgileFoundation",
      imageSrc: "/prince2_agile_foundation.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 39,
      title: "Prince2 Agile Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/Prince2AgilePractitioner",
      imageSrc: "/prince2_agile_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 40,
      title: "MSP Foundation",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/MSPFoundation",
      imageSrc: "/msp_foundation.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },
    {
      id: 41,
      title: "MSP Practitioner",
      category: "Project & Program Management",
      subcategory: "PMI",
      href: "/MSPPractitioner",
      imageSrc: "/msp_practitioner.jpg",
      description: "Agile project management practices and methodologies certification.",
      duration: "3 Days",
      level: "Professional",
      students: "1.7K+",
      rating: 4.8,
      price: 499
    },

    // Agile, Scrum & Kanban
    {
      id: 42,
      title: "Leading SAFe Agilist",
      category: "Agile, Scrum & Kanban",
      subcategory: "SAFe",
      href: "/LeadingSAFeAgilist",
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
      id: 43,
      title: "Professional Scrum Master I (PSM I)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum.org",
      href: "/PScrumM1",
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
      id: 44,
      title: "Certified Scrum Master (CSM)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/CSM",
      imageSrc: "/certified_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 45,
      title: "SAFe PO/PM",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/SAFePO-PM",
      imageSrc: "/safe_product_owner_manager.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 46,
      title: "SAFe for Teams",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/SAFeforTeams",
      imageSrc: "/safe_for_teams.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 47,
      title: "SAFe Scrum Master",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/SAFeScrumMaster",
      imageSrc: "/safe_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 48,
      title: "SAFe Advanced Scrum Master",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/SAFeAdvancedScrumMaster",
      imageSrc: "/safe_advanced_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 49,
      title: "Professional Scrum Master 2",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/PScrumM2",
      imageSrc: "/professional_scrum_master_2.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 50,
      title: "Professional Scrum Product Owner 1",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/PSPO1",
      imageSrc: "/professional_scrum_product_owner_1.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 51,
      title: "Professional Scrum Product Owner 2",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/PSPO2",
      imageSrc: "/professional_scrum_product_owner_2.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 52,
      title: "Professional Scrum with Kanban (PSK 1)",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/PSK1",
      imageSrc: "/professional_scrum_with_kanban.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 53,
      title: "Certified Advanced Scrum Master",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/CASM",
      imageSrc: "/certified_advanced_scrummaster.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 54,
      title: "Certified Scrum Product Owner",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/CSPO",
      imageSrc: "/certified_scrum_master.jpg",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 55,
      title: "ICP-ACC",
      category: "Agile, Scrum & Kanban",
      subcategory: "Scrum Alliance",
      href: "/ICP-ACC",
      imageSrc: "/itl4_foundation.png",
      description: "Scrum Alliance certified Scrum Master training and certification.",
      duration: "2 Days",
      level: "Professional",
      students: "3.5K+",
      rating: 4.7,
      price: 399
    },

    // Quality Management
    {
      id: 56,
      title: "Lean Six Sigma Green Belt",
      category: "Quality Management",
      subcategory: "Six Sigma",
      href: "/LeanSSGB",
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
      id: 57,
      title: "Lean Six Sigma Black Belt",
      category: "Quality Management",
      subcategory: "Six Sigma",
      href: "/LeanSSBB",
      imageSrc: "/black_belt.png",
      description: "Advanced Six Sigma leadership and project management skills.",
      duration: "5 Days",
      level: "Expert",
      students: "1.2K+",
      rating: 4.9,
      price: 799
    },

    // DevOps & Business Analysis
    {
      id: 58,
      title: "DevOps Foundation",
      category: "DevOps & Business Analysis",
      subcategory: "DevOps",
      href: "/DevopsFoundation",
      imageSrc: "/devops_foundation.jpg",
      description: "DevOps culture, practices, and tools for continuous delivery.",
      duration: "2 Days",
      level: "Foundation",
      students: "2.3K+",
      rating: 4.8,
      price: 349
    },
    {
      id: 59,
      title: "SRE Foundation",
      category: "DevOps & Business Analysis",
      subcategory: "SRE",
      href: "/SREFoundation",
      imageSrc: "/sre_foundation.jpg",
      description: "Site Reliability Engineering principles and practices.",
      duration: "2 Days",
      level: "Foundation",
      students: "1.6K+",
      rating: 4.7,
      price: 399
    },
    {
      id: 60,
      title: "Business Analysis Foundation",
      category: "DevOps & Business Analysis",
      subcategory: "Business Analysis",
      href: "/BusinessAnalysisF",
      imageSrc: "/business_analysis_foundation.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 349
    },
    {
      id: 61,
      title: "Business Analysis Practice",
      category: "DevOps & Business Analysis",
      subcategory: "Business Analysis",
      href: "/BusinessAnalysisPractice",
      imageSrc: "/business_analysis_practice.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 349
    },
    {
      id: 62,
      title: "SRE Practitioner",
      category: "DevOps & Business Analysis",
      subcategory: "Business Analysis",
      href: "/SREPractitioner",
      imageSrc: "/sre_practitioner.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 399
    },
    {
      id: 63,
      title: "Agile Business Analysis",
      category: "DevOps & Business Analysis",
      subcategory: "Business Analysis",
      href: "/AgileBA",
      imageSrc: "/agile_business_analysis.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 349
    },
    {
      id: 64,
      title: "DevOps Master",
      category: "DevOps & Business Analysis",
      subcategory: "Business Analysis",
      href: "/DevopsMaster",
      imageSrc: "/devops_master.jpg",
      description: "Business analysis techniques and stakeholder management.",
      duration: "3 Days",
      level: "Foundation",
      students: "1.4K+",
      rating: 4.6,
      price: 499
    },

    // Software Testing & Technical
    {
      id: 65,
      title: "ISTQB Foundation Level",
      category: "Software Testing & Technical",
      subcategory: "ISTQB",
      href: "/ISTQBF",
      imageSrc: "/istqb_foundation.jpg",
      description: "Software testing fundamentals and ISTQB certification.",
      duration: "3 Days",
      level: "Foundation",
      students: "2.7K+",
      rating: 4.8,
      price: 299,
      popular: true
    },
    {
      id: 66,
      title: "ISTQB Advanced",
      category: "Software Testing & Technical",
      subcategory: "Automation",
      href: "/ISTQBA",
      imageSrc: "/istqb_advanced.jpg",
      description: "Automated testing tools and frameworks for efficient testing.",
      duration: "4 Days",
      level: "Professional",
      students: "1.8K+",
      rating: 4.7,
      price: 499
    }
  ];

  // Fixed filtering logic
  let filteredCourses;

  // First apply category filter
  if (activeFilter === "All") {
    // Show all courses when "All" is selected
    filteredCourses = courses;
  } else if (activeFilter === "Popular Courses") {
    // Show only popular courses when "Popular Courses" is selected
    filteredCourses = courses.filter(course => course.popular === true);
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
                Explore our top <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-slate-800 bg-clip-text text-transparent">categories</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for courses, certifications, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#2BA6D9] focus:ring-inset"
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
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
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

                        <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-3">
                          {course.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
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