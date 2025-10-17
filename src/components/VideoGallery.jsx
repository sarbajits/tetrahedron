import { useState } from "react";

const videos = [
    { src: "./vid/VID-20251015-WA0013.mp4", thumb: "./vid/VID-20251015-WA0013.mp4", title: "Video 1" },
    { src: "./vid/VID-20251015-WA0014.mp4", thumb: "./vid/VID-20251015-WA0014.mp4", title: "Video 2" },
    { src: "./vid/VID-20251015-WA0021.mp4", thumb: "./vid/VID-20251015-WA0021.mp4", title: "Video 3" },
    { src: "./vid/WhatsApp Video 2025-10-15 at 16.56.26_3a05fde7.mp4", thumb: "./vid/WhatsApp Video 2025-10-15 at 16.56.26_3a05fde7.mp4", title: "Video 4" },
    { src: "./vid/WhatsApp Video 2025-10-15 at 17.14.48_1e4fb5fe.mp4", thumb: "./vid/WhatsApp Video 2025-10-15 at 17.14.48_1e4fb5fe.mp4", title: "Video 5" },
    { src: "./vid/WhatsApp Video 2025-10-15 at 17.14.56_59ca9b6e.mp4", thumb: "./vid/WhatsApp Video 2025-10-15 at 17.14.56_59ca9b6e.mp4", title: "Video 6" },
];

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        // Added dark mode background/text color for the section
        <section className="w-full py-14 bg-white dark:bg-gray-900 transition-colors duration-500">
            {/* Updated title color for dark mode */}
            <h2 className="text-4xl font-bold text-center mb-10 tracking-tight text-gray-900 dark:text-white">
                Video Highlights
            </h2>

            {/* Adjusted grid to be more responsive on smaller screens */}
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-4 md:px-12 lg:px-24">
                {videos.map((video, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedVideo(video)}
                        // Added shadow, hover scale, and better border radius
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.03]"
                    >
                        {video.thumb.endsWith(".mp4") ? (
                            <video
                                src={video.thumb}
                                muted
                                loop
                                autoPlay
                                playsInline
                                // Increased height slightly for better visibility
                                className="w-full h-44 sm:h-52 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                        ) : (
                            <img
                                src={video.thumb}
                                alt={video.title}
                                // Increased height slightly for better visibility
                                className="w-full h-44 sm:h-52 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex items-center justify-center">
                            {/* Updated play icon color to indigo-300 for contrast */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // Changed fill to current color so stroke can set the color
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                // Used primary color for the icon, made it slightly larger
                                stroke="currentColor"
                                className="w-12 h-12 text-indigo-300 opacity-90 group-hover:opacity-100 transition duration-500"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-sm text-center w-full text-white font-medium">
                            {video.title}
                        </div>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div
                    // Overlay for the modal. Added backdrop-blur-md for a nicer effect.
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-md"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full px-4 sm:px-8">
                        {/* Video player. Added aspect ratio for consistent sizing. */}
                        <video
                            src={selectedVideo.src}
                            controls
                            autoPlay
                            className="w-full rounded-xl shadow-2xl aspect-video"
                        />
                        <button
                            onClick={() => setSelectedVideo(null)}
                            // Changed button positioning and style to use the primary color
                            className="absolute -top-12 right-4 sm:right-8 p-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
                            aria-label="Close video player"
                        >
                            {/* Used an SVG for a better "X" icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}