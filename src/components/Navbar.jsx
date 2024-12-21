import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'; // Add a close icon for the mobile menu


const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className='flex justify-between items-center py-6 lg:py-0'>
         <div className='flex gap-2 items-center'>
            <img
            src={logo}
            width={40}
            />
            <h1 className='font-semibold text-2xl text-[#0284C7]'>Dr. Ivo Pineda </h1>
         
         </div>
         <div className='hidden lg:flex items-center'>
            <ul className='flex items-center gap-[40px] mr-8'>
            <li>
                  <a href="/" className='text-[20px]'>Inicio</a>
               </li>
               <li>
                  <a href="/" className='text-[20px]'>Conóceme</a>
               </li>
               <li>
                  <a href="/services" className='text-[20px]'>Servicio</a>
               </li>
               <li>
                  <a href="/pricing" className='text-[20px]'>Contacto</a>
               </li>
            </ul>
            <button className='text-center text-white border rounded-lg bg-[#0284C7] py-3 px-4'>Agendar Cita</button>
         </div>
         <div className='lg:hidden block cursor-pointer' onClick={toggleMobileMenu}>
            <img src={isMobileMenuOpen ? close : menu} alt="menu" />
         </div>
         {isMobileMenuOpen && (
            <div className='lg:hidden fixed z-50 top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center'>
               <img src={close}  alt="close" className='absolute top-6 right-4' onClick={toggleMobileMenu}/>
               <ul className='flex flex-col items-center gap-[20px]'>
               <li>
                  <a href="/" className='text-[20px]'>Inicio</a>
               </li>
               <li>
                  <a href="/" className='text-[20px]'>Conóceme</a>
               </li>
               <li>
                  <a href="/services" className='text-[20px]'>Servicio</a>
               </li>
               <li>
                  <a href="/pricing" className='text-[20px]'>Contacto</a>
               </li>
               </ul>
               <button className='mt-4 text-center border rounded-lg border-black py-3 px-4'>Agendar Cita</button>
            </div>
         )}
      </div>
   );
}

export default Navbar;