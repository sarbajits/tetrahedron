import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
// import logo from '../assets/img/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    className="h-12 w-auto"
                                    src="./img/full_logo.png"
                                    alt="Tetrahedron Group of Institutions"
                                />
                                {/* <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                                    Tetrahedron
                                </span> */}
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link
                                to="/"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Home
                            </Link>
                            <Link
                                to="/chairmans-gallery"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Chairman's Gallery
                            </Link>
                            <Link
                                to="/about"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                About
                            </Link>
                            <Link
                                to="/academics"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Academics
                            </Link>
                            <Link
                                to="/facilities"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Facilities
                            </Link>
                            <Link
                                to="/gallery"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/contact"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Contact
                            </Link>
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/chairmans-gallery"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Chairman's Gallery
                    </Link>
                    <Link
                        to="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/academics"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Academics
                    </Link>
                    <Link
                        to="/facilities"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Facilities
                    </Link>
                    <Link
                        to="/gallery"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className="px-3 py-2">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;