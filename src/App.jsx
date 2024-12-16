import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import Section from './components/Section'
import LetsMakeHappen from './components/LetsMakeHappen'
import ProfessionalDetails from './components/ProfessionalDetails'
import TestimonialCarousel from './components/TestimonialCarousel'
import Footer from './components/Footer'
import GrowIn from './animation/GrowIn'

const App = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />
      <Hero />
      <Section
        heading='Servicio'
        paragraph='Descubre nuestras especialidades y cómo podemos ayudarte a mejorar tu salud.
        Ofrecemos soluciones personalizadas y atención de alta calidad.' />
      <OurServices />
      <GrowIn>
        <LetsMakeHappen />
        <ProfessionalDetails/>
      </GrowIn>
     
      <TestimonialCarousel/>
    
        <Footer />
    </div>
  )
}

export default App