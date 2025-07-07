"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 border-b border-gray-100">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-lg md:text-xl text-black leading-snug">
            DVM Solution
            <p className="text-[10px] md:text-xs font-normal text-gray-600">
              Smart Apps. Scalable DevOps. Secure Blockchain.
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-black font-medium">
          <div className="relative">
            <button
              onClick={() => setShowSolutions((prev) => !prev)}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Solutions</span>
              <ChevronDown size={16} />
            </button>
            {showSolutions && (
              <div className="absolute bg-white border rounded shadow-md mt-2 p-2 space-y-2 z-10">
                <Link href="/jiyofresh" className="block hover:text-blue-500">JiyoFresh</Link>
              </div>
            )}
          </div>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/work" className="hover:text-blue-600">How we work</Link>
          <Link href="/casestudy" className="hover:text-blue-600">Case Study</Link>
          <Link href="/carrier" className="hover:text-blue-600">Fly with Us</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-1.5 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 border-t border-gray-100 text-sm text-black font-medium">
          <div className="space-y-1 pt-4">
            <button
              onClick={() => setShowSolutions((prev) => !prev)}
              className="w-full flex items-center justify-between hover:text-blue-600"
            >
              <span>Solutions</span>
              <ChevronDown size={16} />
            </button>
            {showSolutions && (
              <div className="pl-4 space-y-1 text-gray-600">
                <Link href="/jiyofresh" className="block hover:text-blue-500">JiyoFresh</Link>
              </div>
            )}
            <Link href="/services" className="block hover:text-blue-600 mt-2">Services</Link>
            <Link href="/work" className="block hover:text-blue-600 mt-2">How we work</Link>
            <Link href="/casestudy" className="block hover:text-blue-600 mt-2">Case Study</Link>
            <Link href="/carrier" className="block hover:text-blue-600 mt-2">Fly with Us</Link>
            <Link href="/blog" className="block hover:text-blue-600 mt-2">Blog</Link>
          </div>

          <button
            onClick={() => {
              setModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};

export default Header;
