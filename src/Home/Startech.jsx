import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Description() {
    useEffect (() => {
      Aos.init ();
    }, [])
    return (
      <>
        <div className="max-w-screen-2xl md:px-10 px-5 mx-auto md:py-32 pb-10 border-b">
          <div className="md:pt-40 pt-16 md:flex justify-between">
            <div>
            <h5 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="font-displace md:text-5xl text-2xl md:max-w-lg">
              What is Startech?
            </h5>
            </div>

            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className="max-w-screen-md pt-5 md:pt-0 text-[#65666d] md:text-base text-sm leading-normal">
              <p className="">
                The legacy of the Startech was incepted 25Years ago with an aim to manufacture Knitted Products in United Arab Emirates.
                <br/><br/>
                  We are experts in the manufacturing for more than 25 years.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Description;