import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'

const About = () => {
  const [formData,setFormData] = useState({
    FullName:"",
    Email:"",
    Mobile:"",
    Password:""
  })
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(true)
  console.log(formData)

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(handleChange)

  // const handleSubmit= async(e)=>{
  //   e.preventDefault()

  //   if(!formData.FullName || !formData.Email || !formData.Mobile || !formData.Password){
  //     console.log("something went wrong")
  //   }
  //   try{
  //       const response = await axios.post()
  //   }catch(error){
  //     setError(true)
  //     setLoading(false)
  //   }
  // }
  return (
    <>
      <Navbar />

      
    </>
  )
}

export default About
