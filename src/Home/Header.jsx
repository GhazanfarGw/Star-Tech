import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
            <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:py-2 md:bg-transparent bg-white border-b border md:border-0 md:border-b-0">
              <div className='z-20 lg:block md:block hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                  <div className='flex bg-[#000000] bg-opacity-80 rounded-full'>
                    <a 
                      href="/contact-us" className="text-[#ffffff] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto items-center duration-500 pt-2">
                <div className="flex items-center">
                  <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
                    <div className="z-20 flex-shrink-0 items-center duration-500">
                      <a href="/">
                        <img width={120} className='hidden md:block lg:block items-center duration-500' src='./PNG.png' alt='favicon.png'/>
                        <img width={100} className='block md:hidden lg:hidden items-center duration-500' src='./PNG.png' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className="z-20 text-3xl md:hidden pt-3 px-3 text-black" onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className="hidden lg:block duration-500 scroll-smooth bg-[#000000] bg-opacity-80 rounded-full py-3 px-5">
                      <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                        <div className='flex pl-8 items-center'>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Home
                          </a>
                          <a
                            href="/about-us"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            About Us
                          </a>
                          <a
                            href="/mattress-edge"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Mattress Tape Edge
                          </a>
                          <a
                            href="/mattress-fabric"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Mattress Fabric
                          </a>
                          <a
                            href="/safe-elastic"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Safe Elastic Webbing
                          </a>
                          <a
                            href="/catalouge"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Catalouge
                          </a>
                          <a
                            href="/certificates"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                          >
                            Certificates
                          </a>
                          <a
                            href="/register"
                            className="
                            items-center text-base md:text-sm bg-white hover:bg-opacity-5 rounded-full border-[#146690] relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#146690] font-semibold tracking-wide"
                          >
                            Get in Quote!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile nav */}
              <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 text-black ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/mattress-edge" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Mattress Tape Edge
                  </Link>
                </li>
                <li>
                  <Link to="/mattress-fabric" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Mattress Fabric
                  </Link>
                </li>
                <li>
                  <Link to="/safe-elastic" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Safe Elastic Webbing
                  </Link>
                </li>
                <li>
                  <Link to="/catalouge" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Catalouge
                  </Link>
                </li>
                <li>
                  <Link to="/certificates" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Get in Quote!
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#000] pt-8'>
                    The legacy of the Startech Fzc was incepted 25Years ago with an aim to manufacture wide range of Products in United Arab Emirates. The Global Leader of the Woven Label and Printed label industry since 1997. We are Pioneers of label manufacturing in the UAE.
                  </p>
                <li>
                  <Link to="/contact-us" className="hover:bg-[#146690] text-black border border-[#146690] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
           </header>
    </>
  )};
export default Navbar;
