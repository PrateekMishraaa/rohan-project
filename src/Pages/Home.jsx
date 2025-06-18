import React from 'react'
import Navbar from '../Components/Navbar'
import { BiSolidTorch } from "react-icons/bi";
import { TfiArrowTopRight } from "react-icons/tfi";
 import Girl from "../assets/girl2.png"
import styled from 'styled-components';
import { FaBullhorn, FaRocket, FaCode, FaProjectDiagram } from "react-icons/fa";
import Footer from '../Components/Footer';
import { IoDocumentAttach } from "react-icons/io5";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Home = () => {
  const ContentMarketing =[
    {
        icon: <IoDocumentAttach/>,
        title:"Content Marketing",
        description:"Content Marketing isn't about connection.By help into loyal customers."
    },
    {
      icon:<FaRocket/>,
      title:"SEO Optimization",
      description:"We optimize every click, every keyword,and every page to a brand of search results."
    },
    {
      icon:<FaMagnifyingGlass/>,
      title:"Analytics & Report",
      description:"our analytics and reporting, you'll gain a clear picture of your the opportunities to grow."
    },
    {
      icon:<FaLightbulb/>,
      title:"Brand Strategy",
      description:"Your Brand's Journey Starts with a powerful strategy aligns vision with impact your unique story."
    },
    {
      icon:<IoIosSettings/>,
      title:"Influencer Marketing",
      description:"Turn influence into impact of with influencer marketing, We connect and your driving and brand"
    }
  ]
  const cardData = [
    {
      dataNum: "127k",
      salesPercentage: "75%"
    }
  ];
  const steps = [
    {
      id: "01",
      title: "Competitor analysis and keyword research",
      icon: <FaBullhorn size={30} className="text-[#DD7109]" />,
    },
    {
      id: "02",
      title: "Craft a tailored SEO and digital plan",
      icon: <FaRocket size={30} className="text-[#DD7109]" />,
    },
    {
      id: "03",
      title: "Optimize your website for search engines",
      icon: <FaCode size={30} className="text-[#DD7109]" />,
    },
    {
      id: "04",
      title: "Focus on long-term success & sustainable growth",
      icon: <FaProjectDiagram size={30} className="text-[#DD7109]" />,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-r from-[#1f140d] to-[#2b180c] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-10 gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <BiSolidTorch className="text-[#dd7109] text-xl" />
              <p className="uppercase font-bold text-[#dd7109]">take your business</p>
            </div>
            <h1 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl text-white font-sans">
              boost your online
            </h1>
            <h2 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl text-white font-sans py-4">
              presence today!
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-semibold">
              Let's transform your online potential into measurable growth!
            </p>
            <a
              href="#"
              className="flex items-center justify-center gap-2 uppercase font-semibold text-sm text-white bg-[#dd7109] px-6 py-3 mt-8 rounded-full w-fit hover:bg-[#c55e05] transition duration-300"
            >
              Learn More
              <TfiArrowTopRight className="text-white" />
            </a>
            <div className='relative'>

            <StyledWrapper>
              <div className="loader absolute right-20 " />
            </StyledWrapper>
            </div>
          </div>

          {/* Right Content (Image Section) */}
          <div className="w-full lg:w-1/2 flex justify-center ml-28">
            <img src={Girl} alt="Girl" className="rounded-xl w-full max-w-md object-cover hidden sm:block " />
          </div>
        </div>

        {/* Card Section */}
        <div className="max-w-xs mx-auto -mt-24 bg-white rounded-2xl shadow-2xl p-2 mb-20 border border-gray-200 text-center">
  {cardData.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      {/* Circular Progress */}
      <div className="relative w-28 h-28 mb-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-[#dd7109]"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${item.salesPercentage.replace('%', '')}, 100`}
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text
            x="18"
            y="20.35"
            className="text-[#dd7109] text-sm"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            {item.salesPercentage}
          </text>
        </svg>
      </div>

      {/* Sales Info */}
      <p className="text-black text-4xl font-extrabold tracking-wide">{item.dataNum}</p>
      <p className="text-gray-600 text-base mt-2">Total Sales Achieved</p>
    </div>
  ))}
</div>
<section className="min-h-screen w-full bg-[#faf0e6] py-10">
  {/* Heading Section */}
  <div className="w-full flex flex-col items-center justify-center text-center mb-12">
    <p className="uppercase font-semibold text-sm text-[#DD7109] mb-2">How it works</p>
    <h2 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl font-sans max-w-4xl leading-tight">
      Our Step-by-Step Marketing Process
    </h2>
  </div>

  {/* Placeholder for Next Content */}
  <section className="bg-[#faf0e6] py-16 px-4 h-screen w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-14 gap-x-10">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%]">
            {/* Connector Curve */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 right-[-50%] w-full h-24 border-t-2 border-r-2 rounded-tr-full border-[#DD7109] z-0"></div>
            )}

            {/* Circle Icon */}
            <div className="bg-white shadow-md rounded-full h-28 w-28 flex items-center justify-center z-10 mb-4">
              {step.icon}
            </div>

            {/* Step Number */}
            <p className="text-xl font-bold text-[#DD7109] mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#DD7109] to-orange-300">{step.id}.</span>
            </p>

            {/* Title */}
            <p className="text-black font-medium text-sm md:text-base px-2">
              {step.title}
            </p>
          </div>
        ))}
      </div>
       <section className="bg-[#faf0e6] py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 relative">
            <img src={Girl} alt="About Us" className="rounded-lg shadow-lg w-full" />
            <div className="absolute bottom-[-20px] left-4 bg-[#dd7109] rounded-xl shadow-md p-6 text-white w-72">
              <p className="text-4xl font-bold">$777.6</p>
              <p className="text-lg font-light">Helped 4k businesses achieve top rankings</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <p className="uppercase text-[#DD7109] font-semibold mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Driving Growth With Our Expertise And Passion</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At the core of our journey lies a commitment to driving growth fueled by a combination of expertise and passion...
            </p>
          </div>
        </div>
      </section>

     <section className="min-h-screen w-full bg-[#100a08] px-10 py-16">
  <div className="h-full w-full">
    <p className="uppercase text-orange-500 font-semibold text-center mb-12">
      Our Services
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {ContentMarketing.map((item, index) => (
        <div
          key={index}
          className="h-[300px] rounded-2xl bg-[#2e2119] text-white p-6 shadow-lg hover:border hover:border-[#b66111] transition-all duration-300"
        >
          <div className="text-4xl text-[#b66111] mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2 hover:text-[#b66111] cursor-pointer transition">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


    </section>
{/* <StyledWrapperr>
      <div className="rocket cursor-pointer">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </StyledWrapperr> */}
</section>

      </section>
     <div className='relative top-290'>
     <Footer />
     </div>
    </>
  );
};
const StyledWrapperr = styled.div`
  .rocket {
    position: absolute;
    top: 100%;
    right: 40px
    width: 80px;
    left: calc(50% - 40px);
  }

  .rocket .rocket-body {
    width: 80px;
    left: calc(50% - 50px);
    animation: bounce 0.5s infinite;
  }

  .rocket .rocket-body .body {
    background-color: #dadada;
    height: 120px;
    left: calc(50% - 50px);
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid #f5f5f5;
  }

  .rocket .rocket-body:before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 13px;
    background-color: #554842;
    bottom: -13px;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }

  .rocket .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #a75248;
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid #b4b2b2;
  }

  .rocket .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: #a75248;
  }

  .rocket .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  .rocket .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  .rocket .exhaust-flame {
    position: absolute;
    top: 90%;
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    height: 150px;
    left: calc(50% - 14px);
    animation: exhaust 0.2s infinite;
  }

  .rocket .exhaust-fumes li {
    width: 60px;
    height: 60px;
    background-color: #f5f5f5;
    list-style: none;
    position: absolute;
    border-radius: 100%;
  }

  .rocket .exhaust-fumes li:first-child {
    width: 200px;
    height: 200px;
    bottom: -300px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(2) {
    width: 150px;
    height: 150px;
    left: -120px;
    top: 260px;
    animation: fumes 3.2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(3) {
    width: 120px;
    height: 120px;
    left: -40px;
    top: 330px;
    animation: fumes 3s 1s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(4) {
    width: 100px;
    height: 100px;
    left: -170px;
    animation: fumes 4s 2s infinite;
    top: 380px;
  }

  .rocket .exhaust-fumes li:nth-child(5) {
    width: 130px;
    height: 130px;
    left: -120px;
    top: 350px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(6) {
    width: 200px;
    height: 200px;
    left: -60px;
    top: 280px;
    animation: fumes2 10s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(7) {
    width: 100px;
    height: 100px;
    left: -100px;
    top: 320px;
  }

  .rocket .exhaust-fumes li:nth-child(8) {
    width: 110px;
    height: 110px;
    left: 70px;
    top: 340px;
  }

  .rocket .exhaust-fumes li:nth-child(9) {
    width: 90px;
    height: 90px;
    left: 200px;
    top: 380px;
    animation: fumes 20s infinite;
  }

  .star li {
    list-style: none;
    position: absolute;
  }

  .star li:before, .star li:after {
    content: '';
    position: absolute;
    background-color: #f5f5f5;
  }

  .star li:before {
    width: 10px;
    height: 2px;
    border-radius: 50%;
  }

  .star li:after {
    height: 8px;
    width: 2px;
    left: 4px;
    top: -3px;
  }

  .star li:first-child {
    top: -30px;
    left: -210px;
    animation: twinkle 0.4s infinite;
  }

  .star li:nth-child(2) {
    top: 0;
    left: 60px;
    animation: twinkle 0.5s infinite;
  }

  .star li:nth-child(2):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(2):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  .star li:nth-child(3) {
    left: 120px;
    top: 220px;
    animation: twinkle 1s infinite;
  }

  .star li:nth-child(4) {
    left: -100px;
    top: 200px;
    animation: twinkle 0.5s ease infinite;
  }

  .star li:nth-child(5) {
    left: 170px;
    top: 100px;
    animation: twinkle 0.4s ease infinite;
  }

  .star li:nth-child(6) {
    top: 87px;
    left: -79px;
    animation: twinkle 0.2s infinite;
  }

  .star li:nth-child(6):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(6):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }

    51% {
      transform: scale(0.8);
    }

    100% {
      background-color: #f5f5f5;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }

    50% {
      transform: translate3d(0px, -4px, 0);
    }

    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @keyframes exhaust {
    0% {
      background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    }

    50% {
      background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%);
    }

    75% {
      background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%);
    }
  }

  @keyframes fumes2 {
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes twinkle {
    80% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }`;

const StyledWrapper = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    background: #fff;
    display: block;
    margin-top: 20px;
    position: relative;
    box-sizing: border-box;
    animation: rotationBack 1s ease-in-out infinite reverse;
  }

  .loader::before {
    content: '';
    box-sizing: border-box;
    left: 0;
    top: 0;
    transform: rotate(45deg);
    position: absolute;
    width: 48px;
    height: 48px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .loader::after {
    content: '';
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgb(0, 0, 0);
    transform: translate(-50%, -50%);
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default Home;
