import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import OurPortfolio from './Pages/OurPortfolio.jsx';
import Services from './Pages/Services.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import ProtectedRoutes from './Pages/ProtectedRoutes.jsx';
import MichealBrown from './Pages/TeamDetails/MichealBrown.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/' element={<Home/>}/>
        {/* Protected Routes */}
      
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/our-portfolio"
          element={
            <ProtectedRoutes>
              <OurPortfolio />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/our-services"
          element={
            <ProtectedRoutes>
              <Services />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoutes>
              <Blog />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          }
        />
         <Route
          path="/about/micheal-brown"
          element={
            <ProtectedRoutes>
              <MichealBrown />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
