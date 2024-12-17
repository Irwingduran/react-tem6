import React from 'react';
import Icon from '../assets/Icon.svg';
import socialSecond from '../assets/social/2.svg';
import AnimatedItem from '../animation/AnimatedItem';
import SlideInFromLeft from '../animation/SlideInFromLeft';
// import SlideInFromRight from '../animation/SlideInFromRight';

const Footer = () => {
    return (
        <AnimatedItem intial='50'>
            <div className='flex flex-col rounded-t-[40px] mt-[100px] p-[40px] md:p-[60px] bg-[#0284C7] text-white'>
                <div className='flex flex-col items-center gap-8 md:flex-row  md:justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={Icon} alt="icon" className='filter grayscale invert' />
                        <h2 className='font-semibold text-2xl'>Dr. Ivo Pineda Somodevilla</h2>
                    </div>
                    <div className='flex flex-wrap text-center items-center gap-[40px]'>
                        <a href="/" className='text-[15px] underline'>Sobre Mí</a>
                        <a href="/services" className='text-[15px] underline'>Servicio</a>
                        <a href="/use-cases" className='text-[15px] underline'>Ubicación</a>
                        
                    </div>
                    <div className='flex gap-3'>
                       
                        <img src={socialSecond} alt="fb" className='h-6 w-6' />
                        
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  justify-between items-center rounded-[30px] mt-8'>
                <SlideInFromLeft>
                <div className='text-white'>
                    <p className='bg-white inline-block py-1 px-3 text-black rounded-md font-bold'>Contacto</p>
                    <ul className='mt-4 space-y-2'>
                        <li>Email: drivopineda@urologoenpuebla.com</li>
                        <li>Consulta: 2226398763</li>
                          <li>Urgencias: 2222696218</li>
                        <li>Dirección: 1234 Direccion City, México 12345</li>
                    </ul>
                </div>
                </SlideInFromLeft>
              
              {/* <SlideInFromRight>
                <div className='bg-[#292A32] gap-4 md:gap-0 py-10 px-8 mt-8 rounded-[8px] flex flex-col md:flex-row items-center space-x-4'>
                    <input
                        type="email"
                        placeholder="Email"
                        className='bg-transparent border border-[#B9FF66] text-white px-4 py-2 rounded-lg focus:outline-none w-full md:w-[250px]'
                    />
                    <button className='bg-[#B9FF66] text-black px-6 py-2 rounded-lg'>Subscribe to news</button>
                </div>
                </SlideInFromRight>
                 */}  
            </div>
                <div className='bg-white w-full h-[1px] my-6 bg-opacity-50'></div>
                <div className='flex md:flex-row flex-col  gap-4'>
                    <p>© 2025 Delta Agencia</p>
  
                </div>
            </div>
            </AnimatedItem>
    )
}

export default Footer;
