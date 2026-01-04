import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 sticky top-0  bg-[#555]/50 text-white  backdrop-blur-3xl justify-between w-full"'>
      <h2 className='text-2xl font-bold'>REFLECT</h2>
      <div className='flex gap-10'>

        {/* Ye Link Hum Isliye Banate Hai Ki Jaab Bhi Hum Kisi Or Page ParJAye to Page Baar Baar Reload Naa Ho Or Ise Link Tag Se Hi Bana Te hai Ye Compalsary Hai Okk */}
        <Link className='text-lg font-semibold' to='/'>Home</Link>
        <Link className='text-lg font-semibold' to='/About'>About</Link>
        <Link className='text-lg font-semibold' to='/Product'>Product</Link>
        <Link className='text-lg font-semibold' to='/Contact'>Contact</Link>
        
      </div>
    </div>
  );
};

export default Navbar;