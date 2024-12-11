import React from "react";

import UpiBrands from "../../assets/Images/upibrands.png";
import QrCode from "../../assets/Images/qr.png";

const Paynow = () => {
  return (
    <div className="my-5">
      <div className="container my-5">
        <h1>Pay now</h1>
        <p>More Information and Any Problem Call Contact Dhuru Rathee</p>
      </div>
      <div
        className="container
      d-flex flex-column align-items-center"
      >
        <p className="fw-bold fs-5">Scan QR</p>
        <img src={QrCode} className="img-fluid my-3" alt="" />

        <p className="fw-semibold">ID : Dhuru Rathee@34389Gpay.com</p>
        <img src={UpiBrands} className="img-fluid" alt="" />
      </div>
    </div>
  );
};
export default Paynow;
