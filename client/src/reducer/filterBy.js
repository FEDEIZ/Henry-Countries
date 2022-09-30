export const filterBy = ([continents, activities], countries) => {
  var countriesResults = [];
  if (continents.length && activities.length) {
    countriesResults = countriesByContinents(countries, continents);
    countriesResults = countriesByActivity(countriesResults, activities);
  } else {
    if (continents.length)
      countriesResults = countriesByContinents(countries, continents);
    if (activities.length)
      countriesResults = countriesByActivity(countries, activities);
  }
  return countriesResults;
};

export const countriesByActivity = (countries, activitiesF) => {
  const countriesByActivitySet = new Set();
  if (activitiesF.length > 0) {
    for (let i = 0; i < activitiesF.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        for (let k = 0; k < countries[j].activities.length; k++) {
          if (
            activitiesF[i].toUpperCase() ===
            countries[j].activities[k].name.toUpperCase()
          ) {
            countriesByActivitySet.add(countries[j]);
            break;
          }
        }
      }
    }
    return Array.from(countriesByActivitySet);
  }
};
export const countriesByContinents = (countries, continentsF) => {
  const countriesByContinentSet = new Set();

  if (continentsF.length > 0) {
    for (let i = 0; i < continentsF.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (continentsF[i].toUpperCase() === countries[j].continent) {
          countriesByContinentSet.add(countries[j]);
        }
      }
    }
    return Array.from(countriesByContinentSet);
  } else return countries;
};

export const getContinents = (countries) => {
  const continents = new Set();
  if (countries.length) {
    countries.forEach((c) => {
      continents.add(
        c.continent.charAt(0).toUpperCase() + c.continent.slice(1).toLowerCase()
      );
    });
    return Array.from(continents);
  } else return [];
};

export const getActivities = (countries) => {
  const activities = new Set();
  if (countries.length) {
    for (let c = 0; c < countries.length; c++) {
      for (let a = 0; a < countries[c].activities.length; a++) {
        activities.add(
          countries[c].activities[a].name.charAt(0).toUpperCase() +
            countries[c].activities[a].name.slice(1).toLowerCase()
        );
      }
    }
    return Array.from(activities);
  } else return [];
};

//match(/^.*BRA.*$/)
// const activitiesF = ["MUSEOS", "RESTAURANTES", "MONTANISMO"];
// const continentsF = ["AMERICAS", "EUROPE"];
// const countries = [
//   {
//     name: "BOLIVIA",
//     population: 23,
//     continent: "AMERICAS",
//     activities: [
//       { name: "MUSEOS" },
//       { name: "MONTANISMO" },
//       { name: "RESTAURANTES" },
//     ],
//   },
//   {
//     name: "CHILE",
//     population: 35,
//     continent: "EUROPE",
//     activities: [
//       { name: "MUSICA" },
//       { name: "MONTANISMO" },
//       { name: "TEATRO" },
//     ],
//   },
//   {
//     name: "PARAGUAY",
//     population: 15,
//     continent: "AFRICA",
//     activities: [{ name: "MUSEOS" }],
//   },
//   {
//     name: "URUGUAY",
//     population: 16,
//     continent: "ASIA",
//     activities: [{ name: "TEATRO" }, { name: "RESTAURANTES" }],
//   },
//   {
//     name: "BRAZIL",
//     population: 315,
//     continent: "AMERICAS",
//     activities: [],
//   },
//   {
//     name: "ARGENTINA",
//     population: 50,
//     continent: "EUROPE",
//     activities: [
//       { name: "MUSEOS" },
//       { name: "MUSICA" },
//       { name: "DEPORTES" },
//       { name: "MONTANISMO" },
//       { name: "TEATRO" },
//       { name: "RESTAURANTES" },
//     ],
//   },
//   {
//     name: "ECUADOR",
//     population: 40,
//     continent: "AMERICAS",
//     activities: [{ name: "DEPORTES" }, { name: "MONTANISMO" }],
//   },
// ];

// console.log(countriesByContinents(countries, continentsF));
