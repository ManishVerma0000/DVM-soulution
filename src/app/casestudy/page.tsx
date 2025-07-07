import Head from "next/head";
import CaseStudiesPage from "../../../components/ui/CaseStudy";

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Case Studies | DVM Tech - Web & App Development</title>
        <meta
          name="description"
          content="Explore real-world case studies from DVM Tech showcasing innovative solutions in blockchain, Kotlin development, and DevOps implementation."
        />
        <meta
          name="keywords"
          content="DVM Tech, case studies, blockchain, Kotlin, DevOps, software development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dvmsolution.in/case-studies" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Case Studies | DVM Tech" />
        <meta
          property="og:description"
          content="Discover how DVM Tech solved real-world challenges using blockchain, Kotlin, and DevOps technologies."
        />
        <meta property="og:url" content="https://dvmsolution.in/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | DVM Tech" />
        <meta
          name="twitter:description"
          content="DVM Tech's innovative tech solutions."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <CaseStudiesPage />
    </>
  );
}
