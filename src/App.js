import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';

const appID="c3860854e4b445d4a7d20312191901";
//API key obtained from https://www.apixu.com/
//free api key
class App extends Component {
  constructor() {
    super();
    this.state = {
      Location: "London",
      WeatherDataC: "",
      WeatherDataF: "",
      input: ""
    }
  }

  componentDidMount() { //fetch the weather api
    fetch(`https://api.apixu.com/v1/current.json?key=${appID}&q=${this.state.Location}`)
      .then(response => {
        //return response.json();
        return response.json();
      })
      .then(data => {
        this.setState({
          WeatherDataC: data.current.temp_c,
          WeatherDataF: data.current.temp_f
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Card
        weatherCelc={this.state.WeatherDataC}
        weatherFar={this.state.WeatherDataF}
        location={this.state.Location}
      />
    );
  }
}

export default App;
