const express = require('express');
const { createNewUser, showAllUsers, showUserById } = require('../controllers/usersControllers');
const { validateToken } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', createNewUser);

userRouter.get('/', validateToken, showAllUsers);

userRouter.get('/:id', validateToken, showUserById);

module.exports = userRouter;