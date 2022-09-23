import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
} from "../../actions";

export function Landing() {

  return (
    <div>
      <div>
        <h1>Discover the world</h1>
        <div>
          <button>
            <Link to="/countries">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
