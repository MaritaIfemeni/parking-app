import React, { useState, useEffect } from "react";

const Body = (props) => {
  const [freePark, setFreePark] = useState("Muuttuuko?");
  const [freePark2, setFreePark2] = useState("Muutt?");
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
    if (freePark == oldState){
      choiceOne = getRandom(listOfFreeSpots);
      setFreePark(listOfFreeSpots[choiceOne]);
    }
    let choiceTwo = getRandom(listOfFreeSpots);
    if (choiceTwo == choiceOne){
      if (choiceOne == 4){
        choiceTwo -= 1
      } else {
        choiceTwo += 1 
      }
    }
    setFreePark2(listOfFreeSpots[choiceTwo]);
    setOldState(freePark)
  };

  return (
    <div>
      <p> Vapaita parkkipaikkoja seuraavissä kohteissa: </p>
      {freePark}
      {freePark2}
      <button className="button" onClick={handleClick}>
        Paina
      </button>
    </div>
  );
};

export default Body;
