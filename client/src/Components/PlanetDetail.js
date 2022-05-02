import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MemoForm from './MemoForm';
import MemoCard from './MemoCard';
import axios from 'axios';

function PlanetDetail({ user }) {

  const [planet, setPlanet] = useState([])
  const { id } = useParams();
  const [memo, setMemo] = useState([])
  const [iframeid, setIframeid] = useState("")

  // useEffect(() => {

  // }, [])




  useEffect(() => {
    console.log(id)
    fetch(`/planets/${id}`)
      //change to each planet ID
      .then((r) => r.json())
      .then((data) => {
        setPlanet(data)

        switch (data.name) {
          case "Mercury":
            setIframeid(2369)
            break
          case "Venus":
            setIframeid(2343)
            break
          case "Earth":
            setIframeid(2392)
            break
          case "Mars":
            setIframeid(2372)
            break
          case "Jupiter":
            setIframeid(2375)
            break
          case "Saturn":
            setIframeid(2355)
            break
          case "Uranus":
            setIframeid(2344)
            break
          case "Neptune":
            setIframeid(2364)
            break
        }
      })
    fetchData()
  }, [id])

  async function fetchData() {
    axios.get('/notes')
      .then(r => setMemo(r.data.filter(note => note.planet_id == id))


      )
  }

  const { name, about, image } = planet

  console.log(iframeid)


  return (
    <div>
      <iframe
        src={`https://solarsystem.nasa.gov/gltf_embed/${iframeid}`}
        width='100%'
        height='450px'
        frameborder='0'
      />
      <h1>{name}</h1>
      <img src={image} />
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