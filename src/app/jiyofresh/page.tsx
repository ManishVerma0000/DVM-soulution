import React from "react";
import CustomCarousel from "../../../components/common/CustomCarousel";

const JiyoFreshSection: React.FC = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 text-center bg-gradient-to-br from-blue-100 via-white to-green-700">
        <div className="flex justify-center mb-6">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-green-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-black">Fresh Fruits & Veggies</span>
          <br />
          <span className="text-green-500">Delivered to Your Doorstep</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          <strong>JiyoFresh</strong> is your trusted app for daily fresh fruits
          and vegetables. Available on{" "}
          <span className="font-medium">Android</span> and{" "}
          <span className="font-medium">iOS</span>, we are bringing farm-fresh
          produce to your home with just a few taps. Currently serving{" "}
          <strong>Narnaul</strong> and <strong>Rewari</strong>, we’re on a
          mission to expand to more Tier 2 cities, and soon to major metros
          across India.
        </p>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">
          What’s Fresh Today?
        </h2>
        <CustomCarousel />
      </section>
    </>
  );
};

export default JiyoFreshSection;
