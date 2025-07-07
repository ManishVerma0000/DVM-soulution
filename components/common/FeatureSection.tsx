"use client";
import React, { useEffect, useRef } from "react";
import { FaMobileAlt, FaServer, FaCloud, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaServer className="text-green-400 text-2xl" />,
    title: "Full-Stack Development",
    description: "Frontend & backend apps built for scale and performance.",
  },
  {
    icon: <FaMobileAlt className="text-green-400 text-2xl" />,
    title: "iOS & Android Apps",
    description: "Cross-platform mobile apps with native performance.",
  },
  {
    icon: <FaCloud className="text-green-400 text-2xl" />,
    title: "DevOps & CI/CD",
    description: "Automated pipelines & cloud-native deployments.",
  },
  {
    icon: <FaLock className="text-green-400 text-2xl" />,
    title: "Blockchain Integration",
    description: "Decentralized, secure, and transparent solutions.",
  },
  {
    icon: <FaServer className="text-green-400 text-2xl" />,
    title: "Scalable Hosting",
    description: "Cloud or on-prem hosting to grow with your business.",
  },
];

const FeatureSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-l from-white text-center relative ">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-20"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="min-w-[250px] flex-shrink-0 p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <div className="mb-3 text-center flex justify-center">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8">
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded shadow">
          Request Demo
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
