import React from "react";
import "./News.css";
import Heading from "../../CommonComponents/Heading";
import "../Service/Service.css";
import Pic1 from "../../assets/Rectangle 22.png";
import Pic2 from "../../assets/Rectangle 22 (1).png";
import Pic3 from "../../assets/Rectangle 22 (2).png";
import { CiUser, CiCalendar } from "react-icons/ci";

const News = () => {
  const allNews = [
    {
      id: 1,
      img: Pic1,
    },
    {
      id: 2,
      img: Pic2,
    },
    {
      id: 3,
      img: Pic3,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="newsPart">
          <div className="newsPart_top">
            <Heading title={"Our Letest News"} className="serviceStyle" />
          </div>
          <div className="newsPart_bottom">
            {allNews?.map((item) => (
              <div className="newsPart_box" key={item.id}>
                <picture>
                  <img src={item.img} alt={item.img} />
                </picture>
                <div className="adminDiv">
                  <div className="firstDiv">
                    <span>
                      <CiUser className="firstDiv_icon" />
                    </span>
                    <p className="firstDiv_text">Admin</p>
                  </div>
                  <div className="secondDiv">
                    <span>
                      <CiCalendar className="secondDiv_icon" />
                    </span>
                    <p className="secondDiv_text">07/11/2021</p>
                  </div>
                </div>
                <h4 className="newsPartBottom_title">
                  Business Plans That Fit Your Best Blog
                </h4>
                <p className="newsPartBottom_des">
                  There are many variations of passages of Lorem Ipsum , but the
                  majority have suffered alteration in some form.
                </p>
                <a href="#" className="newsPartBottom_link">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
