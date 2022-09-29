import React from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../../../actions";

import {
  ALPHA_ASC,
  ALPHA_DESC,
  POP_ASC,
  POP_DESC,
} from "../../../actions/stateTypes.js";

import style from "./order.module.css";
export function Order({ order }) {
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    if (order !== e.target.value) dispatch(setOrder(e.target.value));
  };

  return (
    <div className={style.container}>
      <label>Order:</label>
      <div className={style.selectContainer}>
        <select name="order" onChange={handleOrderChange}>
          <option value={ALPHA_ASC}>Alphabetic Ascending</option>
          <option value={ALPHA_DESC}>Alphabetic Descending</option>
          <option value={POP_ASC}>Population Ascending</option>
          <option value={POP_DESC}>Population Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
