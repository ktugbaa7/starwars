import React from "react";
import Header from "./components/Header/Header";
import StarshipsList from "./components/StarshipsList/StarshipsList";
import { StarWarsProvider } from "./context/StarWarsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipsDetails from "./pages/StarshipsDetails/StarshipsDetails";
import About from "./pages/AboutPage/AboutPage";

function App() {
  
  return (
    <StarWarsProvider>
      <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<StarshipsList />} />
              <Route path="/starships/:id" element={<StarshipsDetails />} />
              <Route path="/about" element={<About />}/>
            </Routes>
          </div>
      </BrowserRouter>
    </StarWarsProvider>
  );
}

export default App;
