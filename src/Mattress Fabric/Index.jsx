import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import Dashboard from './Dashboard';
import About from './About';
import Felt from "./Felt";
import Manufacture from "./Manufacture";
import Spring from "./Spring";

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Felt/>
    <Manufacture/>
    <Spring/>
    <Footer/>
    </>
  )
}

