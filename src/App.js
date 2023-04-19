import React from "react";
import Header from "./components/Header/Header";
import StarshipsList from "./components/StarshipsList/StarshipsList";
import { StarWarsProvider } from "./context/StarWarsContext";

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <StarshipsList />
    </StarWarsProvider>
  );
}

export default App;
