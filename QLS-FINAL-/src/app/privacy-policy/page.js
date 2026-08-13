import PolicyPage from "@/components/PolicyPage";
import { privacyPolicy as policy } from "@/data/policies";

export const metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PolicyPage policy={policy} />;
}
