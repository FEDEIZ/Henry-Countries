import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByContinents } from "../../../actions";
import { getContinents } from "../../../reducer/filterBy";

export function Filter() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [continentsFilter, setContinentsFilter] = useState([]);
  const continents = getContinents(countries).sort();

  const handleFilter = (e) => {
    if (e.target.checked)
      setContinentsFilter([...continentsFilter, e.target.value]);
    else
      setContinentsFilter(
        continentsFilter.filter((continents) => continents !== e.target.value)
      );
  };

  useEffect(() => {
    dispatch(filterByContinents(continentsFilter));
  }, [continentsFilter]);

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
