// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import MemoForm from './MemoForm';
// import MemoCard from './MemoCard';
// import axios from 'axios';

// function EarthDetail({ user }) {

//   const [earth, setEarth] = useState([])
//   const { id } = useParams();
//   const [memo, setMemo] = useState([])

//   // useEffect(() => {

//   // }, [])




//   useEffect(() => {
//     console.log(id)
//     fetch(`/planets/1`)
//     //change to each planet ID
//       .then((r) => r.json())
//       .then((data) => setEarth(data))
//     fetchData()
//   }, [id])

//   async function fetchData() {
//     axios.get('/notes')
//     .then(r => setMemo(r.data.filter(note => note.planet_id == id) )

  
//     )}

//   console.log(id);
//   const { name, about, image } = earth

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={image}/>
//       <h3>{about}</h3>
//       <MemoForm user={user} earth={earth} />
//       {memo.map((m) => {
//         return (<MemoCard
//           memo={m}
//           key={m.id}

//         />)
//       })}

//     </div>
//   )
// }

// export default EarthDetail