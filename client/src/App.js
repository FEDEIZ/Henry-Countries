import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
//import CountryDetails from "./components/CountryDetails/CountryDetails";
import Main from "./components/Countries/Main";
import {Landing} from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={Main}/>
        {/* <Route path ="/activities"component={Activities} /> */}
        {/* <Route exact path="/countries/:id" component={CountryDetails} /> */}
    </div>
  );
}

export default App;
