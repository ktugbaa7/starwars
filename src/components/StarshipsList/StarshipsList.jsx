import React from "react";
import { useStarWars } from "../../context/StarWarsContext";

function StarshipsList() {
  const { starships, loading } = useStarWars();

  return (
    <div>
      {loading ? (
        <div>
          <h2>Yükleniyor...</h2>
        </div>
      ) : (
        <div>
          {starships.map((ships, id) => (
            <div key={id}>
              <p>name: {ships.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StarshipsList;
