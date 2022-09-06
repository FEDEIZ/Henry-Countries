const axios = require("axios");
const { Country } = require("../../db");
require("dotenv").config();
const { API_URL } = process.env;

module.exports = async (req, res) => {
  console.log("Estoy en GET");
  const countriesJSON = [];
  try {
    const countries = await axios.get(`${API_URL}/all`);
    await countries.data.forEach((c) => {
      Country.upsert({
        id: c.cca3,
        name: c.name.common,
        flagImg: c.flags[0],
        continent: c.region,
        capital: c.capital ? c.capital[0] : "NONE",
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      });
    });
    countries.data.forEach((c) => {
      countriesJSON.push({
        id: c.cca3,
        name: c.name.common,
        flagImg: c.flags[0],
        continent: c.region,
        capital: c.capital ? c.capital[0] : "NONE",
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      });
    });
    res.json(countriesJSON);
  } catch (err) {
    res.send(err.message);
  }
};
