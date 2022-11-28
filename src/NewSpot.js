import React from "react";
import { useState } from "react";

const NewSpot = () => {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is:", event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Lisää uusi vapaa parkki tästä..."
        onChange={handleChange}
        value={message}
      />
      <h4>Olet lisäämässä: {message}</h4>
      <button onClick={handleChange}>Log message</button>
    </div>
  );
};
export default NewSpot;
