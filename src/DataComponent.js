import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "semantic-ui-react";

const DataComponent = ({ props }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = axios
        .get("http://localhost:9999/areas")
        .then(function (response) {
        console.log(response.data)
        .then((response) => response.json())
        .then((data) => ({
        status: data.data.status,
        body: data.data.main,
        }))
          setPosts(res.posts);
        });
    }
    getData();
  }, [posts]);

  return (
    <div>
      <p>Testidata: {setPosts}</p>
      test
    </div>
  );
};

export default DataComponent;
