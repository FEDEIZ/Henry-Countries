const express = require('express');
const Country = require('./../models/Country.js');
//const fetch = require('fetch');

const getAllCountries = () =>{

    fetch('https://restcountries.eu/rest/v3/all')
    .then((data) => data.json())
    .then((countries) => {
      countries.forEach(async (el) => {
        await Country.findOrCreate({
          id: el.alpha3Code,
          name: el.name,
          flag: el.flag,
          continent: el.region,
          capital: el.capital,
          subregion: el.subregion,
          area: el.area,
          population: el.population,
        })
      })
   })
}

module.exports = getAllCountries;