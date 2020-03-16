import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Maps extends React.Component {
    render() {
        return(
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAx4oFC8ImmV8JBoM9ZOC3CA7PtfbE7fM4'
  })(Maps);