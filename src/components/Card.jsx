import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {useSelector} from 'react-redux'

function Card({ filter = "", setCountry}) {  

  const mode = useSelector((state) => state.mode);
  const [countriesData, setCountriesData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountriesData(data);  
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchCountries();  
  }, []);  

  
  const filteredCountries = countriesData.filter((country) => {
    if (country.name && country.name.common) {
      let str1 = country.name.common.toLowerCase();
      let str2 = filter.toLowerCase();
      return str1.startsWith(str2);  
    }
    return false;
  });

  return (
    <div className= {mode? "countrygrid mode" :"countrygrid"}>
      {filteredCountries.map((country) => (
        <div className= {mode?"card mode":"card"} key={country.cca3} onClick={()=>{
            setCountry(country);
            navigate(`/name/${country.name.common}`);
        }}>
          <img src={country.flags.png} alt="search icon" />
          <div className="divtitle">{country.name.common}</div>
          <div className="population"><span>Population:</span> {country.population}</div>
          <div className="population"><span>Region: </span>{country.region}</div>

          {Array.isArray(country.capital) && country.capital.length > 0 ? (
            country.capital.map((cap, index) => (
              <div className="capitals" key={index}><span>Capital:</span> {cap}</div>
            ))
          ) : (
            <div className="capitals">No capitals available</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
