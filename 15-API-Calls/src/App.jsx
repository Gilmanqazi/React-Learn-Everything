import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
//  async function getData(){
//     const Response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  // }
const [data, setData] = useState([])
  const getData= async ()=>{
const response= await axios.get('https://picsum.photos/v2/list')
setData(response.data)
  }
  return (

    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem,idx){
        return <h1>Hello {elem.author} {idx}</h1>
      })}
    </div>
  )
}

export default App
