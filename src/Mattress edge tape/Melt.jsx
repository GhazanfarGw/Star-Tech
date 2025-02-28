import React from "react";

const Melt = () => {
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
            Hot Melt Adhesives
          </h2>
          <p className="text-[#C3CDD3] pb-5 md:text-base text-sm">
            Hot melt adhesives do not require waiting for water to evaporate to form a bond. As a result, they keep manufacturing lines running smoothly and efficiently. They are also environmentally friendly (low VOC) and 100% solids. Additionally, hot melt adhesives are versatile. They can be used for the following mattress assembly applications:
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8 text-[#C3CDD3]">
            {[
              "Foam to Foam",
              "Foam to Textile",
              "Textile to Textile",
              "Coil to Textile",
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
          <div className="py-10 mt-20">
            <div className="md:px-10 px-5 items-center max-w-screen-xl justify-center mx-auto">
                <div className="grid grid-cols-2 mx-auto justify-center gap-10">
                    <div className="text-white border border-white px-10 py-10 border-opacity-20 hover:scale-105 duration-200">
                        <h1 className="md:text-xl text-sm">
                            Solvent Based Adhesive
                        </h1>
                        <p className="pt-5 text-[#9c9c9c]">
                            The most traditional form of mattress adhesives are solvent-based systems. These systems provide strong bonds, generally stronger than water based mattress glues. They can be applied by roll coating, spray or beads and dots.
                        </p>
                    </div>
                    <div className="text-white border border-white px-10 py-10 border-opacity-20 hover:scale-105 duration-200">
                        <h1 className="md:text-xl text-sm">
                            Water Based Adhesives
                        </h1>
                        <p className="pt-5 text-[#9c9c9c]">
                            Water-based mattress adhesive results in environmentally friendly products. Water-based adhesives are a step towards more sustainable bonding in the mattress industry. They do not form as strong bonds as their solvent based alternatives.
                        </p>
                    </div>
                </div>
            </div>
          </div>

    </section>
  );
};

export default Melt;