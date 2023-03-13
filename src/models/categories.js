const categoryModel = async (sequelize, DataTypes) => {
  const Category = await sequelize.define(
  'Category',
  { name: DataTypes.STRING, },
  { timestamps: false, underscored: true },
  );
  return Category;
};

module.exports = {
  categoryModel,
};