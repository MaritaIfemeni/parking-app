import React, { useState, useEffect } from "react";

const DataComponent = ({ props }) => {
  const [posts, setPosts] = useState(null);

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
      <h1>Parkin Areas:</h1>
      <ul>
        {posts
          ? posts.main.map((p) => (
              <li key={p.ID}>
                {p.id}
                {p.parking_area}
              </li>
            ))
          : "not lol"}
      </ul>
      test
    </div>
  );
};

export default DataComponent;
