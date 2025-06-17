import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import {useNavigate} from "react-router-dom"
const SignIn = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({

    EmailAddress: "",

    Password: ""
  })
  const [loading, seteLoading] = useState(false)
  const [error, setError] = useState(false)
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(handleChange)

const handleSubmit = async(e) => {
  e.preventDefault();

  if ( !formData.EmailAddress ||  !formData.Password) {
    setError(true);
    toast.error("Invalid Credentials");
    return; // stop further execution
  }

  try {
    const response = await axios.post("http://localhost:4000/api/login",formData,{
            "headers":{
              "Content-Type":"application/json"
            }
    })
    console.log(response.data)
    localStorage.setItem("token",response.data.token)
    setTimeout(() => {
        navigate('/')
    }, 1000);
    toast.success("Correct User ",response)
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
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  name='Password'
                  value={formData.Password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#DD7109] hover:bg-[#c6600a] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Login
                </button>
              </div>
            </div>

            <p className="text-sm text-center text-gray-500">
              Don't have an account? <a href="/sign-up" className="text-[#DD7109] font-medium hover:underline">Login</a>
            </p>
          </form>
        </div>
        <ToastContainer />
      </>
    );
  };

  export default SignIn;
