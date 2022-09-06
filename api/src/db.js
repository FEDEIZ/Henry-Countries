require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const axios = require("axios").default;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Pokemon } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// axios.get('https://restcountries.com/v3.1/name/argentina')
// .then(country => {
//   return country.data[0];
// })
// .then(async (data) => {
//   //console.log(data);
//   await sequelize.models.Country.create({
//         id: data.cca3,
//         name: data.name.common,
//         flagImg: data.flags.png,
//         continent: data.region,
//         capital: data.capital[0],
//         subregion: data.subregion,
//         area: data.area,
//         population: data.population,
//   })

//   console.log({
//     id: data.cca3,
//         name: data.name.common,
//         flagImg: data.flags.png,
//         continent: data.region,
//         capital: data.capital[0],
//         subregion: data.subregion,
//         area: data.area,
//         population: data.population
//   })
// })

axios.get('https://restcountries.com/v3.1/all')
.then(countries => {
  return countries.data
})
.then(countries =>{
  countries.forEach(
    async country =>{
    await sequelize.models.Country.create({
              id: country.cca3,
              name: country.name.common,
              flagImg: country.flags.png,
              continent: country.region,
              capital: Array.isArray(country.capital) ? country.capital[0] : country.capital ,
              subregion: country.subregion,
              area: country.area,
              population: country.population,
        })
  }
  //country => console.log(country.name.common)
  )
  //console.log(countries.filter(country => country.capial === undefined))
})





module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
