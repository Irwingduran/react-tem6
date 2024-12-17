import FirstImage from '../assets/services/service.png';
import Arrow from '../assets/Arrow.svg';
import { Link } from 'react-router-dom';
import AnimatedItem from '../animation/AnimatedItem';

const services = [
    {
        id: 1,
        heading: "Crecimiento Prostático",
        bgColor: "#FFF", // Suave azul para transmitir calma
        headingBgColor: "#E0F2FE", // Azul claro para el encabezado
        learnMoreLink: "#",
        icon: FirstImage,
        textColor: "#0F172A", // Gris oscuro para mejorar la lectura
        arrowBgColor: "#0284C7" // Azul médico para el botón
    },
    {
        id: 2,
        heading: "Piedras Urinarias",
        bgColor: "#FFFF",
        headingBgColor: "#E0F2FE",
        learnMoreLink: "#",
        icon: FirstImage,
        textColor: "#0F172A",
        arrowBgColor: "#0284C7"
    },
    {
        id: 3,
        heading: "Cáncer de Próstata",
        bgColor: "#FFF",
        headingBgColor: "#E0F2FE",
        learnMoreLink: "#",
        icon: FirstImage,
        textColor: "#0F172A",
        arrowBgColor: "#0284C7"
    },
    
];

const servicesList = [
    "Crecimiento Prostático",
    "Disfunción Eréctil",
    "Piedras Urinarias",
    "Infecciones de transmisión sexual",
    "Incontinencia urinaria, infección urinaria, y prolapso genital",
    "Cálculos de las vías urinarias, tratamiento médico y quirúrgico",
    "Enfermedades de la próstata",
    "Malformaciones renales y de la vía urinaria",
    "Eyaculación precoz",
    "Infertilidad masculina",
    "Circuncisión",
    "Transplante renal",
    "Cáncer de pene",
    "Cáncer de próstata",
    "Cáncer de testículo",
    "Cáncer de vejiga",
    "Cáncer de riñón",
];

const OurServices = () => {
    return (
        <section className='mt-16'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-800'>Mis Servicios</h2>
                <p className='mt-4 text-lg text-gray-600'>Brindo soluciones médicas especializadas para tu bienestar.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                    <AnimatedItem key={service.id} delay={index * 0.2}>
                        <div
                            className='flex flex-col justify-between h-full p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300'
                            style={{ backgroundColor: service.bgColor }}
                        >
                            <div>
                                <h3
                                    className='text-xl font-semibold text-center py-2 rounded-md mb-4'
                                    style={{ backgroundColor: service.headingBgColor, color: service.textColor }}
                                >
                                    {service.heading}
                                </h3>
                                <div className='text-center'>
                                    <img
                                        src={service.icon}
                                        alt={service.heading}
                                        className='w-28 h-28 mx-auto object-contain'
                                    />
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-6'>
                                <a
                                    href={service.learnMoreLink}
                                    className='flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium'
                                    style={{ backgroundColor: service.arrowBgColor }}
                                >
                                    Ver más
                                    <img src={Arrow} alt='arrow' className='w-4' />
                                </a>
                            </div>
                        </div>
                    </AnimatedItem>
                ))}
            </div>


            <div className="text-center mb-8 mt-16">
                <h2 className="text-3xl font-bold text-gray-800">Otros Servicios</h2>
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
        </section>

        
    );
};

export default OurServices;
