import FAQSection from "@/modules/landing/ui/components/faq-section";
import { FeatureSection } from "@/modules/landing/ui/components/feature-section";
import Footer from "@/modules/landing/ui/components/footer";
import { MainSection } from "@/modules/landing/ui/components/main";

const Page = async () => {
  return (
    <div className="">
      <MainSection />
      <FeatureSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default Page;
