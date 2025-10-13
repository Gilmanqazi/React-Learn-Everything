import React from 'react';
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="card">
    <div className="top">
      <img src={props.img} alt="" />
      <button>Save<Bookmark size={15} /></button>
    </div>
    <div className="center">
  <h3>{props.h3} <span>{props.span}</span></h3>
  <h2>{props.h2}</h2>
  <div>
    <h4>{props.h4}</h4>
    <h4>{props.h4b}</h4>
  </div>
    </div>
  
    <div className="bottom">
  <div>
      <h3>{props.btmh3}</h3>
      <p>{props.btmp}</p>
    </div>
    <button>Apply Now</button>
  </div>
    </div>
  );
};

export default Cards;