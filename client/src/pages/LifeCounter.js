import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

export default function LifeCounter() {
  const defaultGameState = {
    gameFinished: false,
    winner: '',
  };
  const [userLifeState, setUserLifeState] = useState(20);
  const [oppLifeState, setOppLifeState] = useState(20);
  const [userLifeChangeAmountState, setUserLifeChangeAmountState] = useState(1);
  const [oppLifeChangeAmountState, setOppLifeChangeAmountState] = useState(1);
  const [gameStatusState, setGameStatusState] = useState(defaultGameState);


  const handleReset = () => {
    setUserLifeState(20);
    setOppLifeState(20);
    setUserLifeChangeAmountState(1);
    setOppLifeChangeAmountState(1);
    setGameStatusState(defaultGameState)
  };

  const handleUserLifeChangeAmount = (e) => {
    const amount = parseInt(e.target.value);
    setUserLifeChangeAmountState(amount);
  };
  const handleOppLifeChangeAmount = (e) => {
    const amount = parseInt(e.target.value);
    setOppLifeChangeAmountState(amount);
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
        break;
      default:
        console.error('You broke it chief.');
        break;
    }
    setUserLifeChangeAmountState(1)
  };

  useEffect(() => {
    gameEndCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLifeState, oppLifeState])

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
        break;
      default:
        console.error('You broke it chief.');
        break;
    }
    setOppLifeChangeAmountState(1)
  };

  const gameEndCheck = () => {
    if (userLifeState > 0 && oppLifeState > 0) {
      return;
    } else if (userLifeState < 1) {
      setGameStatusState({ winner: 'Opponent', gameFinished: true });
    } else {
      setGameStatusState({ winner: 'Player', gameFinished: true });
    }
  };

  return (
    <div id="LifeCounterContainer" style={{ height: '80vh' }}>
      <div className="Container text-center m-5">
        <h1>Players Life Total: {userLifeState}</h1>
        <div className="container">
          <div className="input-group p-3 m-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-primary px-2"
                type="button"
                value={userLifeChangeAmountState}
                data-operator="+"
                onClick={handleUserLifeChange}
              >
                +
              </button>
            </div>
            <input
              type="number"
              className="form-control"
              min="0"
              onChange={handleUserLifeChangeAmount}
              value={userLifeChangeAmountState}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary"
                value={userLifeChangeAmountState}
                data-operator="-"
                onClick={handleUserLifeChange}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="Container d-flex justify-content-around m-5">
          <Link to="/" >
        <button className="btn btn-primary lcBtn">
            Home
        </button>
        </Link>
        <Alert
          type="secondary"
          style={{ opacity: gameStatusState.gameFinished ? 1 : 0 }}
        > {gameStatusState.winner} wins this match! </Alert>
        <button className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>

      <br />
      <div className="Container text-center m-5">
        <h1>Opponents Life Total: {oppLifeState}</h1>
        <div className="container">
          <div className="input-group p-3 m-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-primary px-2"
                type="button"
                value={oppLifeChangeAmountState}
                data-operator="+"
                onClick={handleOppLifeChange}
              >
                +
              </button>
            </div>
            <input
              type="number"
              className="form-control"
              min="0"
              onChange={handleOppLifeChangeAmount}
              value={oppLifeChangeAmountState}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary"
                value={oppLifeChangeAmountState}
                data-operator="-"
                onClick={handleOppLifeChange}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
