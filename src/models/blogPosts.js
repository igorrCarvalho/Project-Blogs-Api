const blogPostModel = async (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  }
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    }); 
  };

  return BlogPost;
};

module.exports = {
  blogPostModel,
};