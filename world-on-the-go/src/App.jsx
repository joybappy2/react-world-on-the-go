import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Fallback from "./components/Countries/fallback";

function App() {
  const url = "https://openapi.programming-hero.com/api/all";
  const countriesPromise = fetch(url).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<Fallback></Fallback>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
