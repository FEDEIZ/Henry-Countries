import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Country from "./Country"

const Countries = () => {
  const countries = useSelector((state) => state.countries);
    return (
      <div>
        {countries.map(c => 
          
          <Link key={c.id} to={`/countries/${c.id}`}>
            <Country name={c.name}  continent={c.continent} 
              flag={c.flagImg} /> 
          </Link>

          )}
      </div>
    );
  }

 
export default Countries;