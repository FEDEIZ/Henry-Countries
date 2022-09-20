import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../../../actions";

import Filter from "./Filter";
import Order from "./Order";
import Search from "./Search";

export function Nav({ countries }) {
  const order = useSelector((state) => state.order);

  return (
    <nav>
      <Order order={order} />
      <Filter />
      <Search />
    </nav>
  );
}

export default Nav;
