const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const registeredUser = await User.create({
        login,
        password: hash,
      });

      if (!registeredUser) {
        return res
          .status(401)
          .json(
            "ошибка регистрации, пожалуйста проверьте правильность введенных данных"
          );
      }

      res.status(201).json("Регистрация прошла успешно");
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.json("Неверный email или пароль");
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.json("Неверный email или пароль");
      }

      const payload = {
        id: candidate._id,
      };

      const token = await jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      res.json({
        token,
      });
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
};
