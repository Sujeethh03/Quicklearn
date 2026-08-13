import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import BrochureGate from "@/components/BrochureGate";

export const metadata = {
  title: "Download the Corporate Training Brochure | QuickLearn Systems",
  description:
    "Get the QuickLearn Systems corporate brochure — every certification programme we deliver, our training formats, and how corporate engagements run.",
  alternates: { canonical: "/brochure" },
};

export default function BrochurePage() {
  return (
    <>
      <Headers />
      <main className="bg-gray-50 py-14 sm:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <BrochureGate />
        </div>
      </main>
      <Footer />
    </>
  );
}
