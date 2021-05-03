const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  decks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Deck',
    },
  ],
  tournaments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tournament',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
