import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {

  return (
    <div>
      <div className='flex justify-center gap-10 py-5'>
        <Link className='text-xl font-semibold' to='Men'>Men</Link>
        <Link className='text-xl font-semibold' to='Women'>Women</Link>
        <Link className='text-xl font-semibold' to='Kids'>Kids</Link>
      </div>

      <Outlet/>


 

    </div>
  )
}

export default Product
