import React from 'react';
import Card from './components/cards.jsx';

const App = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      title: "Misty Morning",
      description: "Capture the stunning essence of the early morning sunrise in the California wilderness.",
      button: "Explore"
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      title: "Ocean Whisper",
      description: "Feel the calm rhythm of the waves as dawn breaks over the serene coastline.",
      button: "Discover"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661962259233-d5ecbe11a9b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwVHJhaWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      title: "Golden Trails",
      description: "Walk through the sunlit paths where every step glows with the warmth of adventure.",
      button: "See More"
    },
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
      title: "Forest Dreams",
      description: "Wander among towering trees and breathe in the tranquility of untouched nature.",
      button: "Explore"
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      title: "Desert Glow",
      description: "Experience the still beauty of golden sands bathed in the warm hues of sunset.",
      button: "View More"
    }
  ];
  
  return (
    <div  className='Parent'>
      {cards.map(function(elem){
       return <Card  img={elem.img} title = {elem.title} description = {elem.description} button = {elem.button} /> 
      })}
    </div>
  );
};

export default App;