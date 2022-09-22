const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getCountries = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      const allCountries = await Country.findAll({
        include: Activity
      });
      res.json(allCountries);
    } else {
      const countriesName = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Activity,
      });
      console.log(countriesName);
      if (!countriesName.length) return res.send("No country found");
      res.json(countriesName);
    }
    //console.log(allCountries);
  } catch (err) {
    res.send(err.message);
  }
};

const getCountryById = async (req, res) => {
  const { idCountry } = req.params;
  try {
    const countryFound = await Country.findOne({
      where: { id: idCountry },
      include: Activity,
    });
    res.json(countryFound);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
};

const getCountriesActivities = async (req, res) => {
  try {
    console.log("hola");
    const countries = await Country.findAll({
      include: Activity,
      required: true,
    });
    const countriesActivities = countries.filter((c) => c.activities.length);
    console.log(countriesActivities);
    res.json(countriesActivities);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
};

module.exports = { getCountries, getCountryById, getCountriesActivities };
