const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duration: {
        type: DataTypes.ARRAY(DataTypes.SMALLINT), // [day, hours]
        validate: {
          length(value) {
            if (value.length !== 2) {
              throw new Error("duration must only have days and hours");
            }
          },
        },
      },
      season: {
        type: DataTypes.ENUM("SPRING", "SUMMER", "AUTUMN", "WINTER"),
      },
    },
    { timestamps: false }
  );
};
