import React from "react";
import "./Banner.css";
import banner from "../../assets/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="bannerPart">
        <div className="container">
          <div className="bannerWrapper">
            <div className="bannerLeft">
              <h1 className="bannerLeft_title">
                We Are Digital Product Design Agency
              </h1>
              <p className="bannerLeft_summary">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div>
                <button className="btn btn--modifier">Get Started</button>
              </div>
            </div>
            <div className="bannerRight">
              <picture>
                <img src={banner} alt={banner} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
