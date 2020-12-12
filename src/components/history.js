import React from 'react';
import './tables.css';
import Moment from 'react-moment';

function History(history) {
    
    // console.log(history);

    return (
        <div>
            <h1>History</h1>
            <table className="history-table">
                <tbody>
                    <tr>
                        <th>Time</th>
                        <th>Temperature (°c)</th>
                        <th>Wind speed (m/s)</th>
                        <th>Descri</th>
                    </tr>
                    {history.history.map(item => (
                        <tr key={item.dt}>
                            <td key={1}><Moment format='HH:M' unix>{item.dt}</Moment></td>
                            <td key={2}>{Math.round(item.temp - 273.15)}°c</td>
                            <td key={3}>{item.wind_speed}</td>
                            <td key={4}>{item.weather[0].description}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
        
    );
}

export default History;