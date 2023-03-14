"use strict";

const userModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    Users.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'blogPosts'
    });
  }
  return Users;

};

module.exports = {
  userModel,
};