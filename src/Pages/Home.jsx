import React from 'react'
import Navbar from '../Components/Navbar'
import { BiSolidTorch } from "react-icons/bi";
import { TfiArrowTopRight } from "react-icons/tfi";
 import Girl from "../assets/girl2.png"
import styled from 'styled-components';
import { FaBullhorn, FaRocket, FaCode, FaProjectDiagram } from "react-icons/fa";
import Footer from '../Components/Footer';
const Home = () => {
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
      <div className="w-full bg-white py-16 px-4 ">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Left Image & Box */}
    <div className="w-full lg:w-1/2 relative">
      <img src={Girl} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
      <div className="absolute bottom-[-40px] left-8 h-40 w-72   bg-[#dd7109] rounded-xl shadow-md">
        <p className='text-5xl font-bold text-white px-14 py-4'>$777.6</p>
        <p className='text-2xl font-light mb-4 text-white px-4'>Helped 4k of bussiness achieve top rankings</p>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 text-left">
      <p className="uppercase text-[#DD7109] font-semibold mb-2">About Us</p>
      <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-4">
        Driving Growth With Our Expertise And Passion
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
        At the core of our journey lies a commitment to driving growth fueled by a combination of expertise and passion. 
        We believe growth is not just about numbers – it's about creating meaningful impact, fostering innovation, and 
        building relationships that last. Our team brings a wealth of knowledge, experience, and dedication to every project.
      </p>
    </div>
  </div>
</div>

    </section>

</section>

      </section>
     <div className='relative top-180'>
     <Footer />
     </div>
    </>
  );
};

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
