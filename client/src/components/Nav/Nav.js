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
              <div className={style.buttonNav}>
                <p>Create Activity</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/countries`}>
              <div
                className={style.buttonNav}
                onClick={() => dispatch(setComponentShow("countries"))}
              >
                <p>Countries</p>
              </div>
            </Link>
          </li>
          <li>
            <div className={style.buttonNav}>
              <p>About</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
