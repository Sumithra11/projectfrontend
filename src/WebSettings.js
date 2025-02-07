import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import wall1 from  "../src/images/wall1.jpg"

function WebSettings() {
  const[data,setData]=useState(0)
  const[name,setName]=useState('HTML')
  console.log(name)
  console.log(data);
  const handleIncrement = () =>{
    setData(data + 1)
  }
  const handleDecrement = () =>{
     setData(data-1)
  }
  return (
    <div>
      <h1>settings</h1>
      <br></br>
      <Link to="/dashboard">
      <button>go to Dashboard</button>
      </Link>
      <br></br>
      <label>{data}</label>
      <br></br>
      <label>{name}</label>
      <br></br>
      <br></br>
      <button onClick={handleIncrement}>add increment function</button>
      <br></br>
      <br></br>
      <button onClick={handleDecrement}>add Decrement function</button>

      <br></br>
      <br></br>
      <img src={wall1}/>
    </div>
  )
}

export default WebSettings
