import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
      <form
        onSubmit={""}
        className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#DD7109]">Create an Account</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile </label>
            <input
              type="text"
              placeholder="9540802061"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#DD7109] focus:border-[#DD7109] outline-none"
            />
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
          Already have an account? <a href="#" className="text-[#DD7109] font-medium hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
