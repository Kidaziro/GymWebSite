import { useState } from "react";
import {navLinks} from ".."
import { close, logo, menu } from "../images";


export const Navbar = () => 

{    

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    window.addEventListener('scroll', toggleVisible);


    const [toggel, setToggel] = useState(false);
    
    return(
    
    <nav className={`
    uppercase
     items-center 
    flex text-right justify-between lg:pb-7 md:pb-7 sm:pb-7  pb-1 pt-0 
    ${visible ? 'bg-black ' : 'bg-none'}
hover:lg:shadow-red-600 hover:md:shadow-red-600 hover:shadow-xl border-b-2 border-white fixed w-full z-[1]`}>

    <img className="
    lg:ml-20
    md:ml-20
    sm:ml-5
    ml-5
    
    w-[80px] h-[70px]" src={logo} alt="logo" />
    <ul className=" sm:block md:block lg:block hidden align-text-top">

{
    navLinks.map((navLinks ,index)=>(
        <li className={`inline-block  cursor-pointer  font-semibold mt-10 hover:text-[#ff0000]  
        lg:px-10 md:px-6  px-5   
        hover:animate-pulse 
        ${index !==navLinks.length -1 ? 'mr-[2px] ' : 'mr-0' }`} key={navLinks.title} >
        <a href={`#${navLinks.title}`}>
            {navLinks.title}
            </a>    
        
        </li>
        ))
}


    </ul>
    <div className='sm:hidden flex flex-1 justify-end items-center '>
    <img src={toggel ? close :menu} 
    alt="menu"
   className='w-[28px] h-[28px] object-contain cursor-pointer mr-3 flex'
   onClick={ ()=>setToggel((prev)=>
    !prev
    )}
   />

<div className={`${toggel ? 'flex':'hidden'} 
      p-6 bg-black-gradient  top-20 right-0 mx-4 my-2 min-w-[140px]  
      rounded-xl sidebar absolute z-[1]`}>
<ul className='list-none flex justify-end flex-col
items-center flex-1'>
{navLinks.map((nav,index)=>(
  <li key={nav.id} className={`hover:text-[#ff0000] font-poppins font-normal 
  cursor-pointer text-[16px]  
  ${index===navLinks.length-1 ? 'mr-0' : 'mb-4'}`} >
    
<a href={`#${nav.title}`} onClick={ ()=>setToggel((prev)=>
    !prev
    )}>
  {nav.title}
  
</a>
  </li>
))}
</ul>

      </div>



    </div>


    
    </nav>
  )
}
  
  