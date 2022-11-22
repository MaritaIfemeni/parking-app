import React from "react";
import "./App.css";

const CardExampleCard = ({ weatherData }) => (
  <div className="weather">
    Sijainti: {weatherData.name}
    Lämpötila: {weatherData.main.temp}
    Description: {weatherData.weather[0].description}
  </div>
);

export default CardExampleCard;
