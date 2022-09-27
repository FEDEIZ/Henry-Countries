import Countries from "./Countries/Countries.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav/Nav.js";
import {
  getCountries,
  getCountriesActivities,
  searchByName,
  setOrder,
  setContinentsFilter,
  setCountrySearch,
  filterCountries,
  order,
} from "./../../actions";

import {
  ALPHA_ASC,
  ALPHA_DESC,
  POP_ASC,
  POP_DESC,
} from "./../../actions/stateTypes.js";

import Paging from "./Paging/Paging.js";
import CountriesActivities from "./CountriesActivities.js";
import style from "./main.module.css";

export function Main() {
  const countries = useSelector((state) => state.countries);
  const countriesResults = useSelector((state) => state.countriesResults);
  const orderSet = useSelector((state) => state.order);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  const activities = useSelector((state) => state.activities);
  const countrySearch = useSelector((state) => state.countrySearch);
  const countriesActivities = useSelector((state) => state.countriesActivities);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initial() {
      await dispatch(getCountries());
      //await dispatch(getCountriesActivities());
      await applyOrder(orderSet);
    }
    initial();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setOrder(ALPHA_ASC));
      dispatch(setContinentsFilter([]));
      dispatch(setCountrySearch(""));
      dispatch(getCountries());
      applyOrder(orderSet);
    };
  }, []);

  useEffect(() => {
    refresh(countrySearch.value);
  }, [countrySearch, orderSet, activities, continentsFilter]);

  const applyOrder = (orderSet) => {
    switch (orderSet) {
      case ALPHA_ASC:
        dispatch(order("ASC", "name"));
        return;
      case ALPHA_DESC:
        dispatch(order("DESC", "name"));
      case POP_ASC:
        dispatch(order("ASC", "population"));
        return;
      case POP_DESC:
        dispatch(order("DESC", "population"));
        return;
      default:
        dispatch(order("ASC", "name"));
        return;
    }
  };

  const refresh = async (name) => {
    if (countrySearch.preValue !== name) await dispatch(searchByName(name));
    dispatch(filterCountries(continentsFilter, activities));
    applyOrder(orderSet);
  };
  return (
    <div className={style.main}>
      <Nav />
      <div>
        <Paging />
        <Countries countries={countriesResults} />
      </div>
      {/* <div>
        <h2>Countries Activities</h2>
        <CountriesActivities countries={countriesActivities} />
      </div> */}
    </div>
  );
}

export default Main;
