import React from 'react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
    <h2 className='bg-white text-1xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
    <div>
      <p className='text-xs  text-white mt-35 leading-relaxed text-shadow-2xs
      '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi aperiam quasi rem sint, architecto odit.</p>
    </div>
    <div className='flex justify-between'>
      <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-6 py-2 rounded-full text-lg'>{props.tag}</button>
    <button style={{backgroundColor:props.color}} className=' text-white font-normal px-4 py-2 rounded-full '><i className="ri-arrow-right-long-line"></i></button>
    </div>
  </div>
  );
};

export default RightCardContent;