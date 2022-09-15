import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail, getCountries } from "./../../actions";

const ActivityForm = () => {
  const duration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const countries = useSelector((state) => state.countries);
  const countryDetail = useSelector((state) => state.countryDetail);
  const [countriesAdded, setCountriesAdded] = useState(
    id ? [countryDetail] : []
  );
  const [formState, setFormState] = useState({
    name: "",
    difficulty: "",
    days: "",
    hours: "",
    season: "",
    countriesId: /*id ? [countryDetail.id] : */ [],
  });

  const [errors, setErrors] = useState({});

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
    //console.log(countriesAdded);
    if (!countriesAdded.find((c) => c.name === countrySelected.name)) {
      setCountriesAdded([...countriesAdded, countrySelected]);
      setFormState({
        ...formState,
        countriesId: [...formState.countriesId, countrySelected.id],
      });
    }
  };

  const handleInputChange = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...formState,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validate = (input) => {
    let errors = {};
    if (!input.name) errors.name = "Name is required";
    if (!input.difficulty) errors.difficulty = "Difficulty is required";
    if (!input.days) {
      errors.days = "Days is required";
      console.log("days");
    } else if (
      !parseInt(input.days) ||
      parseInt(input.days) < 0 ||
      parseInt(input.days) > 365
    )
      errors.days = "Days must be a number beetween 0 and 365";

    if (!input.hours) errors.hours = "Hours is required";
    if (!input.season) errors.season = "Season is required";
    if (!input.countriesId.length[0])
      errors.countriesId = "You must select at least one country";
    return errors;
  };

  const enableSubmit = (formState) => {
    if (
      Object.keys(errors).length ||
      formState.name === "" ||
      formState.difficulty === "" ||
      formState.days === "" ||
      formState.hours === "" ||
      formState.season === "" ||
      formState.countriesId.length === 0
    )
      return true;
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
          onChange={handleInputChange}
          value={formState["name"]}
        />
        {errors.name && ( //if there some errors it will show <p/>
          <p className="danger">{errors.name}</p>
        )}
        <br />
        <label>Difficulty</label>
        <select
          name="difficulty"
          onChange={handleInputChange}
          value={formState.difficulty}
        >
          <option value="" disabled hidden>
            Difficulty
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        {errors.difficulty && ( //if there some errors it will show <p/>
          <p className="danger">{errors.difficulty}</p>
        )}
        <br />
        <label>Duration</label>
        <input
          type="text"
          name="days"
          placeholder="Days"
          onChange={handleInputChange}
          value={formState.days}
        ></input>
        <select
          name="hours"
          onChange={handleInputChange}
          value={formState.hours}
        >
          <option value="" disabled hidden>
            Hours
          </option>
          {duration.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <br />
        {errors.days && ( //if there some errors it will show <p/>
          <p className="danger">{errors.days}</p>
        )}
        {errors.hours && ( //if there some errors it will show <p/>
          <p className="danger">{errors.hours}</p>
        )}
        <label>Select season</label>
        <select
          name="season"
          onChange={handleInputChange}
          value={formState.season}
        >
          <option value="" disabled hidden>
            Season
          </option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        <br />
        {errors.season && ( //if there some errors it will show <p/>
          <p className="danger">{errors.season}</p>
        )}
        <label>Countries</label>
        <select name="countriesId" onChange={handleSelectedChange}>
          {countries ? (
            countries.map((c) => <option key={c.id}>{c.name}</option>)
          ) : (
            <></>
          )}
        </select>
        <button onClick={handleAddCountry}>Add Countrie</button>
        {errors.countriesId && ( //if there some errors it will show <p/>
          <p className="danger">{errors.countriesId}</p>
        )}
      </form>
      <div>
        <h2>Countries activity</h2>
        <div>
          {formState.countriesId.length ? (
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
      <div>
        <input
          type="submit"
          value="Add activity"
          disabled={enableSubmit(formState)}
        />
      </div>
    </div>
  );
};

export default ActivityForm;
