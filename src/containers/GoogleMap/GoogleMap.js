// api from https://github.com/google-map-react/google-map-react

import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => {
  return(
    <div className='ba pr5 pl2 br3 b'>
      <div className='tc'>{ text }</div>
    </div>
  )
}

class Map extends Component {
  render() {
    return (
      <div>
        <div className='google-map' style={{ height: '72vh', width: '90%', padding: 'auto', margin: 'auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_APIKEY }}
            center={{ lat:this.props.lat, lng:this.props.lng }}
            defaultZoom={11}>
            <AnyReactComponent
              lat={ this.props.lat }
              lng={ this.props.lng }
              text={ 'Weather here' }
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}


export default Map;
