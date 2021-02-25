import "./backdrop.css";
import React from "react";

const BackDrop = ({ show, click }) => {
  return show ? <div onClick={click} className="backdrop"></div> : "";
};

export default BackDrop;
