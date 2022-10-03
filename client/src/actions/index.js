import {
  GET_COUNTRIES,
  GET_COUNTRIES_ACTIVITIES,
  GET_COUNTRY_DETAILS,
  ORDER,
  SEARCH_BY_NAME,
  SET_ORDER,
  SET_CONTINENTS_FILTER,
  SET_COUNTRY_SEARCH,
  SET_ACTIVITY_FILTER,
  FILTER_COUNTRIES,
  DELETE_ACTIVITY,
  SET_COMPONENT_SHOW,
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

export function deleteActivity(countryId) {
  return function (dispatch) {
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: countryId,
    });
  };
}

export function setCountrySearch(name) {
  return function (dispatch) {
    return dispatch({
      type: SET_COUNTRY_SEARCH,
      payload: name,
    });
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      const countries = await axios(
        `${REACT_APP_API_URL}/countries?name=${name}`
      );

      return dispatch({
        type: SEARCH_BY_NAME,
        payload: countries.data,
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
      // console.log(newActivity);
      alert(`${activity.name} activity created!`);
      window.location.href = "http://localhost:3000/countries";
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data);
    }
  };
}

export function setOrder(order) {
  return function (dispatch) {
    return dispatch({
      type: SET_ORDER,
      payload: order,
    });
  };
}

export function order(orderType, parameter) {
  return function (dispatch) {
    return dispatch({
      type: ORDER,
      payload: [orderType, parameter],
    });
  };
}

export function setActivitiesFilter(activities) {
  return function (dispatch) {
    return dispatch({
      type: SET_ACTIVITY_FILTER,
      payload: activities,
    });
  };
}

export function setContinentsFilter(continents) {
  return function (dispatch) {
    return dispatch({
      type: SET_CONTINENTS_FILTER,
      payload: continents,
    });
  };
}

export function filterCountries(continents, activities) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_COUNTRIES,
      payload: [continents, activities],
    });
  };
}

export function setComponentShow(component) {
  return function (dispatch) {
    return dispatch({
      type: SET_COMPONENT_SHOW,
      payload: component,
    });
  };
}
