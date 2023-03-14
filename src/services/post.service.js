const { User, Category, BlogPost } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        as: 'categorias',
        through: { attributes: [] },
      },
      {
        model: User,
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