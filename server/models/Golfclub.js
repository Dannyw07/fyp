module.exports = (sequelize, DataTypes) => {
  const golfclub = sequelize.define("golfclub", {
    gcId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    gc_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gc_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gc_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gc_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gc_distance: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gc_photos: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    gc_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gc_desc: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    gc_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    // booking_id: {
    //   //foreign key in golfclub table
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   required: true,
    // },
  });

  return golfclub;
};
