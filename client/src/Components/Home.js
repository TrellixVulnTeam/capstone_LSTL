import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios'
import PlanetCard from './PlanetCard';
// import MercuryCard from './Planets/MercuryCard';
// import VenusCard from './Planets/VenusCard';

//trying to change each planet page
// was thinking about making each planet its own card instead of mapping to update each page in its own card





function Home() {

    const [planets, setPlanets] = useState([]);
    // const [mercury, setMercury] = useState([]);
    // const [venus, setVenus] = useState([])


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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch('/planets/1');
    //         const json = await data.json();

    //         setMercury(json);
    //     }
    //     fetchData()
    //         .catch(console.error)
    // }, [])
    // console.log(mercury)


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch('/planets/2');
    //         const json = await data.json();

    //         setVenus(json);
    //     }
    //     fetchData()
    //         .catch(console.error)
    // }, [])
    // console.log(venus)


    return (
        <div className='home-background'>
            
        
          <img className='sun' src="https://www.nasa.gov/images/content/187928main_Fringe081807.jpg"/>
         
        <div className="planet-container" >
            {/* <MercuryCard 
            key={mercury.id}
            id={mercury.id}
            mercury={mercury}
            />
            <VenusCard 
             key={venus.id}
             id={venus.id}
             venus={venus}
            /> */}

            
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