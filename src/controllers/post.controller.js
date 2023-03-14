const { getAllPosts } = require('../services/post.service');

const showAllPosts = async (req, res) => {
  const allPosts = await getAllPosts();
  res.status(200).json(allPosts);
};

module.exports = {
  showAllPosts,
};