import React from 'react';
import bombIllustration from '../../assets/bomb.png';

const About = () => {
  return (
    <div className='rounded-[40px] bg-[#E0F2FE] px-[30px] md:px-[60px] py-[40px] mt-[100px] shadow-lg'>
      {/* Contenedor General */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
        {/* Sección Sobre Mí */}
        <div className='md:pr-8'>
          <h3 className='font-bold text-[30px] text-gray-800'>Sobre Mí</h3>
          <p className='text-[18px] mt-4 text-gray-700'>
            El Doctor Pineda cursó la carrera de Medicina en la Benemérita Universidad Autónoma de Puebla (BUAP),
            egresó de la especialidad en Urología en la Universidad Nacional Autónoma de México (UNAM), y es
            actualmente miembro de la Sociedad Mexicana de Urología, así como miembro activo del Colegio Mexicano
            de Urología Nacional.
          </p>
        </div>
        {/* Ilustración */}
        <div className='flex justify-center md:justify-end'>
          <img
            src={bombIllustration}
            alt='Ilustración'
            className='w-[200px] md:w-[300px] object-contain'
          />
        </div>
      </div>

      {/* Credenciales Profesionales */}
      <div className='mt-[50px]'>
        <h3 className='font-bold text-[28px] text-center text-gray-800'>Credenciales Profesionales</h3>
        <ul className='mt-6 pl-6 list-disc text-[18px] leading-7 text-gray-700'>
          <li>
            Actualmente labora en <span className='font-medium'>Hospital Puebla</span>.
          </li>
          <li>
            Miembro de la <span className='font-medium'>Sociedad Mexicana de Urología</span>.
          </li>
          <li>
            Miembro activo del <span className='font-medium'>Colegio Mexicano de Urología Nacional</span>.
          </li>
          <li>
            Miembro de la <span className='font-medium'>American Urological Association</span>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
