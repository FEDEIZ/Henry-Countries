import Countries from "../Countries/Countries.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  orderByAlphaAsc,
  orderByAlphaDesc,
  orderByPopAsc,
  orderByPopDesc,
  getCountriesActivities,
  filterByContinents,
  searchByName,
  setOrder,
  setContinentsFilter,
  setCountrySearch
} from "./../../actions";

import {
  ALPHA_ASC,
  ALPHA_DESC,
  POP_ASC,
  POP_DESC,
} from "./../../actions/stateTypes.js";

import Nav from "./Nav/Nav.js";

export function Main() {
  const countries = useSelector(state => state.countries);
  const countriesResults = useSelector((state) => state.countriesResults);
  const filterCountries = useSelector((state) => state.filterCountries);
  const order = useSelector((state) => state.order);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  const countrySearch = useSelector((state) => state.countrySearch);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initial() {
      if (!countriesResults.length) {
        await dispatch(getCountries());
        await dispatch(getCountriesActivities());

      }
    }
    initial();
  }, []);

  useEffect(() => {
    return () =>{
      dispatch(setOrder(ALPHA_ASC));
      dispatch(setContinentsFilter([]));
      dispatch(setCountrySearch(''));
    }
  },[])

  useEffect(() => {
    
    const refresh = async () =>{

      if(countriesResults.length){
  
      await dispatch(searchByName(countrySearch));
      dispatch(filterByContinents(continentsFilter));
  
      switch (order) {
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
        default:
          return;
      }
      
    }
  }
  
  refresh();
  
},[order,continentsFilter,countries,countrySearch]);



  return (
    <div>
      <Nav />
      <Countries countries={ filterCountries.length? filterCountries : countriesResults} />
    </div>
  );
}

export default Main;
