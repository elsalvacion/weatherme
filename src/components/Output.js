import React from "react";
import "./Output.css";
const Output = (props) => {
  const { weather, temp, loc, humidity, wind } = props.whether;
  const { description, icon } = weather;
  const calcHumidity = (humid) => {
    if (humid < 35) return "Low Humidity";
    else if (humid > 35 && humid <= 50) return "Normal Humidity";
    else if (humid > 50 && humid <= 70) return "Moderate Humidity";
    else return "High Humidity";
  };

  const calcWind = (windSpeed) => {
    if (windSpeed >= 0.5 && windSpeed <= 3) return "Light Breeze Wind";
    else if (windSpeed > 3 && windSpeed <= 10.5) return "Moderate Breeze Wind";
    else if (windSpeed > 10.5 && windSpeed <= 27.5) return "High Breeze Wind";
    else if (windSpeed > 27.5) return "Hurricane";
  };

  const tempCalc = (tmp) => Number(tmp) - 273.15;

  return (
    <div className="output">
      <div className="location">
        <span>
          <i className="material-icons">room</i>
        </span>
        <h4>{loc}</h4>
      </div>
      <div className="current">
        <img
          src={"http://openweathermap.org/img/w/" + icon + ".png"}
          alt="Wheather Icon"
        />
        <h4>{description[0].toUpperCase() + description.substring(1)}</h4>
      </div>
      <div className="temp">
        <span>
          <i className="material-icons">thermostat</i>{" "}
        </span>{" "}
        <h4>{tempCalc(temp).toFixed(2)} &#8451;</h4>
      </div>
      <div className="wind">
        <span>
          <i className="material-icons">storm</i>
        </span>{" "}
        <h4>{calcWind(wind)}</h4>
      </div>
      <div className="humidity">
        <span>
          <i className="material-icons">opacity</i>
        </span>{" "}
        <h4>{calcHumidity(humidity)}</h4>
      </div>
    </div>
  );
};

export default Output;
