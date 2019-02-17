import React from 'react';
import Search from '../Search/Search';

import './Card.css';

const Card = ({status, weatherCelc, weatherFar, location, userInput, onInputChange, onButtonSubmit}) => {
    return(
      <div className='cardwrapper pa4 br3 shadow-5'>
        <h1>Weather Data for: {userInput}</h1>
        <h3>The current weather in {location} is: {weatherCelc} &#176;C ({weatherFar} &#176;F)</h3>
        <Search onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        <p>{status}</p>
      </div>
    );
}

export default Card;
