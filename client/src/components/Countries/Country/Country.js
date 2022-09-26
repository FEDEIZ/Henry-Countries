import React from "react";
import {
  countryCard,
  flagStyle,
  title,
  continentTitle,
} from "./country.module.css";

const Country = ({ flag, name, continent }) => {
  return (
    <div className={countryCard}>
      <div className={title}>
        <h3 name="name">{name}</h3>
        <h5 name="continent">{continent}</h5>
      </div>
      <img className={flagStyle} src={flag} alt="no img" />
    </div>
  );
};

export default Country;
