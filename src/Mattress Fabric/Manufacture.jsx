// import React from "react";

// const CyberSecuritySection = () => {
//   return (
//     <section className=" text-white py-20 px-5">
//       <div className="max-w-7xl mx-auto flex grid-cols-2 gap-10">
//         {/* Text Section */}
//         <div className="max-w-2xl">
//           <h3 className="text-[#136690] font-semibold mb-2">
//             Our Services
//           </h3>
//           <h2 className="text-3xl font-bold mb-4">
//             Damage statistics from cyberattacks.
//           </h2>
//           {/* Feature List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-[#C3CDD3] text-sm">
//             {[
//               "The most known cyber attack in 2017 disabled 10% of USA computers",
//               "In our country, cyberattacks occur every 14 seconds",
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690]"
//               >
//                 <span className="text-[#136690] text-lg mr-2">✔</span>
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//           <h2 className="text-3xl font-bold mb-4">
//             Your website needs protection
//           </h2>
//           <p className="text-[#C3CDD3]">no less, than a physical store or warehouse</p>
//           <p className="text-[#C3CDD3]">To protect your website is like to set an alarm and to lock a physical store or to hire a security guard to protect your business from intruders</p>
//           {/* Footer Section */}
//         </div>
//         {/* Image Section */}
//         <div className="">
//           <img
//             src="./giphy-2.gif" // Replace with your image URL
//             alt="Cybersecurity Analyst"
//             className="rounded-lg border-4 border-[#136690]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CyberSecuritySection;


import React from 'react'

function Ourservices() {
  return (
    <>
    <div className='pb-20'>
      <div className='max-w-screen-xl mx-auto justify-center md:px-10 px-5'>
        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
            Startech specializes in the manufacture of high carbon spring wires, available in diameters from 1.0 to 5.00mm and suitable for mattress springs according to standards BS5216, ISO/CD8458-2 and GB/T4357. All Startech wires are made in compliance with the major international standards, and by employing high-quality raw materials and cutting edge technologies. We manufacture the following products related to steel wire for Mattress, Sofa and Spring Manufacturers.
        </p>
        <div className=''>
          <div className='py-5'>
            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-2'>
              <a href="./posture-assessment-maturity">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Steel Wire
                </p>
              </a>
              <a href="./threat-risk-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Straightened Steel Wire
                </p>
              </a>
              <a href="./gap-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Frame
                </p>
              </a>
              <a href="./valnerabiliy-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Flattened Steel Wire
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourservices