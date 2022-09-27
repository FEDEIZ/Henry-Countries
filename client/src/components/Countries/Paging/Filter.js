import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContinentsFilter, setActivitiesFilter } from "../../../actions";
import { getContinents, getActivities } from "../../../reducer/filterBy";

export function Filter() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  const continents = getContinents(allCountries).sort();
  const activitiesFilter = useSelector((state) => state.activities);
  const activities = getActivities(allCountries).sort();

  const handleFilterContinent = (e) => {
    if (e.target.checked)
      dispatch(setContinentsFilter([...continentsFilter, e.target.value]));
    else
      dispatch(
        setContinentsFilter(
          continentsFilter.filter((continents) => continents !== e.target.value)
        )
      );
  };

  const handleFilterActivity = (e) => {
    if (e.target.checked)
      dispatch(setActivitiesFilter([...activitiesFilter, e.target.value]));
    else
      dispatch(
        setActivitiesFilter(
          activitiesFilter.filter((activity) => activity !== e.target.value)
        )
      );
  };

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
                onChange={handleFilterContinent}
                checked={continentsFilter.includes(continent)}
              />
            </label>
          ))
        ) : (
          <></>
        )}
      </div>
      <label>Filter By Activity:</label>
      <div>
        {activities.length ? (
          activities.map((activity) => (
            <label key={activity}>
              {activity}
              <input
                type="checkbox"
                value={activity}
                onChange={handleFilterActivity}
                checked={activitiesFilter.includes(activity)}
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
