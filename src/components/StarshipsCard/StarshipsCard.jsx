import React from "react";
import getUrlId from "../../utils/getUrlId";
import { Link } from "react-router-dom";

function StarshipsCard({ ships }) {
  return (
    <div>
      <p>name: {ships.name}</p>
      <p>model: {ships.model}</p>
      <p>hiper sürücü derecelendirmesi: {ships.hyperdrive_rating}</p>

      <Link to={`starships/${getUrlId(ships.url)}`}>
        <div>
          {" "}
          <img
            style={{ height: 200, width: 200 }}
            src={require("../../assets/image/" + ships.name + ".jpg")}
            alt="ships img"
          />
        </div>
      </Link>
    </div>
  );
}

export default StarshipsCard;
