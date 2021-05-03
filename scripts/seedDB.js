const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/TournamentTracker'
);

const userSeed = [
  {
    userName: 'Matthew',
    password: 'root1234',
    decks: [1, 2, 3],
    tournaments: [0],
  },
  {
    userName: 'James',
    password: 'root1234',
    decks: [4, 5],
    tournaments: [2],
  },
  {
    userName: 'Manny',
    password: 'root1234',
    decks: [6],
    tournaments: [1],
  },
];

const tournamentSeed = [
  {
    _id: 1,
    deck: 1,
    tournamentData: [0],
  },
  {
    _id: 0,
    deck: 4,
    tournamentData: [1],
  },
  {
    _id: 2,
    deck: 3,
    tournamentData: [2],
  },
];

const deckSeed = [
  {
    _id: 1,
    deckName: 'Rogues',
    whiteMana: false,
    blueMana: true,
    blackMana: true,
    redMana: false,
    greenMana: false,
  },
  {
    _id: 2,
    deckName: 'Izzet',
    whiteMana: false,
    blueMana: true,
    blackMana: false,
    redMana: true,
    greenMana: false,
  },
  {
    _id: 3,
    deckName: 'Rakdos',
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: false,
  },
  {
    _id: 4,
    deckName: 'Jund',
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: true,
  },
  {
    _id: 5,
    deckName: 'Tron',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: true,
  },
  {
    _id: 6,
    deckName: 'UW Control',
    whiteMana: true,
    blueMana: true,
    blackMana: false,
    redMana: false,
    greenMana: false,
  },
];

const matchSeed = [
  {
    _id: 1,
    opponentDeck: 5,
    wins: 2,
    losses: 1,
    result: true,
    notes: "Doesn't have a good answer to early agro",
    opponentsName: 'James',
  },
  {
    _id: 0,
    opponentDeck: 2,
    wins: 1,
    losses: 2,
    result: false,
    notes: '',
    opponentsName: 'Matthew',
  },
  {
    _id: 0,
    opponentDeck: 6,
    wins: 3,
    losses: 0,
    result: true,
    notes: '',
    opponentsName: 'Manny',
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Deck.remove({})
  .then(() => db.Deck.collection.insertMany(deckSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
db.Tournament.remove({})
  .then(() => db.Tournament.collection.insertMany(tournamentSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
