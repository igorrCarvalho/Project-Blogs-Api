const { userModel } = require('../models/User');

const validateUserEntries = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await userModel().findOne({ where: { email } });
  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  } 
  next();
};

module.exports = {
  validateUserEntries,
};