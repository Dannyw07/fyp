module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define("booking", {
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    booking_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    booking_time: {
      type: DataTypes.TIME(4),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  return booking;
};
