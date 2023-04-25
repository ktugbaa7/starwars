import React from "react";
import { useStarWars } from "../../context/StarWarsContext";

function StarshipsList() {
  const { starships, loading, loadMore, totalPage, page } = useStarWars();
  return (
    <div>
      {starships &&
        starships.map((ships, id) => (
          <div key={id}>
            <p>name: {ships.name}</p>
            <p>model: {ships.model}</p>
            <p>hiper sürücü derecelendirmesi: {ships.hyperdrive_rating}</p>
            <div>
              <img
                style={{ height: 200, width: 200 }}
                src={require("../../assets/image/" + ships.name + ".jpg")}
                alt="ships img"
              />
            </div>
          </div>
        ))}

      {/* {totalPage !== page && (
        <button onClick={loadMore}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )} */}
        <button onClick={loadMore}>
          {loading ? "Loading..." : "Load More"}
        </button>
    </div>
  );
}

export default StarshipsList;
