import React from "react";
import { NavLink } from "react-router-dom";

const BtnSlide = () => {
  return (
    <NavLink className="btn-slide" to={"/"}>
      <span className="circle"></span>
      <span className="title"> ENTER </span>
      <span className="title title-hover">CLICK IF YOU READY</span>
    </NavLink>
  );
};

export default BtnSlide;
