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
      Lisää sähköposti osoite: 
      <input
        type="text"
        id="message"
        name="message"
        placeholder="example@mail.com"
        onChange={handleChange}
        value={message}
      />

    </div>
  );
};
export default NewSpot;
