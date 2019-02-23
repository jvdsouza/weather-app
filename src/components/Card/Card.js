import React from 'react';
import Search from '../Search/Search';
import Forecast from '../Forecast/Forecast';

import './Card.css';

const Card = ({status, weatherCelc, weatherFar, location, forecast, userInput, condition, onInputChange, onButtonSubmit}) => {
    return(
      <div className='cardwrapper pa4 br3 shadow-5'>
        <h1 className='ma0'>Weather Data for: {userInput}</h1>
        <h3 className='weatherInfo ma0'>The current weather in {location} is: {weatherCelc} &#176;C ({weatherFar} &#176;F) <img alt="condition" src={condition}/></h3>
        <Forecast forecast={forecast}/>
        <Search
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}/>
        <p>{status}</p>
      </div>
    );
}

export default Card;
