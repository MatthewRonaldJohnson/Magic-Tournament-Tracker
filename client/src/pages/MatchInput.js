import React from 'react';
import { useStoreContext } from '../utils/GlobalState';
import TournamentCard from '../components/TournamentCard';
import DeckCard from '../components/DeckCard';
import OpponentDeckCard from '../components/OpponentDeckCard';

export default function MatchInput() {
  const [state, dispatch] = useStoreContext();
  return (
    <div>
      <div className="container mt-2">
        <TournamentCard tournaments={state.tournaments} />
        <div className="row">
          <DeckCard
            decks={[
              {
                _id: 1,
                deckName: 'MonoGreen',
                whiteMana: false,
                blueMana: false,
                redMana: false,
                greenMana: true,
                blackMana: false,
              },
              {
                _id: 2,
                deckName: 'MonoRed',
                whiteMana: false,
                blueMana: false,
                redMana: true,
                greenMana: false,
                blackMana: false,
              },
              {
                _id: 3,
                deckName: 'Rogues',
                whiteMana: false,
                blueMana: true,
                redMana: false,
                greenMana: false,
                blackMana: true,
              },
            ]}
          />
          <OpponentDeckCard />
        </div>
      </div>
    </div>
  );
}
