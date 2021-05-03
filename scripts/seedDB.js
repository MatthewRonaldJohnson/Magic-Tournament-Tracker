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
