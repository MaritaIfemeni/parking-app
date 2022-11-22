import { FaParking } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Weather from "./Weather"

const Component = ({props}) => {
  const [lat, setLat] = useState([60]);
  const [long, setLong] = useState([24]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);


  return (
    <div>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      <table>
        <thead>
          <tr>
            <th>
              <FaParking className="App-logo" />
            </th>
            <th>Linkkaa Parkki</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Component;
