import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-16'>
      <h4 className='bg-black text-white px-5 py-2 text-sm uppercase rounded-full'>Target Audience</h4>
      <button className='bg-gray-200 tracking-widest text-sm px-5 py-2 uppercase rounded-full'>digital Banking Platform</button>
    </div>
  );
};

export default Navbar;