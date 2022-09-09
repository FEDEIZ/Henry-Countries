import React from "react";
import { Link } from "react-router-dom";
//import style from "./landing.module.css";

export function Landing() {
  return (
    <div>
      <div>
        <h1>Discover the world</h1>
        <div>
          <button>
            <Link to="/countries">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}