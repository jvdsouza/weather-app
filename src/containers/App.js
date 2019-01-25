import React, { Component } from 'react';
import Card from '../components/Card/Card';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
// import Search from '../components/Search/Search';
import './App.css';

const appID="c3860854e4b445d4a7d20312191901";
//API key obtained from https://www.apixu.com/
//free api key

const initialState = {
  userInput: "London",
  location: "London",
  weatherDataC: "",
  weatherDataF: "",
  success: true
}

class App extends Component {
  constructor() {
    super();
    this.state =  initialState;
  }

  componentDidMount() {
    fetch(`https://api.apixu.com/v1/current.json?key=${appID}&q=${this.state.userInput}`)
      .then(response => {
        this.setState({success: true});
        return response.json();
      })
      .then(data => {
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f
        })
      })
      .catch(this.setState({success: false}));
  }

  onInputChange = (event) => {
    this.setState({userInput: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({location: this.state.userInput}) //setState is asynchronous
    //fetch the weather api
    fetch(`https://api.apixu.com/v1/current.json?key=${appID}&q=${this.state.userInput}`)
      .then(response => {
        this.setState({success: true});
        return response.json();
      })
      .then(data => {
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f
        })
      })
      .catch(this.setState({success: false}));
  }


  render() {
    return (
      <div>
        <ErrorBoundary>
          <Card
            weatherCelc={this.state.weatherDataC}
            weatherFar={this.state.weatherDataF}
            userInput={this.state.userInput}
            location={this.state.location}
            success={this.state.success}
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
      </ErrorBoundary>
      </div>
    );
  }
}

export default App;
