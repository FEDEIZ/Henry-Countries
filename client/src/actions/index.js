import {
  FILTER_BY_ACTIVITY_NAME,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  GET_COUNTRIES_ACTIVITIES,
  GET_COUNTRY_DETAILS,
  ORDER_BY_ALPHA_ASC,
  ORDER_BY_ALPHA_DESC,
  ORDER_BY_POP_ASC,
  ORDER_BY_POP_DESC,
  SEARCH_BY_NAME,
} from "./actionTypes.js";

import axios from "axios";

require("dotenv").config();

const { REACT_APP_API_URL } = process.env;

export function getCountries() {
  return async function (dispatch) {
    try {
      const countries = await axios(`${REACT_APP_API_URL}/countries`);
      return dispatch({
        type: GET_COUNTRIES,
        payload: countries.data,
      });
    } catch (err) {
      console.log(err.message);
      return dispatch({
        type: GET_COUNTRIES,
        payload: err.message,
      });
    }
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      const country = await axios(`${REACT_APP_API_URL}/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: country.data,
      });
    } catch (err) {
      console.log(err.message);
      return dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: err.message,
      });
    }
  };
}

export function getCountriesActivities() {
  return async function (dispatch) {
    try {
      const countriesActivities = await axios(
        `${REACT_APP_API_URL}/countries/activities`
      );
      return dispatch({
        type: GET_COUNTRIES_ACTIVITIES,
        payload: countriesActivities.data,
      });
    } catch (err) {
      console.log(err.messaje);
      return dispatch({
        type: GET_COUNTRIES_ACTIVITIES,
        payload: err.message,
      });
    }
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      // const countries = await axios(
      //   `${REACT_APP_API_URL}/countries?name=${name}`
      // );

      return dispatch({
        type: SEARCH_BY_NAME,
        payload: name,
      });
    } catch (err) {
      console.log(err.message);
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: err.message,
      });
    }
  };
}

export function postActivity(activity) {
  return async function () {
    try {
      console.log("Posting activity: " + activity);
      const newActivity = await axios.post(
        `${REACT_APP_API_URL}/activities`,
        activity
      );
      console.log(newActivity);
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function orderByAlphaAsc() {
  return function (dispatch) {
    return dispatch({
      type: ORDER_BY_ALPHA_ASC,
    });
  };
}

export function orderByAlphaDesc() {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_ALPHA_DESC,
    });
  };
}

export function orderByPopAsc() {
  return function (dispatch) {
    return dispatch({
      type: ORDER_BY_POP_ASC,
    });
  };
}

export function orderByPopDesc() {
  return function (dispatch) {
    return dispatch({
      type: ORDER_BY_POP_DESC,
    });
  };
}

export function filterByActivities(activitiesName) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_BY_ACTIVITY_NAME,
      payload: activitiesName,
    });
  };
}

export function filterByContinents(continent, type) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_BY_CONTINENT,
      payload: [continent, type],
    });
  };
}
