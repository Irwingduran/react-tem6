import React from 'react';

const ProfessionalDetails = () => {
  return (
    <div className='rounded-[40px] bg-[#f3f3f3] px-[30px] md:px-[60px] py-[40px] mt-[50px] shadow-lg'>
      <h3 className='font-bold text-[28px] text-center'>Credenciales Profesionales</h3>
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
  );
};

export default ProfessionalDetails;
