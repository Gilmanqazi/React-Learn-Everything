import React from 'react'

const App = () => {
 const submitHandler = (elem)=>{
  elem.preventDefault()
  console.log("Form submitted")
  
 }


  return (
    <div>
      <form onSubmit={function(elem){
submitHandler(elem)
      }}> 
        <input type="text"  placeholder='Enter your name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
