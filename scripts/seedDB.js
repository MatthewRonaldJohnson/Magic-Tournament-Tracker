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
  }
];

const tournamentSeed = [
  {

    tournamentName: 'GP Austin',
    format: "Standard",
    tournamentData: [],
  },
  {
    tournamentName: 'MCQ 5/8/21',
    format: "Modern",
    tournamentData: [],
  },
  {
    tournamentName: 'FNM 5/7/21',
    format: "Pioneer",
    tournamentData: [],
  },
];

const deckSeed = [
  {
    deckName: 'Rogues',
    format: "Standard",
    whiteMana: false,
    blueMana: true,
    blackMana: true,
    redMana: false,
    greenMana: false,
  },
  {
    deckName: 'Izzet',
    format: "Modern",
    whiteMana: false,
    blueMana: true,
    blackMana: false,
    redMana: true,
    greenMana: false,
  },
  {
    deckName: 'Rakdos',
    format: "Pioneer",
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: false,
  },
  {
    deckName: 'Jund',
    format: "Standard",
    whiteMana: false,
    blueMana: false,
    blackMana: true,
    redMana: true,
    greenMana: true,
  },
  {
    deckName: 'Tron',
    format: "Modern",
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: true,
  },
  {
    deckName: 'UW Control',
    format: "Pioneer",
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
    wins: 2,
    losses: 0,
    result: true,
    notes: '',
    opponentsName: 'Manny',
  },
  {
    wins: 1,
    losses: 2,
    result: false,
    notes: '',
    opponentsName: 'Jimbo',
  },
  {
    wins: 2,
    losses: 1,
    result: true,
    notes: '',
    opponentsName: 'Trey',
  },
  {
    wins: 0,
    losses: 2,
    result: false,
    notes: '',
    opponentsName: 'Tas',
  },
];

let deckIds = [];
let matchIds = [];
let tournamnetIds = [];
let userIds = [];

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
    matchSeed[i].opponentDeck = deckIds[i];
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
    tournamentSeed[i].deck = deckIds[i];
    tournamentSeed[i].tournamentData.push(matchIds[0]);
    tournamentSeed[i].tournamentData.push(matchIds[1]);
    tournamentSeed[i].tournamentData.push(matchIds[2]);
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

  for (let i = 0; i < userSeed.length; i++) {
    userSeed[i].decks.push(deckIds[0]);
    userSeed[i].decks.push(deckIds[1]);
    userSeed[i].decks.push(deckIds[2]);
    userSeed[i].tournaments.push(tournamnetIds[0])
    userSeed[i].tournaments.push(tournamnetIds[1])
    userSeed[i].tournaments.push(tournamnetIds[2])
  }

  await db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
      console.log("===========Users")
      console.log(data.insertedIds);
      userIds = data.insertedIds;
    })
    .catch((err) => {
      console.error(err);
    });

  await db.Tournament.updateMany({}, {userId : userIds[0]})

  process.exit(0)
}

seed();
