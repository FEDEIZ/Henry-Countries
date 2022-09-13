import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {getCountryDetail, getCountries} from "./../../actions"

const ActivityForm = () => {
    
    const duration = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];    
    const dispatch = useDispatch();
    // const id = useQuery('id');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getCountryDetail(id));
    } ,[dispatch])

    const countries = useSelector(state => state.countries);
    const countryDetail = useSelector(state => state.countryDetail);

    
    const initialCountry = id ? [countryDetail] : [];
    console.log(initialCountry);
    const [countriesAdded, setCountriesAdded] = useState(initialCountry);
    

    // const handleInputChange = (e) => {
    //     e.preventDefault();

    // }

    return (
        <div>
            <h1>Create new activity</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" placeholder="Type name for your activity" />
                <br/>
                <label>Difficulty</label>
                <select name="difficulty">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                <label>Duration in hours</label>
                <select name="duration">
                    {duration.map(d =><option key={d}>{d}</option>)}
                </select>
                <br/>
                <label>Countries</label>
                <select name="countries">
                    {countries ? countries.map(c =><option key={c.id}>{c.name}</option>) : <></>}
                </select>
                {/* <button onClick={handleInputChange}>Add Countrie</button> */}
            </form>
            <div>
                <h2>Countries activity</h2>
                <div>
                    {countriesAdded && countriesAdded.length ?
                        countriesAdded.map(c =>
                            <div key={`${c.id}_activity`}>
                                <img src={c.flagImg}/>
                            </div>        
                        ): <h4>Click ADD button to add countries</h4>}
                </div>
            </div>
        </div>
    )
}

export default ActivityForm;