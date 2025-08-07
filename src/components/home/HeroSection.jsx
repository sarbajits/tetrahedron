import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TextType from '../gsap/TextType';
import ScrollVelocity from '../gsap/ScrollVelocity';

const HeroSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.6,
            },
        },
    };

    const handleAnimationComplete = () => {
        // console.log('All letters have animated!');
    };

    const buttonGroupVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.6,
                delay: 0.3,
            },
        },
    };

    return (
        <div className="relative bg-white dark:bg-gray-900">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('./img/campus4.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-gray-900 dark:via-gray-800/40 dark:to-transparent"></div>
            </div>

            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="./vid/back.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-gray-900 dark:via-gray-800/40 dark:to-transparent"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="max-w-3xl text-center md:text-left">
                    <motion.h1
                        className="text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <TextType
                            text={["Do you want to build your career", "Best College in Odisha", "Contact Us"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="😍"
                            className='text-lg'
                        />
                        <span className="block text-6xl">Tetrahedron Group</span>{' '}
                        <span className="block text-5xl text-amber-400 text-shadow-lg">
                            of Institutions
                        </span>
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg text-gray-200 dark:text-gray-300 font-bold text-shadow-lg sm:mt-8 sm:text-xl sm:max-w-xl"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Delivering Education Excellence since 2013. A leading
                        residential science college nurturing academic
                        excellence, scientific curiosity, and personal
                        integrity.
                    </motion.p>
                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={buttonGroupVariants}
                    >
                        <Link
                            to="/about"
                            className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 text-lg font-medium text-indigo-700 bg-white hover:bg-gray-100 rounded-md transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-indigo-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* 
            <ScrollVelocity
                texts={['Tetrahedron is the best', 'Delivering Education Excellence']}
                velocity='50'
                className="text-sm text-white px-2"
            /> */}
        </div>
    );
};

export default HeroSection;
