import React, { useState, useEffect } from "react";

const PersonsComponent = ({ props }) => {
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const getData = () => {
    return fetch("http://localhost:9999/persons")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  };
  useEffect(() => {
    getData();
  }, []);

  
  return (
    <div>
      <div>
        <h1>toimiiko</h1>
    
      </div>
      <div className="dropdown">

        <ul className="areas">
          {posts
            ? posts.main.map((p) => (
                <li key={p.ID}>
                  {p.id}
                  {p.fullname}
                </li>
              ))
            : "not lol"}
        </ul>

      </div>
    </div>
  );
};

export default PersonsComponent;