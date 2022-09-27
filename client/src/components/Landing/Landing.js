import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountriesActivities } from "../../actions";
import style from "./landing.module.css";

export function Landing() {
  const dispatch = useDispatch();
  dispatch(getCountriesActivities());

  return (
    <div className={style.landing}>
      <div className={style.title}>
        <h1>Around the world</h1>
      </div>

      <Link to="/countries">
        <div className={style.buttonStart}></div>
      </Link>
    </div>
  );
}
