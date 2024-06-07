import React from "react";

const FooterRight = ({ title, list, contentTop }) => {
  return (
    <>
      <div className={`${contentTop && "contentTopFlex"}`}>
        <h4 className="footerTitle">{title ? title : "Company"}</h4>
        <ul>
          {list?.map((item) => (
            <li>
              <a href="" className="footerLink">
                {item ? item : "nai"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterRight;
