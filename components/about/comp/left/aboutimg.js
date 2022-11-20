import React from "react";
import Image from "next/image";
import mypic from '../../../../public/personal.jpg'

function aboutimg() {
  return (
    <div className="aboutimg pt-4 pb-4 ml-50 mr-50">
      
      <Image
      className="image"
      src={mypic}
      alt="Picture of the author"
      layout="fill"
  />
    </div>
  );
}

export default aboutimg;
