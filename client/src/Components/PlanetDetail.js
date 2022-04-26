import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function PlanetDetail() {

    const [ planet, setPlanet] = useState([])
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
        fetch(`/planets/${id}`)
        .then((r) => r.json())
        .then((data) => setPlanet(data))
    },[id])

    const { name, about, image } = planet

  return (
    <div>
        <h1>{name}</h1>
        <img src={image}/>
        <h3>{about}</h3>
    </div>
  )
}

export default PlanetDetail