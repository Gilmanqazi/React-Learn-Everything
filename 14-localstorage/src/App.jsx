import React from 'react'

const App = () => {

  const  user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div>
      
    </div>
  )
}

export default App

// 4 Localstorage important methods
// localStorage.setItem('key', 'value') -> to set a value
// localStorage.getItem('key') -> to get a value
// localStorage.removeItem('key') -> to remove a value
// localStorage.clear() -> to clear all values
// Localstorage only stores strings, so if you want to store objects or arrays, you need to use JSON.stringify() and JSON.parse() methods.
// Example:
// const user = { name: 'John', age: 30 }
// localStorage.setItem('user', JSON.stringify(user))
// const user = JSON.parse(localStorage.getItem('user'))
