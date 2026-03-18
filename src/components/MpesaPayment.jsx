import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const MpesaPayment = () => {


  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const[phone,setPhone]=useState("")

  //retreaving the parsed data from getproducts

  const{product}=useLocation().state || {}

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("please wait......")


    try {
       const data=new FormData()
    
       data.append("phone",phone)
       data.append("amount",product.product_cost)

      //calling api
        const response=await axios.post("http://mary.alwaysdata.net/api/mpesa_payment",data)

        setSuccess(response.data.message)

    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  }
  
  return (
    <div className='row justify-content-center'>
       <h1>Make payments-Lipa na mpesa</h1>
       <p className='text-success'>{product.product_name}</p>
       <p className='text-warning'>{product.product_cost}</p>
       <p className='text-secondary'>{product.product_description}</p>
       

       <br /><br />

       <div className='col-md-6'>
        <form action="" onSubmit={submit}>
         
         <p className='text-warning'>{loading}</p>
         <p className='text-success'>{success}</p>
         <p className='text-danger'>{error}</p>

          <input type="tel" className='form-control' placeholder='Enter phone starting with 254'value={phone} onChange={(e)=>setPhone(e.target.value)}/>

          <br />
          <button className='btn btn-secondary  w-100'>Make payments</button>


        </form>

       </div>
    </div>
  )
}

export default MpesaPayment