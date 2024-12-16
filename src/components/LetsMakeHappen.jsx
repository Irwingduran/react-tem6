import React from 'react'
import bombIllustration from '../assets/bomb.png'
const LetsMakeHappen = () => {
  return (
    <div className='rounded-[40px] md:h-[350px] bg-[#f3f3f3] px-[30px] md:px-[60px] grid grid-cols-1 md:grid-cols-2 mt-[100px]'>
        <div className='py-[60px] w-full'>
            <h3 className='font-bold text-[30px]'>Sobre Mí</h3>
            <p className='text-[18px] mt-4'>El Doctor Pineda cursó la carrera de Medicina en la Benemérita Universidad Autónoma de Puebla (BUAP), egresó de la especialidad en Urología en la Universidad Nacional Autónoma de México (UNAM), actualmente miembro de la Sociedad Mexicana de Urología, miembro activo del Colegio Mexicano de Urología Nacional.</p>
           
        </div>
        <div className='mt-[15px] md:flex hidden ml-6  justify-end w-80 h-fit'>
            <img src={bombIllustration} alt="bomb" />
        </div>
    </div>
  )
}

export default LetsMakeHappen