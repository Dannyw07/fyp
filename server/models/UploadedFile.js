module.exports = (sequelize, DataTypes) => {
  const uploadedFile = sequelize.define("uploadedFile", {
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    size: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    folder: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  return uploadedFile;
};
