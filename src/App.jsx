import React from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Brand from "./components/brand/Brand";
import Residencies from "./components/recidencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import Started from "./components/started/Started";
import Footer from "./components/footer/Footer";

const App = () =>{
  return(
    <>
      <Header/>
      <Hero/>
      <Brand/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Started/>
      <Footer/>
    </>
  )
}
export default App;
