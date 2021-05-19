import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { useAuth0 } from '@auth0/auth0-react';
import { SET_USER } from '../utils/actions';
import API from '../utils/API';
import TournamentCard from '../components/TournamentCard';
import FormatEntry from '../components/FormatEntry';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';
import MatchNotes from '../components/MatchNotes';
import SubmitBtn from '../components/SubmitBtn';
import Alert from '../components/Alert';

export default function MatchInput() {
  const defaultOppDeckState = {
    deckName: '',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: false,
  };

  const defaultTournamentState = {
    freePlayClicked: false,
    userInput: '',
  };

  const defaultUserDeckState = {
    decks: [],
    deckName: '',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: false,
  };

  const defaultAlertState = {
    type: '',
    text: '',
  };

  const defaultMatchDataState = {};

  const { user } = useAuth0();
  const [state, dispatch] = useStoreContext();
  const [alertState, setAlertState] = useState(defaultAlertState);
  const [matchDataState, setMatchDataState] = useState(defaultMatchDataState);
  const [tournamentState, setTournamentState] = useState(
    defaultTournamentState
  );
  const [userDeckState, setUserDeckState] = useState(defaultUserDeckState);
  const [oppDeckState, setOppDeckState] = useState(defaultOppDeckState);
  const [formatState, setFormatState] = useState("");

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
        format: formatState,
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
          wins: matchDataState.wins || 0,
          losses: matchDataState.losses || 0,
          oppName: matchDataState.oppName,
          notes: matchDataState.matchNotes,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setMatchDataState(defaultMatchDataState);
            setOppDeckState(defaultOppDeckState);
            setAlertState({
              type: 'success',
              text: 'Submitted Successfully!',
            });
            setTimeout(function(){
              setAlertState(defaultAlertState)
            }, 1000)
          }
        })
        .catch((err) => setAlertState({ text: err, type: 'warning' }));
      API.getUserId(user.email).then((res) => {
        dispatch({
          type: SET_USER,
          payload: {
            id: res.data._id,
            tournaments: res.data.tournaments,
            decks: res.data.decks,
          },
        });
      });
    } else {
      setAlertState({
        type: 'warning',
        text: 'Please make sure to fill out the form before submitting',
      });
      setTimeout(function(){
        setAlertState(defaultAlertState)
      }, 1000)
    }
  }

  return (
    <div>
      <div className="container mt-2">
        <TournamentCard
          tournaments={state.tournaments}
          setTournamentState={setTournamentState}
          tournamentState={tournamentState}
          setUserDeckState={setUserDeckState}
          userDeckState={userDeckState}
          setFormatState={setFormatState}
        />
        <FormatEntry 
          formatState={formatState}
          setFormatState={setFormatState}
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
        <Alert
          type={alertState.type}
          style={{ opacity: alertState ? 1 : 0, marginBottom: 10 }}
        >
          {alertState.text}
        </Alert>
      </div>
    </div>
  );
}
