import { useState } from 'react';

const Gallery = () => {
    const galleryImages = [
        // Accounts
        { id: 1, src: "./img/accounts1.jpg", alt: "Accounts Office 1", category: "accounts" },
        { id: 2, src: "./img/accounts2.jpg", alt: "Accounts Office 2", category: "accounts" },
        { id: 3, src: "./img/accounts3.jpg", alt: "Accounts Office 3", category: "accounts" },

        // Campus
        { id: 4, src: "./img/campus1.jpg", alt: "Campus View 1", category: "campus" },
        { id: 5, src: "./img/campus2.jpg", alt: "Campus View 2", category: "campus" },
        { id: 6, src: "./img/campus3.jpg", alt: "Campus View 3", category: "campus" },
        { id: 7, src: "./img/campus4.jpg", alt: "Campus View 4", category: "campus" },
        { id: 8, src: "./img/campus5.jpg", alt: "Campus View 5", category: "campus" },
        { id: 9, src: "./img/campus100.jpg", alt: "Campus View 6", category: "campus" },
        { id: 10, src: "./img/campus101.jpg", alt: "Campus View 7", category: "campus" },

        // Canteen
        { id: 11, src: "./img/canteen1.jpg", alt: "Canteen 1", category: "canteen" },
        { id: 12, src: "./img/canteen2.jpg", alt: "Canteen 2", category: "canteen" },
        { id: 13, src: "./img/canteen3.jpg", alt: "Canteen 3", category: "canteen" },
        { id: 14, src: "./img/canteen4.jpg", alt: "Canteen 4", category: "canteen" },

        // Chairman
        // { id: 15, src: "./img/chairman.jpg", alt: "Chairman Portrait", category: "chairman" },
        { id: 16, src: "./img/chairmanOffice1.jpg", alt: "Chairman Office 1", category: "chairman" },
        { id: 17, src: "./img/chairmanOffice2.jpg", alt: "Chairman Office 2", category: "chairman" },

        // Classrooms
        { id: 18, src: "./img/classroom1.jpg", alt: "Classroom 1", category: "classrooms" },
        { id: 19, src: "./img/classroom2.jpg", alt: "Classroom 2", category: "classrooms" },
        { id: 20, src: "./img/classroom3.jpg", alt: "Classroom 3", category: "classrooms" },
        { id: 21, src: "./img/classroom4.jpg", alt: "Classroom 4", category: "classrooms" },
        { id: 22, src: "./img/classroom5.jpg", alt: "Classroom 5", category: "classrooms" },
        { id: 23, src: "./img/classroom6.jpg", alt: "Classroom 6", category: "classrooms" },
        { id: 24, src: "./img/classroom7.jpg", alt: "Classroom 7", category: "classrooms" },
        { id: 25, src: "./img/classroom8.jpg", alt: "Classroom 8", category: "classrooms" },
        { id: 26, src: "./img/classroom9.jpg", alt: "Classroom 9", category: "classrooms" },
        { id: 27, src: "./img/classroom10.jpg", alt: "Classroom 10", category: "classrooms" },
        { id: 28, src: "./img/classroom11.jpg", alt: "Classroom 11", category: "classrooms" },
        { id: 29, src: "./img/classroom12.jpg", alt: "Classroom 12", category: "classrooms" },

        // Hostel Office
        { id: 30, src: "./img/hostelOffice1.jpg", alt: "Hostel Office 1", category: "hostel" },
        { id: 31, src: "./img/hostelOffice2.jpg", alt: "Hostel Office 2", category: "hostel" },

        // Labs
        { id: 32, src: "./img/lab1.jpg", alt: "Lab 1", category: "labs" },
        { id: 33, src: "./img/lab2.jpg", alt: "Lab 2", category: "labs" },
        { id: 34, src: "./img/lab3.jpg", alt: "Lab 3", category: "labs" },
        { id: 35, src: "./img/lab4.jpg", alt: "Lab 4", category: "labs" },

        // Logo
        // { id: 36, src: "./img/logo.jpg", alt: "Institution Logo JPG", category: "logo" },
        // { id: 37, src: "./img/logo.png", alt: "Institution Logo PNG", category: "logo" },

        // Students
        { id: 38, src: "./img/students1.jpg", alt: "Students 1", category: "students" },
        { id: 39, src: "./img/students2.jpg", alt: "Students 2", category: "students" }
    ];


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const navigate = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        } else {
            newIndex = (currentImageIndex + 1) % galleryImages.length;
        }
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Our <span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Explore life at Tetrahedron through our photo collection
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openModal(index)}
                        >
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium truncate w-full">
                                    {image.alt}
                                </p>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-md">
                                {image.category}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Campus Tour</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
                        <div className="w-full h-96 flex flex-col items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xl font-medium">Campus tour video coming soon</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl">
                        {/* Navigation Controls - Subtle Design */}
                        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                            {/* Previous Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('prev');
                                }}
                                className="pointer-events-auto ml-4 p-2 text-white/80 hover:text-white transition-colors duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-md"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('next');
                                }}
                                className="pointer-events-auto mr-4 p-2 text-white/80 hover:text-white transition-colors duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-md"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Close Button - Subtle Design */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-md"
                            aria-label="Close lightbox"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image and Caption */}
                        <div className="flex flex-col items-center">
                            <div className="max-h-[80vh] w-full flex items-center justify-center">
                                <img
                                    src={galleryImages[currentImageIndex].src.replace('600x400', '1200x800')}
                                    alt={galleryImages[currentImageIndex].alt}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                            <div className="mt-4 text-center text-white">
                                <p className="text-lg font-medium">{galleryImages[currentImageIndex].alt}</p>
                                <p className="text-sm text-gray-300 mt-1">
                                    {currentImageIndex + 1} of {galleryImages.length} • {galleryImages[currentImageIndex].category === 'labs' ? 'Laboratory' : galleryImages[currentImageIndex].category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;