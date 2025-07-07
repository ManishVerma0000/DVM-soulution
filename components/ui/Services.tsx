import React from "react";
import ServicesSection from "../common/Service";

const ServicesSections: React.FC = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 text-center">
        {/* Triangle Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-green-400" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-black">Fully Managed </span>
          <span className="text-green-400">Web, App & Blockchain</span>
          <br />
          <span className="text-green-400">Tailored </span>
          <span className="text-black">for Your Business</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We design, build, and scale full-stack web and mobile applications
          with seamless <span className="font-medium">DevOps</span> integration.
          From robust backends to intuitive UIs, we ensure high performance,
          reliability, and rapid delivery. We also implement{" "}
          <span className="font-medium">blockchain solutions</span> to keep your
          business secure, transparent, and future-ready.
        </p>
      </section>
      <ServicesSection />
    </>
  );
};

export default ServicesSections;
