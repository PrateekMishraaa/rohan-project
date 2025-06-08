import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import OurPortfolio from './Pages/OurPortfolio.jsx'
import Services from './Pages/Services.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import SignUp from './Pages/SignUp.jsx'
const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/our-portfolio' element={<OurPortfolio/>}/>
        <Route path='/our-services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
