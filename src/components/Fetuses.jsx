import React from 'react'
import { cards } from '..'


export const Fetuses = () => {
  return (
    <section className='
    sm:py-16 py-6 flex justify-center items-center flex-col relative
    
    bg-[#000000] lg:pt-[110px] pt-[90px] ' id='Features' >
<h1 className='font-Figerona text-center lg:text-5xl md:text-5xl text-4xl mb-[50px] '>
FEATURES
</h1>
<div className='flex sm:justify-start justify-center items-center'>

<div className='lg:flex  pt-14'>
  {
    cards.map((cards,index)=>(
      <div className={`p-10 pb-10 box
      hover:lg:bg-white hover:shadow-md hover:lg:shadow-red-500 rounded-xl hover:lg:text-black 
      ${index===cards.length-1 ? 'mr-[0px] ':'mr-[40px] ' }`}>        
      <img src={cards.img} alt={cards.img} className='w-[180px] h-[180px] '/>
        <h1 className='mt-8 font-Figerona text-[25px]  '> {cards.title} </h1>
      <p className='text-gray-400 lg:max-w-[180px] max-w-[200px] '>{cards.text} </p>
    </div>
    ))
  }
  </div>

</div>


    </section>
  )
}
