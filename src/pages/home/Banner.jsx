import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-[#E0F2FE] text-black py-12 px-6 rounded-lg shadow-xl mt-10 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texto */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            ¡Agenda una cita!
          </h2>
          <p className="mt-2 text-lg">
          Hospital Puebla - Consultorio 1115 
          </p>
          <p>Privada de las Ramblas No. 4, Desarrollo Atlixcáyotl. Puebla, Pue.</p>
        </div>

        {/* Botón */}
        <a href="https://api.whatsapp.com/send/?phone=5212222696218&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">
        <button
          className="bg-[#0284C7] text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md hover:bg-blue-300 transition-transform transform hover:scale-105"
          onClick={() => alert('Redirigiendo a la página de agendar cita...')}
        >
          Agendar cita
        </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
