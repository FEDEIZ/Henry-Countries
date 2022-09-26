import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import Order from "./Order";
import Search from "./Search";

export function Paging() {
  const order = useSelector((state) => state.order);

  return (
    <nav>
      <Order order={order} />
      <Filter />
      <Search />
    </nav>
  );
}

export default Paging;
