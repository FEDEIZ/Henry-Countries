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
} from "./../../actions";
export function Main() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!countries.length) {
      await dispatch(getCountries());
      await dispatch(getCountriesActivities());
      dispatch(orderByAlphaAsc());
    }
  }, [dispatch]);

  return (
    <div>
      <Countries />
    </div>
  );
}

export default Main;
