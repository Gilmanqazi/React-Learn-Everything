import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log("A is Changing")
  }
  function bChanging(){
    console.log("B is Changing")
  }

useEffect(function(){
 aChanging()
},[a])

useEffect(function(){
  bChanging()
 },[b])
// const a = Math.random()
// console.log(a)
// const b = Math.random()
// console.log(b)

  return (
    <div>
      <h1> A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
setA (a+1)
 }}>A</button>

 <button onClick={()=>{
    setB (b-1)
   
 }}>B</button>

    </div>
  );
};

export default App;