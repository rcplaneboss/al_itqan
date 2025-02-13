import React, { useState } from "react";
import Name from "./Name";
import Nav from "./Nav";
import logo from "./assets/Img/logo2.svg"
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const isViewPortTab = useMediaQuery({ query: '(max-width: 767px)' })
  const handleDisplay = () => {
    setNavVisible((prev) => !prev);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <div className={isViewPortTab ? "navbar montserrat" : "tab-navbar"} id="">
      <Name name={"AL-ITQÃN"} src={logo} />
      {isNavVisible && isViewPortTab && <Nav onClose={closeNav} />}
      {!isViewPortTab && <Nav onClose={closeNav} />}
      {isViewPortTab && <div className="navicon-box" onClick={handleDisplay}>
        <i className="fa fa-navicon"></i>
      </div>
      }
    </div>

  );
};

export default Navbar;
