const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
        set(value) {
          this.setDataValue("id", value.toUpperCase());
        },
        validate: {
          isAlpha: true,
        },
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        set(value) {
          this.setDataValue("name", value.toUpperCase());
        },
        unique: true,
        validate: {
          isAlpha: true,
        },
      },
      flagImg: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
          isAlpha: true,
        },
        allowNull: false,
        unique: true,
      },
      continent: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          isAlpha: true,
        },
        set(value) {
          this.setDataValue("continent", value.toUpperCase());
        },
      },
      capital: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: true,
        },
      },
      subregion: {
        type: DataTypes.STRING(20),
        validate: {
          isAlpha: true,
        },
        set(value) {
          this.setDataValue("continent", value.toUpperCase());
        },
      },
      area: {
        type: DataTypes.FLOAT,
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
