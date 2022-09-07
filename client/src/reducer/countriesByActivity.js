const countriesByActivity = (name, countries) => {
  const countriesByActivity = [];
  if (name) {
    countries.forEach((country) => {
      country.activities.filter((activity) => {
        activity.name.toUpperCase().includes(name.toUpperCase()) ||
          name.includes(activity.name.toUpperCase());
      });
    });
    countries.filter((country) => country.activities.length !== 0);
    return countriesByActivity;
  } else return false;
};

export default countriesByActivity;
//match(/^.*BRA.*$/)
