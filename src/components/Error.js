import React from "react";
import "./Error.css";
const Error = ({ text }) => {
  return (
    <div className="error">
      <h4>{text}</h4>
    </div>
  );
};

export default Error;
