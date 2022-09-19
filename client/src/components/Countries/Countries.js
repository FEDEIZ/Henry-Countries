import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Country from "./Country";

const Countries = ({ countries }) => {
  //useSelector((state) => state.countriesResultsFlag);
  useSelector((state) => state.order);
  useSelector((state) => state.countriesResults.length);

  return countries.length ? (
      <div>
        {countries.map((c) => (
          <Link key={c.id} to={`/countries/${c.id}`}>
            <Country name={c.name} continent={c.continent} flag={c.flagImg} />
          </Link>
        ))}
      </div>
    
  ) : (
    <h4>No country found</h4>
  );
};

export default Countries;
