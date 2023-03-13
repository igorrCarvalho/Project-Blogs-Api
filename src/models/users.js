const UserModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
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


module.exports = {
  UserModel,
};