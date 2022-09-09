import {
  FILTER_BY_ACTIVITY_NAME,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  GET_COUNTRY_DETAILS,
  ORDER_BY_ALPHA_ASC,
  ORDER_BY_ALPHA_DESC,
  ORDER_BY_POP_ASC,
  ORDER_BY_POP_DESC,
  SEARCH_BY_NAME,
} from "../actions/actionTypes.js";

import { countriesByActivity, countriesByContinents } from "./filterBy.js";
import orderBy from "./orderBy.js";

const initialState = {
  countries: [],
  countryDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload],
      };
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countries: countriesByContinents(this.countries, action.payload),
      };
    case FILTER_BY_ACTIVITY_NAME:
      return {
        ...state,
        countries: countriesByActivity(this.countries, action.payload),
      };
    case ORDER_BY_ALPHA_ASC:
      return {
        ...state,
        countries: orderBy("ASC", this.countries, "name"),
      };
    case ORDER_BY_ALPHA_DESC:
      return {
        ...state,
        countries: orderBy("DESC", this.countries, "name"),
      };
    case ORDER_BY_POP_ASC:
      return {
        ...state,
        countries: orderBy("ASC", this.countries, "population"),
      };
    case ORDER_BY_POP_DESC:
      return {
        ...state,
        countries: orderBy("DESC", this.countries, "population"),
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: [...action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;
