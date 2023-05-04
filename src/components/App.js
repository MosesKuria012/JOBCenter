import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './Help/Faq'
import Contact from './Help/Contact'
import Help from './pages/Help'
import Services from './pages/Services'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>JOB CENTRAL</h1>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="about"> About US</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="services">Services</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />}>
            <Route path="faq" element={<Faq />} />{' '}
            <Route path="contact" element={<Contact />} />{' '} 
          </Route>
          <Route path="services" element={<Services />}/> 
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
