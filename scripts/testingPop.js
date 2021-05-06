const mongoose = require('mongoose');
const { User, Deck, Tournament, MatchData } = require('../models');


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/TournamentTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function queryDB () {
    const user = 
        await User
                .findOne({email: "matthewronaldjohnson@gmail.com"})
                .populate("decks")
                .populate("tournaments")
                .populate({
                    path: "tournamentData",
                    model: "MatchData"
                })
    console.log("user", user)
    console.log(user.tournaments[0].tournamentData)
    process.exit(0)
}

queryDB()