import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { IoLocationSharp, IoAlarmOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
const Contact = () => {
  const [formData,setFormData] = useState({
    Name:"",
    Email:"",
    Phone:"",
    Message:""
  })
console.log(formData)
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  // console.log(handleChange)

const handleSubmit=async(e)=>{
  e.preventDefault()
  if(!formData.Name || !formData.Email || !formData.Phone || !formData.Message){
        toast.error("All fields are required")
  }
  try{
      const response = await axios.post("http://localhost:3000/api/contact",formData,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      console.log(response)
      toast.success("Form has been submitted",response.data)
  }catch(error){
    console.log(error)
    toast.error("Something went wrong")
  }
}

  const address = [
    {
      icon: <IoLocationSharp />,
      Name: "Office Address",
      location: "132, Tic St, Kingdom, New York 12401 USA.",
      description: "We're passionate about helping businesses succeed in the digital space",
    },
    {
      icon: <BiSupport />,
      Name: "24/7 Customer Support",
      location: "+(528) 456-752, info@example.com",
      description: "We’re passionate about helping businesses succeed in the digital space."
    },
    {
      icon: <IoAlarmOutline />,
      Name: "Business Hours",
      location: "Sat - Mon 10 AM - 8 PM | Fri Off-Day",
      description: "We’re passionate about helping businesses succeed in the digital space."
    }
  ];

  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full p-4'>
        {/* Address Cards */}
        <div className='grid md:grid-cols-3 gap-6 p-10'>
          {address.map((item, index) => (
            <div key={index} className='border-2 rounded-3xl p-6 shadow hover:shadow-lg transition duration-300'>
              <p className='text-5xl text-orange-500'>{item.icon}</p>
              <p className='text-xl font-bold mt-4'>{item.Name}</p>
              <p className='text-gray-700 mt-2'>{item.location}</p>
              <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-6 px-10 py-4'>
          <div className='bg-[#f6f4f1] border-2 border-gray-900 rounded-2xl p-6 w-full md:w-1/2'>
            <h2 className='text-3xl font-semibold mb-4'>Free Consultation</h2>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row gap-4'>
                <input
                  type="text"
                  name='Name'
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder='Name'
                  className='h-12 w-full bg-white rounded-xl px-4'
                />
                <input
                  type="text"
                  name='Phone'
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder='Phone'
                  className='h-12 w-full bg-white rounded-xl px-4'
                />
              </div>
              <input
                type="email"
                name='Email'
                value={formData.Email}
                onChange={handleChange}
                placeholder='Email'
                className='h-12 w-full bg-white rounded-xl px-4'
              />
              <textarea
                name="Message"
                rows="4"
                value={formData.Message}
                onChange={handleChange}
                placeholder='Message'
                className='w-full bg-white rounded-xl px-4 py-2'
              />
              <button
                type="submit"
                className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl w-max mt-2'
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right side placeholder */}
          <div className='w-full md:w-1/2 h-[70vh] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-400 text-xl'>
            {/* Replace this div with a map or image if needed */}
            Map / Image Placeholder
          </div>
        </div>
      </section>
      <Toaster/>
    </>
  );
};

export default Contact;
