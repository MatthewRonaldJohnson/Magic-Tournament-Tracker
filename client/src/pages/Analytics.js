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

  const handleSelectChange = async (e) => {
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
              htmlFor="tournamentSelect"
              id="displayModeSelect"
              value={displayMode}
              onChange={handleDisplayModeChange}
            >
              <option>Tournament</option>
              <option>Deck</option>
            </select>
          </div>
          {displayMode === "Tournament" ?
            <select
              className="custom-select"
              id="tournamentSelect"
              value={displayedTournament.id}
              onChange={handleSelectChange}
            >
              {state.tournaments.map((tournament, i) => {
                return (
                  <SelectOption
                    selected={i === 0 ? true : false}
                    key={tournament._id}
                    id={tournament._id}
                    text={tournament.tournamentName}
                  />
                );
              })}
            </select> :
            <select>
              <option>On Deck</option>
            </select>
          }
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
