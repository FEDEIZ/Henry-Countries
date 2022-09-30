import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../actions";
import { Link } from "react-router-dom";
import Nav from "./../Nav/Nav.js";
import style from "./countryDetails.module.css";

const CountryDetails = () => {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    if (countryDetail.id !== id) dispatch(getCountryDetail(id));
  }, [dispatch]);

  return (
    <div className={style.body}>
      <div className={style.nav}>
        <Nav />
      </div>
      <div className={style.container}>
        <div className={style.containerHeader}>
          <div className={style.title}>
            <h1 className={style.title}>{countryDetail.name}</h1>
          </div>
          <div className={style.flagContainer}>
            <img src={countryDetail.flagImg} alt="No img" />
          </div>
        </div>
        <div className={style.containerDetails}>
          <div className={style.details}>
            <div className={style.subtitle}>
              <p>Code: </p>
              <p>Continent: </p>
              <p>Capital: </p>
              <p>Area: </p>
              <p>Population: </p>
            </div>
            <div className={style.subtitle}>
              <p>{countryDetail.id}</p>
              <p>{countryDetail.continent}</p>
              <p>{countryDetail.capital}</p>
              <p>{countryDetail.area} Km2</p>
              <p>{countryDetail.population} People</p>
            </div>
          </div>
          <div className={style.activities}>
            {countryDetail["activities"] &&
            countryDetail["activities"].length ? (
              countryDetail["activities"].map((activities) => (
                <div key={activities.id} className={style.flipCard}>
                  <div className={style.flipCardInner}>
                    <div className={style.flipCardFront}>
                      <p>
                        {activities.name[0] +
                          activities.name
                            .slice(1, activities.name.length)
                            .toLowerCase()}
                      </p>
                    </div>
                    <div className={style.flipCardBack}>
                      <div className={style.infoActivitie}>
                        <p>Season </p>
                        <p>
                          {activities.season[0] +
                            activities.season
                              .slice(1, activities.season.length)
                              .toLowerCase()}
                        </p>
                      </div>
                      <div className={style.infoActivitie}>
                        <p>Difficulty </p>
                        <p>{activities.difficulty}</p>
                      </div>
                      <div className={style.infoActivitie}>
                        <p>Days </p>
                        <p>{activities.duration[0]}</p>
                      </div>
                      <div className={style.infoActivitie}>
                        <p>Hours </p>
                        <p>{activities.duration[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={style.noActivity}>No activities added...</p>
            )}
          </div>
        </div>
        <div>
          <Link to={`/activities?id=${id}`}>
            <div className={style.addButton}>
              <p>Add activity</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
