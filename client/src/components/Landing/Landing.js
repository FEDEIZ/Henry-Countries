import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCountriesActivities
} from "../../actions";

export function Landing() {
  const dispatch = useDispatch();
  dispatch(getCountriesActivities());

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
