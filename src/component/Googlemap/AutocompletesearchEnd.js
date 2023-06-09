import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import {
  updateLocationEnd,
  updateLat,
  updateLong
} from "../../ducks/clientReducer";

class AutocompleteSearchEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {}
    };
  }
  render() {
    // console.log("this.props from end", this.props);

    return (
      <div>
        <Autocomplete
          placeholder={
            this.props.location ? this.props.location : "Enter a Location"
          }
          style={{ width: "100%" }}
          onPlaceSelected={place => {
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            this.setState({
              place: {
                address: place.formatted_address,
                lat: lat,
                lng: lng
              }
            });
            if (this.state.place) {
              this.props.updateLocationEnd(place.formatted_address);
              this.props.updateLat(lat);
              this.props.updateLong(lng);
            }
          }}
          types={["geocode"]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { locationStart, lat, long } = state.client;
  return {
    locationStart,
    lat,
    long
  };
};

const mapDispatchToProps = {
  updateLocationEnd: updateLocationEnd,
  updateLat: updateLat,
  updateLong: updateLong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({ apiKey: 'AIzaSyDiZenFISYvx9USkZ7LswynPfD76Rxu59E' })(
    AutocompleteSearchEnd
  )
);
