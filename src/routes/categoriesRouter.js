const express = require('express');
const { createNewCategory } = require('../controllers/category.controllers');
const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, createNewCategory);

module.exports = categoriesRouter;