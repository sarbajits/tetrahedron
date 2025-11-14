import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Animation variants for staggered appearance
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2">

                {/* Section 1: Introduction/Overview */}
                <motion.div
                    initial="hidden"
                    // Changed whileInView to animate to trigger on component mount
                    animate="show"
                    // Removed viewport prop
                    variants={containerVariants}
                    className="text-center pb-2"
                >
                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        About <span className="text-indigo-600 dark:text-indigo-400">Tetrahedron Group of Institutions</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        Delivering Education Excellence since 2013.
                    </motion.p>
                </motion.div>

                {/* ------------------------------------------------------------- */}

                {/* Section 2: Our History, Vision & Mission */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 items-start py-4">
                    <motion.div
                        initial="hidden"
                        // Changed whileInView to animate
                        animate="show"
                        // Removed viewport prop
                        variants={containerVariants}
                        className="lg:col-span-1 mb-12 lg:mb-0"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Our Journey
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-3 text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
                            Tetrahedron Group of Institutions was established in <b>2013</b> by our visionary founder <b>Trideb Behera</b> with the aim of creating a center of excellence in science education. What started as a modest institution has now grown into a leading residential science college in Odisha, known for its academic rigor and holistic development approach.
                        </motion.p>
                        <motion.img
                            variants={imageVariants}
                            className="mt-8 w-full rounded-lg shadow-lg object-cover h-64 lg:h-auto"
                            src="./img/campus2.jpg"
                            alt="Tetrahedron Campus"
                        />
                    </motion.div>

                    <div className="mt-2 lg:mt-0 lg:col-span-2 space-y-12">
                        <motion.div
                            initial="hidden"
                            // Changed whileInView to animate
                            animate="show"
                            // Removed viewport prop
                            variants={containerVariants}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</motion.h3>
                            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                To be a leading residential science college that nurtures academic excellence, scientific curiosity, and personal integrity in young minds, empowering them to become responsible innovators and future leaders.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            // Changed whileInView to animate
                            animate="show"
                            // Removed viewport prop
                            variants={containerVariants}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</motion.h3>
                            <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <motion.li variants={itemVariants}>To provide a rigorous and engaging academic environment that prepares students for success in board exams, competitive entrance tests (JEE/NEET), and lifelong learning.</motion.li>
                                <motion.li variants={itemVariants}>To create a safe and structured residential setting that fosters discipline, independence, and a strong work ethic.</motion.li>
                                <motion.li variants={itemVariants}>To cultivate scientific thinking, problem-solving skills, and innovation through experiential learning and mentorship.</motion.li>
                                <motion.li variants={itemVariants}>To support holistic development by promoting physical fitness, mental well-being, ethics, and leadership values.</motion.li>
                                <motion.li variants={itemVariants}>To build a culture of respect, collaboration, and resilience that equips students for higher education and global challenges.</motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;