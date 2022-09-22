import React from "react";
import Filter from "../Countries/Paging/Filter";

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
        <input
          type="text"
          name="hours"
          placeholder="Hours"
          onChange={handleInputChange}
          value={formState["hours"]}
        />
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
        <Filter />
        <select
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
        {errors.countriesId && ( //if there some errors it will show <p/>
          <p className="danger">{errors.countriesId}</p>
        )}

        <div>
          <h2>Countries activity</h2>
          <div>
            {formState.countriesAdded.length ? (
              formState.countriesAdded.map((c) => (
                <div key={`${c.id}_activity`}>
                  <h4>{c.name}</h4>
                  <img src={c.flagImg} alt={c.name} />
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
        <div>
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
