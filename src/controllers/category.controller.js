const { createCategory, getAllCategories } = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  const categoryCreated = await createCategory(name);
  const { type, message } = categoryCreated;
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(201).json(message);
};

const showCategoryById = async (req, res) => {
  const allCat = await getAllCategories();
  res.status(200).json(allCat);
};

module.exports = {
  showCategoryById,
  createNewCategory,
};