const Anime = require('../apiMock');
const animeService = require('../service/animeService');
const userService = require('../service/userService');

const animeController = {
  async register(req, res) {
    try {
      const { email, password, username } = req.body;
      const userData = await userService.regisntation(email, password, username);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json({ userData, message: 'Успешно зарегестрирувался' });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password, username } = req.body;
      const userData = await userService.login(email, password, username);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json({ userData, message: 'Успешно зашол' });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  async animeCreate(req, res) {
    try {
      const { name, description, rating, categorie, studio, img } = req.body;
      const userData = await animeService.animeItems(
        name,
        description,
        rating,
        categorie,
        studio,
        img,
      );

      return res.json({ userData, message: 'Успешно добавив' });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  async logoute(req, res) {
    try {
      const { refreshToken } = res.cookie;
      const token = await userService.logoute(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  async animeList(req, res) {
    try {
      const animeList = await animeService.animeList()
      return res.json(animeList)
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};

module.exports = animeController;
