import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Banner from './Banner'
import About from './About'
import MapLocation from './MapLocation'
import TestimonialCarousel from './TestimonialCarousel'
import VideoComponent from './VideoComponent'
import SurgeriesGrid from './SurgeriesGrid'
import FAQ from './FAQ'
import Footer from '../../components/Footer'
import GrowIn from '../../animation/GrowIn'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />
      <Hero />
      <GrowIn>
        <div id='about'>
        <About />
        </div>
      </GrowIn>
      <div id='service'>
      <SurgeriesGrid/>
      </div>
      <VideoComponent/>
      <Banner/>
      <TestimonialCarousel/>
      <MapLocation/>
      <FAQ/>
      <div id='contact'>
    <Contact/>
      </div>
        <Footer />
    </div>
  )
}

export default Home;