import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LifeCounter() {
  const [userLifeState, setUserLifeState] = useState(20);
  const [oppLifeState, setOppLifeState] = useState(20);
  const [userLifeChangeAmountState, setUserLifeChangeUAmountState] =
    useState(1);

  const handleReset = () => {
    setUserLifeState(20);
    setOppLifeState(20);
  };

  const handleULifeAmount = (e) => {
    const amount = parseInt(e.target.value);
    console.log(amount);
    setUserLifeChangeUAmountState(amount);
  };

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
      <div className="Container text-center m-5">
        <div>
          <h1>Players Life Total: {userLifeState}</h1>
          <button
            className="btn btn-primary p-2 m-1"
            value={userLifeChangeAmountState}
            data-operator="+"
            onClick={handleUserLifeChange}
          >
            +
          </button>
          <input
            type="number"
            min="0"
            onChange={handleULifeAmount}
          ></input>
          <button
            className="btn btn-primary p-2 m-1"
            value={userLifeChangeAmountState}
            data-operator="-"
            onClick={handleUserLifeChange}
          >
            -
          </button>
        </div>
      </div>
      <br />
      <div className="Container d-flex justify-content-around m-5">
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>

      <br />
      <div className="Container text-center m-5">
        <h1>Opponents Life Total: {oppLifeState}</h1>
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
