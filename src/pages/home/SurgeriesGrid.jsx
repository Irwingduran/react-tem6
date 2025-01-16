import React from 'react';
import Arrow from '../../assets/Arrow.svg';


const SurgeriesGrid = () => {
  const surgeries = [
    {
      title: "Disfunción Eréctil",
      description: "Te ayudamos en problemas de erección y eyaculación precoz...",
      image: "/services/difus.jpg",
      arrowBgColor: "#0284C7", // Azul médico para el botón
    },
    {
      title: "Cáncer de Próstata",
      description: "Recibe un diagnóstico oportuno y profesional...",
      image: "/services/cancer.jpg",
      arrowBgColor: "#0284C7",
    },
    {
      title: "Piedras Urinarias",
      description: "Eliminar las piedras rara vez requiere cirugía...",
      image: "/services/piedras.jpg",
      arrowBgColor: "#0284C7",
    },
  ];

  const servicesList = [
    "Crecimiento Prostático",
    "Infecciones de transmisión sexual",
    "Incontinencia urinaria, infección urinaria, y prolapso genital",
    "Cálculos de las vías urinarias, tratamiento médico y quirúrgico",
    "Enfermedades de la próstata",
    "Malformaciones renales y de la vía urinaria",
    "Infertilidad masculina,",
 "Circuncisión",
"Transplante renal",
"Cáncer de pene",
"Cáncer de testículo",
"Cáncer de riñón",
"Laparoscopia",
"Endourología",
];

  return (
    <div className="bg-white py-10 px-4">
     <div className="text-center mb-8 mt-16">
                <h2 className="text-4xl font-bold text-gray-800">Cirugías más frecuentes</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {surgeries.map((surgery, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            {/* Placeholder para la imagen */}
            <div className="h-48">
            <img
             src={surgery.image}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#0284C7]">
                {surgery.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{surgery.description}</p>
              <div className='flex items-center justify-center mt-6'>
                                <a
                                    href={surgery.buttonText}
                                    className='flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium'
                                    style={{ backgroundColor: surgery.arrowBgColor }}
                                >
                                    Ver más
                                    <img src={Arrow} alt='arrow' className='w-4' />
                                </a>
                            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8 mt-16">
                <h2 className="text-4xl font-bold text-gray-800">Otros Servicios</h2>
                <p className="mt-2 text-gray-600">Atendemos una amplia variedad de enfermedades y realizamos procedimientos especializados.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-md">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {servicesList.map((service, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-700 text-lg"
                        >
                            <span className="mr-2 text-blue-500 font-bold">•</span>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  );
};

export default SurgeriesGrid;
