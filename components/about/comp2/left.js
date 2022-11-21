import React from "react";
import Link from "next/link";

export default function left() {
  return (
    <>
      <h4 className="fs-36 mb-18 ">ABOUT MYSELF</h4>
      <p className="text-gray">
        inappropriate behavior is often laughed off as “boys will be boys,”
        women face higher conduct standards especially in the workplace. That’s
        why it’s crucial that, as women, our behavior on the job is beyond
        reproach. inappropriate behavior is often laughed.
      </p>
      <Link href="/" className="main-btn mr-10">
        Download CV
      </Link>
      <Link href="/" className="main-btn">
        Hire Me
      </Link>
    </>
  );
}
