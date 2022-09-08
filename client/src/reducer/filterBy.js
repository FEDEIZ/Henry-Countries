export const countriesByActivity = (countries, activitiesF) => {
  const countriesByActivitySet = new Set();

  if (activitiesF.length > 0) {
    for (let i = 0; i < activitiesF.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        for (let k = 0; k < countries[j].activities.length; k++) {
          if (activitiesF[i] === countries[j].activities[k].name) {
            countriesByActivitySet.add(countries[j]);
            break;
          }
        }
      }
    }
    return [...countriesByActivitySet];
  }
};
export const countriesByContinents = (countries, continentsF) => {
  const countriesByContinentSet = new Set();

  if (continentsF.length > 0) {
    for (let i = 0; i < continentsF.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (continentsF[i] === countries[j].continent) {
          countriesByContinentSet.add(countries[j]);
        }
      }
    }
    return [...countriesByContinentSet];
  }
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
