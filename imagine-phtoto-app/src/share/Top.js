import React from "react";
import "./social.css";
import logo from "./imgs/Imagine logo neon 1.png"

function Top() {
  return (
    <nav className="nav">
    <ul className="navLinks">
        <li>Back</li>
      </ul>
      <img className="logo" src={logo} alt="Imgaine Logo"/>
    </nav>
  );
}

export default Top;
