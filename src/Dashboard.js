import React, { useEffect } from 'react'
import './Dashboard.scss'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";



function Dashboard() {
  
useEffect(()=>{
  let a=localStorage.getItem("username")
  toast.success("welcome to dashboard "+a);
},[])



const[inputvalue1,setInputvalue1]=useState("")
    const[inputvalue2,setInputvalue2]=useState("")
    const handleSubmit =() =>{
      console.log(inputvalue1,inputvalue2);
                if(inputvalue1===''){
                    toast.error("please enter your username")
                  }
                  else{
                    localStorage.setItem("username",inputvalue1)
                    toast.success("username saved successfully")
                  }
                  if(inputvalue2===''){
                      toast.error("please enter your password")
                    }
                    else if(inputvalue2.length<=6)
                    {
                      toast.error("the password must be atleast lessthan 6 characters")
                    }
                    else{
                      localStorage.setItem("password",inputvalue2)
                      toast.success("password saved successfully")
                    }
                                      
            }
        



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <h1 className='dash'>this is dashboard</h1>
      <br></br>
      <label>user name</label>
    <input type="text"
    value={inputvalue1}
    onChange={(e)=>setInputvalue1(e.target.value)}/><br/>
    <br></br>

    <label>password</label>
    <input type="password"
    value={inputvalue2}
    onChange={(e)=>setInputvalue2(e.target.value)}/><br/>
    <br></br>
    <br></br> 
    <button onClick={handleSubmit}>submit</button>
    <br></br>
    <br></br> 
    <label>{inputvalue1}</label>
    <label>{inputvalue2}</label>
    <br></br>
    <br></br>      
      <Link to="/websettings">
      <button>go to websettings</button>
      </Link>
      <Footer/>
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      
    </div>
  )
}

export default Dashboard
