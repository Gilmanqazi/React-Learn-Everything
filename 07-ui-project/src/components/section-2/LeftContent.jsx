import React from 'react'
import Leftbox1 from './Left-box1'

const LeftContent = () => {
  return (
    <div className='w-1/3 h-[80vh] flex flex-col justify-center items-center '>
      <h1 className=' text-2xl capitalize font-bold'>e-com market is expected <br /> to exceed <span className='bg-green-500 rounded-2xl px-1  font-extrabold '>$300B</span> IN 2027</h1>

      <p className='mt-10 px-4 ml-3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio pariatur obcaecati molestias, consequuntur officia explicabo vitae nisi harum amet cumque.</p>
      <Leftbox1/>
    </div>
  )
}

export default LeftContent
