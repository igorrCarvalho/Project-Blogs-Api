const express = require('express');
const { createNewCategory, showCategoryById } = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, createNewCategory);

categoriesRouter.get('/', validateToken, showCategoryById);

module.exports = categoriesRouter;