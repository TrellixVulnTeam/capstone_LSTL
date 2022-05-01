// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import MemoForm from './MemoForm';
// import MemoCard from './MemoCard';
// import axios from 'axios';

// function SaturnDetail({ user }) {

//   const [saturn, setSaturn] = useState([])
//   const { id } = useParams();
//   const [memo, setMemo] = useState([])

//   // useEffect(() => {

//   // }, [])




//   useEffect(() => {
//     console.log(id)
//     fetch(`/planets/6`)
//     //change to each planet ID
//       .then((r) => r.json())
//       .then((data) => setSaturn(data))
//     fetchData()
//   }, [id])

//   async function fetchData() {
//     axios.get('/notes')
//     .then(r => setMemo(r.data.filter(note => note.planet_id == id) )

  
//     )}

//   console.log(id);
//   const { name, about, image } = saturn

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={image}/>
//       <h3>{about}</h3>
//       <MemoForm user={user} saturn={saturn} />
//       {memo.map((m) => {
//         return (<MemoCard
//           memo={m}
//           key={m.id}

//         />)
//       })}

//     </div>
//   )
// }

// export default SaturnDetail