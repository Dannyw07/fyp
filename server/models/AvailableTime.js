module.exports = (sequelize, DataTypes) => {
  const aTime = sequelize.define("aTime", {
    aTime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    reference_date: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    aTime_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    aTime_time: {
      type: DataTypes.TIME(4),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return aTime;
};
