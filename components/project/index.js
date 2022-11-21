import React from "react";
import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";
import member from '../../public/personal.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function index() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
  };
  return (
    <>
      <>
        <div class="title mt-30 mb-40 text-center">
          <p class="top-text mb-12">
            Our Project <span></span>
          </p>
          <h2>
            ACCOMPLISHMENTS 
          </h2>
        </div>
      </>
      <Slider {...settings}>
        <div>
          <div class="owl-item ml-40 mr-40 mt-50 mb-50" >
            <div class="item">
              <div class="project">
                <div class="img">
                  <Image
                    src={member}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                  <div class="text px-4">
                    <h3>
                      <Link href="#">Work Name</Link>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="owl-item ml-40 mr-40 mt-50 mb-50" >
            <div class="item">
              <div class="project">
                <div class="img">
                  <Image
                    src={member}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                  <div class="text px-4">
                    <h3>
                      <Link href="#">Work Name</Link>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="owl-item ml-40 mr-40 mt-50 mb-50" >
            <div class="item">
              <div class="project">
                <div class="img">
                  <Image
                    src={member}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                  <div class="text px-4">
                    <h3>
                      <Link href="#">Work Name</Link>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="owl-item ml-40 mr-40 mt-50 mb-50" >
            <div class="item">
              <div class="project">
                <div class="img">
                  <Image
                    src={member}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                  <div class="text pl-10 pr-10">
                    <h3>
                      <Link href="#">Work Name</Link>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
