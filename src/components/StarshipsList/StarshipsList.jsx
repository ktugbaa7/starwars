import React from "react";
import { useStarWars } from "../../context/StarWarsContext";
import { Link } from "react-router-dom";
import getUrlId from "../../utils/getUrlId";

function StarshipsList() {
  const { starships, loading, loadMore, totalPage, page } = useStarWars();
  
  return (
    <div>
      {loading ? "Loading..." : ""}
      <div>
        {starships &&
          starships.map((ships, id) => (
            <div key={id}>
              <p>name: {ships.name}</p>
              <p>model: {ships.model}</p>
              <p>hiper sürücü derecelendirmesi: {ships.hyperdrive_rating}</p>
              
                <Link to={`starships/${getUrlId(ships.url)}`}>
                 <div> <img
                  style={{ height: 200, width: 200 }}
                  src={require("../../assets/image/" + ships.name + ".jpg")}
                  alt="ships img"
                /></div>
                </Link>
              
            </div>
          ))}
      </div>
      {totalPage !== page && (
        <button onClick={loadMore}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default StarshipsList;
