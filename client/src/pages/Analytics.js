import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import SelectOption from '../components/SelectOption';

import BarChart from '../components/BarChart';
import dataMaker from '../utils/CreateBarChartData';

export default function Analytics() {
  const [state] = useStoreContext();
  const [chartData, setChartData] = useState(null);
  const [renderSwitch, setRenderSwtich] = useState(true);
  const [displayMode, setDisplayMode] = useState("Tournament");
  const firstTournament = state.tournaments[0];
  const [displayedTournament, setDisplayedTournament] = useState({
    id: '',
    name: '',
    deckUsed: '',
    tournamentData: '',
  });
  const [displayedFormat, setDisplayedFormat] = useState("")
  const [displayedDeck, setDisplayedDeck] = useState({
    id: '',
    name: '',
    format: '',
    whiteMana: '',
    blueMana: '',
    blackMana: '',
    redMana: '',
    greenMana: '',
  })
  const formats = [];
  for (let i = 0; i < state.tournaments.length; i++) {
    const format = state.tournaments[i].format
    if (!formats.includes(format)) {
      formats.push(format)
    }
  }


  useEffect(() => {
    setChartData(
      dataMaker.createBarChartData(displayedTournament.tournamentData)
    );
    setRenderSwtich(!renderSwitch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedTournament.name]);

  useEffect(() => {
    if (firstTournament) {
      setDisplayedTournament({
        id: firstTournament._id,
        name: firstTournament.tournamentName,
        deckUsed: firstTournament.deck.deckName,
        tournamentData: firstTournament.tournamentData,
      });
      setRenderSwtich(!renderSwitch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstTournament]);

  const handleSelectChange = (e) => {
    switch (displayMode) {
      case "Tournament":
        const tournament = state.tournaments.find(
          (tournament) => tournament._id === e.target.value
        );
        setDisplayedTournament({
          id: tournament._id,
          name: tournament.tournamentName,
          deckUsed: tournament.deck.deckName,
          tournamentData: tournament.tournamentData,
        });
        setRenderSwtich(!renderSwitch);
        break;
      case "Format":
        setDisplayedFormat(e.target.value);
        break;
      case "Deck":
        const deck = state.decks.find(
          deck => deck._id == e.target.value
        );
        setDisplayedDeck({
            id: deck._id,
            name: deck.deckName,
            format: deck.format,
            whiteMana: deck.whiteMana,
            blueMana: deck.blueMana,
            blackMana: deck.blackMana,
            redMana: deck.redMana,
            greenMana: deck.greenMana,
          });
        break;


      default:
        break;
    }
  };

  const handleDisplayModeChange = (e) => {
    setDisplayMode(e.target.value)
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <select
              className="input-group-text"
              id="displayModeSelect"
              value={displayMode}
              onChange={handleDisplayModeChange}
            >
              <option>Tournament</option>
              <option>Format</option>
              <option>Deck</option>
            </select>
          </div>
          <select
            className="custom-select"
            id="tournamentSelect"
            onChange={handleSelectChange}
          >
            {displayMode === "Tournament" ?
              state.tournaments.map((tournament, i) => {
                return (
                  <SelectOption
                    selected={i === 0 ? true : false}
                    key={tournament._id}
                    value={tournament._id}
                    text={tournament.tournamentName + " (" + tournament.format + ")"}
                  />
                );
              })
              : displayMode === "Format" ?
                formats.map((format, i) => {
                  return (
                    <SelectOption
                      selected={i === 0 ? true : false}
                      key={format}
                      value={format}
                      text={format}
                    />
                  );
                }) :
                state.decks.map((deck, i) => {
                  return (
                    <SelectOption
                      selected={i === 0 ? true : false}
                      key={deck._id}
                      value={deck._id}
                      text={deck.deckName + " (" + deck.format + ")"}
                    />
                  );
                })}
          </select>
        </div>
      </div>
      <div className="row chartContainer">
        <h1 className="col-12 text-center">{displayedTournament.name}</h1>
        <BarChart data={chartData} renderSwitch={renderSwitch} />
        <h2 className="col-12 text-center">
          Playing: {displayedTournament.deckUsed}
        </h2>
      </div>
    </div>
  );
}
