import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaGlobe, FaBriefcase } from "react-icons/fa";
import Navbar from '../../Components/Navbar';
import axios from "axios"
import One from "../../assets/team.jpg";
import Partner from "../../assets/partner.jpg";
import { useNavigate } from 'react-router-dom';
// Experience Timeline Data
const experienceTimeline = [
    {
        year: "2012-2015",
        description: "There are many variations but the majority have suffered alteration in some form."
    },
    {
        year: "2016-2017",
        description: "There are many variations but the majority have suffered alteration in some form."
    },
    {
        year: "2018-2020",
        description: "There are many variations but the majority have suffered alteration in some form."
    },
    {
        year: "2020-2024",
        description: "There are many variations but the majority have suffered alteration in some form."
    }
];

// Team Description Paragraph
const teamDescription = `
We are truly passionate about your success. Every step we take is guided by our commitment to helping you achieve your goals and aspirations. Whether you’re striving to grow your business, enhance your skills, or overcome challenges, we dedicate ourselves to empowering you with the tools, knowledge, and support you need.

Your success is not just a milestone for you; it’s a reflection of our mission and purpose. We believe in fostering genuine relationships, understanding your unique needs, and delivering tailored solutions that drive results. Our team is fueled by a deep enthusiasm to see you excel, and we take pride in celebrating your victories as if they were our own.

With a focus on collaboration, innovation, and excellence, we go above and beyond to ensure you reach new heights. Challenges are opportunities in disguise, and we’re here to help you navigate them with confidence and clarity. Your journey inspires us to push boundaries and constantly strive for better. Together, we can transform your ambitions into reality.
`;

const MichaelBrown = () => {
    const[data,setData] = useState([])
    const navigate = useNavigate()
    const details = {
        title: "Chief Executive Officer",
        email: "alex@seoinux.com",
        phone: "+(528) 456-7589",
        website: "https://zozothemes.com/",
        experience: "More Than 10+ Years"
    };
const handleNavigate=()=>{
    navigate('/contact-us')
}


useEffect(()=>{
        const fetchData = async()=>{
            try{
                    const response = await axios.get("http://localhost:3000/api/allusers")
                    console.log(response.data)
                    setData(response.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
},[])
    return (
        <>
            <Navbar />

            {/* Header */}
            <section className='h-96 w-full bg-[#140d09] flex items-center'>
                <div className='px-6 lg:px-20'>
                    <h1 className='text-white font-bold text-5xl'>Michael Brown</h1>
                    <p className='text-white text-sm py-4'>
                        <a href='/' className='text-orange-600 hover:underline'>Home</a> / Our Team / Michael Brown
                    </p>
                </div>
            </section>

            {/* Profile Section */}
            <section className='min-h-screen w-full flex flex-col lg:flex-row justify-between items-start px-6 lg:px-10 py-10 gap-10'>
                {/* Profile Image */}
                <div className='w-full lg:w-1/3'>
                    <img src={One} alt="Michael Brown" className='w-full h-[80vh] object-cover rounded-xl shadow-md' />
                </div>

                {/* Profile Details */}
                <div className='w-full lg:w-2/3 bg-white border rounded-xl p-8 shadow-md'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-4'>{details.title}</h2>
                    <div className='space-y-4 text-lg text-gray-700'>
                        <p className='flex items-center gap-2'>
                            <FaEnvelope className='text-orange-600' />
                            <span>Email:</span> <a href={`mailto:${details.email}`} className='text-blue-600 hover:underline'>{details.email}</a>
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaPhone className='text-orange-600' />
                            <span>Phone:</span> <a href={`tel:${details.phone}`} className='text-blue-600 hover:underline'>{details.phone}</a>
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaGlobe className='text-orange-600' />
                            <span>Website:</span> <a href={details.website} target="_blank" rel="noreferrer" className='text-blue-600 hover:underline break-words'>{details.website}</a>
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaBriefcase className='text-orange-600' />
                            <span>Experience:</span> {details.experience}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className='w-full px-6 lg:px-10 pb-10'>
                <div className='mb-10'>
                    <h2 className='font-semibold text-5xl mb-6'>Our Team: Passionate About Your Success</h2>
                    <p className='text-xl text-gray-700 font-sans hover:text-orange-400 cursor-pointer transition whitespace-pre-line'>
                        {teamDescription}
                    </p>
                </div>

                {/* Image and Timeline */}
                <div className='flex flex-col lg:flex-row gap-10'>
                    {/* Partner Image */}
                    <div className='w-full lg:w-1/2 rounded-2xl overflow-hidden'>
                        <img src={Partner} alt="Team Member Working" className='w-full h-[82vh] object-cover rounded-2xl' />
                    </div>

                    {/* Timeline */}
                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-4xl font-semibold mb-6'>Starts with Our Team</h3>
                        {experienceTimeline.map((item, index) => (
                            <div key={index} className='mb-6'>
                                <p className='font-semibold text-xl py-2'>{item.year}</p>
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className='bg-[#f7f7f7] w-full mt-16 py-10'>
                    <div className='w-full px-6 lg:px-[25%] text-center'>
                        <p className='uppercase text-orange-500 mb-2'>Why choose us</p>
                        <p className='text-4xl lg:text-5xl font-bold mb-4'>Achieve Top Rankings With Cutting-Edge SEO Services!</p>
                        <p className='text-xl text-gray-600 mb-6'>We achieve this by scaling impactful businesses. Our focus is on promoting</p>
                        <div className='flex flex-col sm:flex-row justify-center gap-6'>
                            <button onClick={()=>handleNavigate()} className='h-16 cursor-pointer hover:bg-black text-white  transition w-64 border-2 rounded-3xl text-xl uppercase text-white bg-[#dd7109]'>Get Hired</button>
                            <button className='h-16 cursor-pointer hover:bg-black  hover:text-white border-black transition w-64 border-2 border-[#dd7109] rounded-3xl text-xl uppercase text-black'>Hire Us</button>
                        </div>
                    </div>
                </div>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <p>{item.fullName}</p>
                                 <p>{item.EmailAddress}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    );
};

export default MichaelBrown;
