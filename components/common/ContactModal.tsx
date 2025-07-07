/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in">
        {/* Header */}
        <div className=" text-black px-6 py-4 rounded-t-2xl flex justify-between items-center bg-green-500">
          <h2 className="text-lg font-semibold">Let's Connect</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-red-600 transition"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-sm text-gray-700">
            Ready to start your project? Fill out the form and we&#39;ll get
            back to you within 24 hours.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <textarea
            placeholder="Tell us about your requirements..."
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            rows={4}
            required
          ></textarea>

          <button className="w-full bg-green-400 text-black font-medium py-2.5 rounded-xl hover:bg-green-500 transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
