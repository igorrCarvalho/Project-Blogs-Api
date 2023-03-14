const express = require('express');
const { createNewUser } = require('../controllers/usersControllers');

const userRouter = express.Router();

userRouter.post('/', createNewUser);

module.exports = userRouter;