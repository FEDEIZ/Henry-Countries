import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity, filterCountries } from "./../../actions";
import Form from "./Form";
import Nav from "../Nav/Nav";
import style from "./form.module.css";

const ActivityForm = () => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const countriesResults = useSelector((state) => state.countriesResults);
  const continentsFilter = useSelector((state) => state.continentsFilter);
  const activities = useSelector((state) => state.activities);

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
    if (!countriesResults.length) dispatch(getCountries());
  }, [countriesResults.length, dispatch]);

  useEffect(() => {
    if (countriesResults.length)
      setFormState({
        ...formState,
        countriesAdded:
          countriesResults.length && id
            ? [countriesResults.find((c) => c.id === id)]
            : [],
      });
  }, []);

  useEffect(() => {
    dispatch(filterCountries(continentsFilter, activities));
  }, [continentsFilter, activities, dispatch]);

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
      !formState.countriesId.find((idC) => idC === formState.countrySelected) &&
      formState.countriesAdded.length < 6
    ) {
      setFormState({
        ...formState,
        countriesAdded: [
          ...formState.countriesAdded,
          countriesResults.find((c) => c.id === formState.countrySelected),
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
    setErrors(validate(formState));
    e.preventDefault();
    setFormState({
      ...formState,
      countriesAdded: formState.countriesAdded.filter(
        (c) => c.id !== e.target.value
      ),
      countriesId: formState.countriesId.filter((id) => id !== e.target.value),
    });
    console.log(formState.countriesAdded.length);
  };

  const validate = (input) => {
    let errors = {};
    if (!input.name) errors.name = "*";
    if (!input.difficulty) errors.difficulty = "*";
    if (input.days === "") {
      errors.days = "*";
    } else if (
      (!parseInt(input.days) && parseInt(input.days) !== 0) ||
      parseInt(input.days) < 0 ||
      parseInt(input.days) > 365
    )
      errors.days = "Days must be a number beetween 0 and 365";

    if (input.hours === "") errors.hours = "*";
    else if (
      (!parseInt(input.hours) && parseInt(input.hours) !== 0) ||
      parseInt(input.hours) < 0 ||
      parseInt(input.hours) > 23
    )
      errors.hours = "Hours must be a number beetween 0 and 23";

    if (input.days === "0" && input.hours === "0")
      errors.days = "At least days or hours must be greater than zero";

    if (!input.season) errors.season = "*";
    if (!input.countriesId.length) errors.countriesId = "*";

    if (input.countriesAdded.length === 6) {
      console.log(input.countriesAdded.length);
      errors.countries = "¡Max countries added!";
    }
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

  const handleSumbit = () => {
    formState.countriesId.forEach((c) => {
      let activity = {
        name: formState.name,
        difficulty: formState.difficulty,
        duration: [parseInt(formState.days), parseInt(formState.hours)],
        season: formState.season.toUpperCase(),
        countryId: c,
      };
      dispatch(postActivity(activity));
      alert(`${formState.name} activity created!`);
      window.location.href = "http://localhost:3000/countries";
    });
  };

  return (
    <div className={style.body}>
      <Nav />
      <Form
        countries={countriesResults}
        formState={formState}
        errors={errors}
        selectedChange={selectedChange}
        handleInputChange={handleInputChange}
        addCountry={addCountry}
        removeCountry={removeCountry}
        enableSubmit={enableSubmit}
        handleSumbit={handleSumbit}
      />
    </div>
  );
};

export default ActivityForm;
