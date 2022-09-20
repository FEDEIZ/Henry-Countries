import React, { useState } from "react";
import { useSelector } from "react-redux";

import { getContinents } from "../../../reducer/filterBy";

export function Filter({ countries }) {
  const [continentsFilter, setContinentsFilter] = useState(
    getContinents(countries)
  );

  const handleFilter = (e) => {
    // dispatch(filterByContinents(e.target.value, e.target.checked));
  };

  return (
    <div>
      <label>Filter By Continents:</label>
      <div>
        {continentsFilter.length ? (
          continentsFilter.map((continent) => (
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
