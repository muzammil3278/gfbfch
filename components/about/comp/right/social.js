import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function social() {
  return (
    <div className="social-link mt-20">
      <ul className="d-flex">
        <li className="lh-40 w-40 br-5 social-bg fs-16 text-center text-facebook">
          <BsFacebook />
        </li>
        <li className="lh-40 w-40 br-5 social-bg ml-12 fs-16 text-center text-twitter">
          <BsTwitter />
        </li>
        <li className="lh-40 w-40 br-5 social-bg ml-12 fs-16 text-center text-linkedin">
          <BsLinkedin />
        </li>
      </ul>
    </div>
  );
}
