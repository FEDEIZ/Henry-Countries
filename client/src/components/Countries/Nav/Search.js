import React from "react";
import { useDispatch } from "react-redux";
import { setCountrySearch } from "../../../actions";

export function Search() {
  const dispatch = useDispatch();

  const handleInputChange = async (e) => {
    //dispatch(searchByName(e.target.value));
    dispatch(setCountrySearch(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="SearchByName"
      onChange={handleInputChange}
    />
  );
}

export default Search;
