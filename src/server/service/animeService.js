const AserModels = require('../models/animeModels');

class animeService {
  async animeItems(name, description, rating, categorie, studio, img) {
    const animeCandidate = await AserModels.findOne({ name });
    if (animeCandidate) {
      throw new Error(`Аніме з такою назвоню ${name} уже знайдено`);
    }
    const anime = await AserModels.create({ name, description, rating, categorie, studio, img });

    return anime
  }

  async animeList(){
    const animeList = await AserModels.find()
    return animeList
  }
}

module.exports = new animeService();
