import { useState, useEffect } from "react";
import Geocode from "react-geocode";
import WeatherFetching from './weatherFetching';
import './getCoordinates.css';


const GetCoordinates = () => {

    Geocode.setApiKey("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
    Geocode.setLanguage("en");

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [isLatitude, setIsLatitude] = useState(false);
    const [isLongitude, setIsLongitude] = useState(false);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState("Tampere");

    useEffect(() =>{
      setIsLatitude(false);
      setIsLongitude(false);

      Geocode.fromAddress(search)
      .then(response => {
          setLatitude(response.results[0].geometry.location.lat);
          setIsLatitude(true);
          // console.log(latitude);
          setLongitude(response.results[0].geometry.location.lng);
          setIsLongitude(true);
          // console.log(longitude);
      },
      error => {
        console.error(error);
      }
    );
    }, [search]);
    
    return (
        <div>
          <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="e.g. Tampere"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setSearch(query);
              }
            }}
          />
          </div>
          {isLongitude && isLatitude ?
              ( <WeatherFetching latitude={latitude} longitude={longitude}  /> ) :
                (<div>Fetching coordinates...</div>)
            
          }         
      </div>
      
  );
};

export default GetCoordinates;