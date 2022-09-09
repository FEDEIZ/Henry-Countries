import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Countries = () => {
  const countries = useSelector((state) => state.countries);
    return (
      <div>
        {
        countries.map((e) => (
            <Link to={`/countries/${e.id}`}>
                <div>
                    <h2>{e.name}</h2>
                </div>
            </Link> 
            ))
        }
      </div>
    );
  }

 
export default Countries;