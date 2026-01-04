import React from 'react';

const Home = () => {
  return (
    <div className='h-screen bg-black w-full flex gap-5 py-5 px-3'>
      <div className='h-[80vh] w-[50vw] px-6 flex flex-col'>
        <h2 className='text-8xl font-bold '>REFLECT</h2>
        <h2 className='text-8xl font-bold relative  left-15'>FASHION</h2>
        

        <div>
        <p className='text-sm py-5 font-bold relative  left-15 w-[80vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta doloribus quis ratione suscipit quasi quae reiciendis tempora, rerum molestias porro odit dolore, facilis voluptatem harum laudantium, necessitatibus quas beatae pariatur itaque sapiente deleniti nisi nobis! Molestiae consequuntur ut expedita corrupti?</p>
        </div>

        <div className='flex gap-5  font-bold relative  left-15 '>
          <button className='py-2 px-5 bg-white text-black rounded'>Buy Product</button>
          <button className='py-2 px-5 bg-black text-white rounded'>Explore Product</button>
        </div>


      </div>

      <div className='h-[80vh] w-[50vw]'>
        <img className='h-full w-full object-cover rounded-lg object-center' src="https://plus.unsplash.com/premium_photo-1664876514393-43d54a364888?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>


    </div>
  );
};

export default Home;