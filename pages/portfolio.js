import React from "react";

import Navbar from "../components/navbar";
import Project from "../components/project";
import Footer from "../components/footer";
import Feedback from "../components/feedback";

export default function portfolio() {
  return (
    <>
      <Navbar />
      <Project />
      <Feedback />
      <Footer />
    </>
  );
}
