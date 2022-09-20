import Countries from "../Countries/Countries.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  orderByAlphaAsc,
  getCountriesActivities,
} from "./../../actions";

import Nav from "./Nav.js";

export function Main() {
  const countriesResults = useSelector((state) => state.countriesResults);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!countriesResults.length) {
      await dispatch(getCountries());
      await dispatch(getCountriesActivities());
      dispatch(orderByAlphaAsc());
    }
  }, []);

  
  return (
    <div>
      <Nav />
      <Countries countries={countriesResults} />
    </div>
  );
}

export default Main;
