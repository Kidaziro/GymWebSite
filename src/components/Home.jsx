import React from 'react'
import { hero } from "../images";
import { Button } from './Button'

export const Home = () => 
  (
    <div className='flex justify-center items-start bg-black' id='Home' >
        <img src={hero} alt="hero" className='w-full max-w-[1500px] sm:h-[690px] lg:h-[720px] md:h-[720px] h-[695px] '/>

        <div className='red__gradient z-[0] w-full max-w-[1000px] sm:h-[500px] lg:h-[500px] md:h-[500px] h-[400px] absolute'/>

        <h1 className='font-Storm text-white text-[60px]
        lg:text-[100px] md:text-[100px] absolute top-[200px] md:top-[250px] sm:top-[250px] w-full text-center
         lg:leading-[100px] md:leading-[100px] '>
        
          Step up your <br className=''/> <span className='text-[#ff0000]'>Fitness</span> with us 
        
        </h1>
        <Button name='JOIN NOW' style =' flex justify-center 
    w-full items-center text-center absolute mt-[410px] lg:mt-[500px] 
    md:mt-[500px] sm:mt-[450px] h-[60px]' />
        <h2 className='
        font-Eminor text-white lg:text-[30px] md:text-[30px] text-[23px] absolute lg:top-[600px] md:top-[600px] sm:top-[550px] 
         top-[500px]  w-full text-center '
        >
            Build your body And Fitness With <br className=''/> professional Touch
        </h2>
          
    </div>
  )

