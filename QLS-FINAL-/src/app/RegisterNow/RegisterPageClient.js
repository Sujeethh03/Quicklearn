"use client";

import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSE_GROUPS } from "@/data/courseRegistry";
import { COUNTRIES } from "@/data/countries";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, MapPin, BookOpen, CreditCard,
  ShieldCheck, Loader2, CheckCircle2, AlertCircle,
} from "lucide-react";
import { useState } from "react";

const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
};

const staggerForm = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function SectionLabel({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold text-[#2BA6D9] uppercase tracking-widest mb-4">
      {icon}
      {label}
    </div>
  );
}

function TextInput({ name, type = "text", placeholder, value, onChange, focused, setFocused, required, min }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused("")}
        required={required}
        min={min}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2BA6D9] focus:border-transparent transition-all duration-300 bg-white text-slate-800 placeholder:text-slate-400"
      />
      <FocusBar active={focused === name} />
    </div>
  );
}

function SelectInput({ name, value, onChange, focused, setFocused, required, children }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused("")}
        required={required}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2BA6D9] focus:border-transparent transition-all duration-300 bg-white text-slate-800 appearance-none"
      >
        {children}
      </select>
      <FocusBar active={focused === name} />
    </div>
  );
}

function FocusBar({ active }) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-[#2BA6D9] to-indigo-500"
      initial={{ width: 0 }}
      animate={{ width: active ? "100%" : "0%" }}
      transition={{ duration: 0.3 }}
    />
  );
}

const PAYMENT_METHODS = [
  { label: "UPI / GPay / PhonePe", icon: "📱" },
  { label: "Net Banking / NEFT / RTGS", icon: "🏦" },
  { label: "Debit / Credit Card", icon: "💳" },
  { label: "International Wire Transfer", icon: "🌐" },
];

const TRUST_POINTS = [
  { icon: "🏆", text: "Accredited & Certified Trainers" },
  { icon: "📜", text: "Globally Recognised Certifications" },
  { icon: "🔄", text: "Free Reschedule (7-day notice)" },
  { icon: "💯", text: "95%+ Pass Rate" },
  { icon: "🌍", text: "Online & Classroom Batches" },
  { icon: "🎓", text: "Post-training Support Included" },
];

const HOW_IT_WORKS = [
  { title: "Fill the Form", desc: "Complete all required fields and choose your course." },
  { title: "Submit & Confirm", desc: "Our team reviews your registration and sends a confirmation email." },
  { title: "Receive Payment Link", desc: "We share a secure payment link or bank details within 24 hours." },
  { title: "Seat Confirmed", desc: "Once payment is received, your seat is reserved and materials are shared." },
];

const EMPTY_FORM = {
  firstName: "", lastName: "", email: "", phone: "",
  address1: "", address2: "", country: "", state: "", city: "", pincode: "",
  nameOnCertificate: "", course: "", amount: "", specialRequirements: "",
  agreeTerms: false,
};

export default function RegisterPageClient() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreeTerms) {
      setStatus("error");
      setStatusMsg("Please accept the Terms & Conditions to proceed.");
      return;
    }
    setStatus("loading");
    setStatusMsg("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMsg("Registration submitted! Our team will contact you with payment details within 24 hours.");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      <Headers />

      {/* Hero */}
      <section className="relative h-[460px] w-full overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12, opacity: 0, x: 80 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -80 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/hero_project_program_management.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-[#0d3a5c]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-3xl text-white">
              <motion.div
                variants={slideInLeft}
                className="inline-flex items-center gap-2 bg-[#2BA6D9]/20 border border-[#2BA6D9]/40 text-[#7dd3f7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                Secure Registration
              </motion.div>

              <motion.h1
                variants={slideInLeft}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-5 tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  Register Now
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Enrol in your chosen course and secure your seat. Fill in the details below and our team will confirm your registration within 24 hours.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-14 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerForm}
              className="lg:col-span-7 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#0d3a5c] via-[#155a8a] to-[#2BA6D9] text-white px-8 py-7">
                <motion.h2 variants={fieldVariant} className="text-2xl font-bold mb-1">
                  Registration &amp; Payment Form
                </motion.h2>
                <motion.p variants={fieldVariant} className="text-blue-100 text-sm">
                  All fields marked with * are required
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-7">

                {/* Personal Info */}
                <motion.div variants={fieldVariant}>
                  <SectionLabel icon={<User className="w-4 h-4" />} label="Personal Information" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <TextInput name="firstName" placeholder="First Name *" value={form.firstName} onChange={handleChange} focused={focused} setFocused={setFocused} required />
                    <TextInput name="lastName" placeholder="Last Name *" value={form.lastName} onChange={handleChange} focused={focused} setFocused={setFocused} required />
                    <TextInput name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} focused={focused} setFocused={setFocused} required />
                    <TextInput name="phone" type="tel" placeholder="Phone Number *" value={form.phone} onChange={handleChange} focused={focused} setFocused={setFocused} required />
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div variants={fieldVariant}>
                  <SectionLabel icon={<MapPin className="w-4 h-4" />} label="Address Details" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <TextInput name="address1" placeholder="Address Line 1" value={form.address1} onChange={handleChange} focused={focused} setFocused={setFocused} />
                    </div>
                    <div className="sm:col-span-2">
                      <TextInput name="address2" placeholder="Address Line 2 (optional)" value={form.address2} onChange={handleChange} focused={focused} setFocused={setFocused} />
                    </div>
                    <SelectInput name="country" value={form.country} onChange={handleChange} focused={focused} setFocused={setFocused}>
                      <option value="">Select Country</option>
                      {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </SelectInput>
                    <TextInput name="state" placeholder="State / Province" value={form.state} onChange={handleChange} focused={focused} setFocused={setFocused} />
                    <TextInput name="city" placeholder="City" value={form.city} onChange={handleChange} focused={focused} setFocused={setFocused} />
                    <TextInput name="pincode" placeholder="Zip / Pincode" value={form.pincode} onChange={handleChange} focused={focused} setFocused={setFocused} />
                  </div>
                </motion.div>

                {/* Course & Payment */}
                <motion.div variants={fieldVariant}>
                  <SectionLabel icon={<BookOpen className="w-4 h-4" />} label="Course & Payment" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <SelectInput name="course" value={form.course} onChange={handleChange} focused={focused} setFocused={setFocused} required>
                        <option value="">Choose Course *</option>
                        {COURSE_GROUPS.map((g) => (
                          <optgroup key={g.group} label={g.group}>
                            {g.options.map((o) => <option key={o} value={o}>{o}</option>)}
                          </optgroup>
                        ))}
                      </SelectInput>
                    </div>
                    <TextInput name="nameOnCertificate" placeholder="Name on Certificate" value={form.nameOnCertificate} onChange={handleChange} focused={focused} setFocused={setFocused} />
                    {/* Amount with ₹ prefix */}
                    <div className="relative">
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#2BA6D9] transition-all duration-300 bg-white">
                        <span className="px-3 py-3 bg-slate-50 text-slate-500 font-semibold border-r border-slate-200 text-sm select-none">₹</span>
                        <input
                          type="number"
                          name="amount"
                          value={form.amount}
                          onChange={handleChange}
                          onFocus={() => setFocused("amount")}
                          onBlur={() => setFocused("")}
                          required
                          min="1"
                          placeholder="Amount in INR *"
                          className="flex-1 px-3 py-3 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>
                      <FocusBar active={focused === "amount"} />
                    </div>
                  </div>
                </motion.div>

                {/* Special Requirements */}
                <motion.div variants={fieldVariant} className="relative">
                  <textarea
                    name="specialRequirements"
                    value={form.specialRequirements}
                    onChange={handleChange}
                    onFocus={() => setFocused("special")}
                    onBlur={() => setFocused("")}
                    rows={4}
                    placeholder="Any special requirements or queries? (optional)"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2BA6D9] focus:border-transparent transition-all duration-300 bg-white text-slate-800 placeholder:text-slate-400 resize-none"
                  />
                  <FocusBar active={focused === "special"} />
                </motion.div>

                {/* Terms */}
                <motion.div variants={fieldVariant} className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={form.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-[#2BA6D9] cursor-pointer flex-shrink-0"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                      I agree to the{" "}
                      <span className="text-[#2BA6D9] font-semibold underline">Terms &amp; Conditions</span>{" "}
                      and{" "}
                      <span className="text-[#2BA6D9] font-semibold underline">Cancellation &amp; Refund Policy</span>.
                      I understand that the registration fee is non-refundable after 7 days from the date of payment.
                    </span>
                  </label>
                  <p className="text-xs text-slate-400 pl-7">
                    Your data is protected. We will never share your information with third parties.
                  </p>
                </motion.div>

                {/* Status */}
                {status && status !== "loading" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-xl text-sm font-medium ${
                      status === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status === "success"
                      ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                    <span>{statusMsg}</span>
                  </motion.div>
                )}

                {/* Submit */}
                <motion.div variants={fieldVariant}>
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    className="w-full bg-gradient-to-r from-[#2BA6D9] to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-[#1e90c0] hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading"
                      ? <Loader2 className="w-5 h-5 animate-spin" />
                      : <CreditCard className="w-5 h-5" />}
                    {status === "loading" ? "Submitting..." : "Register & Pay Now"}
                  </motion.button>
                  <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secure form — your data is encrypted and protected
                  </p>
                </motion.div>

              </form>
            </motion.div>

            {/* Right Panel */}
            <div className="lg:col-span-5 space-y-6">

              {/* How it Works */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7"
              >
                <h3 className="text-base font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#2BA6D9] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  How Registration Works
                </h3>
                <ol className="space-y-4">
                  {HOW_IT_WORKS.map((item, i) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2BA6D9] to-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Payment Methods */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7"
              >
                <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#2BA6D9]" />
                  Accepted Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {PAYMENT_METHODS.map((m) => (
                    <div key={m.label} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 font-medium">
                      <span className="text-base">{m.icon}</span>
                      {m.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why QuickLearn */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-[#0d3a5c] to-[#2BA6D9] rounded-2xl p-7 text-white shadow-lg"
              >
                <h3 className="text-base font-bold mb-5">Why QuickLearn?</h3>
                <div className="space-y-3">
                  {TRUST_POINTS.map((b) => (
                    <div key={b.text} className="flex items-center gap-3 text-sm">
                      <span className="text-base">{b.icon}</span>
                      <span className="text-white/90">{b.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Help */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7"
              >
                <h3 className="text-base font-bold text-slate-800 mb-4">Need Help Registering?</h3>
                <div className="space-y-3">
                  <a
                    href={`tel:+91${process.env.NEXT_PUBLIC_PHONE_PRIMARY}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-[#2BA6D9]/10 transition-colors duration-200 text-sm text-slate-700 font-medium"
                  >
                    <Phone className="w-4 h-4 text-[#2BA6D9]" />
                    {process.env.NEXT_PUBLIC_PHONE_PRIMARY}
                  </a>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-[#2BA6D9]/10 transition-colors duration-200 text-sm text-slate-700 font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#2BA6D9]" />
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
