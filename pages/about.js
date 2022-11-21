import React from "react";

import Navbar from "../components/navbar";
import About from "../components/about/about";
import Footer from "../components/footer";
import Feedback from "../components/feedback";

export default function about() {
  return (
    <>
    
    {/* <Navbar /> */}
      <About />
      <Feedback /> 
      <Footer />
    </>
  );
}
