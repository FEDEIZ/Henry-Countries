import React from "react";
import { connect } from "react-redux";
import { getCountryDetail } from "../../actions";

//import "./.css";

class Country extends React.Component {
  componentDidMount() {
    const countryId = this.props.match.params.id;
    //console.log(this.props);
    this.props.getCountryDetail(countryId);
    //console.log(this.props);
  }

  render() {
    return (
      <div className="country-detail">
        Country Details
        <h2>{this.props.countryDetail.id}</h2>
        <img src={this.props.countryDetail.flag} alt="img not found" />
        <h4>{`Capital: ${this.props.countryDetail.capital}`}</h4>
        <h4>{`Subregion: ${this.props.countryDetail.subregion}`}</h4>
        <h4>{`Area: ${this.props.countryDetail.area}`}</h4>
        <h4>{`Population: ${this.props.countryDetail.population}`}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countryDetail: state.countryDetail,
  };
}

export default connect(mapStateToProps, { getCountryDetail })(Country);
