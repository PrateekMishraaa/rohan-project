import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [togglePassword,setTogglePassword] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    EmailAddress: "",
    Mobile: "",
    Password: ""
  })
  const [loading, seteLoading] = useState(false)
  const [error, setError] = useState(false)
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(handleChange)

const handleTogglePassword=()=>{
  setTogglePassword(!togglePassword)
}

const handleSubmit = async(e) => {
  e.preventDefault();

  if (!formData.fullName || !formData.EmailAddress || !formData.Mobile || !formData.Password) {
    setError(true);
    toast.error("All fields are required");
    return; // stop further execution
  }

  try {
    const response = await axios.post("http://localhost:3000/api/signup",formData,{
            "headers":{
              "Content-Type":"application/json"
            }
    })
    toast.success("Signup Successfully",response)
        setTimeout(() => {
            navigate('/login')
        }, 2000);
  } catch (error) {
    toast.error("Something went wrong");
  }
};



    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-xl p-8 space-y-6"
          >
            <h2 className="text-3xl font-bold text-center text-[#DD7109]">Create an Account</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  name='EmailAddress'
                  value={formData.EmailAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile </label>
                <input
                  type="text"
                  placeholder="9540802061"
                  name='Mobile'
                  value={formData.Mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
                />
              </div>

         <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
  <input
    type={togglePassword ? "text" : "password"}
    placeholder="••••••••"
    name='Password'
    value={formData.Password}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none pr-10"
  />
  <span
    onClick={handleTogglePassword}
    className="absolute right-3 top-[38px] text-gray-600 cursor-pointer"
  >
    {togglePassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>


              <div>
                <button
                  type="submit"
                  className="w-full bg-[#DD7109] hover:bg-[#c6600a] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <p className="text-sm text-center text-gray-500">
              Already have an account? <a href="/login" className="text-[#DD7109] font-medium hover:underline">Login</a>
            </p>
          </form>
        </div>
        <ToastContainer />
      </>
    );
  };

  export default SignUp;
