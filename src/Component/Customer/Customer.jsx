import React from "react";
import "./Customer.css";
import Img1 from "../../assets/Ellipse 8.png";
import Img2 from "../../assets/Ellipse 7.png";
import Img3 from "../../assets/Ellipse 9.png";
import { IoStar } from "react-icons/io5";
import BottomImg from "../../assets/Group 32.png";

const Customer = () => {
  const allWorker = [
    {
      id: 1,
      img: Img1,
      nam: "Hasan Imam",
      MainWork: "UI Designer",
    },
    {
      id: 2,
      img: Img2,
      nam: "Mahid Ahmed",
      MainWork: "UX Designer",
    },
    {
      id: 1,
      img: Img3,
      nam: "Kazi Afia",
      MainWork: "Digital Marketor",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="customerPart">
          <div className="customerTop">
            <h3 className="customerTop_title">
              We Care About Our Customer Experience Too
            </h3>
            <p className="customerTop_summary">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="customerBottom">
            {allWorker?.map((item) => (
              <div className="customerBottom_item" key={item.id}>
                <picture className="customerBottomBox_img">
                  <img src={item.img} alt={item.img} />
                </picture>
                <span className="star">
                  {[...new Array(6)].map(() => (
                    <IoStar className="starSize" />
                  ))}
                </span>
                <p className="customerBottomBox_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <h4></h4>
                <p className="customerBottomBox_name">{item.nam}</p>
                <p className="customerBottomBox_work">{item.MainWork}</p>
                <div className="customerBottom_pic">
                  <picture>
                    <img src={BottomImg} alt={BottomImg} />
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
