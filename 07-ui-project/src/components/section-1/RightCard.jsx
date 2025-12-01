import React from 'react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-60  rounded-3xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />

     <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  );
};

export default RightCard;