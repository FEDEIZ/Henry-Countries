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

import {
  ACTIVITY_FILTER, ALPHA_ASC,
  ALPHA_DESC, CONTINENT_FILTER, POP_ASC, POP_DESC
  } from "../actions/stateTypes.js"

import { countriesByActivity, countriesByContinents } from "./filterBy.js";
import orderBy from "./orderBy.js";

const initialState = {
  countries: [],
  countryDetail: {},
  countriesActivities: [],
  countriesResults: [],
  countriesResultsFlag: false,
  order:''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesResults: action.payload,
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
        countriesResults: countriesByContinents(
          state.countriesResults,
          action.payload
        ),
      };
    case FILTER_BY_ACTIVITY_NAME:
      return {
        ...state,
        countriesResults: countriesByActivity(
          state.countriesActivities,
          action.payload
        ),
      };
    case ORDER_BY_ALPHA_ASC:
      return {
        ...state,
        countriesResults: orderBy("ASC", state.countriesResults, "name"),
        countriesResultsFlag: !state.countriesResultsFlag,
        order: ALPHA_ASC
      };
    case ORDER_BY_ALPHA_DESC:
      return {
        ...state,
        countriesResults: orderBy("DESC", state.countriesResults, "name"),
        countriesResultsFlag: !state.countriesResultsFlag,
        order: ALPHA_DESC
      };
    case ORDER_BY_POP_ASC:
      return {
        ...state,
        countriesResults: orderBy("ASC", state.countriesResults, "population"),
        countriesResultsFlag: !state.countriesResultsFlag,
        order: POP_ASC
      };
    case ORDER_BY_POP_DESC:
      return {
        ...state,
        countriesResults: orderBy("DESC", state.countriesResults, "population"),
        countriesResultsFlag: !state.countriesResultsFlag,
        order: POP_DESC
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countriesResults :
        state.countries.filter(c => c.name.includes(action.payload.toUpperCase())) 

      };
    default:
      return state;
  }
}

export default rootReducer;
