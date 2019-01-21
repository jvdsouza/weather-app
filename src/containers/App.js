import React, { Component } from 'react';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import './App.css';

const appID="c3860854e4b445d4a7d20312191901";
//API key obtained from https://www.apixu.com/
//free api key

const initialState = {
  input: "",
  location: "London",
  weatherDataC: "",
  weatherDataF: "",
}
class App extends Component {
  constructor() {
    super();
    this.state =  initialState;
  }

  onInputChange = (event) => {
    // console.log("before typing " ,this.state.location);
    this.setState({
      input: event.target.value
    });
    console.log("after typing ", this.state.input);
  }

  onButtonSubmit = () => {
    console.log("before submission", this.state.location);
    this.setState({
      location: this.state.input
    });
    console.log("after typing ", this.state.input);
    console.log("after submission", this.state.location);

    //fetch the weather api
    fetch(`https://api.apixu.com/v1/current.json?key=${appID}&q=${this.state.location}`)
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
        this.setState({
          weatherDataC: data.current.temp_c,
          weatherDataF: data.current.temp_f
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <Card
          weatherCelc={this.state.weatherDataC}
          weatherFar={this.state.weatherDataF}
          location={this.state.location}
        />
        <Search onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
