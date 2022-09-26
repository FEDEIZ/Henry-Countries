import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountriesActivities } from "../../actions";
import style from "./landing.module.css";

export function Landing() {
  const dispatch = useDispatch();
  dispatch(getCountriesActivities());

  return (
    <body>
      <div className={style.landing}>
        <div className={style.container}>
          <h1>Around the world</h1>
          <div>
            <button>
              <Link to="/countries">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
