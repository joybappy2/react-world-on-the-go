import React, { useState } from "react";
import "./Country.css";

const Country = ( { country } ) => {
  const [visited, setVisited] = useState(false)
  const visitHandler = () => {
    setVisited(!visited)
    
  }
  return (
    <>
      <div className={`countrystyle ${visited && 'visited'}`}>
        <h1>{country.name.common}</h1>
        <img src={country.flags.flags.png} alt="" />
        <p>Region: {country.region.region} </p>
        <p>Population: {country.population.population}</p>
        <div className="bottom">
          <button className="btn" onClick={visitHandler}>{visited? 'Visited' : 'Not Visited'}</button>
          <p className="fontxl">{ visited && '✅' }</p>
        </div>
      </div>
    </>
  );
};

export default Country;
