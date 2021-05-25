import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import SelectOption from '../components/SelectOption';
import TournamentTable from "../components/TournamentTable";
import FormatTable from "../components/FormatTable";
import DeckTable from "../components/DeckTable"

import BarChart from '../components/BarChart';
import dataMaker from '../utils/CreateBarChartData';

export default function Analytics() {
  const [state] = useStoreContext();
  const [chartData, setChartData] = useState(null);
  const [renderSwitch, setRenderSwtich] = useState(true);
  const [displayMode, setDisplayMode] = useState("Tournament");
  const firstTournament = state.tournaments[0];
  const firstDeck = state.decks[0];
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
    let data;
    switch (displayMode) {
      case "Tournament":
        data = displayedTournament.tournamentData
        break;
      case "Deck":
        const relevantTournaments = state.tournaments.filter(tournament => tournament.deck._id === displayedDeck.id)
        const matchData = relevantTournaments.map(tournament => tournament.tournamentData).flat()
        data = matchData
        break;
      case "Format":
        const relevantDecks = state.decks.filter(deck => deck.format === displayedFormat)
        const inFormatTournaments = state.tournaments.filter(tournament => tournament.format === displayedFormat)
        data = [relevantDecks, inFormatTournaments]
        break;
      default:
        break;
    }
    if (displayMode === 'Format') {
      setChartData(dataMaker.createFormatChartData(data))
    } else {
      setChartData(dataMaker.createBarChartData(data))
    }
    setRenderSwtich(!renderSwitch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayMode, displayedTournament.name, displayedDeck.name, displayedFormat]);

  useEffect(() => {
    if (firstTournament) {
      setDisplayedTournament({
        id: firstTournament._id,
        name: firstTournament.tournamentName,
        deckUsed: firstTournament.deck.deckName,
        tournamentData: firstTournament.tournamentData,
      });
    }
  }, [firstTournament]);

  useEffect(() => {
    if (firstDeck) {
      setDisplayedDeck({
        id: firstDeck._id,
        name: firstDeck.deckName,
        format: firstDeck.format,
        whiteMana: firstDeck.whiteMana,
        blueMana: firstDeck.blueMana,
        blackMana: firstDeck.blackMana,
        redMana: firstDeck.redMana,
        greenMana: firstDeck.greenMana,
      });
    }
  }, [firstDeck]);

  useEffect(() => {
    if (!displayedFormat) {
      setDisplayedFormat(formats[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formats]);


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
          deck => deck._id === e.target.value
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
            value={displayMode === "Tournament" ? displayedTournament.id :
              displayMode === "Format" ? displayedFormat :
                displayedDeck.id
            }
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
        <h1 className="col-12 text-center">
          {displayMode === "Tournament" ? <>{displayedTournament.name}</> : <></>}
          {displayMode === "Format" ? <>{displayedFormat}</> : <></>}
          {displayMode === "Deck" ? <>{displayedDeck.name}</> : <></>}
        </h1>
        <BarChart data={chartData} renderSwitch={renderSwitch} />
        <h2 className="col-12 text-center">
          {displayMode === "Tournament" ? <>Playing: {displayedTournament.deckUsed}</> : <></>}
          {displayMode === "Deck" ? <>{displayedDeck.format}</> : <></>}
        </h2>
      </div>
      <div className='row my-2'>
      {displayMode === "Tournament" ? <TournamentTable data={displayedTournament.tournamentData}/> : <></>}
      {displayMode === "Format" ? <FormatTable data={chartData}/> : <></>}
      {displayMode === "Deck"? <DeckTable data={chartData}/>: <></>}
      </div>
    </div>
  );
}
