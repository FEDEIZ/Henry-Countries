import React from "react";
import { useDispatch } from "react-redux";
import { setCountrySearch } from "../../../actions";
import style from "./search.module.css";

export function Search() {
  const dispatch = useDispatch();

  const handleInputChange = async (e) => {
    dispatch(setCountrySearch(e.target.value));
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="SearchByName"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
