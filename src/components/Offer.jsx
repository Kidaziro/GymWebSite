import React from 'react'
import { offer } from '../images'
import { Button } from './Button'

export const Offer = () => 
   (
    <section className='flex justify-center items-start lg:mt-[150px] md:mt-[150px] mt-[50px] ' id='Offer'>
    
        <img src={offer} alt="offer" className='w-full max-w-[1500px] 
        sm:h-[690px] lg:h-[720px] md:h-[720px] h-[500px] ' />
        
        
        
        <h1 className='font-Storm text-white 
        lg:text-[100px] md:text-[100px] sm:text-[70px] text-[50px] absolute  w-full text-center leading-[70px] 
         lg:leading-[100px] md:leading-[100px] lg:mt-[200px] md:mt-[200px] sm:mt-[200px] mt-[150px] '>
            
             A BIG <span className='text-[#ff0000] '>OFFER</span> FOR <br/> THIS SUMMER</h1>
<p className='absolute  lg:mt-[420px] md:mt-[420px] sm:mt-[380px] mt-[330px] font-Figerona  
lg:text-[20px] md:text-[20px] sm:text-[16px] text-[15px] '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            
             <Button  name='JOIN NOW' style =' flex justify-center 
    w-full items-center text-center absolute mt-[410px] lg:mt-[500px] 
    md:mt-[500px] sm:mt-[450px] h-[60px]'/>
    </section>

  )

