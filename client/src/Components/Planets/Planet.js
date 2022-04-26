import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function Planet() {

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

      useEffect(async () => {
          const res = await axios.get('/planets');
          setPlanets(res.data)
      }, [])

      console.log(planets)

  return (
    <div>Planet</div>
  )
}

export default Planet