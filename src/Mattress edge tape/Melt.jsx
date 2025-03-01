import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-black md:py-12 md:px-10 px-5 md:pt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full my-10">
          <img
            src="./47mm-Stripe-Polyester-Mattress-Edge-Tape-Mattress-Binding-Tape.avif" // Replace with your image URL
            alt="Analyst"
            className="rounded-lg border-4 border-[#403F68]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl md:pt-0 text-sm md:text-base">
          <h2 className="text-[#000] md:text-4xl text-2xl justify-center pt-5">
            Hot Melt Adhesives
          </h2>
          <p className="text-[#65666d] py-2 md:text-base text-sm leading-normal">
            Hot melt adhesives do not require waiting for water to evaporate to form a bond. As a result, they keep manufacturing lines running smoothly and efficiently. They are also environmentally friendly (low VOC) and 100% solids. Additionally, hot melt adhesives are versatile. They can be used for the following mattress assembly applications:
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8 text-[#65666d] pt-5">
            {[
              "Foam to Foam",
              "Foam to Textile",
              "Textile to Textile",
              "Coil to Textile",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-[#E0E0E9] md:p-4 p-2 border border-[#403F68]"
              >
                <span className="text-[#403F68] text-sm mr-2">✔</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:py-10 pb-10 md:mt-20">
        <div className="items-center max-w-screen-xl justify-center mx-auto">
          <div className='md:flex grid-cols-2 gap-10 mx-auto justify-center text-center'>
            <div className='border border-opacity-20 rounded-md xl:pb-10 max-w-md md:mt-0 mt-5'>
              <h1 className='bg-[#403F68] text-white font-semibold py-4 px-3'>
                Solvent Based Adhesive
              </h1>
              <p className='text-[#65666d] py-5 px-5 md:text-base text-sm leading-normal'>
                The most traditional form of mattress adhesives are solvent-based systems. These systems provide strong bonds, generally stronger than water based mattress glues. They can be applied by roll coating, spray or beads and dots.
              </p>
            </div>
            <div className='border border-opacity-20 rounded-md xl:pb-10 max-w-md md:mt-0 mt-5'>
              <h1 className='bg-[#403F68] text-white font-semibold py-4 px-3'>
                Water Based Adhesives
              </h1>
              <p className='text-[#65666d] py-5 px-5 md:text-base text-sm leading-normal'>
                Water-based mattress adhesive results in environmentally friendly products. Water-based adhesives are a step towards more sustainable bonding in the mattress industry. They do not form as strong bonds as their solvent based alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;