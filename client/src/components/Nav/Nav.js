import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <header>
      <div className={style.title}>
        <h1>Around the world</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/activities`}>Create Activity</Link>
          </li>
          <li>
            <Link to={`/countries`}>Countries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
