import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Dashboard from './Dashboard'
import About from './About';
import Elastic from "./Elastic";
import Sofa from "./Sofa"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Sofa/>
    <Elastic/>
    <Footer/>
    </>
  )
}
