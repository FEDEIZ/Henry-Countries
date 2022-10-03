import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContinentsFilter, setActivitiesFilter } from "../../../actions";
import { getContinents, getActivities } from "../../../reducer/filterBy";
import style from "./filter.module.css";

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
    <div className={style.filterContainer}>
      <div className={style.subfilterContainer}>
        <p>Filter By Continents:</p>
        <div className={style.continents}>
          {continents.length ? (
            continents.map((continent) => (
              <label key={continent} className={style.containerCheck}>
                {continent}
                <input
                  type="checkbox"
                  value={continent}
                  onChange={handleFilterContinent}
                  checked={continentsFilter.includes(continent)}
                />
                <span className={style.checkmark}></span>
              </label>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={style.subfilterContainer}>
        <p>Filter By Activity:</p>
        <div className={style.activities}>
          {activities.length ? (
            activities.map((activity) => (
              <label key={activity} className={style.containerCheck}>
                {activity}
                <input
                  type="checkbox"
                  value={activity}
                  onChange={handleFilterActivity}
                  checked={activitiesFilter.includes(activity)}
                />
                <span className={style.checkmark}></span>
              </label>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
