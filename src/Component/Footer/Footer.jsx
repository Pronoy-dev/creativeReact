import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import FooterRight from "../../CommonComponents/FooterRight";

const Footer = () => {
  return (
    <>
      <div className="footerPart">
        <div className="container">
          <div className="footerWrapper">
            <div className="footerLeft">
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
              <p className="footerLeft_text">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
              <div className="footerIcon">
                <span>
                  <FaFacebook className="footerIcon_one" />
                </span>
                <span>
                  <AiFillTwitterCircle className="footerIcon_two" />
                </span>
              </div>
            </div>
            <div className="footerRight">
              <FooterRight
                title="Company"
                contentTop={false}
                list={["About Us", "Work", "Latest News", "Careers"]}
              />
              <FooterRight
                title="Product"
                contentTop={false}
                list={[
                  "Prototype",
                  "Plans & Pricing",
                  "Customers",
                  "Integrations",
                ]}
              />
              <FooterRight
                title="Support"
                contentTop={false}
                list={["Help Desk", "Sales", "Become a Partner", "Developers"]}
              />
              <FooterRight
                title="Contact"
                contentTop={true}
                list={["Help 524 Broadway , NYC", "+1 777 - 978 - 5570"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
