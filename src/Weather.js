import React from "react";
import "./App.css";

const CardExampleCard = ({ weatherData }) => {
  function getIcon(weatherData) {
    if (weatherData.weather[0].description === "clear sky") {
      return "https://img.icons8.com/ios/50/000000/sun--v1.png";
    } else if (weatherData.weather[0].description === "few clouds") {
      return "https://img.icons8.com/ios/50/000000/sun--v1.png";
    } else if (weatherData.weather[0].description === "scattered clouds") {
      return "https://img.icons8.com/ios/50/000000/clouds.png";
    } else if (weatherData.weather[0].description === "broken clouds") {
      return "https://img.icons8.com/ios/50/000000/clouds.png";
    } else if (weatherData.weather[0].description === "shower rain") {
      return "https://img.icons8.com/ios/50/000000/rain.png";
    } else if (weatherData.weather[0].description === "rain") {
      return "https://img.icons8.com/ios/50/000000/rain.png";
    } else if (weatherData.weather[0].description === "thunderstorm") {
      return "https://img.icons8.com/ios/50/000000/thunderstorm.png";
    } else if (weatherData.weather[0].description === "snow") {
      return "https://img.icons8.com/ios/50/000000/snow.png";
    } else if (weatherData.weather[0].description === "mist") {
      return "https://img.icons8.com/ios/50/000000/mist.png";
    }
  }
  return (
    <div className="weather">
      <p>Sijainti: {weatherData.name}</p>
      <p>Lämpötila: {weatherData.main.temp}</p>
      <div className="weather__description">
      <p className="left">Kuvaus:</p>
      <img className="righta" src={getIcon(weatherData)} alt={weatherData.weather[0].description} />
      </div>
    </div>
  );
};

export default CardExampleCard;
