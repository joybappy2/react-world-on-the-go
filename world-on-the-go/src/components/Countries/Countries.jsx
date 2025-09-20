import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([])
  const visitdFlagHandler = (flag) => {
    const newVisitedFlag = [ ...visitedFlag, flag ]
    setVisitedFlag(newVisitedFlag)
    // console.log(visitedFlag)
  }


  const visitedHandler = (co) => {
    const newVisitedCountry = [...visitedCountries, co]
    setVisitedCountries(newVisitedCountry)
  };

  return (
    <>
      <h1 className="title">Countries</h1>
      <p className="title">Flags</p>
      <p>Visited Countries: {visitedCountries.length}</p>
      {
        visitedCountries.map( counry => {
          return <li key={counry.ccn3.ccn3}>{ counry.name.common }</li>
        })
      }
      <div className="country-container">
        {countries.map((country) => {
          return (
            <div key={country.ccn3.ccn3}>
              <Country
                key={country.ccn3.ccn3}
                country={country}
                visitedHandler={visitedHandler}
                visitedFlagHandler= {visitdFlagHandler}
              ></Country>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
