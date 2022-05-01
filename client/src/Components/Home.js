import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import PlanetCard from './PlanetCard';
import MercuryCard from './Planets/MercuryCard';







function Home() {

    const [planets, setPlanets] = useState([]);
    const [mercury, setMercury] = useState([])


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

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/planets/1');
            const json = await data.json();

            setMercury(json);
        }
        fetchData()
            .catch(console.error)
    }, [])
    console.log(mercury)


    return (
        <div className='home-background'>
            
        
          <img className='sun' src="https://www.nasa.gov/images/content/187928main_Fringe081807.jpg"/>
         
        <div className="planet-container" >
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