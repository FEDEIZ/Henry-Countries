import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAILS,
  SEARCH_BY_NAME,
  GET_COUNTRIES_ACTIVITIES,
  SET_ORDER,
  ORDER,
  SET_CONTINENTS_FILTER,
  SET_COUNTRY_SEARCH,
  SET_ACTIVITY_FILTER,
  FILTER_COUNTRIES,
  DELETE_ACTIVITY
} from "../actions/actionTypes.js";

import { filterBy } from "./filterBy.js";
import orderBy from "./orderBy.js";

const initialState = {
  countries: [],
  countryDetail: {},
  countriesActivities: [],
  activities: [],
  countriesResults: [],
  order: "ALPHA_ASC",
  filterCountries: [],
  continentsFilter: [],
  countrySearch: {
    value:'',
    preValue: ''
  },
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

    case DELETE_ACTIVITY:
      return {
        ...state,
        countriesActivities: [].concat(state.countriesActivities.filter(c => c.id !== action.payload)),
      }
    case SET_CONTINENTS_FILTER:
      return {
        ...state,
        continentsFilter: [].concat(action.payload),
      };

    case SET_ACTIVITY_FILTER:
      return {
        ...state,
        activities: [].concat(action.payload),
      };

    case FILTER_COUNTRIES:
      return {
        ...state,
        countriesResults:
          state.activities.length || state.continentsFilter.length
            ? [].concat(
                filterBy(
                  [action.payload[0], action.payload[1]],
                  state.countries
                )
              )
            : [].concat(state.countries),
      };

    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case ORDER:
      return {
        ...state,
        countriesResults: [].concat(
          orderBy(
            [action.payload[0], action.payload[1]],
            state.countriesResults
          )
        ),
      };

    case SET_COUNTRY_SEARCH:
      return {
        ...state,
        countrySearch: {
          value: action.payload,
          preValue: state.countrySearch.value,
        }
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: Array.isArray(action.payload)
          ? [].concat(action.payload)
          : [],
      };
    default:
      return state;
  }
}

export default rootReducer;
