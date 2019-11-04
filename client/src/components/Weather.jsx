import React from "react";
import weather from "./../pages/img/weatherbg.png";
//import weather from "./../pages/img/weather.jpeg";

const divStyle = {
 color: "white",
  backgroundImage: "url(" + weather + ")",
};

const pStyle = {
	// color: "white",
	 //backgroundImage: "url(" + weather + ")",
	 fontSize: "20px"
   };

const Weather = props => (

  <div className="weather__info" >
	  	<br />
    {props.city && props.country && (
      <p className="weather__key" style={pStyle}>
        {" "}
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key" style={pStyle}>
        {" "}
        Temperature:
        <span className="weather__value" > {props.temperature} </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key" style={pStyle}>
        {" "}
        Humidity:
        <span className="weather__value"> {props.humidity} </span>
      </p>
    )}
    {props.description && (
      <p className="weather__key" style={pStyle}>
        {" "}
        Conditions:
        <span className="weather__value"> {props.description} </span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
