import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Preloader from "./Preload";
import Home from "./Home/Index"
import Mattress from "./Mattress edge tape/Index"
import Fabric from "./Mattress Fabric/Index"
import Webbing from "./Safe Elastic Webbing/Index"
import Certificates from "./Certificates/Index"
import Catalouge from "./Catalouge/Index"
import About from "./About/Index"
import Contact from "./Contact/Contact"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/mattress-edge" element={ <Mattress/> } />
          <Route path="/mattress-fabric" element={ <Fabric/> } />
          <Route path="/sofa-elastic" element={ <Webbing/> } />
          <Route path="/catalouge" element={ <Certificates/> } />
          <Route path="/certificates" element={ <Catalouge/> } />
          <Route path="/contact-us" element={ <Contact/> } />
        </Routes>
      )}
    </>

  )
}

export default App
                  