import React from "react";
import Filter from "../Countries/Paging/Filter";
import style from "./form.module.css";
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
  return (
    <div className={style.container}>
      <form className={style.formContainer}>
        <h2 className={style.title}>Create new activity</h2>
        <div className={style.countriesContainer}>
          <div className={style.labelContainer}>
            <label className={style.subtitle}>Add countries</label>
            <p className={style.errors}>{errors.countriesId}</p>
          </div>
          <Filter className={style.filter} />
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
          <div>
            <h4>Countries activity</h4>
            <div>
              {formState.countriesAdded.length ? (
                formState.countriesAdded.map((c) => (
                  <div key={`${c.id}_activity`}>
                    <h4>{c.name}</h4>
                    <img src={c.flagImg} alt={c.name} className={style.flag} />
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
                <h4>Click ADD button to add countries</h4>
              )}
            </div>
          </div>
        </div>
        {/* {errors.name && ( //if there some errors it will show <p/>
          <p className="danger">{errors.name}</p>
        )} */}
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
              Difficulty
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* {errors.difficulty && ( //if there some errors it will show <p/>
          <p className="danger">{errors.difficulty}</p>
        )} */}
        <br />
        <div className={style.labelContainer}>
          <label className={style.subtitle}>Duration</label>
          <div>
            <input
              className={style.input}
              type="text"
              name="days"
              placeholder="Days"
              onChange={handleInputChange}
              value={formState.days}
            ></input>{" "}
            <p className={style.errors}>{errors.days}</p>
            {/* {errors.days && ( //if there some errors it will show <p/>
              <p className="danger">{errors.days}</p>
            )} */}
            <input
              className={style.input}
              type="text"
              name="hours"
              placeholder="Hours"
              onChange={handleInputChange}
              value={formState["hours"]}
            />
            <p className={style.errors}>{errors.hours}</p>
          </div>
          {/* {errors.hours && ( //if there some errors it will show <p/>
            <p className="danger">{errors.hours}</p>
          )} */}
        </div>
        <br />
        <div className={style.labelContainer}>
          <label className={style.subtitle}>Select season</label>
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
        <br />
        {/* {errors.season && ( //if there some errors it will show <p/>
          <p className="danger">{errors.season}</p>
        )} */}
        {/* {errors.countriesId && ( //if there some errors it will show <p/>
          <p className="danger">{errors.countriesId}</p>
        )} */}
        <div className={style.addActivityButton}>
          <input
            type="submit"
            value="Add activity"
            disabled={enableSubmit(formState)}
            onClick={handleSumbit}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
