import RegisterPageClient from "./RegisterPageClient";

export const metadata = {
  title: "Register Now | QuickLearn Systems - Enrol in Certification Training",
  description: "Register for your certification training course with QuickLearn Systems. Secure your seat for ITIL, PMP, SAFe, Prince2, DevOps, Scrum and more.",
  keywords: "register course, pay now, certification training enrolment, QuickLearn registration, ITIL training enrol",
  openGraph: {
    title: "Register Now - QuickLearn Systems",
    description: "Enrol in your chosen certification course and secure your seat today.",
  },
};

export default function RegisterNow() {
  return <RegisterPageClient />;
}
