import React from 'react';
import './tables.css';
import Moment from 'react-moment';

Moment.globalFormat = ' D MMMM HH:M'

function Forecast(forecast) {

    // console.log(forecast);

    return (
        <div>
            <h1>Forecast</h1>
            <table className="forecast-table">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Temperature (°c)</th>
                        <th>Wind speed (m/s)</th>
                        <th>Description</th>
                        <th>Symbol</th>
                    </tr>
                    {forecast.forecast.map(item => (
                    <tr key={item.dt}>
                        <td key={1}><Moment unix>{item.dt}</Moment></td>
                        <td key={2}>{Math.round(item.temp.day - 273.15)}°c</td>
                        <td key={3}>{item.wind_speed}</td>
                        <td key={4}>{item.weather[0].description}</td>
                        <td key={5}><img src ={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default Forecast;