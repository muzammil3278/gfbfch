import React from "react";

import CountUp from "react-countup";

export default function right() {
  return (
    <>
      <></>
      <div class="skill-main">
        <div class="skill-item mb-20">
          <h4 className="fs-16 fw-500">HTML</h4>
          <div class="progress">
            <span className="animation-1" data-label="85%"></span>
          </div>
        </div>
        <div class="skill-item mb-20">
          <h4 className="fs-16 fw-500">CSS</h4>
          <div class="progress">
            <span className="animation-2" data-label="70%"></span>
          </div>
        </div>
        <div class="skill-item mb-20">
          <h4 className="fs-16 fw-500">Javascript</h4>
          <div class="progress">
            <span className="animation-3" data-label="50%"></span>
          </div>
        </div>
        <div class="skill-item mb-20">
          <h4 className="fs-16 fw-500">
            React.js
          </h4>
          <div class="progress">
            <span className="animation-4" data-label="40%"></span>
          </div>
        </div>
        <div class="skill-item mb-20">
          <h4 className="fs-16 fw-500">
            Next.js
          </h4>
          <div class="progress">
            <span className="animation-5" data-label="60%"></span>
          </div>
        </div>
      </div>
    </>
  );
}
