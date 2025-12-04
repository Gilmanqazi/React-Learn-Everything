import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"gilman", age:21})

 const btnClicked = ()=>{

setNum(prev=>({...prev,user:"Alman" , age:25}))


 }
  return (
    <div>
<h1>{num.user} {num.age} </h1>
<button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
