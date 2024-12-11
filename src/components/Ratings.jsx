import React from "react";
import Aman from "../assets/Images/Amar.png";
import Googel from "../assets/Images/symbolgoogle.png";
import Stars from "../assets/Images/Stars.png";
import "./Ratings.css";
function Ratings() {
  return (
    <section className="container mt-5  ">
      <div>
        {/* TOP HEADING AND DESCRIPTION */}
        <div className="text-center d-flex flex-column align-items-center">
          <p className="text-primary fs-4 fw-semibold">
            What Our Customer Says
          </p>

          <h1 className="fs-3">Review & Ratings</h1>
          <p className=" w-100 w-sm-75  my-3">
            Lorem ipsum dolor sit amet consectetur. Pharetra odio turpis mauris
            dolor massa aliquet sociis in condimentum. In purus semper mauris
            pharetra fringilla porta mauris. In integer commodo odio sed elit
            condimentum. Ultrices hendrerit tincidunt facilisi id. Morbi amet
            vestibulum at lectus lectus hac commodo vitae ipsum.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="googlecards d-flex flex-wrap justify-content-around align-items-end"
          style={{ marginTop: "2rem" }}
        >
          <div
            className="card border-0 d-none d-lg-block"
            style={{
              width: "16rem",
              height: "21rem",
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
          >
            <div className="card-body d-flex flex-column align-items-center text-center">
              <img
                src={Googel}
                style={{ width: "55px" }}
                className="my-3"
                srcset=""
              />
              <img
                src={Stars}
                style={{ width: "85px" }}
                className="my-2"
                alt=""
                srcset=""
              />

              <p className="card-text my-3" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet consectetur. Tellus sit nibh elit
                eget. Sociis netus ultrices facilisis ullamcorper.
              </p>
              <div className="d-flex flex-row align-items-center justify-content-around w-100  ">
                <div>
                  <img src={Aman} style={{ width: "45px" }} />
                </div>
                <div>
                  <h6 style={{ fontSize: "12px", marginTop: "10px" }}>Aman</h6>
                  <p style={{ fontSize: "10px" }}>12/12/2020</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card border-0"
            style={{
              width: "18rem",
              height: "24rem",
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
          >
            <div className="card-body d-flex flex-column align-items-center text-center">
              <img
                src={Googel}
                style={{ width: "60px" }}
                className="my-3"
                srcset=""
              />
              <img
                src={Stars}
                style={{ width: "100px" }}
                className="my-2"
                alt=""
                srcset=""
              />

              <p className="card-text my-4" style={{ fontSize: "17px" }}>
                Lorem ipsum dolor sit amet consectetur. Tellus sit nibh elit
                eget. Sociis netus ultrices facilisis ullamcorper.
              </p>
              <div className="d-flex flex-row align-items-center justify-content-around w-100  ">
                <div>
                  <img src={Aman} style={{ width: "50px" }} />
                </div>
                <div>
                  <h6 style={{ fontSize: "18px", marginTop: "14px" }}>Aman</h6>
                  <p style={{ fontSize: "14px" }}>12/12/2020</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card border-0 d-none d-lg-block"
            style={{
              width: "16rem",
              height: "21rem",
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
          >
            <div className="card-body d-flex flex-column align-items-center text-center">
              <img
                src={Googel}
                style={{ width: "55px" }}
                className="my-3"
                srcset=""
              />
              <img
                src={Stars}
                style={{ width: "85px" }}
                className="my-2"
                alt=""
                srcset=""
              />

              <p className="card-text my-3" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet consectetur. Tellus sit nibh elit
                eget. Sociis netus ultrices facilisis ullamcorper.
              </p>
              <div className="d-flex flex-row align-items-center justify-content-around w-100  ">
                <div>
                  <img src={Aman} style={{ width: "45px" }} />
                </div>
                <div>
                  <h6 style={{ fontSize: "12px", marginTop: "10px" }}>Aman</h6>
                  <p style={{ fontSize: "10px" }}>12/12/2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
}

export default Ratings;
