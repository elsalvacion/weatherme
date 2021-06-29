import React from "react";
import vid from "../assets/clouds.mp4";
import "./Background.css";
const Background = () => {
  return (
    <div className="bg">
      <video src={vid} autoPlay muted loop></video>
      <div className="bg-overlay"></div>
    </div>
  );
};

export default Background;
