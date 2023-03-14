const { generateToken } = require('../token/token');
const User = require('../models/User');

const login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  const { password, ...otherData } = user.dataValues;
  const newToken = generateToken(otherData);
  res.status(200).json({ token: newToken });
};

module.exports = {
  login,
};