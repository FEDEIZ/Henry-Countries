import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getCountriesActivities,
  orderByAlphaAsc,
} from "../../actions";

export function Landing() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const loadStore = async () => {
    await dispatch(getCountries());
    await dispatch(getCountriesActivities());
    dispatch(orderByAlphaAsc());
  };

  if (!countries.length) loadStore(); // initial values store

  return (
    <div>
      <div>
        <h1>Discover the world</h1>
        <div>
          <button>
            <Link to="/countries">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
