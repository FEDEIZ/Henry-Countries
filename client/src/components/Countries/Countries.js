import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Country from "./Country";

const Countries = ({ countries }) => {
  const [countriesPerPage, setCountriesPerPage] = useState([]);
  const [actualPage, setActualPage] = useState(0);
  var totalPages = Math.round(countries.length / 10) - 1;

  useEffect(() => {
    totalPages = Math.round(countries.length / 10) - 1;
    if (actualPage === 0) setCountriesPerPage([].concat(countries.slice(0, 9)));
    else
      setCountriesPerPage(
        [].concat(countries.slice(actualPage * 10, actualPage * 10 + 10))
      );
  }, [countries, actualPage]);

  const handlePageChange = (e) => {
    switch (e.target.value) {
      case "FIRST":
        setActualPage(0);
        return;
      case "LAST":
        setActualPage(actualPage - 1);
        return;
      case "NEXT":
        setActualPage(actualPage + 1);
        return;
      case "FINAL":
        setActualPage(totalPages);
        return;
      default:
        return;
    }
  };

  return countries.length ? (
    <div>
      <div>
        <button
          onClick={handlePageChange}
          value={"FIRST"}
          disabled={!actualPage}
        >
          {"<<"}
        </button>
        <button
          onClick={handlePageChange}
          value={"LAST"}
          disabled={actualPage - 1 < 0}
        >
          {"<"}
        </button>
        <button
          onClick={handlePageChange}
          value={"NEXT"}
          disabled={actualPage + 1 > totalPages}
        >
          {">"}
        </button>
        <button
          onClick={handlePageChange}
          value={"FINAL"}
          disabled={actualPage === totalPages}
        >
          {">>"}
        </button>
      </div>
      {countriesPerPage.map((c) => (
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
