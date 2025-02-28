import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Dashboard from './Dashboard'
import About from './About'
import Tape from "./Tape"
import Adhesives from './Adhesives'
import Melt from './Melt'

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Tape/> 
    <Adhesives/>
    <Melt/>   
    <Footer/>
    </>
  )
}
