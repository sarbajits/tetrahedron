import { useState } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('campus');

    // State to manage the modal (lightbox)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = {
        campus: [
            { id: 1, src: "./img/accounts1.jpg", alt: "Campus View 1" },
            { id: 2, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+2", alt: "Campus View 2" },
            { id: 3, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+3", alt: "Campus View 3" },
            { id: 4, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+4", alt: "Campus View 4" },
            { id: 5, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+5", alt: "Campus View 5" },
            { id: 6, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+6", alt: "Campus View 6" }
        ],
        labs: [
            { id: 1, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Physics+Lab", alt: "Physics Lab" },
            { id: 2, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Chemistry+Lab", alt: "Chemistry Lab" },
            { id: 3, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Biology+Lab", alt: "Biology Lab" },
            { id: 4, src: "https://placehold.co/600x400/3b82f6/ffffff?text=IT+Lab", alt: "IT Lab" }
        ],
        events: [
            { id: 1, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Annual+Day", alt: "Annual Day" },
            { id: 2, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Science+Fair", alt: "Science Fair" },
            { id: 3, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Sports+Day", alt: "Sports Day" },
            { id: 4, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Workshop", alt: "Workshop" }
        ],
        achievements: [
            { id: 1, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Topper+2023", alt: "Topper 2023" },
            { id: 2, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Award+Ceremony", alt: "Award Ceremony" },
            { id: 3, src: "https://placehold.co/600x400/3b82f6/ffffff?text=NEET+Rankers", alt: "NEET Rankers" },
            { id: 4, src: "https://placehold.co/600x400/3b82f6/ffffff?text=JEE+Qualifiers", alt: "JEE Qualifiers" }
        ]
    };

    // Handlers to open and close the modal
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Our <span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Explore life at Tetrahedron through our photo gallery
                    </p>
                </div>

                {/* Gallery Tabs */}
                <div className="mt-12">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8 overflow-x-auto">
                            {/* Dynamically create buttons from object keys */}
                            {Object.keys(galleryImages).map((tabName) => (
                                <button
                                    key={tabName}
                                    onClick={() => setActiveTab(tabName)}
                                    className={`capitalize whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tabName ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
                                >
                                    {tabName === 'labs' ? 'Laboratories' : tabName}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Gallery Images */}
                <div className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages[activeTab].map((image) => (
                            <div
                                key={image.id}
                                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                onClick={() => openModal(image)} // Add onClick to open the modal
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Section */}
                <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Campus Tour</h3>
                    <div className="aspect-w-16 aspect-h-9">
                        <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
                            <p className="text-gray-500 dark:text-gray-400">Campus tour video will be displayed here</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Full-Width Image View */}
            {isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeModal} // Close modal on backdrop click
                >
                    <div
                        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-full overflow-auto flex flex-col items-center p-6"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the content
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 z-10"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <img
                            src={selectedImage.src.replace('600x400', '1200x800')} // Optional: Load a higher-resolution image
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-md"
                        />
                        <p className="mt-4 text-center text-xl font-medium text-gray-900 dark:text-white">
                            {selectedImage.alt}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;