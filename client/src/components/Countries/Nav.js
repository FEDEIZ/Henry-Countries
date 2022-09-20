import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderByAlphaAsc,
  orderByAlphaDesc,
  getCountriesActivities,
  orderByPopAsc,
  orderByPopDesc,
  filterByActivities,
  filterByContinents,
  searchByName,
} from "./../../actions";

import {
  ACTIVITY_FILTER, ALPHA_ASC,
  ALPHA_DESC, CONTINENT_FILTER, POP_ASC, POP_DESC
  } from "../../actions/stateTypes.js";

export function Nav(){
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const countriesResults = useSelector((state) => state.countriesResults);

    const handleInputChange = (e) => {
        dispatch(searchByName(e.target.value));
        if(countriesResults.length)
        switch(order){
        case ALPHA_ASC:
          dispatch(orderByAlphaAsc());
          return; 
        case ALPHA_DESC:
          dispatch(orderByAlphaDesc());
          return;
        case POP_ASC:
          dispatch(orderByPopAsc());
          return;
        case POP_DESC:
          dispatch(orderByPopDesc());
          return;
        }
      };

    const handleOrderChange = (e) => {
        switch (e.target.value){
            case ALPHA_ASC:
                if(order !== ALPHA_ASC) dispatch(orderByAlphaAsc());
                return;
            case ALPHA_DESC:
                if(order !== ALPHA_DESC) dispatch(orderByAlphaDesc());
                return;
            case POP_ASC:
                if(order !== POP_ASC) dispatch(orderByPopAsc());
                return;
            case POP_DESC:
                if(order !== POP_DESC) dispatch(orderByPopDesc());
                return;
            default:
                return;
        }

    }
    return (
        <nav>
          <label>Order: </label>
          <select name='order' onChange={handleOrderChange}>
            <option value={ALPHA_ASC}>Alphabetic Ascending</option>
            <option value={ALPHA_DESC}>Alphabetic Descending</option>
            <option value={POP_ASC}>Population Ascending</option>
            <option value={POP_DESC}>Population Descending</option>
          </select>
          <div> Filter By Continents: 
            <input type="checkbox" name="EUROPE"/>
            <label>Europe</label>
            <input type="checkbox" name="AMERICAS"/>
            <label>Americas</label> 
            <input type="checkbox" name="ASIA"/>
            <label>Asia</label> 
            <input type="checkbox" name="AFRICA"/>
            <label>Africa</label>
            <input type="checkbox" name="OTHERS"/>
            <label>Others</label>   
          </div>
          <input type="text" placeholder="SearchByName" onChange={handleInputChange} />
        </nav>
      );
}

export default Nav;