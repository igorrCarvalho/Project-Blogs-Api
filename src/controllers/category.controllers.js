const { createCategory } = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  const categoryCreated = await createCategory(name);
  const { type, message } = categoryCreated;
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(201).json(message);
};

module.exports = {
  createNewCategory,
};