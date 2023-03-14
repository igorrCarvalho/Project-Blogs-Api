const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const { showAllPosts } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.get('/', validateToken, showAllPosts);

/* postRouter.post('/', validateToken, addNewPost); */

module.exports = postRouter;