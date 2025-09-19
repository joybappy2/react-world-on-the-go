import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <>
      <Country countries={countries}></Country>
    </>
  );
};

export default Countries;
