const About = () => {
    return (
        <div className="pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* About Section */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            About <span className="text-indigo-600 dark:text-indigo-400">Tetrahedron</span>
                        </h2>
                        <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                            Delivering Education Excellence since 2013.
                        </p>
                        <img
                            className="mt-6 w-full rounded-lg shadow-lg"
                            src="https://placehold.co/600x400/3b82f6/ffffff?text=Tetrahedron+Campus"
                            alt="Tetrahedron Campus"
                        />
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <div className="space-y-12">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our History</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Tetrahedron Group of Institutions was established in 2013 by our visionary founder Triideb Behera with the aim of creating a center of excellence in science education. What started as a modest institution has now grown into a leading residential science college in Odisha, known for its academic rigor and holistic development approach.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    To be a leading residential science college that nurtures academic excellence, scientific curiosity, and personal integrity in young minds, empowering them to become responsible innovators and future leaders.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>To provide a rigorous and engaging academic environment that prepares students for success in board exams, competitive entrance tests (JEE/NEET), and lifelong learning.</li>
                                    <li>To create a safe and structured residential setting that fosters discipline, independence, and a strong work ethic.</li>
                                    <li>To cultivate scientific thinking, problem-solving skills, and innovation through experiential learning and mentorship.</li>
                                    <li>To support holistic development by promoting physical fitness, mental well-being, ethics, and leadership values.</li>
                                    <li>To build a culture of respect, collaboration, and resilience that equips students for higher education and global challenges.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leadership</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-16 w-16 rounded-full"
                                                src="https://placehold.co/100/3b82f6/ffffff?text=TB"
                                                alt="Founder"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">Triideb Behera</h4>
                                            <p className="text-gray-500 dark:text-gray-300">Founder & Chairman</p>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                Visionary educator with a passion for creating institutions that transform lives through quality education.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-16 w-16 rounded-full"
                                                src="https://placehold.co/100/3b82f6/ffffff?text=J"
                                                alt="Principal"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">[Principal's Name]</h4>
                                            <p className="text-gray-500 dark:text-gray-300">Principal</p>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                [Principal's brief message will be added here]
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;