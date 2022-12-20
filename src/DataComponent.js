import React, { useState, useEffect } from "react";

const DataComponent = ({ props }) => {
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const getData = () => {
    return fetch("http://localhost:9999/areas")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <h1>Linkaa Parkki työntekijälle tai vaikka vierailijalle!</h1>
        <h3>
          Lähetä pysäkointilupa valitsemalla pysäköintialue <br></br>ja
          kirjoittamalla vastaanottajan sähköpostiosoite!
        </h3>
      </div>
      <div className="dropdown">
        <button onClick={handleOpen}>Valitse alue</button>
        {open ? (
        <ul className="areas">
          {posts
            ? posts.main.map((p) => (
                <li key={p.ID}>
                  {p.id}
                  {p.parking_area}
                </li>
              ))
            : "not lol"}
        </ul>
        ): null}
      </div>
    </div>
  );
};

export default DataComponent;
