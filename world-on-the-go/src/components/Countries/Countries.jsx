import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h1 className="title">Countries</h1>
      <div className="country-container">
        {countries.map((country) => {
        return (
          <div key={country.ccn3.ccn3}>
            <Country key={country.ccn3.ccn3} country={country}></Country>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Countries;
