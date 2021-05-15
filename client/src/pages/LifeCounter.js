import React, { useState } from 'react';

export default function LifeCounter() {
  const [userLifeState, setUserLifeState] = useState(20);

  const handleUserLifeChange = (e) => {
    const lifeChangeAmount = e.target.value;
    const operator = e.target.dataset.operator;

    // Switch case determines what operator we're using.
    switch (operator) {
      case '+':
        setUserLifeState(userLifeState + parseInt(lifeChangeAmount));
        gameEndCheck();
        break;
      case '-':
        setUserLifeState(userLifeState - parseInt(lifeChangeAmount));
        gameEndCheck();
        break;
      default:
        console.error('You broke it chief.');
        break;
    }
  };

  const gameEndCheck = () => {
      if(userLifeState < 1) {
        console.log("You're dead chief.")
      }
  }

  return (
    <div id="LifeContainer" className="container vh-">
      <div className="Container text-center">
        <h1>{userLifeState}</h1>
        <button value="1" data-operator="+" onClick={handleUserLifeChange}>
          +
        </button>
        <button value="1" data-operator="-" onClick={handleUserLifeChange}>
          -
        </button>
      </div>
      {/* <br />
      <div>
        <button>Home</button>
        <button>Reset</button>
      </div>

      <br />
      <div id="container text-center">
        <h1 id="player2life">20</h1>
        <button data="+" id="addP2">
          +
        </button>
        <button id="subtractP2">-</button>
      </div> */}
    </div>
  );
}
