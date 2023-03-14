const { Category } = require('../models/Category');

const createCategory = async (name) => {
  if (!name) {
    return { type: 400, message: '"name" is required' };
  }
  const { id } = await Category.create({ name });
  return { type: false, message: { id, name } };
};

module.exports = {
  createCategory,
};