const orderBy = (type, countries, parameter) => {
  countries.sort((c1, c2) =>
    c1[parameter] === c2[parameter] ? 0 : c1[parameter] < c2[parameter] ? -1 : 1
  );
  if (type === "ASC") {
    return countries;
  }
  if (type === "DESC") {
    return countries.reverse();
  }
};
export default orderBy;
// const countries = [
//   { name: "BOLIVIA", population: 23 },
//   { name: "CHILE", population: 35 },
//   { name: "PARAGUAY", population: 15 },
//   { name: "URUGUAY", population: 16 },
//   { name: "BRAZIL", population: 315 },
//   { name: "ARGENTINA", population: 50 },
//   { name: "ECUADOR", population: 40 },
// ];
