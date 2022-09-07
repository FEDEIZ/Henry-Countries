const { Router, json } = require("express");
const { getCountries, getCountryById } = require("../controllers/get.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(json());

router.get("/:idCountry", getCountryById);

router.get("/", getCountries);

module.exports = router;
