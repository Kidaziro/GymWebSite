import React, { useEffect, useState } from 'react'
import { BsChevronDoubleUp } from "react-icons/bs";

export const Totop = () => {
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
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: -1, 
        behavior: 'smooth'
        
      });
      
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    
    <div className={`
    w-full 
    flex justify-end items-end
    top-[90%] fixed z-[1] ${visible ? 'none' : 'hidden'}`}>
            <BsChevronDoubleUp className='text-[50px] cursor-pointer animate-bounce' 
             onClick={scrollToTop} 
            />
    </div>
  )
}
