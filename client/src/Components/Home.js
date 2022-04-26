import React, {useState, useEffect} from 'react'
import axios from 'axios'



function Home() {

    const [ planets, setPlanets ]= useState([]);

    // const fetchData = async () => {
    //     try {
    //       const resp = await axios.get('/planets');
    //       setPlanets(resp.data);
    //     } catch(err) {
    //       console.error(err.response)
    //     }
    //   }
    
    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    //   console.log(planets)

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
    <div>
      <img src={planets[0].image} />
    </div>
  )
}

export default Home