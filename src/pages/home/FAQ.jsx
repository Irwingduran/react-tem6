import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Preguntas Frecuentes?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatem excepturi similique, adipisci et, aspernatur incidunt a doloribus quisquam rem alias id recusandae iste laborum quidem hic ad voluptatibus.',
    },
    
    {
        question: '¿Preguntas Frecuentes?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatem excepturi similique, adipisci et, aspernatur incidunt a doloribus quisquam rem alias id recusandae iste laborum quidem hic ad voluptatibus.',
      },
      {
        question: '¿Preguntas Frecuentes?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatem excepturi similique, adipisci et, aspernatur incidunt a doloribus quisquam rem alias id recusandae iste laborum quidem hic ad voluptatibus.',
      },
      {
        question: '¿Preguntas Frecuentes?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatem excepturi similique, adipisci et, aspernatur incidunt a doloribus quisquam rem alias id recusandae iste laborum quidem hic ad voluptatibus.',
      },
      {
        question: '¿Preguntas Frecuentes?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatem excepturi similique, adipisci et, aspernatur incidunt a doloribus quisquam rem alias id recusandae iste laborum quidem hic ad voluptatibus.',
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
