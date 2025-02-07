import React,{useState} from 'react'
import wall3 from "../src/images/wall3.jpg"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'



function Login() {
    const[inputValue1, setInputValue1]=useState("");
    const[inputValue2, setInputValue2]=useState("");

    
    

    const handleSubmit = () =>{
        console.log(inputValue1);
        console.log(inputValue2);
        
        if(inputValue1===''){
            //alert("Please enter username")
            toast.error("Please enter username")
        }
        else{
          toast.success("ok")
        }
        if(inputValue2===''){
          toast.error("Please enter password")
        }
        else if(inputValue2.length<5){
          toast.error("password should be more than 5 characters ");
        }
        else{
          toast.success("ok")
        }
    }
  return (
    <div
    style={{
        backgroundImage: `url(${wall3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    > 
    <ToastContainer/>
      <label>UserName</label>
      <input
      type="text"
      value={inputValue1}
      onChange={(e) => setInputValue1(e.target.value)}/>
      <br>
      </br>
      <br>
      </br>
      <label>Password</label>
      <input
      type="password"
      value={inputValue2}
      onChange={(e) => setInputValue2(e.target.value)}/>
      <br>
      </br>
      <br>
      </br>
      <Link to="/websettings">
      <button onClick={handleSubmit}>Submit</button>
      </Link>
      <br></br>
      <label>{inputValue1}</label>
      <label>{inputValue2}</label>
    </div>
  )
}

export default Login
