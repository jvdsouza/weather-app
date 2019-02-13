import React, { Component } from 'react';
import Card from '../components/Card/Card';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Map from '../containers/GoogleMap/GoogleMap';
// import Search from '../components/Search/Search';
import './App.css';

const weatherAppID="c3860854e4b445d4a7d20312191901";
//API key obtained from https://www.apixu.com/
//free api key

const initialState = {
  userInput: "London",
  location: "London",
  weatherDataC: "",
  weatherDataF: "",
  lat: 40.7446790,
  lng: -73.9485420,
  status: 'loading'
}

class App extends Component {
  constructor() {
    super();
    this.state =  initialState;
  }

  componentDidMount() {
    fetch(`https://api.apixu.com/v1/current.json?key=${weatherAppID}&q=${this.state.userInput}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f,
          lat: data.location.lat,
          lng: data.location.lon,
          status: null
        })
        console.log(this.state.lat, this.state.lng);
      })
      .catch(err => console.log(err));
  }

  onInputChange = (event) => {
    this.setState({status: 'loading'});
    this.setState({userInput: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({location: this.state.userInput}) //setState is asynchronous
    //fetch the weather api
    fetch(`https://api.apixu.com/v1/current.json?key=${weatherAppID}&q=${this.state.userInput}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f,
          lat: data.location.lat,
          lng: data.location.lon,
          status: null
        })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <ErrorBoundary>
          <div className='card'>
            <Card
              status={this.state.status}
              weatherCelc={this.state.weatherDataC}
              weatherFar={this.state.weatherDataF}
              userInput={this.state.userInput}
              location={this.state.location}
              success={this.state.success}
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
        </div>
        <div className='map'>
          <Map
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </div>
      </ErrorBoundary>
      </div>
    );
  }
}

export default App;
