import React from "react";
import { Link } from "react-router-dom";
import { setComponentShow } from "../../actions";
import style from "./nav.module.css";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className={style.title}>
        <h1>Around the world</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/activities`}>
              <button>Create Activity</button>
            </Link>
          </li>
          <li>
            <Link to={`/countries`}>
              <button onClick={() => dispatch(setComponentShow("countries"))}>
                Countries
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/countries?activities=true`}>
              <button
                onClick={() =>
                  dispatch(setComponentShow("countriesActivities"))
                }
              >
                Countries Activities
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
