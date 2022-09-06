const express = require("express");
const { Country, Activity } = require("../db");
const router = express.Router();
const getCountries = require("./controllers/getCountries.js");

router.use(express.json());

router.get("/", getCountries);

module.exports = router;
