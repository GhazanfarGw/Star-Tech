import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Dashboard from './Dashboard'
import About from './About'
import Steps from "./Steps"
import Business from "../Home/Business"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Steps/>
    <Business/> 
    <Footer/>
    </>
  )
}

