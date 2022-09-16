import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../actions";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch]);

  const countryDetail = useSelector((state) => state.countryDetail);

  return (
    <div>
      <div>
        <h1>{countryDetail.name}</h1>
        <h3>{countryDetail.id}</h3>
        <div>
          <img src={countryDetail.flagImg} alt="No img" />
        </div>
        <h4>continent: {countryDetail.continent}</h4>
        <h5>Capital: {countryDetail.capital}</h5>
        <h5>Area: {countryDetail.area} Km2</h5>
        <h5>Population: {countryDetail.population} Hab. </h5>
        <div>
          {countryDetail["activities"] && countryDetail["activities"].length ? (
            countryDetail["activities"].map((activities) => (
              <div key={activities.id}>
                <h4>{activities.name}</h4>
                <h4>Season: {activities.season}</h4>
                <h4>Difficulty: {activities.difficulty}</h4>
                <h4>Days: {activities.duration[0]}</h4>
                <h4>Hours: {activities.duration[1]}</h4>
              </div>
            ))
          ) : (
            <h3>No activities</h3>
          )}
        </div>
        <Link to={`/activities?id=${id}`}>
          <h4>Add or modify activity</h4>
        </Link>
      </div>
    </div>
  );
};
export default CountryDetails;
