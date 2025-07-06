"use client";
import React, { useState } from "react";
import {
  FaRegBuilding,
  FaUserFriends,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    icon: <FaRegBuilding className="text-yellow-400" />,
    question: "What industries do you serve?",
    answer:
      "We work with law firms, accounting practices, consultancies, and professional services—plus industries adopting AI, blockchain, and digital automation.",
  },
  {
    icon: <FaUserFriends className="text-yellow-400" />,
    question: "Do we need AI expertise internally?",
    answer:
      "No, our solutions are fully managed. We guide you through strategy, setup, deployment, and ongoing optimization.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-400" />,
    question: "How secure is our data?",
    answer:
      "We implement enterprise-grade security protocols, end-to-end encryption, and secure cloud deployments to safeguard your data.",
  },
  {
    icon: <FaClock className="text-yellow-400" />,
    question: "How quickly can we implement Zedblock?",
    answer:
      "Depending on your scope, initial setup can be completed in days, with full deployment typically within 2–4 weeks.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mb-12">
      <div className="text-center mb-12">
        <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <span className="text-yellow-400 text-xl">❓</span>
        </div>
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2">
          Get answers to common questions about our services and implementation
          process.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md border border-gray-200 w-full">
        <h3 className="text-lg font-semibold px-6 py-4 border-b border-gray-200 text-center">
          Everything you need to know
        </h3>
        {faqs.map((faq, index) => (
          <div key={index} className="border-gray-200">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="bg-yellow-50 p-2 rounded-full">{faq.icon}</div>
                <span className="  text-gray-800 font-bold">
                  {faq.question}
                </span>
              </div>
              <span className="text-gray-500">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-md text-gray-600 ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
