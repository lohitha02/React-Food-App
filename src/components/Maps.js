import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '65%',
  height: '100%',
};

class Maps extends React.Component {
    render() {
        return(
        
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}} >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
        
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk'
  })(Maps);
