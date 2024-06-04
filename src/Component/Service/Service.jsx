import React from "react";
import Heading from "../../CommonComponents/Heading.jsx";
import "./Service.css";
import { FaChartBar } from "react-icons/fa6";
import { RiBarChartBoxLine } from "react-icons/ri";
import { SiMarketo, SiAffinitydesigner } from "react-icons/si";

import { CgWebsite } from "react-icons/cg";
import { TbBoxMultiple } from "react-icons/tb";

const Service = () => {
  const allService = [
    {
      id: 1,
      icon: <FaChartBar />,
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
    {
      id: 2,
      icon: <RiBarChartBoxLine />,
      title: "Web Development",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
    {
      id: 3,
      icon: <SiMarketo />,
      title: "Digital Marketing",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
    {
      id: 4,
      icon: <SiAffinitydesigner />,
      title: "Graphic Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
    {
      id: 5,
      icon: <CgWebsite />,
      title: "Web Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
    {
      id: 6,
      icon: <TbBoxMultiple />,
      title: "Motion Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form.`,
    },
  ];

  return (
    <div className="servicePart">
      <div className="container">
        <Heading
          title="Our service"
          description="   There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form."
          className="serviceStyle"
        />
        <div className="serviceBoxHolder">
          {allService?.map((item) => (
            <div className="serviceBox" key={item.id}>
              <span className="serviceBox_icon">
                {item.icon ? item.icon : "Something is missing"}
              </span>
              <h2 className="serviceBox_title">
                {item.title ? item.title : "Something is missing"}
              </h2>
              <p className="serviceBox_summary">
                {item.description ? item.description : "Something is missing"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
