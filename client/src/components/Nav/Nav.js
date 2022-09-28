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
      <nav className={style.navContainer}>
        <ul>
          <li>
            <Link to={`/activities`}>
              <div className={style.buttonNav}>
                <h5>Create Activity</h5>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/countries`}>
              <div
                className={style.buttonNav}
                onClick={() => dispatch(setComponentShow("countries"))}
              >
                <h5>Countries</h5>
              </div>
            </Link>
          </li>
          <li>
            <div
              className={style.buttonNav}
              onClick={() => dispatch(setComponentShow("countriesActivities"))}
            >
              <h5>Countries Activities</h5>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
