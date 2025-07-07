import FAQSection from "../../components/common/FAQSection";
import FeatureSection from "../../components/common/FeatureSection";
import HeroSection from "../../components/common/HeroSection";
import ServicesSection from "../../components/common/Service";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
