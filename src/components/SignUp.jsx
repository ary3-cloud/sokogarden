import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  //initialize the hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  //initialize other hooks
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  //function to send out data to the server
  const submit=async(e)=>{

    e.preventDefault()

    setLoading("please wait.....")
    try {

      const data=new FormData()
    
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)
      
      //calling the API
      const response= await axios.post("  http://mary.alwaysdata.net/api/signup",data)

      setLoading("")

      setSuccess(response.data.message)

      //reset your form
      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")


    } catch (error) {

      setLoading("")
      setError(error.message)
 
    }


      


  }
  return (
    <div className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6'>
       <form action="" onSubmit={submit}>
        <h1>Sign Up</h1>

        {username}
        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>

       <input type="text" placeholder='Enter your username' className='form-control'required value={username} onChange={(e)=>setUsername(e.target.value)} />
       <br />
       
       {email}
       <input type="email" placeholder='Enter your email' className='form-control'required value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <br />
       
       {phone}
        <input type="tel" placeholder='Enter your phone number'className='form-control'required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
       <br />
       
       {password}
        <input type="password"placeholder='Enter your password'className='form-control'required value={password} onChange={(e)=>setPassword(e.target.value)}/>
       
       <br />

       <input type="submit"value='SignUp' className='bg-info w-100 form-control text-white'required/>
       
       <p>Already have an account? <Link to="/signin">Sign in</Link></p>


       </form>
      </div>
        
        
        
    </div>
   
  )

}

export default SignUp