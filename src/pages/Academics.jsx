const Academics = () => {
    const courses = [
        {
            name: "+2 Science (PCB+IT)",
            description: "Physics, Chemistry, Biology with Information Technology as an additional subject.",
            duration: "2 years",
            coaching: "NEET coaching integrated"
        },
        {
            name: "+2 Science (PCB+Geology)",
            description: "Physics, Chemistry, Biology with Geology as an additional subject.",
            duration: "2 years",
            coaching: "NEET coaching integrated"
        },
        {
            name: "+2 Science (PCMB)",
            description: "Physics, Chemistry, Mathematics, Biology - covering all science subjects.",
            duration: "2 years",
            coaching: "Both JEE & NEET coaching available"
        },
        {
            name: "+2 Science (PCM+IT)",
            description: "Physics, Chemistry, Mathematics with Information Technology as an additional subject.",
            duration: "2 years",
            coaching: "JEE coaching integrated"
        },
        {
            name: "NEET Integrated Program",
            description: "Special program focusing on medical entrance preparation along with +2 curriculum.",
            duration: "2 years",
            coaching: "Intensive NEET coaching"
        },
        {
            name: "JEE Integrated Program",
            description: "Special program focusing on engineering entrance preparation along with +2 curriculum.",
            duration: "2 years",
            coaching: "Intensive JEE coaching"
        }
    ];

    const departments = [
        {
            name: "Physics",
            description: "Modern physics lab with equipment for experiments in mechanics, optics, electricity, and modern physics."
        },
        {
            name: "Chemistry",
            description: "Well-equipped chemistry lab with facilities for organic, inorganic, and physical chemistry experiments."
        },
        {
            name: "Biology",
            description: "Comprehensive biology lab with microscopes, specimens, and equipment for botany and zoology studies."
        },
        {
            name: "Information Technology",
            description: "Computer lab with latest hardware and software for programming and IT applications."
        },
        {
            name: "Geology",
            description: "Specialized lab with mineral and rock specimens, topographic maps, and geological tools."
        }
    ];

    return (
        <div className="pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Our <span className="text-indigo-600 dark:text-indigo-400">Academic Programs</span>
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Rigorous academic curriculum designed for success in board exams and competitive entrance tests.
                    </p>
                </div>

                {/* Courses Offered */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Courses Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">{course.name}</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-3">{course.description}</p>
                                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>Duration: {course.duration}</span>
                                    <span>{course.coaching}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Departments */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Departments</h3>
                    <div className="space-y-6">
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{dept.name}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{dept.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Admission Process */}
                <div className="mt-16 bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admission Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Eligibility Criteria</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Successful completion of 10th standard or equivalent examination</li>
                                <li>Minimum percentage as per Odisha CHSE requirements</li>
                                <li>Clearance of entrance test (for certain programs)</li>
                                <li>Medical fitness certificate for residential students</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Application Process</h4>
                            <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Obtain prospectus and application form from college office or download from website</li>
                                <li>Fill the application form completely and attach required documents</li>
                                <li>Submit the form along with application fee before deadline</li>
                                <li>Appear for entrance test/interview if applicable</li>
                                <li>Receive admission offer and complete fee payment</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Note:</strong> Academic calendar and admission forms will be shared by the administration.
                        </p>
                    </div>
                </div>

                {/* Integrated Coaching */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated Coaching</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Tetrahedron provides integrated coaching for NEET and JEE aspirants as part of the regular curriculum. Our coaching program includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Special classes by expert faculty beyond regular school hours</li>
                            <li>Regular mock tests following the latest exam patterns</li>
                            <li>Doubt clearing sessions and personalized attention</li>
                            <li>Comprehensive study material and test series</li>
                            <li>Performance analysis and improvement plans</li>
                            <li>Time management and exam strategy workshops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;