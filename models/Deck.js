const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  deckName: { type: String, required: true },
  whiteMana: { type: Boolean, required: true},
  blueMana: { type: Boolean, required: true},
  blackMana: { type: Boolean, required: true},
  redMana: { type: Boolean, required: true}, 
  greenMana: { type: Boolean, required: true}, 
});

const Deck = model('Deck', DeckSchema);

module.exports = Deck;