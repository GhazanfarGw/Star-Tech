import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Adhesives = () => {
            useEffect (() => {
                Aos.init ();
              }, [])
    return (
        <>
        <div className='bg-white'>
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl md:py-20 pt-10 border-b md:px-10 px-5'>
                <div className=''>
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#000] md:text-4xl text-2xl justify-center pt-5'>
                        Mattress Adhesives
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                        Mattress adhesive plays an important role in the mattress and bed making industry. The glue is responsible for keeping the different layers of mattresses together by bonding materials that are under the cover. Mattress adhesive can be used for instance for toppers, pocket spring and sandwich mattresses as well as open and closed cell foam mattresses, 7 zone mattresses and gel and memory foam mattresses.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#65666d] py-2 md:text-base text-sm leading-normal'>
                        The mattress and bed making industry is currently experiencing changes in regards of materials and material quality: more and more foams are used to make mattresses, and the need for efficient solutions is becoming paramount. Therefore, the mattress adhesives market is shifting towards more sustainable solutions such as hot melt glues and advanced water based adhesives. At the same time the requirements and need for mattress glue are greater than ever: the finished products must be long lasting, well ventilated, efficient to pack and transport as well as easy to clean and store without compensation on the quality.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Adhesives;