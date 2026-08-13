"use client";
import React, { useState } from "react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaPaypal, FaUniversity } from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";
import Link from "next/link";
import CourseListings from "./CourseListings";
import { POLICY_LINKS } from "@/data/policies";
import { SOCIAL_LINKS, GOOGLE_MAPS_URL, OFFICE_ADDRESS_LINES } from "@/data/socialLinks";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: formData.comment,
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", mobile: "", comment: "" });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <>
      <CourseListings />
      <footer className="bg-[#162229] text-white">
      <div className="w-full px-6 sm:px-10 lg:px-30 py-12 sm:py-16 ">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

          
          {/* Popular Courses - Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Top Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/itil-v5-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  ITIL V5 Foundation
                </Link>
              </li>
              <li>
                <Link href="/sre-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  SRE Foundation
                </Link>
              </li>
              <li>
                <Link href="/devops-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  DevOps Foundation
                </Link>
              </li>
              <li>
                <Link href="/aiops-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  AIOps Foundation
                </Link>
              </li>
              <li>
                <Link href="/siam-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  SIAM Foundation
                </Link>
              </li>
              <li>
                <Link href="/professional-scrum-master-i-psm-i-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Professional Scrum Master (PSM)
                </Link>
              </li>
              <li>
                <Link href="/professional-scrum-product-owner-i-pspo-i-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Professional Scrum Product Owner (PSPO)
                </Link>
              </li>
              <li>
                <Link href="/leading-safe-agilist-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  AI-Empowered SAFe Agilist 6
                </Link>
              </li>
              <li>
                <Link href="/safe-scrum-master-ssm-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  AI-Empowered SAFe Scrum Master
                </Link>
              </li>
              <li>
                <Link href="/safe-product-owner-product-manager-popm-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  AI-Empowered SAFe POPM
                </Link>
              </li>
              <li>
                <Link href="/pmp-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  PMP Certification
                </Link>
              </li>
              <li>
                <Link href="/prince2-foundation-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Prince2 Foundation
                </Link>
              </li>
              <li>
                <Link href="/prince2-practitioner-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Prince2 Practitioner
                </Link>
              </li>
              <li>
                <Link href="/lean-six-sigma-green-belt-certification-training" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Lean Six Sigma Green Belt
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact - Column 2 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Corporate Brochure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Contact Us
                </Link>
              </li>
              {POLICY_LINKS.map((policy) => (
                <li key={policy.href}>
                  <Link href={policy.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
<div/>
            {/* Payment Options */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Payment Options</h3>
              <p className="text-gray-300 text-sm mb-4">Cash, Cheque, Online Transfer & Credit Cards</p>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <SiVisa className="w-8 h-5 text-[#2BA6D9]" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <SiMastercard className="w-8 h-5 text-red-500" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <FaUniversity className="w-5 h-4 text-gray-700" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <FaPaypal className="w-6 h-4 text-[#2BA6D9]" />
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Us - Column 3 */}
          <div >
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <div className="flex gap-3 mb-8">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2BA6D9] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="QuickLearn Systems on Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="QuickLearn Systems on X"
              >
                <FaXTwitter className="w-4 h-4 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="QuickLearn Systems on Instagram"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2BA6D9] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="QuickLearn Systems on LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <span className="block font-semibold text-white mb-1">Email:</span>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-white mb-1">Phone:</span>
                  <a href={`tel:+91${process.env.NEXT_PUBLIC_PHONE_PRIMARY}`} className="hover:text-white transition-colors">
                    {process.env.NEXT_PUBLIC_PHONE_PRIMARY} / {process.env.NEXT_PUBLIC_PHONE_SECONDARY}
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-white mb-1">Address:</span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                    aria-label="View QuickLearn Systems office on Google Maps"
                  >
                    {OFFICE_ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                    <span className="inline-block mt-2 text-[#2BA6D9] font-semibold">
                      View on Google Maps →
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
        {/* Disclaimer */}
<div className="border-t border-gray-300 mt-10 pt-6">
  <h4 className="text-sm font-semibold text-gray-200 mb-2">
    DISCLAIMER
  </h4>
  <p className="text-gray-400 text-xs leading-relaxed max-w-4xl">
    All trademarks, service marks, and registered trademarks mentioned herein the website
    are the property of their respective owners.
    <br />
    Any potential violation may be reported to{" "}
    <a
      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
      className="text-gray-300 hover:text-white underline"
    >
      {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
    </a>{" "}
    for correction.
  </p>
</div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2026 {process.env.NEXT_PUBLIC_COMPANY_NAME}. All Rights Reserved. All trademarks, certification names, and logos are the property of their respective owners and are used solely for identification and informational purposes.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}
