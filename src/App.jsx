import React from 'react'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonial from './components/Testimonial'
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'

import AOS from 'aos';
import { useEffect } from 'react'


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
      mirror: false, 
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
