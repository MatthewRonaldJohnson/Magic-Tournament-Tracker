import React, { useState } from 'react';

export default function LifeCounter() {
  const [userLifeState, setUserLifeState] = useState(20);
  const [oppLifeState, setOppLifeState] = useState(20);

  const handleUserLifeChange = (e) => {
    const lifeChangeAmount = e.target.value;
    const operator = e.target.dataset.operator;

    // Switch case determines what operator we're using.
    switch (operator) {
      case '+':
        setUserLifeState(userLifeState + parseInt(lifeChangeAmount));
        break;
      case '-':
        if (userLifeState > 0) {
          setUserLifeState(userLifeState - parseInt(lifeChangeAmount));
        }
        gameEndCheck();
        break;
      default:
        console.error('You broke it chief.');
        break;
    }
  };

  const handleOppLifeChange = (e) => {
    const lifeChangeAmount = e.target.value;
    const operator = e.target.dataset.operator;

    // Switch case determines what operator we're using.
    switch (operator) {
      case '+':
        setOppLifeState(oppLifeState + parseInt(lifeChangeAmount));
        break;
      case '-':
        if (oppLifeState > 0) {
          setOppLifeState(oppLifeState - parseInt(lifeChangeAmount));
        }
        gameEndCheck();
        break;
      default:
        console.error('You broke it chief.');
        break;
    }
  };

  const gameEndCheck = () => {
    if (userLifeState > 0 && oppLifeState > 0) {
      return;
    } else if (userLifeState < 1) {
      console.log("You're dead chief.");
    } else {
      console.log("They're dead chief.");
    }
  };

  return (
    <div id="LifeCounterContainer" style={{ height: '80vh' }}>
      <div className="Container text-center">
        <h1>{userLifeState}</h1>
        <button value="1" data-operator="+" onClick={handleUserLifeChange}>
          +
        </button>
        <button value="1" data-operator="-" onClick={handleUserLifeChange}>
          -
        </button>
      </div>
      <br />
      <div>
        <button>Home</button>
        <button>Reset</button>
      </div>

      <br />
      <div id="container text-center">
        <h1>{oppLifeState}</h1>
        <button value="1" data-operator="+" onClick={handleOppLifeChange}>
          +
        </button>
        <button value="1" data-operator="-" onClick={handleOppLifeChange}>
          -
        </button>
      </div>
    </div>
  );
}
