const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
  deck: {
    type: Schema.Types.ObjectId,
    ref: 'Deck',
  },
  tournamentData: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MatchData',
    },
  ],
});

const Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = Tournament;
