import React from 'react';

const Card = ({weatherCelc, weatherFar, location}) => {
    return(
      <div>
        <h1>Weather Data for: {location}</h1>
        <h3>The current weather is: {weatherCelc} &#8451; ({weatherFar} &#8457;)</h3>
      </div>
    );
}

export default Card;
