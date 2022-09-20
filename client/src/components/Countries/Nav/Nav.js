import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../../../actions";

import Filter from "./Filter";
import Order from "./Order";
import Search from "./Search";

export function Nav() {
  const countries = useSelector((state) => state.countries);
  const countriesResults = useSelector((state) => state.countriesResults);
  const order = useSelector((state) => state.order);

  return (
    <nav>
      <Order order={order} />
      <Filter countries={countries} />
      <Search countries={countriesResults} />
    </nav>
  );
}

export default Nav;
