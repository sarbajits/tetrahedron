import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Animation variants for staggered appearance (These are not used in the Chairman's Message section but are kept)
    const containerVariants = {
        hidden: { opacity: 0.5 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <div className="pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2">
                {/* Section 3: Chairman's Message - Prominently Placed */}
                <div className="py-2 px-2 sm:px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        // **FIX:** Changed whileInView to animate to ensure the animation plays on load
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl"
                    >
                        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/3 flex flex-col items-center lg:items-start px-2 md:px-10">
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto lg:mx-0 shadow-xl border-4 border-indigo-500 dark:border-indigo-400"
                                src="./img/chairman.jpg"
                                alt="Tridev Sir - Chairman, Tetrahedron Group of Institutions"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-center lg:text-left mt-4"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Trideb Behera</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl font-semibold">Chairman</p>
                                <p className="text-gray-500 dark:text-gray-300 text-md sm:text-lg">Tetrahedron Group of Institutions</p>
                            </motion.div>
                        </div>

                        <div className="lg:flex-grow lg:w-2/3 w-full">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                // **FIX:** Changed whileInView to animate
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                // viewport={{ once: true }} // Removed viewport
                                className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center lg:text-left"
                            >
                                Chairman's <span className="text-indigo-600 dark:text-indigo-400">Message</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                // **FIX:** Changed whileInView to animate
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                // viewport={{ once: true }} // Removed viewport
                                className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-200 italic"
                            >
                                "Welcome to the Tetrahedron Group of Institutions, where we believe that every student holds the potential to rise, shine, and shape a brighter tomorrow.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                // **FIX:** Changed whileInView to animate
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                // viewport={{ once: true }} // Removed viewport
                                className="mt-6 space-y-6 text-gray-700 dark:text-gray-200"
                            >
                                <p className="font-semibold text-xl text-gray-800 dark:text-gray-100">To Students:</p>
                                <p>This is your turning point. +2 Science is not just a course—it's the foundation of your future. Whether you're preparing for NEET, JEE, or your board exams, we are here to train your mind, shape your discipline, and sharpen your competitive edge. Remember, success doesn’t come by chance—it comes by choice and consistent effort. Walk in with a dream and walk out with a direction</p>

                                <p className="font-semibold text-xl text-gray-800 dark:text-gray-100">To Parents:</p>
                                <p>Thank you for partnering with us in shaping your child’s future. We understand the emotional and academic support your child needs during these crucial two years. That’s why we’ve created a structured environment that balances rigorous academics with mental wellbeing. We believe in transparent communication, personal mentoring, and result-oriented teaching that you can rely on.</p>

                                <p className="font-semibold text-xl text-gray-800 dark:text-gray-100">To the People of Odisha:</p>
                                <p>Our vision is to transform Odisha into a premier center for science education and national competitive achievement. With advanced teaching methods, integrated coaching, and a team of dedicated educators, we are building not just a college, but a movement of academic excellence.</p>

                                <p className="italic text-gray-600 dark:text-gray-300">Let Tetrahedron be your child's launchpad to a brighter tomorrow. Together, let's prepare a generation that not only qualifies but leads.</p>

                                <p className="text-right text-gray-800 dark:text-gray-100 font-medium">Warm regards,</p>
                                <p className="text-right text-gray-800 dark:text-gray-100 font-medium">Trideb Behera</p>
                                <p className="text-right text-gray-500 dark:text-gray-300">Chairman<br />Tetrahedron Group of Institutions</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;