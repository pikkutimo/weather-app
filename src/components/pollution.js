import React from 'react';
import './tables.css';
import DateBuilder from './datebuilder';


function Pollution(data) {

    // console.log(data);

    return (
        <div>
            <div className="location-box">
            <div className="date">{DateBuilder(new Date())}</div>
          </div>
          <table className="pollution-table">
                <tbody>
                    <tr>
                        <th>Pollutant</th>
                        <th>Concentration</th>
                        <th>Unit</th>
                    </tr>
                    <tr>
                        <td>CO (Carbon monoxide)</td>
                        <td>{data.data.components.co}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>NO (Nitrogen monoxide)</td>
                        <td>{data.data.components.no}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>NO2 (Nitrogen dioxide)</td>
                        <td>{data.data.components.no2}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>O3 (Ozone)</td>
                        <td>{data.data.components.o3}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>SO2 (Sulphur dioxide)</td>
                        <td>{data.data.components.so2}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>PM2.5 (Fine particles matter)</td>
                        <td>{data.data.components.pm2_5}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>PM10 (Coarse particulate matter)</td>
                        <td>{data.data.components.pm10}</td>
                        <td>μg/m3</td>
                    </tr>
                    <tr>
                        <td>NH3 (Ammonia)</td>
                        <td>{data.data.components.nh3}</td>
                        <td>μg/m3</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default Pollution;