import React from 'react';
import './Forecast.css';

const Forecast = ({forecast}) => {
  return(
    <div className='dailyForecast br3'>
      <div className='dailyWeather'>
        <div className='pa1'>
          <span>Max daily temperature:</span>
          <div>
            {forecast.maxtemp_c}&#176;C ({forecast.maxtemp_f}&#176;F)
          </div>
        </div>
        <div className='pa1'>
          <span>Min daily temperature:</span>
          <div>
            {forecast.mintemp_c}&#176;C ({forecast.mintemp_f}&#176;F)
          </div>
        </div>
      </div>

      <div className='dailyWind pa2'>
        <span>Max wind speed:</span>
        <div>
          {forecast.maxwind_kph}km/h ({forecast.maxwind_mph}m/h)
        </div>
      </div>

      <div className='dailyPrecipitation pa2'>
        <span>Total precipitation:</span>
        <div>
          {forecast.totalprecip_mm}mm ({forecast.totalprecip_in}in)
        </div>
      </div>
    </div>
  )
}

export default Forecast;
