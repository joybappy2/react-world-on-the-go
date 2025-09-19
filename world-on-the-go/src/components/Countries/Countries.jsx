import { use } from "react";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return <h3>Countries: {countries.length}</h3>;
};

export default Countries;
