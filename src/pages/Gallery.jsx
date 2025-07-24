import { useState } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('campus');

    const galleryImages = {
        campus: [
            { id: 1, src: "https://placehold.co/600x400/3b82f6/ffffff?text=Campus+1", alt: "Campus View 1" },
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
                            <button
                                onClick={() => setActiveTab('campus')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'campus' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
                            >
                                Campus
                            </button>
                            <button
                                onClick={() => setActiveTab('labs')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'labs' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
                            >
                                Laboratories
                            </button>
                            <button
                                onClick={() => setActiveTab('events')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'events' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
                            >
                                Events
                            </button>
                            <button
                                onClick={() => setActiveTab('achievements')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'achievements' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
                            >
                                Achievements
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Gallery Images */}
                <div className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages[activeTab].map((image) => (
                            <div key={image.id} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        {image.alt}
                                    </span>
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
        </div>
    );
};

export default Gallery;