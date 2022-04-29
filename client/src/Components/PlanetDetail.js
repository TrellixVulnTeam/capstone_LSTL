import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MemoForm from './MemoForm';
import MemoCard from './MemoCard';
import axios from 'axios';

function PlanetDetail({ user }) {

  const [planet, setPlanet] = useState([])
  const { id } = useParams();
  const [memo, setMemo] = useState([])

  useEffect(() => {

  }, [])




  useEffect(() => {
    console.log(id)
    fetch(`/planets/${id}`)
      .then((r) => r.json())
      .then((data) => setPlanet(data))
    fetchData()
  }, [id])

  async function fetchData() {
    axios.get('/notes')
    .then(r => setMemo(r.data.filter(note => note.planet_id == id) )

    // .then(data => console.log(data))
    // setMemo(data.data.filter(note => note.planet_id === planet.id)

    )}

  console.log(id);
  const { name, about, image } = planet

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} class="center"/>
      <h3>{about}</h3>
      <MemoForm user={user} planet={planet} />
      {memo.map((m) => {
        return (<MemoCard
          memo={m}
          key={m.id}

        />)
      })}

    </div>
  )
}

export default PlanetDetail