import PolicyPage from "@/components/PolicyPage";
import { disclaimerPolicy as policy } from "@/data/policies";

export const metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return <PolicyPage policy={policy} />;
}
