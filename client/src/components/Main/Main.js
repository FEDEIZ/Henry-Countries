import Countries from "../Countries/Countries.js";
import React, { useEffect } from "react";
import { getCountries } from "../../actions";
import { useDispatch } from "react-redux";
//import Nav from "../Nav/Nav.jsx";
export function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  return (
    
      <div>
        <Countries />
      </div>
    
  );
}

export default Main;