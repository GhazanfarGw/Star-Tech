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
        <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000000] md:text-4xl text-2xl justify-center pt-5'>
            Felt
        </h1>
        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
            We have the ability to manufacture “FELT” between 400 gram/m² – 2000 gram/m² with advanced and highest technology machinery manufacturing lines.
        </p>
        <div className=''>
          <div className='py-5'>
            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-2'>
              <a href="./posture-assessment-maturity">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Hard Felt
                </p>
              </a>
              <a href="./threat-risk-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Jute Felt
                </p>
              </a>
              <a href="./gap-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Ultra Hard Felt
                </p>
              </a>
              <a href="./valnerabiliy-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Soft Cotton Felt
                </p>
              </a>
              <a href="./privacy-risk-impacty">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Medium Hard Felt
                </p>
              </a>
              <a href="./architecture-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Hard Cotton Felt
                </p>
              </a>
              <a href="./ransomware-preparedness-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Soft Felt
                </p>
              </a>
              <a href="./ransomware-preparedness-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                    Original Wool Felt
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