import React, { Component } from "react";
import Filter from "../Countries/Paging/Filter";
import style from "./form.module.css";
import Country from "../Countries/Country/Country";

const Form = ({
  countries,
  formState,
  errors,
  selectedChange,
  handleInputChange,
  addCountry,
  removeCountry,
  enableSubmit,
  handleSumbit,
}) => {
  console.log(errors);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Create new activity</h2>
      <div className={style.countriesContainer}>
        <div className={style.filter}>
          <Filter />
        </div>
        <div className={style.containerForm}>
          <form className={style.form}>
            <div className={style.subContainerForm}>
              <select
                className={style.select}
                name="countriesId"
                onChange={selectedChange}
                value={formState.countrySelected}
              >
                <option value="" disabled hidden>
                  Countries
                </option>
                {countries ? (
                  countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))
                ) : (
                  <option>Loading countries...</option>
                )}
              </select>
              <button onClick={addCountry}>ADD</button>
            </div>
            <div className={style.subContainerForm}>
              <div className={style.labelContainer}>
                <label className={style.subtitle}>Name </label>
                <p className={style.errors}>{errors.name}</p>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  placeholder="Type name for your activity"
                  onChange={handleInputChange}
                  value={formState["name"]}
                />
              </div>
              <br />
              <div className={style.labelContainer}>
                <label className={style.subtitle}>Difficulty</label>
                <p className={style.errors}>{errors.difficulty}</p>
                <select
                  className={style.select}
                  name="difficulty"
                  onChange={handleInputChange}
                  value={formState.difficulty}
                >
                  <option value="" disabled hidden>
                    1 - 5
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className={style.subContainerForm}>
              <div className={style.labelContainer} name="duration">
                {errors.days === "*" ? (
                  <p className={style.errors}>{errors.days}</p>
                ) : (
                  <></>
                )}
                <input
                  className={style.input}
                  type="text"
                  name="days"
                  placeholder="Days"
                  onChange={handleInputChange}
                  value={formState.days}
                ></input>{" "}
                {errors.hours === "*" ? (
                  <p className={style.errors}>{errors.hours}</p>
                ) : (
                  <></>
                )}
                <input
                  className={style.input}
                  type="text"
                  name="hours"
                  placeholder="Hours"
                  onChange={handleInputChange}
                  value={formState["hours"]}
                />
              </div>
              <div className={style.labelContainer}>
                <p className={style.errors}>{errors.season}</p>
                <select
                  className={style.select}
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
              </div>
              {(errors.days || errors.hours) &&
              ((errors.days && errors.days !== "*") ||
                (errors.hours && errors.hours !== "*")) ? (
                errors.days && errors.days !== "*" ? (
                  <p className={style.errors}>{errors.days}</p>
                ) : (
                  <p className={style.errors}>{errors.hours}</p>
                )
              ) : (
                <></>
              )}
              {/* <p className={style.errors}>{errors.days}</p> */}
            </div>
          </form>
          <div className={style.countries}>
            {formState.countriesAdded.length ? (
              formState.countriesAdded.map((c) => (
                <div className={style.countryCard} key={c.id}>
                  <Country
                    name={
                      c.name[0] + c.name.slice(1, c.name.length).toLowerCase()
                    }
                    continent={
                      c.continent[0] +
                      c.continent.slice(1, c.continent.length).toLowerCase()
                    }
                    flag={c.flagImg}
                  />
                  <button
                    name="removeCountrie"
                    onClick={removeCountry}
                    value={c.id}
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <p className={style.errors}>Click ADD button to add countries</p>
            )}
            {errors.countries ? (
              <p className={style.errors} name="countries">
                {errors.countries}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className={style.addActivityButton}>
        <input
          type="submit"
          value="Add activity"
          disabled={enableSubmit(formState)}
          onClick={handleSumbit}
        />
      </div>
    </div>
  );
};

export default Form;
