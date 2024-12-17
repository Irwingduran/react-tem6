import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Qué es la cirugía HoLEP?',
      answer:
        'HoLEP es un procedimiento mínimamente invasivo para tratar el agrandamiento benigno de la próstata. Es seguro, efectivo y reduce significativamente los síntomas urinarios.',
    },
    {
      question: '¿Cómo puedo saber si soy candidato para este procedimiento?',
      answer:
        'Es necesario agendar una consulta personalizada para evaluar su historial médico y realizar los estudios pertinentes.',
    },
    {
      question: '¿Cuánto tiempo dura la recuperación?',
      answer:
        'La mayoría de los pacientes pueden retomar sus actividades diarias en 1 a 2 semanas, aunque esto depende de cada caso.',
    },
    {
      question: '¿Qué beneficios tiene esta cirugía?',
      answer:
        'El procedimiento ofrece una mejora significativa en los síntomas urinarios, es mínimamente invasivo y tiene una tasa baja de complicaciones.',
    },
    {
      question: '¿El procedimiento está cubierto por el seguro médico?',
      answer:
        'Depende de su proveedor de seguros. Le recomendamos consultar directamente con ellos para confirmar la cobertura.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E0F2FE] text-black py-12 px-6 rounded-lg shadow-xl mt-10">
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
