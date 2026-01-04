import React from 'react';

const Kids = ({dataKids}) => {
  return (
    <div>
    <h2 className='text-3xl font-bold px-5  '>OUR COLLECTION</h2>
 <div className='py-5 px-5 flex gap-5'>
  <button className='py-1 px-4 bg-white text-black font-bold rounded'>Kid's Collection</button>
  <button className='py-1 px-4 bg-black text-white border-2 font-bold rounded'>Caps & Bang</button>
  <button className='py-1 px-4 bg-black text-white border-2  font-bold rounded'>Trending</button>
  <button className='py-1 px-4 bg-black text-white border-2  font-bold rounded'> Cit Wear</button>
  <button className='py-1 px-4 bg-black text-white border-2  font-bold rounded'> Accessories</button>
 </div>

<div className='py-5 px-5 flex gap-2'>
{dataKids.map(function(elem,idx){
  return   <div key={idx} className='h-70 w-50  rounded-xl'>
  <img className='h-full w-full rounded-xl  object-cover' src={elem.img} alt="" />
  <h5 className='text-sm font-bold w-fit px-2  bg-[#555]/50 text-white  backdrop-blur-3xl mt-1 py-1 rounded'>{elem.title}</h5>
  <p className='text-sm font-bold w-fit px-2  bg-[#555]/50 text-white  backdrop-blur-3xl mt-1 py-1 rounded'>{elem.price}</p>
    </div>
})}
  
</div>
    </div>
  );
};

export default Kids;