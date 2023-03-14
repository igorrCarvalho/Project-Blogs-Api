const express = require('express');
const { validateUserEntries } = require('../middlewares/validateUserEntries');
const { login } = require('../controllers/usersController');

const loginRouter = express.Router();

loginRouter.post('/', validateUserEntries, login);

module.exports = loginRouter;