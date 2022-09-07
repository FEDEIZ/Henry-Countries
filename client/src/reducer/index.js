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

import { countriesByActivity } from "./countriesByActivity.js";

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
        countries: countries.filter(
          (country) => country.continent === action.payload.toUpperCase()
        ),
      };
    case FILTER_BY_ACTIVITY_NAME:
      return {
        ...state,
        countries: countriesByActivity(action.payload, countries),
      };
    case ORDER_BY_ALPHA_ASC:
      return {
        ...state,
        countries: [...action.payload],
      };
    case ORDER_BY_ALPHA_DESC:
      return {
        ...state,
        countries: [...action.payload],
      };
    case ORDER_BY_POP_ASC:
      return {
        ...state,
        countries: [...action.payload],
      };
    case ORDER_BY_POP_DESC:
      return {
        ...state,
        countries: [...action.payload],
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: [...action.payload],
      };
    // case SHOW_FORM_ACTIVITY:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}

export default rootReducer;
