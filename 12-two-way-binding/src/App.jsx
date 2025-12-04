import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")



  const FormHandle =  (elem)=>{
    elem.preventDefault()
console.log("Form submitted by" , title)
setTitle('')
  }
  return (
    <div>
      <form onSubmit={function(elem){
FormHandle(elem)
      }}>
        <input type="text"
         placeholder='Enter your name'
        value = {title}
         onChange={(e)=>{
        setTitle(e.target.value)
         }}
          />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
