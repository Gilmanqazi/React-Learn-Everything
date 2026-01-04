import React from 'react'

const About = () => {


  return (
    <div className='py-10 px-6 w-full flex gap-5'>
<div className='w-[50vw] flex flex-col gap-5'>
<div>
 <h2 className='text-2xl font-bold'>ABOUT US – REFLECT</h2>
 <p className='text-lg font-medium text-gray-300'> <span className='font-semibold text-lg text-blue-600'>REFLECT-</span> is a modern fashion and lifestyle brand that represents confidence, comfort, and individuality.
 We believe fashion is more than just clothing — it is a reflection of who you are.</p>
 </div>

 <div>
 <h2 className='text-2xl font-bold'>Our Vision</h2>
 <p className='text-lg font-medium text-gray-300'> 
 Our vision at REFLECT is to create fashion that is:
  <span className='font-semibold text-lg text-blue-600'> Stylish and trend-driven Comfortable for everyday wear Designed for all age groups   </span>
 So everyone can express their personal style without compromise.</p>
 </div>

 <div>
 <h2 className='text-2xl font-bold'>What We Offer</h2>
 <p  className='text-lg font-medium text-gray-300'>At REFLECT, we bring you:</p>
  <span className='font-semibold text-lg text-blue-600'>
Premium collections for Men, Women, and Kids

A blend of everyday wear and streetwear

High-quality fabrics with modern designs

Affordable fashion with a premium feel
</span>

 </div>
</div>
     
     <div className='w-[50vw] h-[60vh]  flex flex-col items-center justify-center '>
<p className='text-3xl font-semibold'>"Wear what you look"</p>
<h2 className='text-9xl font-semibold'> - REFLECT</h2>
     </div>


    </div>
  )
}

export default About
