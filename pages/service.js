import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Feedback from "../components/feedback";
import Service from "../components/service/service";

export default function service() {
  return (
    <>
    
    <Navbar />
      <Service />
      <Feedback />
      <Footer />
    </>
  );
}
