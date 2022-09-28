import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Country from "../Country/Country";
import Page from "./Page.js";
import { containerCountries } from "./countries.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteActivity } from "../../../actions";

const Countries = ({ countries }) => {
  const [countriesPerPage, setCountriesPerPage] = useState([]);
  const [actualPage, setActualPage] = useState(0);
  var totalPages = Math.round(countries.length / 10);

  //const dispatch = useDispatch();

  useEffect(() => {
    totalPages = Math.round(countries.length / 10);
    if (actualPage === 0) setCountriesPerPage([].concat(countries.slice(0, 9)));
    else
      setCountriesPerPage(
        [].concat(countries.slice(actualPage * 10 - 1, actualPage * 10 + 9))
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

  // const deleteActivityHandle = (e) => {
  //   dispatch(deleteActivity(e.target.value));
  // };

  return countries.length ? (
    <div>
      <Page
        handlePageChange={handlePageChange}
        actualPage={actualPage}
        totalPages={totalPages}
      />
      <div className={containerCountries}>
        {countriesPerPage.map((c) => (
          <div key={c.id}>
            <Link to={`/countries/${c.id}`}>
              <Country
                name={c.name[0] + c.name.slice(1, c.name.length).toLowerCase()}
                continent={
                  c.continent[0] +
                  c.continent.slice(1, c.continent.length).toLowerCase()
                }
                flag={c.flagImg}
              />
            </Link>
            <div>
              {c.activities.length ? (
                <div key={c.id + "_act"}>
                  {c.activities.map((a) => (
                    <h5 key={a.name}>
                      {a.name[0] + a.name.slice(1, a.name.length).toLowerCase()}
                    </h5>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h4>No country found</h4>
  );
};

export default Countries;
