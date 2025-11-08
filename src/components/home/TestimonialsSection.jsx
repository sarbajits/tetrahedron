import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Kamalakanta",
        role: "AIIMS BBSR (2024)",
        avatar: "./img/topper1.jpg",
        text: "The integrated coaching for NEET at Tetrahedron has been exceptional. The faculty's dedication and the study environment have helped me improve my rank significantly.",
    },
    {
        name: "Tapas Behera",
        role: "IIT KHARAGPUR (2022)",
        avatar: "./img/topper2.jpg",
        text: "The self-study rooms with faculty support are a game-changer. I can focus better and get my doubts cleared immediately. The JEE coaching is top-notch.",
    },
    {
        name: "Abinash Panda",
        role: "+2 Science Topper (2025)",
        avatar: "./img/topper3.jpg",
        text: "The residential facilities are excellent. The disciplined environment helps me stay focused on my studies while also participating in extracurricular activities.",
    },
    {
        name: "ASHIRBAD BISWAL",
        role: "AIIMS GORAKHPUR (2023)",
        avatar: "./img/topper4.png",
        text: "Tetrahedron's focus on both academics and discipline made a huge difference in my preparation. The mock tests and faculty mentoring helped me identify my weak areas and strengthen my NEET performance.",
    },
    {
        name: "SUSHREE SANGITA SAHOO",
        role: "AIIMS DELHI (2021)",
        avatar: "./img/topper5.png",
        text: "Joining Tetrahedron was one of the best decisions of my life. The one-on-one guidance, regular doubt-clearing sessions, and supportive teachers created a perfect environment for focused NEET preparation.",
    },
    {
        name: "SATYAJIT NAYAK",
        role: "AIIMS RAIPUR (2022)",
        avatar: "./img/topper6.png",
        text: "The systematic study plan and personalized mentorship at Tetrahedron helped me stay consistent throughout my journey. The regular assessments and motivating environment pushed me toward success.",
    },
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
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: () => ({
            x: direction > 0 ? 80 : -80,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { ease: "easeOut", duration: 0.5 },
        },
        exit: () => ({
            x: direction < 0 ? 80 : -80,
            opacity: 0,
            scale: 0.95,
            transition: { ease: "easeIn", duration: 0.4 },
        }),
    };

    const handleDragEnd = () => {
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
            className="relative w-full bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        What Our Students Say
                    </p>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Hear from our achievers who turned their dreams into reality.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="relative flex justify-center items-center overflow-hidden px-2">
                    <div className="w-full max-w-4xl">
                        <AnimatePresence mode="wait" custom={direction}>
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
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-8 sm:p-10"
                            >
                                {/* Avatar */}
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={testimonials[currentIndex].name}
                                    className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                                    loading="lazy"
                                />

                                {/* Text Content */}
                                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <p className="text-gray-700 dark:text-gray-200 text-lg italic leading-relaxed">
                                        “{testimonials[currentIndex].text}”
                                    </p>
                                    <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-8 flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3.5 h-3.5 rounded-full transition-all ${index === currentIndex
                                ? "bg-indigo-600 scale-125"
                                : "bg-gray-300 dark:bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
