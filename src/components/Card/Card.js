import React from 'react';
import Search from '../Search/Search';

import './Card.css';

const Card = ({status, weatherCelc, weatherFar, location, userInput, success, onInputChange, onButtonSubmit}) => {
    return(
      <div className='cardwrapper pa4 br3 shadow-5'>
        <h1>Weather Data for: {userInput}</h1>
        <h3>The current weather in {location} is: {weatherCelc} &#8451; ({weatherFar} &#8457;)</h3>
        <Search onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        <p>{status}</p>
      </div>
    );
}

export default Card;
