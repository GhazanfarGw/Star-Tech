import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-black py-12 md:px-10 px-5 md:pt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full mt-10 hidden md:block lg:block">
          <img
            src="./47mm-Stripe-Polyester-Mattress-Edge-Tape-Mattress-Binding-Tape.avif" // Replace with your image URL
            alt="Analyst"
            className="rounded-lg border-4 border-[#000000]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl md:pt-0 text-sm md:text-base">
          <h2 className="md:text-5xl text-3xl font-light mb-4">
            Our Specialization
          </h2>
          <p className="text-[#65666d] py-2 md:text-base text-sm leading-normal">
            We are experts in the Mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories:
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8 text-[#000]">
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
                className="flex items-center border border-[#000000] md:p-4 p-2"
              >
                <span className="text-[#65666d] text-sm mr-2">✔</span>
                <span className="text-[#65666d] text-sm leading-normal">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;