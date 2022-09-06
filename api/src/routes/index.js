const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesMidd = require("../middlewares/countries.js");
const activitiesMidd = require("../middlewares/activities.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countriesMidd);

module.exports = router;
