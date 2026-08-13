import PolicyPage from "@/components/PolicyPage";
import { termsConditions as policy } from "@/data/policies";

export const metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return <PolicyPage policy={policy} />;
}
