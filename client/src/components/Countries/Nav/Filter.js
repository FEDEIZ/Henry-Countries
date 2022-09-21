import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContinentsFilter } from "../../../actions";
import { getContinents } from "../../../reducer/filterBy";

export function Filter() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  //const [continentsFilter, setContinentsFilter] = useState([]);
  const continents = getContinents(countries).sort();
  const countriesResults = useSelector((state) => state.countriesResults);

  const handleFilter = (e) => {
    if (e.target.checked)
      dispatch(setContinentsFilter([...continentsFilter, e.target.value]));
    else
      dispatch(setContinentsFilter(
        continentsFilter.filter((continents) => continents !== e.target.value)
      ));
  };

  // useEffect(() => {
  //   if(countriesResults.length)
  //   dispatch(filterByContinents(continentsFilter));
  // }, [continentsFilter]);

  return (
    <div>
      <label>Filter By Continents:</label>
      <div>
        {continents.length ? (
          continents.map((continent) => (
            <label key={continent}>
              {continent}
              <input
                type="checkbox"
                value={continent}
                onChange={handleFilter}
              />
            </label>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Filter;
