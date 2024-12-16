import FirstImage from '../assets/services/service.png';
import Arrow from '../assets/Arrow.svg';
import { Link } from 'react-router-dom';
import AnimatedItem from '../animation/AnimatedItem' // Import the new animation component

const services = [
    {
        id: 1,
        heading: "Crecimiento Prostático",
        bgColor: "#", // Service card background color
        headingBgColor: "#60A5FA", // Heading background color
        learnMoreLink: "#", // URL to the "Learn more" page
        icon: FirstImage, // Replace with the actual icon component or image
        textColor: "#000000", // Text color for "Learn more"
        arrowBgColor: "#60A5FA" // Arrow background color
    },
    {
        id: 2,
        heading: "Piedras Urinarias",
        bgColor: "#", // Service card background color
        headingBgColor: "#60A5FA", // Heading background color
        learnMoreLink: "#", // URL to the "Learn more" page
        icon: FirstImage, // Replace with the actual icon component or image
        textColor: "#000000", // Text color for "Learn more"
        arrowBgColor: "#60A5FA" // Arrow background color
    },
    {
        id: 3,
        heading: "Cáncer de próstata",
        bgColor: "#", // Service card background color
        headingBgColor: "#60A5FA", // Heading background color
        learnMoreLink: "#", // URL to the "Learn more" page
        icon: FirstImage, // Replace with the actual icon component or image
        textColor: "#000000", // Text color for "Learn more"
        arrowBgColor: "#60A5FA" // Arrow background color
    },
    {
        id: 4,
        heading: "Laparoscopia",
        bgColor: "#", // Service card background color
        headingBgColor: "#60A5FA", // Heading background color
        learnMoreLink: "#", // URL to the "Learn more" page
        icon: FirstImage, // Replace with the actual icon component or image
        textColor: "#000000", // Text color for "Learn more"
        arrowBgColor: "#60A5FA" // Arrow background color
    },
   
    
];

const OurServices = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] mt-[100px]'>
            {services.map((service, index) => (
                <AnimatedItem key={service.id} delay={index * 0.2}> {/* Use the animation component */}
                    <div
                        className='flex gap-[30px] md:gap-[50px] p-[30px]  md:p-[50px] bg-[F3F3F3] border border-black rounded-[30px] md:rounded-[45px] border-b-4 border-b-black'
                        style={{ backgroundColor: service.bgColor }}
                    >
                        <div className='flex flex-col justify-between'>
                            <h3
                                className=' text-2xl md:text-[30px] font-semibold px-2'
                                style={{ backgroundColor: service.headingBgColor }}
                            >
                                {service.heading}
                            </h3>
                            <div className='flex gap-3 items-center mt-8'>
                                <div
                                    className='rounded-full p-2'
                                    style={{ backgroundColor: service.arrowBgColor }}
                                >
                                    <img src={Arrow} alt='arrow' className='text-white' />
                                </div>
                                <a
                                    href={service.learnMoreLink}
                                    className='text-[18px] sm:block hidden'
                                    style={{ color: service.textColor }}
                                >
                                   Ver más
                                </a>
                            </div>
                        </div>
                       <div>
                       <img
                            src={service.icon}
                            alt={service.heading}
                            className=' min-w-20 min-h-20 w-full h-full sm:w-[200px] sm:h-[200px]  object-contain'
                        />
                       </div>
                    </div>
                </AnimatedItem>
            ))}
        </div>
    );
};

export default OurServices;
