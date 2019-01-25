import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const Text = ({text}) => <div>{text}</div>;
//need to obtain props from app.js for longitude and latitude
//get google maps API key
class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {
      centre: {
        lat: 0,
        lng: 0
      },
      zoom: 11
    };
  }

  render() {
    return (
      <div style={{height: '100vh', width:'100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: {/*input api key here*/}}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Text
          lat={0}
          long={0}
          text="Location"
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap
