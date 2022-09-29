import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import Order from "./Order";
import Search from "./Search";
import style from "./paging.module.css";

export function Paging() {
  const order = useSelector((state) => state.order);
  const componentShow = useSelector((state) => state.componentShow);
  return (
    <nav>
      <div className={style.container}>
        <Order order={order} />
        {componentShow === "countries" ? <Search /> : <></>}
      </div>
      <Filter />
    </nav>
  );
}

export default Paging;
