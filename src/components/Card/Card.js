import React from 'react';
import Search from '../Search/Search';

const Card = ({weatherCelc, weatherFar, location, userInput, success, onInputChange, onButtonSubmit}) => {
    return(
      <div>
        <h1>Weather Data for: {userInput}</h1>
        <h3>The current weather in {location} is: {weatherCelc} &#8451; ({weatherFar} &#8457;)</h3>
        <Search onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      </div>
    );
}

export default Card;
