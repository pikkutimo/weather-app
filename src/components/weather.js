import React from 'react';
import DateBuilder from './datebuilder';
import './weather.css';


function Weather(data) {

    console.log(data);

    return (
        <div>
          <div className="location-box">
            <div className="date">{DateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <img src ={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`} alt="wthr img"  width="100" height="100"/>
            <div className="temp">
              {Math.round(data.data.temp - 273.15)}°c
            </div>
            <div className="weather">
                Feels like {Math.round(data.data.feels_like - 273.15)}°c
            </div>
            <div className="weather">
                Wind Speed {data.data.wind_speed} m/s
            </div>
            <div className="weather">{data.data.weather[0].description}</div>
          </div>
        </div>
        
    );
}

export default Weather;