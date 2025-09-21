import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'Kamalakanta',
        role: 'AIIMS BBSR (2024)',
        avatar: './img/topper1.jpg',
        text: "The integrated coaching for NEET at Tetrahedron has been exceptional. The faculty's dedication and the study environment have helped me improve my rank significantly."
    },
    {
        name: 'Tapas Behera',
        role: 'IIT KHARAGPUR (2022)',
        avatar: './img/topper2.jpg',
        text: "The self-study rooms with faculty support are a game-changer. I can focus better and get my doubts cleared immediately. The JEE coaching is top-notch."
    },
    {
        name: 'Abinash Panda',
        role: '+2 Science Topper (2025)',
        avatar: './img/topper3.jpg',
        text: 'The residential facilities are excellent. The disciplined environment helps me stay focused on my studies while also participating in extracurricular activities.'
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 60 : -60,
            opacity: 0,
            scale: 0.97
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { ease: 'easeOut', duration: 0.35 }
        },
        exit: (direction) => ({
            x: direction < 0 ? 60 : -60,
            opacity: 0,
            scale: 0.97,
            transition: { ease: 'easeIn', duration: 0.25 }
        })
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 50) {
            setDirection(-1);
            setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
            );
        } else if (info.offset.x < -50) {
            setDirection(1);
            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-indigo-50 dark:bg-gray-800 py-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        What our students say
                    </p>
                </div>

                {/* Stable Testimonial Box */}
                <div className="mt-10 relative flex justify-center items-center">
                    <div className="w-full max-w-lg min-h-[360px] flex items-center justify-center">
                        <AnimatePresence mode="sync" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                className="w-100"
                            >
                                <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center text-center h-full w-100">
                                    <img
                                        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        loading="lazy"
                                    />
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        {testimonials[currentIndex].role}
                                    </p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-200 text-base italic leading-relaxed">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                ? 'bg-indigo-600 scale-125'
                                : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
