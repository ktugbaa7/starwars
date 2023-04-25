import React from "react";
import Header from "./components/Header/Header";
import StarshipsList from "./components/StarshipsList/StarshipsList";
import { StarWarsProvider } from "./context/StarWarsContext";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipsDetails from "./pages/StarshipsDetails/StarshipsDetails";

function App() {
  return (
    <StarWarsProvider>
      <BrowserRouter>
          <div>
            <Header />
            <SearchBar />
            <Routes>
              <Route path="/" element={<StarshipsList />} />

              <Route path="/starships/:id" element={<StarshipsDetails />} />
            </Routes>
          </div>
      </BrowserRouter>
    </StarWarsProvider>
  );
}

export default App;
