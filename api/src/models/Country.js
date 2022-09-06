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
          if (value) this.setDataValue("id", value.toUpperCase());
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          if (value) this.setDataValue("name", value.toUpperCase());
        },
        unique: true,
      },
      flagImg: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
        allowNull: false,
        unique: true,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,

        set(value) {
          if (value) this.setDataValue("continent", value.toUpperCase());
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "NONE",

        set(value) {
          if (value) this.setDataValue("capital", value.toUpperCase());
        },
      },
      subregion: {
        type: DataTypes.STRING,

        set(value) {
          if (value) this.setDataValue("subregion", value.toUpperCase());
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
