import React, { useState } from 'react'
import { GiMuscleUp } from "react-icons/gi";
export const Button = (props) => {
    const [stat, setstat] = useState(false);
  return (
    <div  className={props.style}
     onMouseEnter={()=> setstat(!stat)} onMouseLeave={()=> setstat(!stat)}
     >

    <a href='#Contact' className={`
    
     sm:animate-bounce
     md:animate-none
     lg::animate-none
     animate-bounce
     text-2xl
     lr:pt-10 pt-4 px-12 pb-3 font-Figerona
     font-bold rounded-xl
     ${stat ?' cursor-pointer lg:bg-none bg-gradient-to-r from-red-700 to-[#ff0000]':'bg-gradient-to-r from-red-700 to-[#ff0000] lg:cursor-default' }
     place-items-center
     `}>
<span className={`${stat ?' lg:hidden visible':'visible'}  px-10`}>
     {props.name}           
</span>

     </a>
<a href="#Contact"
className={`
flex justify-center 
text-7xl absolute top-0
lg:${stat ?'visible':'hidden' } visible
cursor-pointer 
animate-ping
`}
>

     <GiMuscleUp />
     </a>
     

    
    </div>
  )
}
