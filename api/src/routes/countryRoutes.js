const { Router, json } = require("express");
const {
  getCountries,
  getCountryById,
  getCountriesActivities,
} = require("../controllers/get.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(json());

router.get("/activities", getCountriesActivities);

router.get("/:idCountry", getCountryById);

router.get("/", getCountries);

module.exports = router;
