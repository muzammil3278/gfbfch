import React from "react";
import Social from "./social";

import {
  BsCalendarDateFill,
  BsTelephone,
  BsFillEnvelopeFill,
  BsGeoAlt,
} from "react-icons/bs";

function aboutcontent() {
  return (
    <div className="about-content d-flex flex-column mt-50 ">
      <div>
        <span className="fs-20">HELLO EVERYBODY, I AM</span>
        <h1>Muhammad Muzammil Safdar</h1>
        <span className="fs-14">
          JUNIOR FRONT WEB DEVELOPER( REACT.JS / NEXT.JS )
        </span>
        <p className="text-gray mt-12 fs-14">
          You will begin to realise why this exercise is called the Dickens
          Pattern (with reference to the ghost showing Scrooge some different
          futures)
        </p>
        
        <ul>
          <li className="mb-8">
            <span className="mr-14 text-icon">
              <BsCalendarDateFill />
            </span>
            <sapn className="text-gray"> 1st December, 2022</sapn>
          </li>
          <li className="mb-8">
            <span className="mr-14 text-icon">
              <BsTelephone />
            </span>
            <sapn className="text-gray">+92 (314) 4878 266</sapn>
          </li>
          <li className="mb-8">
            <span className="mr-14 text-icon">
              <BsFillEnvelopeFill />
            </span>
            <sapn className="text-gray">topperacademy82@gmail.com</sapn>
          </li>
          <li className="mb-8">
            <span className="mr-14 text-icon">
              <BsGeoAlt />
            </span>
            <sapn className="text-gray">Toba Tek Singh (Punjab), Pakistan</sapn>
          </li>
        </ul>
      <Social />
      </div>
    </div>
  );
}

export default aboutcontent;
