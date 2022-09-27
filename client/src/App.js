import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Main from "./components/Countries/Main";
import { Landing } from "./components/Landing/Landing";
import ActivityForm from "./components/ActivityForm/ActivityForm";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries" component={Main} />
      <Route path="/activities" component={ActivityForm} />
      <Route exact path="/countries/:id" component={CountryDetails} />
    </div>
  );
}

export default App;
