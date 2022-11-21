import React from "react";
import CountUp from "react-countup";

export default function counter() {
  return (
    <>
      <ul className="d-flex mt-16 mb-16 w-100">
        <li class="d-flex flex-column text-center pt-20 pb-20 pl-10 pr-10 bg-light-gray mr-10 br-5">
          <span className="fw-bolder fs-26 text-light-blue">
            <CountUp start={1} end={5} duration={2.75} />
          </span>
          <span>Projects Done</span>
        </li>
        <li class="d-flex flex-column text-center pt-20 pb-20 pl-10 pr-10 bg-light-gray mr-10 br-5">
          <span className="fw-bolder fs-26 text-light-blue">
            <CountUp start={1} end={10} duration={2.75} />
          </span>
          <span>Total Clients</span>
        </li>
        <li class="d-flex flex-column text-center pt-20 pb-20 pl-10 pr-10 bg-light-gray br-5">
          <span className="fw-bolder fs-26 text-light-blue">
            <CountUp start={1} end={15} duration={2.75} />
          </span>
          <span>Total Hard Worker</span>
        </li>
      </ul>
    </>
  );
}
