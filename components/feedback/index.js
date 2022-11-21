import React from "react";
import Slider from "react-slick";
import image from '../../public/personal.jpg'
import Image from "next/image";
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
    ]
  };
  return (
    <><>
      <div class="title mb-40 mt-26 text-center">
        <p class="top-text mb-12">Our Service <span></span></p>
        <h2>What Service We <br />
          Offer For You </h2>
      </div>
    </><Slider {...settings}>

        <div>
          <div class="feedback ml-20 mr-20 mt-50 mb-50">
            <div class="top">
              <div class="img">
                <Image src={image} alt="" />
              </div>
              <div class="comment ml-20">
                <h2 className="fs-18 text-primary">a</h2>
                <span className="fs-14 text-gray">UI/UX Designer</span>
              </div>
            </div>
            <p>
              Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt
              utore etstes dolore magna aliqua. Ut imminim restai veniam, quis
              nostrud.
            </p>
          </div>
        </div>
        <div>
          <div class="feedback ml-20 mr-20 mt-50 mb-50">
            <div class="top">
              <div class="img">
                <Image src={image} alt="" />
              </div>
              <div class="comment ml-20">
                <h2 className="fs-18 text-primary">b</h2>
                <span className="fs-14 text-gray">UI/UX Designer</span>
              </div>
            </div>
            <p>
              Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt
              utore etstes dolore magna aliqua. Ut imminim restai veniam, quis
              nostrud.
            </p>
          </div>
        </div>
        <div>
          <div class="feedback ml-20 mr-20 mt-50 mb-50">
            <div class="top">
              <div class="img">
                <Image src={image} alt="" />
              </div>
              <div class="comment ml-20">
                <h2 className="fs-18 text-primary">c</h2>
                <span className="fs-14 text-gray">UI/UX Designer</span>
              </div>
            </div>
            <p>
              Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt
              utore etstes dolore magna aliqua. Ut imminim restai veniam, quis
              nostrud.
            </p>
          </div>
        </div>
        <div>
          <div class="feedback ml-20 mr-20 mt-50 mb-50">
            <div class="top">
              <div class="img">
                <Image src={image} alt="" />
              </div>
              <div class="comment ml-20">
                <h2 className="fs-18 text-primary">d</h2>
                <span className="fs-14 text-gray">UI/UX Designer</span>
              </div>
            </div>
            <p>
              Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt
              utore etstes dolore magna aliqua. Ut imminim restai veniam, quis
              nostrud.
            </p>
          </div>
        </div>
      </Slider></>
  );
}
