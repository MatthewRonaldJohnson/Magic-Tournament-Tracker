import React from 'react';
import { useStoreContext } from '../utils/GlobalState';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';
import MatchNotes from '../components/MatchNotes';

export default function MatchInput() {
  const [state, dispatch] = useStoreContext();
  return (
    <div>
      <div className="container mt-2">
        <TournamentCard tournaments={state.tournaments} />
        <div className="row">
          <DeckCard
            decks={state.decks}
          />
          <OpponentDeckCard />
        </div>
        <MatchNotes />
      </div>
    </div>
  );
}
