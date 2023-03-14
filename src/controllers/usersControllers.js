const { generateToken } = require('../token/token');
const User = require('../models/User');
const { createUser } = require('../services/user.service');

const login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  const { password, ...otherData } = user.dataValues;
  const newToken = generateToken(otherData);
  res.status(200).json({ token: newToken });
};

const createNewUser = async (req, res) => {
  const createSuccess = await createUser(req.body);
  const { email } = req.body;
  const { type, message } = createSuccess;
  if (type) {
    return res.status(type).json({ message });
  }
  const tok = generateToken(email);
  res.status(201).json({ token: tok });
};

module.exports = {
  login,
  createNewUser,
};