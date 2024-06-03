import React from "react";
import logo from "../../assets/Logo.png";
import "./Header.css";
function Header() {
  const navIteam = ["Home", "About", "Service", "Blog", "Contact"];
  return (
    <>
      <div className="header_part">
        <div className="container">
          <div className="navbarWrapper">
            <div className="logo">
              <picture>
                <img src={logo} alt={logo} />
              </picture>
            </div>
            <div>
              <ul className="menuItem">
                {navIteam.map((item) => (
                  <li>
                    <a href="" className="menuItem_list">
                      {item}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button className="btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
