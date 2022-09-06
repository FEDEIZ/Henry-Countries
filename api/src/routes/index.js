const { Router, json } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getCountries,
  getCountriesByName,
  getCountryById,
} = require("../controllers/get.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(json());

router.get("/countries", getCountries);

module.exports = router;
