import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


function Description() {
    return (
      <>
        <div className="max-w-screen-2xl md:px-10 px-5 mx-auto py-32">
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="md:pt-40 pt-16 md:flex justify-between">
            <div>
            <h5 className="font-displace md:text-5xl text-2xl md:max-w-lg">
                What is Startech FZC?
            </h5>
            </div>

            <div className="max-w-screen-md pt-5 md:pt-0 text-[#292929]">
                <p className="md:text-lg text-sm">
                The legacy of the Startech Fzc was incepted 25Years ago with an aim to manufacture wide range of Products in United Arab Emirates and The Global Leader of the Woven Label and Printed label industry  since 1997. We are Pioneers of label manufacturing in the UAE.
                <br/><br/>
                We are experts in the manufacturing Products of Various Industries. At The Startech, we have more than 25 years of manufacturing experience, mattress Accessories, Upholstery & Furniture accessories, Lifting Sling & Accessories, Safety Harness & Accessories, Garments Accessories.
                </p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Description;
