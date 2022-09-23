const orderBy = ([type, parameter], countries) => {
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
