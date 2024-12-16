import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'María López',
      role: 'Paciente',
      testimonial:
        'El Dr. Pineda es un profesional excepcional. Su atención al detalle y su trato humano me hicieron sentir segura durante todo el proceso.',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Paciente',
      testimonial:
        'Un médico increíble. Su experiencia y conocimiento son evidentes en cada consulta. Lo recomiendo ampliamente.',
    },
    {
      name: 'Ana Torres',
      role: 'Paciente',
      testimonial:
        'Gracias al Dr. Pineda mi salud ha mejorado significativamente. Es un especialista que realmente se preocupa por sus pacientes.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rounded-[40px] bg-[#f3f3f3] px-6 py-10 shadow-lg mt-[50px] w-full max-w-[800px] mx-auto">
      <h3 className="text-[28px] font-bold text-center mb-6">Testimonios</h3>
      <div className="relative">
        {/* Testimonial content */}
        <div className="text-center">
          <p className="text-[18px] italic text-gray-700 leading-relaxed">
            “{testimonials[currentIndex].testimonial}”
          </p>
          <p className="mt-4 font-medium text-[16px] text-gray-800">
            - {testimonials[currentIndex].name}, <span className="italic">{testimonials[currentIndex].role}</span>
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex justify-center items-center"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex justify-center items-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
