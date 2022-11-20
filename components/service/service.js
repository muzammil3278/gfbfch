import React from "react";
import Servicepart from "./servicepart";

export default function service() {
  return (
    <div className="container pt-50 pb-40">
      <div className="row">
        <div className="col-lg-4 col-md-12 text-center">
        <div class="title mt-30 mb-40 text-center">
          <p class="top-text mb-12">OUR SERVICES </p>
          <h2>WHAT WE DO? </h2>
        </div>
        </div>
        
        {/* <a href="" className="main-btn d-sm-none">View all Services</a> */}
        <div className="col-lg-8 col-md-12"><Servicepart />
        <a href="" className="main-btn ">View all Services</a>
      
      </div>
      </div>
    </div>
  );
}
