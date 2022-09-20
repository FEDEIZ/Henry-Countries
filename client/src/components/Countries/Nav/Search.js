import React from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../../actions";

export function Search() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(searchByName(e.target.value));
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
