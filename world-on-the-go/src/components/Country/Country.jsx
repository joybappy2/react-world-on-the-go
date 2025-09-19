import React from "react";
import "./Country.css";

const Country = ( { countries } ) => {
  const clickHandle = () => {
    const btns = document.querySelectorAll( '.vbtn' )
    btns.forEach( btn => {
      
    })
  }
  return (
    <>
      <h1 className="title">Countries</h1>
      <div className="country-container">
        {countries.map((country) => {
          return (
            <div className="countrystyle" key={country.cca3.cca3}>
              <img src={country.flags.flags.png} alt="" />
              <h3>Name: {country.name.common}</h3>
              <p>Population: {country.population.population}</p>
              <p>{ country.cca3.cca3 }</p>
              <p>
                Area: { country.area.area } { country.area.area > 100 ? "Big" : "Small" }
              </p>
              <button onClick={clickHandle} className="vbtn">Not Visited</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Country;
