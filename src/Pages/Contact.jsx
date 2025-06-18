import React from 'react'
import Navbar from '../Components/Navbar'
import { IoLocationSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { IoAlarmOutline } from "react-icons/io5";
const Contact = () => {
  const address = [
    {
      icon: <IoLocationSharp />,
      Name: "Office Address",
      location: "132, Tic St, Kingdom, New York 12401 USA.",
      description: "We're passionate about helping bussiness succeed in the digital space",
    },
    {
      icon: <BiSupport />,
      Name: "24/7 Customer Support",
      location: "+(528) 456-752, info@example.com",
      description: "We’re passionate about helping businesses succeed in the digital space."
    },
    {
      icon: <IoAlarmOutline />,
      Name: "Bussiness Hours",
      location: "Sat- Mon 10 am- 8 pm Fri Off-Day",
      description: "We’re passionate about helping businesses succeed in the digital space."
    }
  ]
  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full p-4'>
        <div className='h-72 w-full  flex justify-between gap-4 p-10'>
          {
            address.map((item,index)=>{
                return(
                  <div key={index} className='h-full w-full border-2 rounded-3xl p-4'>
                    <p className='text-5xl hover:text-orange-500 transition cursor-pointer font-bold'>{item.icon}</p>
                    <p className='text-2xl font-semibold'>{item.Name}</p>
                    <p className='py-4 text-slate-800'>{item.location}</p>
                    <p className=' text-slate-800'>{item.description}</p>
                  </div>
                )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Contact
