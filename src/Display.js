import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './Display.css';
import { useState } from 'react';


function Display() {
  const[show,setShow]= useState(true)

  const handlebar = () =>{
    setShow(!show)
  }
  return (
    <div class='cl'> 
        <IoIosArrowDroprightCircle class="icons" onClick={handlebar} />
        
        
        {show?
        <div className='wrap'>
        <label>home</label>
        <label>shop</label>
        <label>about</label>
        <label>project</label>
        <label>skills</label>

        </div>
        :null}
      
    </div>
  )
}

export default Display
