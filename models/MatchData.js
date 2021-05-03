const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MatchDataSchema = new Schema({
  opponentDeck: {
    type: Schema.Types.ObjectId,
    ref: 'Deck',
  },
  wins: { type: Number },
  losses: { type: Number },
  result: { type: Boolean },
  notes: { type: String },
  opponentsName: { type: String },
});

const MatchData = mongoose.model('MatchData', MatchDataSchema);

module.exports = MatchData;
