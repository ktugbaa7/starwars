/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

function StarshipsDetails() {
  
  const [shipsdata, setShipsData] = useState();

 const { id } = useParams();

  const getStarshipsDetails = useCallback( async () => { //!!! resimler
    try {
      const response = await api.get(`/starships/${id}`);
      setShipsData(response.data);
      console.log(response.data.name);
    } catch (error) {
      console.log(error);
    } 
  },[id]);
  
  useEffect(() => {
    getStarshipsDetails();
  },[getStarshipsDetails]);

  return (
    <div>
        <p>name: {shipsdata?.name}</p>
        <p>model: {shipsdata?.model}</p>
        <p>max_atmosphering_speed: {shipsdata?.max_atmosphering_speed}</p>
        <p>manufacturer: {shipsdata?.manufacturer}</p>
        <p>crew: {shipsdata?.crew}</p>
        <p>cargo_capacity: {shipsdata?.cargo_capacity}</p>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="img" /> 
    </div>
  )
}

export default StarshipsDetails