import React from "react";
import coutriesData from "./coutriesData";

function Card({filter}) {


  return (
    <div className="countrygrid">
      {coutriesData.filter((country)=>{
        let str1 = country.name.common.toLowerCase()
        let str2 = filter.toLowerCase()
        let n = str2.length;
        let flag = true;
        for(let i=0;i<n;i++){
          if(str1[i]!=str2[i]){
            flag=false;
          }
        }

        return flag;
    })
       .map((country) => {
        return (
          <div className="card" onClick="handleClick">
            <img src={country.flags.png} alt="search icon" />
            <div className="divtitle" >{country.name.common}</div>
            <div className="population"><span>Population:</span> {country.population}</div>
            <div className="population"><span>Region: </span>{country.region}</div>

            {Array.isArray(country.capital) && country.capital.length > 0 ? (
              country.capital.map((cap, index) => <div className="capitals" key={index}><span>Capital:</span> {cap}</div>)
            ) : (
              <div className="capitals">No capitals available</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
