import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
  const countriesOrder = useSelector((state) => state.countriesOrder);
  const countriesFilter = useSelector((state) => state.countriesFilter);
  return countriesOrder.length ? (
    <div>
      {countriesOrder.map((c) => (
        <Link key={c.id} to={`/countries/${c.id}`}>
          <Country name={c.name} continent={c.continent} flag={c.flagImg} />
        </Link>
      ))}
    </div>
  ) : (
    <h4>Loading countries</h4>
  );
};

export default Countries;
