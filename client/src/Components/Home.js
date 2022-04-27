import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import PlanetCard from './PlanetCard';
import './Home.css'




function Home() {

    const [planets, setPlanets] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/planets');
            const json = await data.json();

            setPlanets(json);
        }
        fetchData()
            .catch(console.error)
    }, [])

    console.log(planets)


    return (
        <div className='background'>
        <div className="planet-container">
            {planets.map((planet) => (
                <PlanetCard 
                key={planet.id}
                id={planet.id}
                planet={planet}
                />
            ))}
        </div>
        </div>
    )
}

export default Home