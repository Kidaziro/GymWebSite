import React from 'react'
import { about } from '../images'
import { Button } from './Button'

export const About = () => {
  return (
    <section className='mt-[150px]
    sm:py-16 py-6 flex justify-center items-center flex-col relative
    ' id='About'>

        <div className='lg:flex md:flex-row flex-col sm:py-16 py-6'>
                <img src={about} alt="about" className='w-[450px] h-[450px]' />
        
        <div className='lg:pl-[100px] md:pl-[30px] sm:pl-[24px] pl-4 lg:mt-32'> 
            
        <h1 className='lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px]  font-Storm text-[#ff0000]'>
            LEARN MORE ABOUT US 
        </h1>
        <p className='w-[400px] font-Figerona max-w-[350px] '>
        Lorem ipsum dolor sit,amet consectetur adipisicing
elit.Facere repellat necessitatibus dolor ut nesciunt
hic ipsum laboriosam soluta?Fugit,soluta culpa
possimus facere fugiat assumenda?
        </p>
        <a href="#" class="bg-black-gradient text-white px-4 py-3 rounded  leading-[55px] ">
        READ MORE
        </a>
        <div class="w-[70%] h-[70%] rounded-full red__gradient"/>
        </div>
        
        </div>

    </section>
  )
}
