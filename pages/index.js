import React from "react";
import About from "../components/about/about";
import Service from "../components/service/service";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Project from "../components/project";
import Feedback from "../components/feedback";
import Footer from "../components/footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Feedback /> 
      <Footer />
    </>
  );
}