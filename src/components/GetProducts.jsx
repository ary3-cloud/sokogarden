import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const GetProducts = () => {

//initialize your hooks
const [loading,setLoading]=useState("")
const [error,setError]=useState("")
const [products,setProducts]=useState([])
const navigate=useNavigate()


//a variable to store our images
const img_url="http://mary.alwaysdata.net/static/images/"

//function to fetch our produts from the api

const fetchproducts=async(e)=>{
setLoading("please wait as we retreve your products")


try {

  //call your api
const response=await axios.get("  http://mary.alwaysdata.net/api/getproductdetails")

setProducts(response.data)
console.log('the response',response)
setLoading("")
  
} catch (error) {
  setLoading("")
  setError(error.message)
}









}

//end of the function where we call our useEffect

useEffect(()=>{
  fetchproducts()
},[])

  return (
    <div className='row'>
      <h1>Available Products</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

{/* mapping through the products */}
    {products.map((product)=>(

     
      

      <div className='col-md-3 justify-content-center '>
        <div className='card shadow mt-3'>

          <img src={img_url+product.product_photo } alt="cake" className='product_img ' />

          <div className='card-body mb-3'>
            <h3 className='text-success'>{product.product_name}</h3>
            <p className='text-primary'>{product.product_description}</p>
            <b className='text-warning'>{product.product_cost}</b>

            <br />
            <input type="buttion" value="purchase Now" className='btn btn-info w-100'onClick={()=>navigate("/mpesa" ,{state:{product}})}/>

          </div>

        </div>

      </div>

    ))}
 
    </div>
  )
}

export default GetProducts