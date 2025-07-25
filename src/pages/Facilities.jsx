const Facilities = () => {
    const facilities = [
        {
            title: "Laboratories",
            description: "Well equipped laboratories for Physics, Chemistry, Biology and IT are available for all students. Our labs are designed to provide hands-on experience and practical knowledge.",
            image: "./img/lab1.jpg"
        },
        {
            title: "Hostels",
            description: "Separate Hostels in separate campuses for Boys and Girls. Our hostels provide a safe, comfortable and conducive environment for study with 24/7 security and supervision.",
            image: "./img/campus1.jpg"
        },
        {
            title: "Self Study Rooms",
            description: "Dedicated self study rooms (Air Conditioned) are available with faculties available for doubt clearance. These spaces are designed for focused individual study with proper lighting and seating.",
            image: "./img/classroom3.jpg"
        },
        {
            title: "Digital Classrooms",
            description: "Our college classrooms are designed to foster an engaging and collaborative learning environment. Equipped with essential technology and comfortable seating, they provide a conducive space for lectures, discussions, and group work, supporting a dynamic educational experience for all students.",
            image: "./img/classroom6.jpg"
        },
        {
            title: "Canteen",
            description: "Each Campus has it's own Canteen with ample facilities to accommodate all students of the respective campus. We provide hygienic, nutritious and delicious meals to students.",
            image: "./img/canteen2.jpg"
        },
        {
            title: "Security & Student Care",
            description: "100% security measures are adopted to ensure safety of all students. Our campus has CCTV surveillance, security personnel, and strict entry protocols. We also have a dedicated student care team for any emergencies.",
            image: "./img/classroom10.jpg"
        }
    ];

    return (
        <div className="pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Our <span className="text-indigo-600 dark:text-indigo-400">Campus Facilities</span>
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        We provide world-class infrastructure to support academic excellence and student well-being.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                className="w-full h-48 object-cover"
                                src={facility.image}
                                alt={facility.title}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{facility.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Facilities Section */}
                <div className="mt-16 bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">More About Our Campus</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Residential Life</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our residential program is designed to create a home away from home. With comfortable living spaces, nutritious meals, and round-the-clock support, students can focus entirely on their academic goals while developing life skills and independence.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Learning Environment</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                The entire campus is designed to foster learning. From well-ventilated classrooms to specialized labs and quiet study zones, every space is optimized to enhance concentration and academic performance.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Health & Wellness</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                We prioritize student health with regular medical check-ups, a tie-up with nearby hospitals for emergencies, and facilities for physical fitness including sports grounds and yoga sessions.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">Technology Integration</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                While we maintain traditional values of education, we embrace modern technology with computer labs, smart classrooms, and high-speed internet access for academic purposes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;