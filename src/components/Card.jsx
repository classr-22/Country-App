import React, { useState, useEffect } from "react";

function Card({ filter = "" }) {  

  const [countriesData, setCountriesData] = useState([]);

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
    <div className="countrygrid">
      {filteredCountries.map((country) => (
        <div className="card" key={country.cca3}>
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
