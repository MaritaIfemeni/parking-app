import React, { useState, useEffect } from "react";

const DataComponent = ({}) => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    return fetch("http://localhost:9999/areas")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Parkin Areas:</h1>
      <ul>
        {posts &&
          posts.length > 0 &&
          posts.map((postsObj, index) => <li key={postsObj.id}>{posts.id}</li>)}
      </ul>
      test
    </div>
  );
};

export default DataComponent;
