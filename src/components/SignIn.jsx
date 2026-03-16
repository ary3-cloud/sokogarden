import axios from 'axios'
import React, { useState } from 'react'
import{Link, useNavigate} from "react-router-dom"


const SignIn = () => {
//initializing the hooks
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  //initializing other hooks
  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

  const navigate = useNavigate();

  //function to send data
  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait....")

    //add data to form data objects
    try {
      const data=new FormData()

      data.append("email",email)
      data.append("password",password)

      //calling our api
      const response=await axios.post("http://mary.alwaysdata.net/api/signin",data)

      setLoading("")//after successfuly posting,clear the loading message

      //check if the response has user items

      if (response.data.user){
        // if user is found, store user detailes in localstorage
        localStorage.setItem("user",JSON.stringify(response.data.user));
       setSuccess(response.data.message);

       //redirect to / getproducts component

       setTimeout(()=>{

        navigate("/");
       },2000)
       
      }
      else {
        //user not found,show error message
        setError(response.data.message)
      }

      //reset your form
      setEmail("")
      setPassword("")

     //if there was an error ,clear loading
    } catch (error) {
      setLoading("");
      setError(error.message);

    }
  };
  
  
  return (
    <div className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6'>

        <form action=""onSubmit={submit}>
          <h1>Sign In</h1>

         <p className='text-warning'>{loading}</p>
         <p className='text-success'>{success}</p>
         <p className='text-danger'>{error}</p>

          <input type="email" placeholder='Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />

          <input type="password" placeholder='Password'className='form-control' required value={password}onChange={(e)=>setPassword(e.target.value)}/>
          <br />

          <input type="submit" value="Sign In" className='bg-info text-white w-100 form-control'required/>
          
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>


      </div>
      

      
    </div>
  )
}

export default SignIn