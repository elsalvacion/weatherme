import React from "react";
import spinner from "../assets/spinner.gif";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Spinner" width="100%" height="100%" />
    </div>
  );
};

export default Spinner;
