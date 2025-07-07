import Head from "next/head";
import FAQSection from "../../components/common/FAQSection";
import FeatureSection from "../../components/common/FeatureSection";
import HeroSection from "../../components/common/HeroSection";
import ServicesSection from "../../components/common/Service";
import MovingIntegrations from "../../components/common/MovingIntegrations";

export default function Home() {
  return (
    <>
      <Head>
        <title>DVM Tech | Web, Mobile & Cloud Solutions in India</title>
        <meta
          name="description"
          content="DVM Tech is a leading software company in India offering web development, mobile app development, DevOps, and blockchain services tailored for startups and enterprises."
        />
        <meta
          name="keywords"
          content="DVM, DVM Tech, DVM Technology, Web development India, Mobile App India, DevOps, Blockchain, Software Company India , Jiyofresh,DVM Solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DVM Tech" />
        <link rel="canonical" href="https://dvmsolution.in/" />

        {/* Open Graph for Social Media Preview */}
        <meta property="og:title" content="DVM Tech | Web & Mobile App Experts" />
        <meta
          property="og:description"
          content="We build scalable, reliable, and secure solutions for the web, mobile, and cloud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dvmsolution.in/" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DVM Tech - Transforming Ideas Into Software" />
        <meta
          name="twitter:description"
          content="India's trusted tech company for web, mobile, and cloud solutions."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <HeroSection />
      <FeatureSection />
      <MovingIntegrations/>
      <ServicesSection />
      <FAQSection />
    </>
  );
}
