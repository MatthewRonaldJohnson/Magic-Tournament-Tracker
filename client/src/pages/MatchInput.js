import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';
import MatchNotes from '../components/MatchNotes';
import SubmitBtn from '../components/SubmitBtn';
import API from '../utils/API';

export default function MatchInput() {
  const [state, dispatch] = useStoreContext();
  const [tournamentState, setTournamentState] = useState({
    freePlayClicked: false,
    userInput: '',
  });
  const [userDeckState, setUserDeckState] = useState({
    decks: [],
    deckName: '',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: false,
  });
  const [oppDeckState, setOppDeckState] = useState();
  const [matchDataState, setMatchDataState] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (userDeckState.deckName && tournamentState && oppDeckState.deckName) {
      API.submitMatch({
        userID: state.userId,
        tournament: tournamentState.userInput,
        userDeck: {
          name: userDeckState.deckName,
          whiteMana: userDeckState.whiteMana,
          blueMana: userDeckState.whiteMana,
          blackMana: userDeckState.whiteMana,
          redMana: userDeckState.whiteMana,
          greenMana: userDeckState.whiteMana,
        },
        oppDeck: {
          name: oppDeckState.deckName,
          whiteMana: oppDeckState.whiteMana,
          blueMana: oppDeckState.whiteMana,
          blackMana: oppDeckState.whiteMana,
          redMana: oppDeckState.whiteMana,
          greenMana: oppDeckState.whiteMana,
        },
        matchData: {
          wins: matchDataState.wins,
          losses: matchDataState.losses,
          oppName: matchDataState.opponentName,
          notes: matchDataState.matchNotes,
        },
      }).catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <div className="container mt-2">
        <TournamentCard
          tournaments={state.tournaments}
          setTournamentState={setTournamentState}
          tournamentState={tournamentState}
        />
        <div className="row">
          <DeckCard
            decks={state.decks}
            userDeckState={userDeckState}
            setUserDeckState={setUserDeckState}
          />
          <OpponentDeckCard />
        </div>
        <MatchNotes />
        <SubmitBtn onClick={handleFormSubmit} />
      </div>
    </div>
  );
}
