import React, { Component } from 'react';
import Card from '../components/Card/Card';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Map from '../containers/GoogleMap/GoogleMap';
// import Search from '../components/Search/Search';
import './App.css';

const weatherAppID = process.env.REACT_APP_WEATHER_APIKEY;
//API key obtained from https://www.apixu.com/
//free api key

const initialState = {
  userInput: "London",
  location: "London",
  weatherDataC: "",
  weatherDataF: "",
  conditionIcon:"",
  forecast: {},
  lat: 40.7446790,
  lng: -73.9485420,
  status: 'loading'
}

class App extends Component {
  constructor() {
    super();
    this.state =  initialState;
  }

  fetchWeather() {
    fetch(`https://api.apixu.com/v1/forecast.json?key=${weatherAppID}&q=${this.state.userInput}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.forecast.forecastday[0].day)
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f,
          lat: data.location.lat,
          lng: data.location.lon,
          conditionIcon: data.current.condition.icon,
          forecast: data.forecast.forecastday[0].day,
          status: null
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchWeather();
  }

  onInputChange = (event) => {
    this.setState({status: 'loading'});
    this.setState({userInput: event.target.value});
  }

  onButtonSubmit = () => {
    this.fetchWeather();
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
              condition={this.state.conditionIcon}
              forecast={this.state.forecast}
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
