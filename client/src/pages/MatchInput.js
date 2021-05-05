import React from 'react';
import TournamentCard from '../components/TournamentCard';
import { useStoreContext } from '../utils/GlobalState';

export default function MatchInput() {
  const state = useStoreContext();
  return (
    <div>
      <div className="container mt-2">
        <TournamentCard
          deck={state[0].decks}
          tournaments={state[0].tournaments}
        />
      </div>
    </div>
  );
}
