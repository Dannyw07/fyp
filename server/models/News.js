module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define("news", {
    news_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    news_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    news_img: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    news_desc: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    news_author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  news.associate = (models) => {
    news.hasMany(models.comment, {
      onDelete: "cascade",
    });
  };
  return news;
};
