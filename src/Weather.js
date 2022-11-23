import React from "react";
import "./App.css";

const CardExampleCard = ({ weatherData }) => (
  <div className="weather">
    <p>Sijainti: {weatherData.name}</p>
    <p>Lämpötila: {weatherData.main.temp}</p>
    <p>Kuvaus: {weatherData.weather[0].description}</p>
  </div>
);

export default CardExampleCard;
