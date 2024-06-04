import React from "react";

const Heading = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h1>{title ? title : "Our service"}</h1>
      <p>
        {description
          ? description
          : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}
      </p>
    </div>
  );
};

export default Heading;
