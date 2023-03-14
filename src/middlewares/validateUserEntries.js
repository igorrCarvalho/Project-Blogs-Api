const { supplyUserByEmail } = require('../services/user.service');

const validateUserEntries = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await supplyUserByEmail(email);
  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  } 
  next();
};

module.exports = {
  validateUserEntries,
};