import React from "react";
import "./Member.css";
import "../Service/Service.css";
import Heading from "../../CommonComponents/Heading";
import Member1 from "../../assets/Rectangle 20.png";
import Member2 from "../../assets/Rectangle 20 (1).png";
import Member3 from "../../assets/Rectangle 20 (2).png";

const Member = () => {
  const allMember = [
    {
      id: 1,
      img: Member1,
      workerName: "Mahid Ahmed",
      workName: "UX Designer",
    },
    {
      id: 2,
      img: Member2,
      workerName: "Hasan Imam",
      workName: "UI Designer",
    },
    {
      id: 3,
      img: Member3,
      workerName: "Kazi Afia",
      workName: "Digital Marketor",
    },
  ];

  return (
    <div className="memberPartDiv">
      <div className="container">
        <Heading title={"Our Expert Team Member"} className="serviceStyle" />
        <div className="memberPart">
          {allMember?.map((item) => (
            <div className="memberPart_img" key={item.id}>
              <picture>
                <img src={item.img} alt={item.img} />
              </picture>
              <div className="overlay">
                <h4 className="overlay_title">{item.workName}</h4>
                <p className="overlay_des">{item.workerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
