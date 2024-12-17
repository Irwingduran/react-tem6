import React from 'react';
import HeroIllustration from '../assets/Illustration.png';
import SlideInFromLeft from '../animation/SlideInFromLeft';
import SlideInFromRight from '../animation/SlideInFromRight';
import GrowIn from '../animation/GrowIn';
{/*  
import amazon from '../assets/brands/amazon.png';
import zoom from '../assets/brands/zoom.png';
import dribble from '../assets/brands/dribble.png';
import hubspot from '../assets/brands/hubspot.png';
import notion from '../assets/brands/notion.png';
import netflix from '../assets/brands/netflix.png';



    const brands = [
        { src: amazon, alt: 'Amazon' },
        { src: zoom, alt: 'Zoom' },
        { src: dribble, alt: 'Dribble' },
        { src: hubspot, alt: 'HubSpot' },
        { src: notion, alt: 'Notion' },
        { src: netflix, alt: 'Netflix' },
    ];
    */}
    const Hero = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row items-start gap-[35px] py-[70px]'>
                <SlideInFromRight className='w-full sm:order-2'>
                    <img src={HeroIllustration} alt="hero image" />
                </SlideInFromRight>
                <SlideInFromLeft className='flex flex-col items-start gap-[35px] sm:order-1'>
                    <h2 className='font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]'>Dr. Ivo Humnerto <br /> Pineda Somodevilla</h2>
                    <h3 className='font-semibold text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px]'>Urólogo</h3>
                    <p className='text-[20px]'>Me distingue la discreción, profesionalismo, trato amable, así como conocimientos actualizados y tecnología de última generación para el tratamiento de su padecimiento.</p>
                    <button className='bg-[#0284C7] text-white text-[20px] px-4 py-2 rounded-lg'>Agendar Cita</button>
                </SlideInFromLeft>
            </div>
            {/* 
            <div className='flex gap-4 flex-wrap justify-between'>
                {brands.map((brand, index) => (
                    <GrowIn key={index}>
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            className="h-12 w-auto filter grayscale brightness-0"
                        />
                    </GrowIn>
                ))}
            </div>
             */}
        </>
    );
}

export default Hero;