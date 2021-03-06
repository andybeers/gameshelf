const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true },
  bggId: { type: String, required: true },
  thumbnail: { type: String },
  image: { type: String },
  description: { type: String },
  yearPub: { type: Number },
  minPlayers: { type: Number },
  maxPlayers: { type: Number },
  playtimeMinutes: { type: Number },
  publisher: { type: String },
  expansion: { type: Boolean }
});

schema.index({title: 'text'});

module.exports = mongoose.model('Game', schema);