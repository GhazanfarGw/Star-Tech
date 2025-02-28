import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="bg-[#111316] text-white py-12 md:px-10 px-5 md:pt-40 pt-32">
      <div className="max-w-7xl mx-auto md:flex md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="./cybersecurity desk.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#136690]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h2 className="md:text-5xl text-3xl font-light mb-4">
            Our Specialization
          </h2>
          <p className="text-[#C3CDD3] pb-5 md:text-base text-sm">
            We are experts in the Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories:
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8 text-[#C3CDD3]">
            {[
              "Personalized customer support.",
              "We are experts no matter the purpose. Our team of experts is ready to help your company with.",
              "Flexible inventory management and lean manufacturing support",
              "ISO 9001 & 27001 certified for quality & security.",
              "Extensive learning resources, so you’re always confident in your label choice.",
              "Each step in the process is vital to getting your label order to you — accurately and on time.",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-[#111316] md:p-4 p-2 border border-[#136690]"
              >
                <span className="text-[#136690] text-sm mr-2">✔</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;