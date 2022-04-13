const jwt = require('jsonwebtoken');
const tokenModel = require('../models/tokenModels');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, 'secret', { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, 'secret', { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, token: refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
