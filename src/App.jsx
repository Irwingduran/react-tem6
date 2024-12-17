import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import Banner from './components/Banner'
import About from './components/About'
import MapLocation from './components/MapLocation'
import TestimonialCarousel from './components/TestimonialCarousel'
import VideoComponent from './components/VideoComponent'
import Footer from './components/Footer'
import GrowIn from './animation/GrowIn'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />
      <Hero />
      <GrowIn>
        <About />
      </GrowIn>
      <OurServices />
      <VideoComponent/>
      <Banner/>
      <TestimonialCarousel/>
      <MapLocation/>
    <Contact/>
        <Footer />
    </div>
  )
}

export default App