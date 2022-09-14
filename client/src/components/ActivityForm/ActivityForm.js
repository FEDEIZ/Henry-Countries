import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail, getCountries } from "./../../actions";

const ActivityForm = () => {
  const duration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const countries = useSelector((state) => state.countries);
  const countryDetail = useSelector((state) => state.countryDetail);
  const [countriesAdded, setCountriesAdded] = useState(
    id ? [countryDetail] : []
  );
  var countrySelected = countries[0];

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleSelectedChange = (e) => {
    e.preventDefault();
    countrySelected = countries.find((c) => c.name === e.target.value);
  };

  const handleAddCountry = (e) => {
    e.preventDefault();
    console.log(countriesAdded);
    if (!countriesAdded.find((c) => c.name === countrySelected.name))
      setCountriesAdded([...countriesAdded, countrySelected]);
  };

  return (
    <div>
      <h1>Create new activity</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Type name for your activity"
        />
        <br />
        <label>Difficulty</label>
        <select name="difficulty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <label>Duration in hours</label>
        <select name="duration">
          {duration.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <br />
        <label>Select season</label>
        <select name="season">
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        <br />
        <label>Countries</label>
        <select name="countries" onChange={handleSelectedChange}>
          {countries ? (
            countries.map((c) => <option key={c.id}>{c.name}</option>)
          ) : (
            <></>
          )}
        </select>
        <button onClick={handleAddCountry}>Add Countrie</button>
      </form>
      <div>
        <h2>Countries activity</h2>
        <div>
          {countriesAdded && countriesAdded.length ? (
            countriesAdded.map((c) => (
              <div key={`${c.id}_activity`}>
                <h4>{c.name}</h4>
                <img src={c.flagImg} />
              </div>
            ))
          ) : (
            <h4>Click ADD button to add countries</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityForm;
