import { Copy } from 'lucide-react';
import React, { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

const submitHandle = (elem)=>{
  elem.preventDefault()

  const CopyTask = [...task]
  CopyTask.push({title,details})
setTask(CopyTask)



setTitle('')
setDetails('')
}



  return (
    <div className='h-full lg:flex bg-black  '>
      
      <form onSubmit={function(elem){
submitHandle(elem)

      }} className='flex lg:w-1/2 gap-5  rounded  w-1/2 items-start flex-col p-10 ' >

          <h1 className='text-white text-3xl font-bold text-center'>Add Notes</h1>
   {/* PAHELA INPUT FOR HEADING */}
       <input
         type="text" 

         placeholder='Enter Notes Heading' 

         className='px-5 w-full py-2 font-medium border-2 rounded outline-none text-amber-50'
         value={title}

         onChange={function(e){
setTitle(e.target.value)
         }}
         />
        {/* DETAILED WALA INPUT FOR HEADING */}
      <textarea

       placeholder='Write Details Here' 
       
       type="text" 

       className='px-5 w-full font-medium h-30 py-2 border-2 rounded text-amber-50' 

       value= {details}
       onChange={function(e){
       setDetails(e.target.value)
       }}
       />
    

       <button
        className='px-5 font-medium active:bg-gray-500 w-full py-2 border-2 rounded text-black bg-amber-100'>
          Add Notes
        </button>

      </form>
      <div className='lg:border-l-2  gap-5 lg:w-1/2 text-white  p-10'>

      <h1 className='text-white text-3xl font-bold '>Recent Notes</h1>

       <div className='flex gap-1.5 flex-wrap mt-1 h-full overflow-auto'>

{task.map(function(elem,idx){
  return  <div key={idx} className='relative h-52 w-42 rounded-2xl  py-6 px-6 bg-cover bg-center bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black '>
    <h1></h1>
    <h3 className='leading-tight text-xl font-bold capitalize'>{elem.title}</h3>
    <p className='text-gray-800 text-lg'>{elem.details}</p>
    </div>
})}
       </div>
      </div>
    </div>
  );
};

export default App;