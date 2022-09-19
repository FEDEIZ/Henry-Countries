import Countries from "../Countries/Countries.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  orderByAlphaAsc,
  orderByAlphaDesc,
  getCountriesActivities,
  orderByPopAsc,
  orderByPopDesc,
  filterByActivities,
  filterByContinents,
  searchByName,
} from "./../../actions";
export function Main() {
  const countriesResults = useSelector((state) => state.countriesResults);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchByName(e.target.value));
  };

  useEffect(async () => {
    if (!countriesResults.length) {
      await dispatch(getCountries());
      await dispatch(getCountriesActivities());
      dispatch(orderByAlphaAsc());
    }
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(orderByAlphaAsc())}>ASC</button>
      <button onClick={() => dispatch(orderByAlphaDesc())}>DESC</button>
      <button onClick={() => dispatch(orderByPopAsc())}>POP_ASC</button>
      <button onClick={() => dispatch(orderByPopDesc())}>POP_DESC</button>
      <input type="text" placeholder="SearchByName" onChange={handleChange} />
      <Countries countries={countriesResults} />
    </div>
  );
}

export default Main;
