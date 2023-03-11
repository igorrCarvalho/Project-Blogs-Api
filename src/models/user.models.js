const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  User.associate = (models) => {
    User.hasMany(models.blog_posts, {
      foreignKey: 'id',
      as: 'blog_posts'
    });
  }
  return User;
};


module.exports = {
  UserModel,
};