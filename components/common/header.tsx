"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image
            src="/zedblock-logo.png"
            alt="Dvm Logo"
            width={40}
            height={40}
          /> */}
          <div className="font-bold text-xl text-black">
            DVM Solution
            <p className="text-xs font-normal text-gray-600 leading-tight">
              Smart Apps. Scalable DevOps. Secure Blockchain.
            </p>
          </div>
        </Link>

        {/* Nav Items */}
        <nav className="hidden md:flex space-x-8 text-sm text-black font-medium items-center">
          <div className="relative">
            <button
              onClick={() => setShowSolutions((prev) => !prev)}
              className="flex items-center space-x-1"
            >
              <span>Solutions</span>
              <ChevronDown size={16} />
            </button>
            {showSolutions && (
              <div className="absolute bg-white shadow-md p-4 top-8 left-0 rounded">
                {/* Add dropdown links here */}
                <Link href="/solutions/ai">AI Solutions</Link>
              </div>
            )}
          </div>
          <Link href="/services">Services</Link>
          <Link href="/how-we-work">How we work</Link>
          <Link href="/case-study">Case Study</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* Contact Us Button */}
        <button
          onClick={() => setModalOpen(true)}
          className=" px-4 py-1.5 rounded-lg flex items-center space-x-2 text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
            />
          </svg>
          <span>Contact Us</span>
        </button>

        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
