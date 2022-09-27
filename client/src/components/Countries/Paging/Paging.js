import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import Order from "./Order";
import Search from "./Search";

export function Paging() {
  const order = useSelector((state) => state.order);
  const componentShow = useSelector((state) => state.componentShow);
  return (
    <nav>
      <Order order={order} />
      <Filter />
      {componentShow === "countries" ? <Search /> : <></>}
    </nav>
  );
}

export default Paging;
