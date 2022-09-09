import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryDetail } from "../../actions";



const CountryDetails = () => {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, id);
 
 console.log(countryDetail, "COUNTRY DETAIL")

  return (
    <div>
      <div>
        <h1>{countryDetail.name}</h1>
        <h3>{countryDetail.id}</h3>
        <div>
          <img src={countryDetail.flagImg} alt="No img" />
        </div>
        <h4>Region: {countryDetail.region}</h4>
        <h5>Subregion: {countryDetail.subregion}</h5>
        <h5>Capital: {countryDetail.capital}</h5>
        <h5>Area: {countryDetail.area} Km2</h5>
        <h5>Population: {countryDetail.population} Hab. </h5>
      </div>
      
    </div>
  );
};
export default CountryDetails;

