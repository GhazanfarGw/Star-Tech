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
      {isScrolled ? (
            <header onClick={handleScrollToTop} className="fixed z-50 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#fff] md:py-5 py-2 shadow-md">
              <div className='z-20 lg:block md:block hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                  <div className='flex bg-gradient-to-l from-[#11AE88] to-[#1591B3] rounded-full'>
                    <a 
                      href="/contact-us" className="text-[#ffffff] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto items-center duration-500">
                <div className="flex items-center">
                  <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
                    <div className="z-20 flex-shrink-0 items-center duration-500">
                      <a href="/">
                        <img width={150} className='hidden md:block lg:block items-center duration-500' src='./PNG.png' alt='favicon.png'/>
                        <img width={140} className='block md:hidden lg:hidden items-center duration-500' src='./PNG.png' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className="z-20 text-3xl xl:hidden pt-3 px-3 text-black" onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className="hidden xl:block duration-500 scroll-smooth py-3">
                      <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                        <div className='flex pl-8 items-center'>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Home
                          </a>
                          <a
                            href="/about-us"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            About Us
                          </a>
                          <a
                            href="/mattress-edge"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Mattress Edge Tapes
                          </a>
                          <a
                            href="/mattress-fabric"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Mattress Fabric
                          </a>
                          <a
                            href="/sofa-elastic"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Sofa Elastic Webbing
                          </a>
                          <a
                            href="/catalouge"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Catalouge
                          </a>
                          <a
                            href="/certificates"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#444] hover:text-black font-bold tracking-wide"
                          >
                            Certificates
                          </a>
                          <a
                            href="/contact-us"
                            className="
                            items-center text-base md:text-sm rounded-full border-[#146690] border relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#146690] font-semibold tracking-wide"
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
              <ul className={`block xl:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 text-black ${open ? "left-0" : "left-[-100%]"}
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
                    Mattress Edge Tapes
                  </Link>
                </li>
                <li>
                  <Link to="/mattress-fabric" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Mattress Fabric
                  </Link>
                </li>
                <li>
                  <Link to="/sofa-elastic" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Sofa Elastic Webbing
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
                  <Link to="/contact-us" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Get in Quote!
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#000] pt-8'>
                    The legacy of the Startech was incepted 25Years ago with an aim to manufacture Knitted Products in United Arab Emirates, We are experts in the manufacturing for more than 25 years.
                  </p>
                <li>
                  <Link to="/contact-us" className="hover:bg-[#146690] text-black border border-[#146690] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
            </header>
      ) : (
      <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:pb-2">
        <div className='max-w-screen-2xl mx-auto'>
          <div className='flex bg-[#ffffff] bg-opacity-40 rounded-full'>
            <a 
              href="/contact-us" className="text-[#ffffff] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
              Contact Us
            </a>
        </div>
      </div>
      <div className="mx-auto items-center duration-500 md:pt-8">
        <div className="flex items-center">
          <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full rounded-full duration-500 bg-white bg-opacity-40 px-5">
            <div className="z-20 flex-shrink-0 items-center duration-500">
              <a href="/">
                <img width={180} className='hidden md:block lg:block items-center duration-500' src='./PNG.png' alt='favicon.png'/>
                <img width={170} className='block md:hidden lg:hidden items-center duration-500' src='./PNG.png' alt='favicon.png'/>
              </a>
            </div>
            <div className="z-20 text-3xl xl:hidden pt-3 px-3 text-black" onClick={() => setOpen(!open)}>
              <ion-icon className="text-black" name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <div className="hidden xl:block duration-500 scroll-smooth py-3">
              <div className="items-center flex flex-row space-x-2 justify-end">
                <div className='flex items-center mx-3'>
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
                      Mattress Edge Tapes
                    </a>
                    <a
                      href="/mattress-fabric"
                      className="  
                      items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                    >
                      Mattress Fabric
                    </a>
                    <a
                      href="/sofa-elastic"
                      className="
                      items-center text-base md:text-sm md:hover:border-b border-[#146690] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                    >
                      Sofa Elastic Webbing
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
                    href="/contact-us"
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
              <ul className={`block xl:hidden bg-[#fff] text-black fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
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
                    Mattress Edge Tapes
                  </Link>
                </li>
                <li>
                  <Link to="/mattress-fabric" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Mattress Fabric
                  </Link>
                </li>
                <li>
                  <Link to="/sofa-elastic" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Sofa Elastic Webbing
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
                  <Link to="/contact-us" className="tracking-wider hover:bg-[#000000] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#146690] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Get in Quote!
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#000] pt-8'>
                    The legacy of the Startech was incepted 25Years ago with an aim to manufacture Knitted Products in United Arab Emirates, We are experts in the manufacturing for more than 25 years.
                  </p>
                <li>
                  <Link to="/contact-us" className="hover:bg-[#146690] text-black border border-[#146690] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
            </header>
      )}
    </>
  )};
export default Navbar;