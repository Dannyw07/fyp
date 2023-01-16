module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define("booking", {
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    bookng_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    booking_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    booking_NoP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    booking_NoH: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return booking;
};
