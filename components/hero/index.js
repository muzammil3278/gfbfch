import React from "react";
import Social from "../about/comp/right/social";
import Typewriter from "typewriter-effect";
import Link from 'next/link'
import Image from "next/image";
import man from '../../public/man.webp'

export default function index() {
  return (
    <div className="hero ">
      <div className="container">
        <div className="row align-item-center ">
          <div className="col-lg-6 col-md-5 t-y-200">
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

              <Link href="/" className="main-btn">
                See My Work
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 mt-50 d-lg-block d-md-none d-sm-none d-sx-none">
            <Image
              src={man}
              alt=""
              
      layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}