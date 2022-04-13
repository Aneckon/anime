const { Schema, model } = require('mongoose');

const AnimeSchema = new Schema({
  id: { type: Schema.Types.ObjectId, unique: true },
  name: { type: String },
  description: { type: String },
  rating: { type: String },
  categorie: { type: String },
  studio: { type: String },
  img: { type: String },
});

module.exports = model('Anime', AnimeSchema);
