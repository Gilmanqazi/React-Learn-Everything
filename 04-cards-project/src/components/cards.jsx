import React from 'react';

const Card = (props) => {
  return (
    // <div className='Parent'>
<div className="card">
  <img src= {props.img} alt="" />
  <div>
    <h1>{props.title} </h1>
    <p>{props.description}<b></b></p>
  </div>
  <div className="button">
    <button>{props.button}</button>
  </div>
</div>

    // </div>
  );
};

export default Card;