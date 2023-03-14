const jwt = require('jsonwebtoken');

require('dotenv/config');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const generateToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const isTokenValid = (token) => jwt.verify(token, secret);

module.exports = {
  generateToken,
  isTokenValid,
};