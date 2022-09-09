import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../../actions";
import { Link } from "react-router-dom";
class Main extends React.Component {
  // componentDidMount() {
  //   const movieId = this.props.match.params.id;
  //   console.log(this.props);
  //   this.props.getMovieDetails(movieId);
  //   console.log(this.props);
  // }

  render() {
    return (
      <div className="Main">
        <h1>Henry Countries</h1>
        <ul>
          {this.props.countries?.map((country) => {
            return (
              <div key={country.id}>
                <Link to={`/movie/${country.id}`}>{country.name}</Link>
                {/* <button
                  onClick={() => this.props.removeMovieFavorite(movie.imdbID)}
                >
                  X
                </button> */}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, { getCountries })(Main);
