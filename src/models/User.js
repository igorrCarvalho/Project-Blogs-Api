"use strict";

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  }
  );
  Users.associate = (models) => {
    Users.hasMany(models.blog_posts, {
      foreignKey: 'id',
      as: 'blog_posts'
    });
  }
  return Users;
};