import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page2Content = () => {
  return (
    <div className='px-5 py-10 h-[90vh] flex justify-between'>
      <LeftContent/>
      <RightContent/>
    </div>
  );
};

export default Page2Content;