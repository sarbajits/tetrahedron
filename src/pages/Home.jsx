import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            {/* <div className="relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-gray-100 dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Tetrahedron Group</span>
                                    <span className="block text-indigo-600 dark:text-indigo-400">of Institutions</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Delivering Education Excellence since 2013. A leading residential science college nurturing academic excellence, scientific curiosity, and personal integrity.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/about"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            to="/contact"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="./src/assets/img/campus4.jpg"
                        alt="Tetrahedron Campus"
                    />
                </div>
            </div> */}
            <HeroSection />

            {/* Features Section */}
            {/* <div className="py-12 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                            Why Choose Us
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Our Key Features
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                            We provide an environment that fosters academic excellence and holistic development.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Academic Excellence
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Rigorous academic programs designed for success in board exams and competitive entrance tests.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Residential Facilities
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Separate hostels for boys and girls with 100% security measures and comfortable living spaces.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Integrated Coaching
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Special coaching for NEET and JEE aspirants integrated with regular curriculum.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Well-equipped Labs
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Modern laboratories for Physics, Chemistry, Biology and IT to enhance practical learning.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Self Study Rooms
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Air-conditioned dedicated study rooms with faculty available for doubt clearance.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Holistic Development
                                </h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                    Focus on physical fitness, mental well-being, ethics, and leadership values.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <FeatureSection />

            {/* Testimonials */}
            {/* <div className="bg-indigo-50 dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                            Testimonials
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            What our students say
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://placehold.co/100/3b82f6/ffffff?text=SR"
                                        alt="Student"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Suman Rout</h3>
                                    <p className="text-gray-500 dark:text-gray-300">NEET Aspirant</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-200">
                                "The integrated coaching for NEET at Tetrahedron has been exceptional. The faculty's dedication and the study environment have helped me improve my rank significantly."
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://placehold.co/100/3b82f6/ffffff?text=PM"
                                        alt="Student"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Priya Mohanty</h3>
                                    <p className="text-gray-500 dark:text-gray-300">JEE Aspirant</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-200">
                                "The self-study rooms with faculty support are a game-changer. I can focus better and get my doubts cleared immediately. The JEE coaching is top-notch."
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://placehold.co/100/3b82f6/ffffff?text=AP"
                                        alt="Student"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Amit Patra</h3>
                                    <p className="text-gray-500 dark:text-gray-300">+2 Science Student</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-200">
                                "The residential facilities are excellent. The disciplined environment helps me stay focused on my studies while also participating in extracurricular activities."
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <TestimonialsSection />

            {/* Call to Action */}
            <div className="bg-indigo-700 dark:bg-indigo-900">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to join us?</span>
                        <span className="block">Start your journey to academic excellence today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Admissions open for +2 Science with PCB+IT, PCB+Geology, PCMB, PCM+IT streams.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                    >
                        Contact for Admission
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;