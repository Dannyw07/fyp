module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define("news", {
    news_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    news_title: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    news_photo: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    news_desc: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  });
  return news;
};
