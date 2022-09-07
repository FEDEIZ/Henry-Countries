const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getCountries = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      const allCountries = await Country.findAll();
      res.json(allCountries);
    } else {
      const countriesName = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Activity,
      });
      //console.log(countriesName);
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

module.exports = { getCountries, getCountryById };
