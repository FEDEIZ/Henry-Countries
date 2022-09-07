const axios = require("axios");
const { Country, Activity } = require("./db.js");
require("dotenv").config();
const { API_URL } = process.env;

module.exports = async () => {
  console.log("LOADING DB...");
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
    console.log("DB LOADED SUCCESSFULLY!");
  } catch (err) {
    res.send(err.message);
  }
};
