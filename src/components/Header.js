import React from "react";

import logo from "../logo.svg";

import "../styles/header.css"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"/>
      <h1>Memory Card</h1>
    </div>  
  );
}


export default Header;