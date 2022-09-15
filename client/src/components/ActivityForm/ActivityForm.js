import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./../../actions";
import Form from "./Form";

const ActivityForm = () => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const countries = useSelector((state) => state.countries);
  const [formState, setFormState] = useState({
    name: "",
    difficulty: "",
    days: "",
    hours: "",
    season: "",
    countriesId: id ? [id] : [],
    countriesAdded: [],
    countrySelected: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!countries.length) dispatch(getCountries());
  });

  useEffect(() => {
    if (countries.length)
      setFormState({
        ...formState,
        countriesAdded:
          countries.length && id ? [countries.find((c) => c.id === id)] : [],
      });
  }, [countries]);

  const selectedChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      countrySelected: e.target.value,
    });
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

  const addCountry = (e) => {
    e.preventDefault();
    if (
      formState.countrySelected &&
      !formState.countriesId.find((idC) => idC === formState.countrySelected)
    ) {
      setFormState({
        ...formState,
        countriesAdded: [
          ...formState.countriesAdded,
          countries.find((c) => c.id === formState.countrySelected),
        ],
        countriesId: [...formState.countriesId, formState.countrySelected],
      });
    }
    setErrors(
      validate({
        ...formState,
        countriesId: [...formState.countriesId, formState.countrySelected],
      })
    );
  };

  const removeCountry = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      countriesAdded: formState.countriesAdded.filter(
        (c) => c.id !== e.target.value
      ),
      countriesId: formState.countriesId.filter((id) => id !== e.target.value),
    });
  };

  const validate = (input) => {
    let errors = {};
    if (!input.name) errors.name = "Name is required";
    if (!input.difficulty) errors.difficulty = "Difficulty is required";
    if (input.days === "") {
      errors.days = "Days is required";
    } else if (
      (!parseInt(input.days) && parseInt(input.days) !== 0) ||
      parseInt(input.days) < 0 ||
      parseInt(input.days) > 365
    )
      errors.days = "Days must be a number beetween 0 and 365";

    if (input.hours === "") errors.hours = "Hours is required";
    else if (
      (!parseInt(input.hours) && parseInt(input.hours) !== 0) ||
      parseInt(input.hours) < 0 ||
      parseInt(input.hours) > 23
    )
      errors.hours = "Hours must be a number beetween 0 and 23";

    if (input.days === "0" && input.hours === "0")
      errors.days = "At least days or hours must be complete";

    if (!input.season) errors.season = "Season is required";
    if (!input.countriesId.length)
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

  console.log(formState);
  return (
    <div>
      <Form
        countries={countries}
        formState={formState}
        errors={errors}
        selectedChange={selectedChange}
        handleInputChange={handleInputChange}
        addCountry={addCountry}
        removeCountry={removeCountry}
        enableSubmit={enableSubmit}
      />
    </div>
  );
};

export default ActivityForm;
