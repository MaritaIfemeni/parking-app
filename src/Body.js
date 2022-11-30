import React, { useState, useEffect } from "react";

const Body = (props) => {
  const [freePark, setFreePark] = useState("");
  const [freePark2, setFreePark2] = useState("");
  const [oldState, setOldState] = useState(null);

  const listOfFreeSpots = [
    "Aurinkokiven koulu",
    "Keravan asema",
    "Jumbon Parkkialue",
    "Pielaveden K-Marketti",
  ];

  const getRandom = (list) => {
    return Math.floor(Math.random() * list.length);
  };
  // redo this later
  const handleClick = () => {
    let choiceOne = getRandom(listOfFreeSpots);
    setFreePark(listOfFreeSpots[choiceOne]);
    if (freePark == oldState) {
      choiceOne = getRandom(listOfFreeSpots);
      setFreePark(listOfFreeSpots[choiceOne]);
    }
    let choiceTwo = getRandom(listOfFreeSpots);
    if (choiceTwo == choiceOne) {
      if (choiceOne == 4) {
        choiceTwo -= 1;
      } else {
        choiceTwo += 1;
      }
    }
    setFreePark2(listOfFreeSpots[choiceTwo]);
    setOldState(freePark);
  };

  return (
    <div>
      <h3> Vapaita parkkipaikkoja löytydettävissä: </h3>
      <p className="spots">{freePark}</p>
      <p className="spots">{freePark2}</p>
      <button className="button" onClick={handleClick}>
        Hae vapaita parkkialueita
      </button>
    </div>
  );
};

export default Body;
