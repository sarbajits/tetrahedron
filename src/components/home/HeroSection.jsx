import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function App() {
    const slides = [
        {
            id: 1,
            type: "text-over-image",
            image: "./img/campus5.jpg",
            title: "Tetrahedron Group of Institutions",
            subtitle: "Delivering Education Excellence since 2013. A leading residential science college nurturing academic excellence, scientific curiosity, and personal integrity.",
            description: "Founded by Trideb Behera in 2013",
            buttons: [{ text: "Know More", link: "./about", primary: true }, { text: "Contact Us", link: "./contact" }],
        },
        {
            id: 2,
            type: "split-with-cards",
            image: "./img/campus1.jpg",
            title: "Vision & Mission",
            description:
                "To nurture academic excellence, scientific curiosity, and integrity — empowering responsible innovators and future leaders.",
            buttons: [{ text: "Chairman's Gallery", link: "./chairmans-gallery", primary: true }],
            cards: [
                { title: "Established", text: "2013" },
                { title: "Founder & Chairman", text: "Trideb Behera" },
                { title: "Tagline", text: "Delivering Education Excellence" },
            ],
        },
        {
            id: 3,
            type: "grid-cards",
            image: "./img/classroom9.jpg",
            title: "Academics That Build Futures",
            description:
                "We prepare students for board exams and competitive entrance tests (JEE/NEET) with integrated coaching.",
            buttons: [{ text: "Academics", link: "./academics", primary: true }],
            gridItems: [
                { icon: "📘", title: "+2 Science", description: "PCB + IT, PCB + Geology" },
                { icon: "📗", title: "PCMB", description: "Core Science Stream" },
                { icon: "🧪", title: "Coaching", description: "NEET & JEE Integrated" },
                { icon: "💻", title: "Departments", description: "Physics, Chemistry, Biology, IT, Geology" },
            ],
        },
        {
            id: 4,
            type: "text-with-images",
            image: "./img/new/IMG-20251015-WA0028.jpg",
            title: "Residential Learning Environment",
            description:
                "Tetrahedron provides a safe, structured residential setting fostering discipline, independence, and holistic development.",
            buttons: [{ text: "Facilities", link: "./facilities", primary: true }],
            sideImages: ["./img/classroom5.jpg", "./img/classroom11.jpg"],
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const contentVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50 },
    };

    const imageVariants = {
        initial: { scale: 1.1, opacity: 0.8 },
        animate: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
    };

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [currentSlideIndex]);

    const SlideContent = ({ slide }) => {
        switch (slide.type) {
            case "text-over-image":
                return (
                    <motion.div
                        className="max-w-3xl text-white dark:text-gray-100 p-6"
                        variants={contentVariants}
                    >
                        <h2 className="text-sm font-bold opacity-80">
                            {slide.description}
                        </h2>
                        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold">
                            {slide.title}
                        </h1>
                        <h3 className="mt-2 text-xl font-semibold opacity-90">
                            {slide.subtitle}
                        </h3>
                        <div className="mt-4 md:mt-8 flex-row gap-2">
                            <Link
                                to={slide.buttons[0].link}
                                className="px-6 py-3 text-lg font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                                {slide.buttons[0].text}
                            </Link>
                            <Link
                                to={slide.buttons[1].link}
                                className="ms-2 px-6 py-3 text-lg font-medium rounded-lg bg-white hover:bg-indigo-100 text-indigo-600"
                            >
                                {slide.buttons[1].text}
                            </Link>
                        </div>

                    </motion.div>
                );
            case "split-with-cards":
                return (
                    <div className="flex flex-col justify-center md:flex-row items-center gap-6 h-full">
                        <motion.img
                            src={slide.image}
                            alt="Campus"
                            className="hidden md:block w-full md:w-1/2 h-90 object-cover rounded-2xl shadow-lg"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        />
                        <motion.div
                            className="w-full md:w-1/2 p-4 md:p-6 m-10 rounded-2xl bg-white/40 dark:bg-gray-900/80 backdrop-blur text-gray-900 dark:text-gray-100 shadow-xl flex flex-col justify-center"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <h1 className="text-xl md:text-2xl font-extrabold">{slide.title}</h1>
                            <p className="mt-2 text-lg leading-relaxed">{slide.description}</p>
                            <div className="mt-2">
                                <Link
                                    to={slide.buttons[0].link}
                                    className="px-2 py-2 text-lg rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                                >
                                    {slide.buttons[0].text}
                                </Link>
                            </div>
                            <div className="mt-6 space-y-3">
                                {slide.cards.map((card, i) => (
                                    <motion.div
                                        key={i}
                                        className="p-1 rounded-lg bg-gray-100 dark:bg-gray-800"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.2 }}
                                    >
                                        <h3 className="text-lg font-bold">{card.title}</h3>
                                        <p className="text-sm opacity-80 ml-2">{card.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                );
            case "grid-cards":
                return (
                    <div className="flex flex-col lg:flex-row items-center gap-4 h-full">
                        <motion.div
                            className="w-full lg:w-1/2 p-4 md:p-6 text-white flex flex-col justify-center h-full"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">{slide.title}</h1>
                            <p className="mt-2 md:mt-4 text-base md:text-lg">{slide.description}</p>
                            <div className="mt-4 md:mt-6">
                                <Link
                                    to={slide.buttons[0].link}
                                    className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-lg bg-green-600 hover:bg-green-700 text-white"
                                >
                                    {slide.buttons[0].text}
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-full lg:w-1/2 grid grid-cols-2 gap-2 md:gap-4 h-auto md:h-90 mb-8 md:mb-20"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            {slide.gridItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg text-gray-900 dark:text-gray-100"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <span className="text-xl md:text-3xl">{item.icon}</span>
                                    <h3 className="mt-1 md:mt-2 text-sm md:text-lg font-bold">{item.title}</h3>
                                    <p className="text-xs md:text-sm opacity-80 text-center">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                );
            case "text-with-images":
                return (
                    <div className="flex flex-col lg:flex-row items-center gap-6 h-full w-full">
                        <motion.div
                            className="w-full lg:w-1/2 p-4 md:p-6 text-white flex flex-col justify-center h-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">{slide.title}</h1>
                            <p className="mt-2 md:mt-4 text-base md:text-lg">{slide.description}</p>
                            <div className="mt-4 md:mt-6">
                                <Link
                                    to={slide.buttons[0].link}
                                    className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
                                >
                                    {slide.buttons[0].text}
                                </Link>
                            </div>
                        </motion.div>
                        <div className="flex gap-4 mb-4 md:mb-8 w-full lg:w-1/2 justify-center items-center">
                            {slide.sideImages.map((img, i) => (
                                <motion.img
                                    key={i}
                                    src={img}
                                    alt={`Side ${i + 1}`}
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-56 rounded-2xl shadow-lg object-cover border-2 border-white"
                                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,
                                        delay: 0.3 + i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[currentSlideIndex].id}
                    className="absolute inset-0 w-full h-full"
                >
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center h-full"
                        style={{ backgroundImage: `url('${slides[currentSlideIndex].image}')` }}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent dark:from-gray-900 dark:via-gray-800/50 dark:to-transparent" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <SlideContent slide={slides[currentSlideIndex]} />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 z-20">
                <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 transition flex items-center justify-center"
                >
                    <span className="block w-0 h-0 border-y-6 border-y-transparent border-r-8 border-r-white"></span>
                </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-3 z-20">
                <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 transition flex items-center justify-center"
                >
                    <span className="block w-0 h-0 border-y-6 border-y-transparent border-l-8 border-l-white"></span>
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`h-3 rounded-full transition-all ${index === currentSlideIndex
                            ? "w-8 bg-white"
                            : "w-3 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
