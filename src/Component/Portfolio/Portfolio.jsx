import React from "react";
import "./Portfolio.css";
import "../Service/Service.css";
import Heading from "../../CommonComponents/Heading";
import { PiArrowRightBold } from "react-icons/pi";
import Pic1 from "../../assets/Rectangle 12.png";
import Pic2 from "../../assets/Portfolio 2.png";
import Pic3 from "../../assets/Rectangle 14.png";
import Pic4 from "../../assets/Rectangle 15.png";
import Pic5 from "../../assets/Rectangle 16.png";
import Pic6 from "../../assets/Rectangle 17.png";
import Pic7 from "../../assets/Rectangle 18.png";
import Pic8 from "../../assets/Rectangle 19.png";
const Portfolio = () => {
  const allPortfolio = [
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
    {
      id: 4,
      img: Pic4,
    },
    {
      id: 5,
      img: Pic5,
    },
    {
      id: 6,
      img: Pic6,
    },
    {
      id: 7,
      img: Pic7,
    },
    {
      id: 8,
      img: Pic8,
    },
  ];

  return (
    <div>
      <div className="PortfolioPart">
        <div className="container">
          <Heading title={"Our Work Portfolio"} className="serviceStyle" />
          <div className="PortfolioPart_img">
            {allPortfolio?.map((item) => (
              <div className="PortfolioPartImg_Display" key={item.id}>
                <picture>
                  <img src={item.img} alt={item.img} />
                </picture>
                <div className="hoverDiv">
                  <h3 className="hoverDiv_title">Graphic Design</h3>
                  <a href="#" className="hoverDiv_link">
                    See Details <PiArrowRightBold />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
