/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

function StarshipsDetails() {
  
  const [shipsdata, setShipsData] = useState();

 const { id } = useParams();

  const getStarshipsDetails =  async () => {
    try {
      const response = await api.get(`/starships/${id}`);
      setShipsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } 
  };
  
  useEffect(() => {
    getStarshipsDetails();
  },[id]);

  return (
    <div>
        <p>name: {shipsdata?.name}</p>
        <p>model: {shipsdata?.model}</p>
        <p>max_atmosphering_speed: {shipsdata?.max_atmosphering_speed}</p>
        <p>manufacturer: {shipsdata?.manufacturer}</p>
        <p>crew: {shipsdata?.crew}</p>
        <p>cargo_capacity: {shipsdata?.cargo_capacity}</p>
       {/* <img src={require("../../assets/image/" + shipsdata?.name + ".jpg")} alt="shipsdata img" />  */}
    </div>
  )
}

export default StarshipsDetails