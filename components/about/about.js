import React from "react";
// first
import Aboutimage from "./comp/left/aboutimg";
import Aboutcontent from "./comp/right/aboutcontent";
// second
import Left from "./comp2/left";
import Right from "./comp2/right";

export default function about() {
  return (
    <>
      <div class="container pt-70 pb-50">
        <div class="row">
          <div class="col-lg-5">
            <Aboutimage />
          </div>
          <div class=" offset-1 col-lg-6 ">
            <Aboutcontent />
          </div>
        </div>
      </div>

      <div className="container  pt-80 pb-40">
        <div className="row">
          <div className="col-lg-6">
            <Left />
          </div>
          <div className="col-lg-6">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}
