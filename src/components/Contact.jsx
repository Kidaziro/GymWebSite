import React from 'react'

export const Contact = () => 
   {
const style = 'p-2 lg:w-[350px] md:w-[350px] sm:w-[350px] w-[320px] mb-5 rounded-md bg-[#252525]'
       return(
           
           <section className='flex justify-center items-start pb-10' id='Contact'>
        <div className=''>
            <h1 className='font-Figerona text-center lg:text-5xl md:text-5xl text-4xl mb-[50px] ' > CONTACT US </h1>

            <input type="text" name="fn" id="fn" 
            className={style}
            placeholder='Full Name' />
            <br/>
            <input type="email" name="em" id="email" 
            className={style} placeholder="Email Address"/>
            <br/>
            <textarea 
            className={style} placeholder="Write Your Message ..."
            name="" id="" cols="30" rows="10"></textarea><br/>
        <div className='w-full '>
            <p className='text-center'>
            <a href="#" class="bg-black-gradient
             text-white lg:px-[120px] md:px-[120px] sm:px-[120px] px-[100px]  py-3 rounded-md  leading-[40px] 
             
             ">
                SEND MESSAGE</a>
            </p>
        </div>      
        
        </div>
        

    </section>
  )
}

