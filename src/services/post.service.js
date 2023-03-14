const { categoryModel } = require('../models/Category');
const { blogPostModel } = require('../models/BlogPost');
const { userModel } = require('../models/User');

const getAllPosts = async () => {
  const posts = await blogPostModel().findAll({
    include: [
      {
        model: categoryModel(),
        as: 'categorias',
        through: { attributes: [] },
      },
      {
        model: userModel(),
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return posts;
};

module.exports = {
  getAllPosts,
};