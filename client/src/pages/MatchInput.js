import React from 'react';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard'
import { useStoreContext } from '../utils/GlobalState';

export default function MatchInput() {
  const [state, dispatch] = useStoreContext();
  return (
    <div>
      <div className="container mt-2">
        <TournamentCard tournaments={state.tournaments} />
        <DeckCard decks={state.decks} />
      </div>
    </div>
  );
}
