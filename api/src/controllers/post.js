const { Country, Activity } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  try {
    const [activity] = await Activity.findOrCreate({
      where: {
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
      },
    });
    const country = await Country.findByPk(countryId);
    if (country) {
      const result = await activity.addCountries(country);
      res.json(result);
    } else res.send("No country found");
  } catch (err) {
    console.log(err.message);
    res
      .status(400)
      .send(`The activity ${name} already exist. Try with another name!`);
  }
};

module.exports = { postActivity };
