import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaCubes } from "react-icons/fa";

const services = [
  {
    icon: <FaCubes className="text-indigo-600 text-2xl" />,
    title: "Blockchain Solutions",
    subtitle: "Secure, decentralized systems",
    description:
      "We build robust blockchain infrastructure and smart contracts for businesses adopting decentralized tech.",
  },
  {
    icon: <FaMobileAlt className="text-purple-600 text-2xl" />,
    title: "Mobile App Development",
    subtitle: "iOS & Android tailored apps",
    description:
      "End-to-end app development using React Native, Kotlin, and Swift—built for performance and scalability.",
  },
  {
    icon: <FaServer className="text-green-600 text-2xl" />,
    title: "DevOps & CI/CD",
    subtitle: "Automated deployment pipelines",
    description:
      "Streamline your operations with scalable cloud infrastructure, CI/CD pipelines, and performance monitoring.",
  },
  {
    icon: <FaCode className="text-green-600 text-2xl" />,
    title: "Full-Stack Web Development",
    subtitle: "Modern, scalable web apps",
    description:
      "We craft web platforms using React, Next.js, Node.js, and more—focused on UI/UX and backend reliability.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-green-400">Services</span>
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          A look at how we make your workflow simple.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="bg-gray-100 rounded-lg w-10 h-10 flex justify-center align-middle mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{service.subtitle}</p>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
