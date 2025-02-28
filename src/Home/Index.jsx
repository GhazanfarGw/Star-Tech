import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Startech from "./Startech";
import Business from './Business';
import Partner from "./Partner";
import Specialization from "./Specialization";
import Discover from './Discover';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Partner/>
    <Startech/>
    <Business/>
    <Specialization/>
    <Discover/>
    <Footer/>
    </>
  )
}

export default Index