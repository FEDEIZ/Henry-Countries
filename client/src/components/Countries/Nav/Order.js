import React from "react";
import { useDispatch} from "react-redux";
import {
  setOrder
} from "../../../actions";

import {
  ALPHA_ASC,
  ALPHA_DESC,
  POP_ASC,
  POP_DESC,
} from "../../../actions/stateTypes.js";

export function Order({ order }) {
  const dispatch = useDispatch();
  
  const handleOrderChange = (e) => {
    
    if(order !== e.target.value) dispatch(setOrder(e.target.value));
  };

  return (
    <div>
      <label>Order:</label>
      <select name="order" onChange={handleOrderChange}>
        <option value={ALPHA_ASC}>Alphabetic Ascending</option>
        <option value={ALPHA_DESC}>Alphabetic Descending</option>
        <option value={POP_ASC}>Population Ascending</option>
        <option value={POP_DESC}>Population Descending</option>
      </select>
    </div>
  );
}

export default Order;
