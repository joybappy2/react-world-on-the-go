import React from "react";

const Country = ({ countries }) => {
  return (
    <>
      {countries.map((country) => {
        console.log(country.flags.flags.png);
        return (
          <div key={country.cca3.cca3}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.flags.png} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Country;
