import React from 'react'
import Navbar from '../Components/Navbar'
import { BiSolidTorch } from "react-icons/bi";
import { TfiArrowTopRight } from "react-icons/tfi";
import Girl from "../assets/girl.jpeg"
const Home = () => {
  return (
   <>
   <Navbar/>
   <section className='h-screen bg-gradient-to-r from-[#1f140d] to-[#2b180c] w-full '>
    <div className='h-full w-full border-2 border-white flex justify-between  '>
        <div className='h-96 w-[50%]  mt-20 ml-10'>
          <div className='flex gap-2'>
            <BiSolidTorch className='text-[#dd7109] font-bold ml-2 mt-1'/>
              <p className='uppercase font-bold text-[#dd7109] px-2'>take your bussiness</p>
             
          </div>
           <p className='uppercase font-bold text-6xl text-white font-sans '>boost your online</p>
            <p className='uppercase font-bold text-6xl text-white font-sans py-4 '>presence today !</p>
            <p className='text-xl text-gray-400 font-semibold font-sans'>Let's transform your online potential into measurable growth !</p>
           <a
  href="#"
  className="flex items-center justify-center gap-2 uppercase font-semibold text-sm text-white bg-[#dd7109] px-6 py-3 rounded-full w-fit hover:bg-[#c55e05] transition duration-300"
>
  Learn More
    <TfiArrowTopRight className='text-white'/>
</a>

        </div>
        <div className='h-full w-[50%] border-2 border-white '>
            {/* <img src={Girl} alt="" className='h-full' /> */}
        </div>
    </div>
   </section>
   </>
  )
}

export default Home
