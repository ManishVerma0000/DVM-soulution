// pages/join-us.tsx
"use client";
import React, { useState } from "react";
import Head from "next/head";

export default function JoinUs() {
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    console.log("Resume submitted:", file.name);
    setSuccess(true);
  };

  return (
    <>
      <Head>
        <title>Join Us - Drop Your Resume | DVM Technology</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-700 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-2xl w-full border border-gray-200">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
            Join Our Team
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We're looking for talented individuals. Drop your resume below and
            let's build something great together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume{" "}
                <span className="text-xs text-gray-400">(PDF only)</span>
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-black-700
                hover:file:bg-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-700 text-white font-semibold rounded-xl hover:opacity-90 transition"
            >
              Submit Resume
            </button>

            {success && (
              <div className="text-green-600 text-center font-medium pt-2">
                ✅ Resume submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
