import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  


  // useEffect(() => {
    
  //     switch (order) {
  //       case ALPHA_ASC:
  //         dispatch(orderByAlphaAsc());
  //         return;
  //       case ALPHA_DESC:
  //         dispatch(orderByAlphaDesc());
  //         return;
  //       case POP_ASC:
  //         dispatch(orderByPopAsc());
  //         return;
  //       case POP_DESC:
  //         dispatch(orderByPopDesc());
  //         return;
  //       default:
  //         return;
  //     }
    
  // },[order]);

  const handleOrderChange = (e) => {
    // switch (e.target.value) {
    //   case ALPHA_ASC:
    //     if (order !== ALPHA_ASC) dispatch(orderByAlphaAsc());
    //     return;
    //   case ALPHA_DESC:
    //     if (order !== ALPHA_DESC) dispatch(orderByAlphaDesc());
    //     return;
    //   case POP_ASC:
    //     if (order !== POP_ASC) dispatch(orderByPopAsc());
    //     return;
    //   case POP_DESC:
    //     if (order !== POP_DESC) dispatch(orderByPopDesc());
    //     return;
    //   default:
    //     return;
    // }
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
