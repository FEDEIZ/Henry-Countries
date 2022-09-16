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
  GET_COUNTRIES_ACTIVITIES,
} from "../actions/actionTypes.js";

import { countriesByActivity, countriesByContinents } from "./filterBy.js";
import orderBy from "./orderBy.js";

const initialState = {
  countries: [],
  countryDetail: {},
  countriesActivities: [],
  countriesOrder: [],
  countriesFilter: [],
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
    case GET_COUNTRIES_ACTIVITIES:
      return {
        ...state,
        countriesActivities: [...action.payload],
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countriesFilter: countriesByContinents(state.countries, action.payload),
      };
    case FILTER_BY_ACTIVITY_NAME:
      return {
        ...state,
        countriesFilter: countriesByActivity(
          state.countriesActivities,
          action.payload
        ),
      };
    case ORDER_BY_ALPHA_ASC:
      return {
        ...state,
        countriesOrder: orderBy("ASC", state.countries, "name"),
      };
    case ORDER_BY_ALPHA_DESC:
      return {
        ...state,
        countriesOrder: orderBy("DESC", state.countries, "name"),
      };
    case ORDER_BY_POP_ASC:
      return {
        ...state,
        countriesOrder: orderBy("ASC", state.countries, "population"),
      };
    case ORDER_BY_POP_DESC:
      return {
        ...state,
        countriesOrder: orderBy("DESC", state.countries, "population"),
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
