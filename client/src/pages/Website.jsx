import React from 'react'
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";

const Website = () => {
  return (
    <div className="App">
    <Hero />
    <Companies />
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
   </div>
  )
}

export default Website
