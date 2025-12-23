import React from 'react';

const App = (props) => {
  return (
    <div>
    <a href={props.elem.url} target='_blank'>
      <div className='h-30 w-44 bg-black rounded-xl overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
    </div>
    <h2 className='fotn-bold text-lg'>{props.elem.author}</h2>
    </a>
    </div>
  );
};

export default App;