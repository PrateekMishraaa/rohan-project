import React from 'react';
import Navbar from '../Components/Navbar';
import One from "../assets/team.jpg" // (or import individually as before)
import { useNavigate } from 'react-router-dom';
import Two from "../assets/team2.jpg"
import Three from "../assets/team3.jpg"
import Four from "../assets/team4.jpg"
import Five from "../assets/team5.jpg"
import Six from "../assets/team6.jpg"
import Seven from "../assets/team7.jpg"
import Eight from "../assets/team8.jpg"

const About = () => {
  const navigate = useNavigate();

  const member = [
    {
      image: One,
      name: "Micheal Brown",
      position: "Chief Executive Officer",
      route: "/about/micheal-brown" // renamed from Navigate to route
    },
    {
      image: Two,
      name: "William Young",
      position: "Link Building Specialist"
    },
    {
      image: Three,
      name: "Amrelia Robinson",
      position: "Content SEO Strategist"
    },
    {
      image: Four,
      name: "Ava Martinez",
      position: "Technical SEO Expert"
    },
    {
      image: Five,
      name: "Sophia Miller",
      position: "SEO Manager"
    },
    {
      image: Six,
      name: "Noah Wright",
      position: "Marketing Manager"
    },
    {
      image: Seven,
      name: "Ava Campbell",
      position: "Social Media Manager"
    },
    {
      image: Eight,
      name: "Alex Johnson",
      position: "PPC Specialist"
    }
  ];

  return (
    <>
      <Navbar />
      {/* Header */}
      <section className='h-96 w-full bg-[#140d09] flex items-center'>
        <div className='px-20'>
          <p className='text-white font-bold text-5xl'>Our Team</p>
          <p className='text-white font-sans font-semibold text-sm py-4 px-2'>
            <a href='/' className='text-sm text-orange-600 font-sans'>Home</a> / Our Team
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className='w-full py-20 px-10 bg-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {member.map((item, index) => (
            <div
              key={index}
              onClick={() => item.route && navigate(item.route)}
              className={`bg-[#f6f4f1] shadow-lg rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition duration-300 ${item.route ? 'hover:bg-orange-50' : ''}`}
            >
              <img src={item.image} alt={item.name} className='w-full h-56 object-cover rounded-xl mb-4' />
              <h2 className='text-lg font-bold'>{item.name}</h2>
              <p className='text-sm text-gray-600'>{item.position}</p>
              {item.route && (
                <p className='text-sm text-orange-600 mt-2 underline'>Click to know more</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
