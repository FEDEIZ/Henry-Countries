import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Main from "./components/Main/Main";

function App() {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Route exact path="/" component={Main} />
      {/* <Route path="/favs" component={Favorites} /> */}
      <Route path="/country/:id" component={CountryDetails} />
    </React.Fragment>
  );
}

export default App;
