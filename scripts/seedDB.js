const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/TournamentTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSeed = [
  {

    email: 'matthewronaldjohnson@gmail.com',
    decks: [],
    tournaments: [],
  },
  {
    email: 'jamesfswebdev@gmail.com',
    decks: [],
    tournaments: [],
  },
  {
    email: 'manny@test.com',
    decks: [],
    tournaments: [],
  },
];

const tournamentSeed = [
  {

    tournamentName: 'MTG West Prelims',
    tournamentData: [],
  },
  {
    tournamentName: 'MTG East Finals',
    tournamentData: [],
  },
  {
    tournamentName: 'MTG NA Regionals',
    tournamentData: [],
  },
];

const deckSeed = [
  {
    deckName: 'Rogues',
    whiteMana: false,
    blueMana: true,
    blackMana: true,
    redMana: false,
    greenMana: false,
  },
  {
    deckName: 'Izzet',
    whiteMana: false,
    blueMana: true,
    blackMana: false,
    redMana: true,
    greenMana: false,
  },
  {
    deckName: 'Rakdos',
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: false,
  },
  {
    deckName: 'Jund',
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: true,
  },
  {
    deckName: 'Tron',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: true,
  },
  {
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
    wins: 2,
    losses: 1,
    result: true,
    notes: "Doesn't have a good answer to early agro",
    opponentsName: 'James',
  },
  {
    wins: 1,
    losses: 2,
    result: false,
    notes: '',
    opponentsName: 'Matthew',
  },
  {
    wins: 3,
    losses: 0,
    result: true,
    notes: '',
    opponentsName: 'Manny',
  },
];

let deckIds = [];
let matchIds = [];
let tournamnetIds = [];

const seed = async function () {
  await db.Deck.deleteMany({})
    .then(() =>
      db.Deck.collection.insertMany(deckSeed)
    )
    .then((data) => {
      console.log("==========Decks")
      console.log(data.insertedIds);
      deckIds = data.insertedIds;
    })
    .catch((err) => {
      console.error(err);
    });

  for (let i = 0; i < matchSeed.length; i++) {
    matchSeed[i].opponentDeck = deckIds[0];
  }

  await db.MatchData.deleteMany({})
    .then(() => db.MatchData.collection.insertMany(matchSeed))
    .then((data) => {
      console.log("=============Matches")
      console.log(data.insertedIds);
      matchIds = data.insertedIds;
    })
    .catch((err) => {
      console.error(err);
    });

  for (let i = 0; i < tournamentSeed.length; i++) {
    tournamentSeed[i].deck = deckIds[0];
    tournamentSeed[i].tournamentData.push(matchIds[0]);
  }

  await db.Tournament.deleteMany({})
    .then(() => db.Tournament.collection.insertMany(tournamentSeed))
    .then((data) => {
      console.log("==================Tournamnets")
      console.log(data.insertedIds);
      tournamnetIds = data.insertedIds;
    })
    .catch((err) => {
      console.error(err);
    });

  for (let i = 0; i < userSeed.length; i++){
    userSeed[i].decks.push(deckIds[0]);
    userSeed[i].tournaments.push(tournamnetIds[0])
  }

    await db.User.deleteMany({})
      .then(() => db.User.collection.insertMany(userSeed))
      .then((data) => {
        console.log("===========Users")
        console.log(data.insertedIds);
      })
      .catch((err) => {
        console.error(err);
      });

    process.exit(0)
}

seed();
