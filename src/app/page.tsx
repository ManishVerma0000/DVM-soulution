import FAQSection from "../../components/common/FAQSection";
import FeatureSection from "../../components/common/FeatureSection";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header";
import HeroSection from "../../components/common/HeroSection";
import ServicesSection from "../../components/common/Service";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </>
  );
}
