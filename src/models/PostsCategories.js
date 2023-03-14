'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'post_category',
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };
  
  return PostCategory;
};