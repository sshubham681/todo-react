import React from "react";
import logo from "../assets/images/mytodo.png";
// header
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="todoist" className="img"></img>
      </div>
    </header>
  );
};

export default Header;
