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
  SET_ORDER,
  SET_CONTINENTS_FILTER,
  SET_COUNTRY_SEARCH
} from "../actions/actionTypes.js";

import {
  countriesByActivity,
  countriesByContinents,
} from "./filterBy.js";
import orderBy from "./orderBy.js";

const initialState = {
  countries: [],
  countryDetail: {},
  countriesActivities: [],
  countriesResults: [],
  order: 'ALPHA_ASC',
  filterCountries: [],
  continentsFilter: [],
  countrySearch:''
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
    case SET_CONTINENTS_FILTER:
      return {
        ...state,
        continentsFilter: [].concat(action.payload)
      }
    
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        filterCountries:       
        state.continentsFilter.length
          ? [].concat(countriesByContinents(state.countriesResults, state.continentsFilter))
          : [],
      };
    case FILTER_BY_ACTIVITY_NAME:
      return {
        ...state,
        countriesResults: countriesByActivity(
          state.countriesActivities,
          action.payload
        ),
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }
    case ORDER_BY_ALPHA_ASC:
      return {
        ...state,
        countriesResults: [].concat(orderBy("ASC", state.countriesResults, "name")),
        filterCountries: [].concat(orderBy("ASC", state.filterCountries, "name")),
      };
    case ORDER_BY_ALPHA_DESC:
      return {
        ...state,
        countriesResults: [].concat(orderBy("DESC", state.countriesResults, "name")),
        filterCountries: [].concat(orderBy("DESC", state.filterCountries, "name"))
      };
    case ORDER_BY_POP_ASC:
      return {
        ...state,
        countriesResults: [].concat(orderBy("ASC", state.countriesResults, "population")),
        filterCountries: [].concat(orderBy("ASC", state.filterCountries, "population"))
      };
    case ORDER_BY_POP_DESC:
      return {
        ...state,
        countriesResults: [].concat(orderBy("DESC", state.countriesResults, "population")),
        filterCountries: [].concat(orderBy("DESC", state.filterCountries, "population"))
      };
    case SET_COUNTRY_SEARCH:
      return{
        ...state,
        countrySearch: action.payload
      }
    case SEARCH_BY_NAME:
      return {
        ...state,
        countriesResults: [].concat(action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
