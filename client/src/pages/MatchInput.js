import React from 'react';
import { useStoreContext } from '../utils/GlobalState';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';
import MatchNotes from '../components/MatchNotes';
import SubmitBtn from '../components/SubmitBtn';

export default function MatchInput() {
  const [state, dispatch] = useStoreContext();
  const decks= state.decks
  const decksFD = [
    {
      _id: "6092fc902726131f443f9a1ea",
      deckName: 'MonoGreen',
      whiteMana: false,
      blueMana: false,
      redMana: false,
      greenMana: true,
      blackMana: false,
    },
  ]

// Exact same structure, but if you pass in the FakeData (decksFD) on line 33 instead of decks it works.
  console.log("Real Data", decks)
  console.log("Fake Data", decksFD)

  return (
    <div>
      <div className="container mt-2">
        <TournamentCard tournaments={state.tournaments} />
        <div className="row">
          <DeckCard
            decks={decks}
          />
          <OpponentDeckCard />
        </div>
        <MatchNotes />
        <SubmitBtn />
      </div>
    </div>
  );
}
