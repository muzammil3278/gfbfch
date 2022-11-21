import React from "react";
import Image from "next/image";
import web from '../../public/svg/web.svg';
import designer from '../../public/svg/designer.svg';
import vedio from '../../public/svg/vedio.svg';
import micro from '../../public/svg/microsoft.svg';


export default function servicepart() {
  return (
    <div className="container service">
      <div className="row">
        <div className="col-lg-6">
          <div class="service-item pt-24 pb-24 pl-30 pr-30 mt-20 mb-30 text-center">
            <i className="fs-50 mb-20 d-block">
              <Image src={web} height={50} width={50} alt="web"/>
            </i>
            <h4 className="fs-20">Web Development</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="service-item pt-24 pb-24 pl-30 pr-30 mt-20 mb-30 text-center">
            <i className="fs-50 mb-20 d-block">
              <Image src={designer} height={50} width={50} alt="designer"/>
            </i>
            <h4 className="fs-20">Designer</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="service-item pt-24 pb-24 pl-30 mt-20 pr-30 mb-30 text-center">
            <i className="fs-50 mb-20 d-block">
              <Image src={vedio} height={50} width={50} alt="vedio" />
            </i>
            <h4 className="fs-20">Vedio Editing</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="service-item pt-24 pb-24 pl-30 mt-20 pr-30 mb-30 text-center">
            <i className="fs-50 mb-20 d-block">
              <Image src={micro} height={50} width={50} alt="microsoft"/>
            </i>
            <h4 className="fs-20">MS Office</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
