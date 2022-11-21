import { CiParking1 } from "react-icons/ci";
import React, { useEffect, useState } from "react";

const Component = (props) => {
  const [lat, setLat] = useState([60]);
  const [long, setLong] = useState([24]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log(lat, long);
      console.log (process.env.REACT_APP_API_URL)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <CiParking1 className="App-logo" />
            </th>
            <th>Linkkaa Parkki</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Component;
