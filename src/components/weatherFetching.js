import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from './navbar';
import Weather from './weather';
import Forecast from './forecast';
import History from './history';
import Pollution from './pollution';

function WeatherFetching({latitude, longitude}) {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [history, setHistory] = useState([]);
    const [pollution, setPollution] = useState({});
    const [isWeather, setIsWeather] = useState(false);
    const [isForecast, setIsForecast] = useState(false);
    const [isHistory, setIsHistory] = useState(false);
    const [isPollution, setIsPollution] = useState(false);
    const [timepoint, setTimepoint] = useState('1607758077');
    
    const apiKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

    useEffect(() => {
        
        const fetchData = async () => {

          setIsForecast(false);
          setIsHistory(false);
          setIsPollution(false);
          setIsWeather(false);
                
          const result = await axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
          );
          setWeather(result.data.current);
          setIsWeather(true);
          console.log("weather fetched!");
          alterTime();
          console.log(timepoint);
          setForecast(result.data.daily);
          setIsForecast(true);
          console.log("forecast fetched!");

          
          const historyData = await axios(
            `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${timepoint}&appid=${apiKey}`,
          );
          setHistory(historyData.data.hourly);
          setIsHistory(true);
          console.log("history fetched!");

          const pollutionData = await axios(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
          );
          setPollution(pollutionData.data.list[0]);
          setIsPollution(true);
          console.log("pollution fetched!");

        };

        fetchData();
    }, [latitude, longitude]);

    const alterTime = () => {
      const dateTime = Date.now();
      const unixTime = Math.floor(dateTime / 1000) - 84600;
      setTimepoint(unixTime);
    }
    
    return (
        <Router>
            <Navbar />
            <div className="navContainer">
                <Switch>
                    <Route path="/forecast">
                        {isForecast ? 
                            ( <Forecast forecast={forecast}/> ) :
                            ( <p>Fetching forecast...</p> )
                        }
                    </Route>
                    <Route path="/history">
                        {isHistory ?
                            ( <History history={history} /> ) :
                            ( <p>Fetching history...</p> )
                        }
                    </Route>
                    <Route path="/pollution">
                        {isPollution ?
                            ( <Pollution data={pollution}/> ) :
                            ( <p>Fetching pollution...</p> )
                        }
                    </Route>
                    <Route path="/">
                        {isWeather ?
                            ( <Weather data={weather}/> ) :
                            ( <p>Fetching weather...</p> )
                        }
                    </Route>
                
                </Switch>
            </div>
        </Router>
    );
}

export default WeatherFetching;