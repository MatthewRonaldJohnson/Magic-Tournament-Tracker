import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';
import MatchNotes from '../components/MatchNotes';
import SubmitBtn from '../components/SubmitBtn';
import API from '../utils/API';
import { useAuth0 } from "@auth0/auth0-react";
import { SET_USER } from "../utils/actions";

export default function MatchInput() {
  const { user } = useAuth0();
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
  const [oppDeckState, setOppDeckState] = useState({
    deckName: '',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: false,
  });
  const [matchDataState, setMatchDataState] = useState();

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (
      userDeckState.deckName &&
      tournamentState.userInput &&
      oppDeckState.deckName
    ) {
      await API.submitMatch({
        userID: state.userId,
        tournament: tournamentState.userInput,
        userDeck: {
          name: userDeckState.deckName,
          whiteMana: userDeckState.whiteMana,
          blueMana: userDeckState.blueMana,
          blackMana: userDeckState.blackMana,
          redMana: userDeckState.redMana,
          greenMana: userDeckState.greenMana,
        },
        oppDeck: {
          name: oppDeckState.deckName,
          whiteMana: oppDeckState.whiteMana,
          blueMana: oppDeckState.blueMana,
          blackMana: oppDeckState.blackMana,
          redMana: oppDeckState.redMana,
          greenMana: oppDeckState.greenMana,
        },
        matchData: {
          wins: matchDataState.wins,
          losses: matchDataState.losses,
          oppName: matchDataState.oppName,
          notes: matchDataState.matchNotes,
        },
      }).catch((err) => console.log(err));
      API.getUserId(user.email)
        .then(res => {
          dispatch({
            type: SET_USER,
            payload: {
              id: res.data._id,
              tournaments: res.data.tournaments,
              decks: res.data.decks
            }
          })

        })

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
          <OpponentDeckCard
            oppDeckState={oppDeckState}
            setOppDeckState={setOppDeckState}
          />
        </div>
        <MatchNotes
          matchDataState={matchDataState}
          setMatchDataState={setMatchDataState}
        />
        <SubmitBtn onClick={handleFormSubmit} />
      </div>
    </div>
  );
}
