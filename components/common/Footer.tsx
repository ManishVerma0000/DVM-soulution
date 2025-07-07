import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FiPhone, FiMail, FiCalendar } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 text-gray-600 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          {/* <img src="/logo.png" alt="Dvm Logo" className="h-10 mb-4" /> */}
          <p className="text-sm leading-relaxed">
            Accelerating growth with scalable DevOps, full-stack apps, and
            secure blockchain solutions.
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-gray-600">
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* Business Solutions */}
        <div>
          <h4 className="text-black font-semibold mb-3">Business Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Customer Service</li>
            <li>Finance</li>
            <li>Human Resources</li>
            <li>IT Security</li>
            <li>Manufacturing</li>
            <li>Sales & Marketing</li>
          </ul>
        </div>

        {/* AI Solutions */}
        <div>
          <h4 className="text-black font-semibold mb-3">AI Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>AI Webinar Host</li>
            <li>Research Assistant</li>
            <li>SEO Optimizer</li>
            <li>Social Media Manager</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-black font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-lg" />
              +91 70563 23474
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-lg" />
              support@dvmsolution.in
            </li>
            <li className="flex items-center gap-2">
              <FiCalendar className="text-lg" />
              Book a 30-minute call
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-center text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <span>© 2025 DVM Solution. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
