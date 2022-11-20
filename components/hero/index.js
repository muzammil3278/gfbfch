import React from "react";
import Social from "../about/comp/right/social";
import Typewriter from "typewriter-effect";

export default function index() {
  return (
    <div className="hero ">
      <div className="container">
        <div className="row align-item-center ">
          <div className="col-lg-6 col-md-5 t-y-200 t-y-lg-200 t-y-m-200 t-y-s-200">
            <div className="hero-left">
              <span>HEY THERE !</span>
              <h2 className="mt-20 fs-lg-50 fw-500 mb-20">
                I AM MUHAMMAD MUZAMMIL SAFDAR
              </h2>
              <div className="type">
                <span>
                  <Typewriter
                    options={{
                      strings: ["WEB DEVELOPER", "DESIGNER", "VEDIO EDITING"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <Social />

              <a href="/" className="main-btn">
                See My Work
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 mt-50 d-sm-1">
            <img
              src="https://preview.colorlib.com/theme/breed2/img/banner/home-right.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}