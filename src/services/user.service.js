const User = require('../models');

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const supplyUserByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (data) => {
  const { displayName, email, password, image } = data;
  if (displayName.length < 8) {
    return { type: 400, message: '"displayName" length must be at least 8 characters long' };
  }

  const regex = /^[a-z0-9.]+@[a-z0-9]/i;

  if (!regex.test(email)) {
    return { type: 400, message: '"email" must be a valid email' };
  }

  if (password.length < 6) {
    return { type: 400, message: '"password" length must be at least 6 characters long' };
  }

  const userAlreadyExists = await supplyUserByEmail(email);

  if (userAlreadyExists) {
    return { type: 409, message: 'User already registered' };
  }

  const createSuccess = await User.create(displayName, email, password, image);
  return { type: false, message: createSuccess };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { type: 404, message: 'User does not exist' };
  return { type: false, message: user };
};

module.exports = {
  supplyUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
};