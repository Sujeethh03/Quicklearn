import PolicyPage from "@/components/PolicyPage";
import { refundPolicy as policy } from "@/data/policies";

export const metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <PolicyPage policy={policy} />;
}
