import Countries from "../Countries/Countries.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import Nav from "./Paging/Paging.js";

export function Main() {
  const countries = useSelector((state) => state.countries);
  const countriesResults = useSelector((state) => state.countriesResults);
  const orderSet = useSelector((state) => state.order);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  const activities = useSelector((state) => state.activities);
  const countrySearch = useSelector((state) => state.countrySearch);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initial() {
      if (!countries.length) {
        await dispatch(getCountries());
        await dispatch(getCountriesActivities());
      }
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
    if (countries.length) applyOrder(orderSet);
  }, [orderSet]);

  useEffect(() => {
    if (countries.length) {
      dispatch(filterCountries(continentsFilter, activities));
      applyOrder(orderSet);
    }
  }, [activities, continentsFilter]);

  useEffect(() => {
    search(countrySearch);
  }, [countrySearch]);

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

  const search = async (name) => {
    await dispatch(searchByName(name));
    dispatch(filterCountries(continentsFilter, activities));
    applyOrder(orderSet);
  };

  return (
    <div>
      <Nav />
      <Countries countries={countriesResults} />
    </div>
  );
}

export default Main;
