import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Por qué tengo dificultad para orinar?',
      answer:
        'En hombres mayores suele relacionarse con agrandamiento de próstata. En otros casos puede deberse a obstrucciones o problemas neurológicos.',
    },
    
    {
        question: '¿Es normal orinar frecuentemente durante la noche?',
        answer:
          'No es normal orinar más de una vez por noche. Si ocurre frecuentemente, podría indicar problemas prostáticos, diabetes o trastornos de la vejiga.',
      },
      {
        question: '¿Por qué tengo ardor al orinar?',
        answer:
          'Generalmente indica una infección urinaria, aunque también puede ser por cálculos renales o enfermedades de transmisión sexual.',
      },
      {
        question: '¿Es grave ver sangre en la orina?',
        answer:
          'La sangre en la orina siempre debe ser evaluada por un médico, ya que puede indicar desde infecciones hasta condiciones más serias como cáncer.',
      },
      {
        question: '¿Cuándo debo visitar al urólogo?',
        answer:
          'Debe consultar si presenta dolor al orinar, sangre en la orina, dificultad para orinar, infecciones frecuentes o cualquier cambio en sus hábitos urinarios.',
      },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFF] text-black py-12 px-6 rounded-lg shadow-xl mt-10">
      <h3 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`ml-2 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
