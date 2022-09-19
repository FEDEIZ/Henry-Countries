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

import {
  ACTIVITY_FILTER, ALPHA_ASC,
  ALPHA_DESC, CONTINENT_FILTER, POP_ASC, POP_DESC
  } from "../../actions/stateTypes.js";
export function Main() {
  const countriesResults = useSelector((state) => state.countriesResults);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchByName(e.target.value));
    if(countriesResults.length)
    switch(order){
    case ALPHA_ASC:
      dispatch(orderByAlphaAsc());
      return; 
    case ALPHA_DESC:
      dispatch(orderByAlphaDesc());
      return;
    case POP_ASC:
      dispatch(orderByPopAsc());
      return;
    case POP_DESC:
      dispatch(orderByPopDesc());
      return;
    }
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
