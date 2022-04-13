const UserModels = require('../models/userModels');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDtos');
const userModels = require('../models/userModels');

class UserService {
  async regisntation(email, password, username) {
    const candidate = await UserModels.findOne({ email });
    if (candidate) {
      throw new Error(`Користувач з такою поштою ${email} використовується`);
    }
    const user = await UserModels.create({ email, password, username });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await UserModels.findOne({ email });
    if (!user) {
      throw new Error(`Користувач з такою поштою не використовується`);
    }
    const isPassword = await (password, user.password);
    if (!isPassword) {
      throw new Error(`Користувач з таким паролем не використовується`);
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logoute(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}

module.exports = new UserService();
