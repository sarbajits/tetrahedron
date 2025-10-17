import React from 'react';

// LightGallery Imports
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';

// LightGallery Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import VideoGallery from '../components/VideoGallery';

// Media data array
const mediaItems = [
    // --- Accounts ---
    {
        src: "./img/accounts1.jpg",
        thumb: "./img/accounts1.jpg", // Using src as thumb for simplicity
        subHtml: "<h4>Accounts Office 1</h4>"
    },
    {
        src: "./img/accounts2.jpg",
        thumb: "./img/accounts2.jpg",
        subHtml: "<h4>Accounts Office 2</h4>"
    },
    {
        src: "./img/accounts3.jpg",
        thumb: "./img/accounts3.jpg",
        subHtml: "<h4>Accounts Office 3</h4>"
    },

    // --- Campus ---
    {
        src: "./img/campus1.jpg",
        thumb: "./img/campus1.jpg",
        subHtml: "<h4>Campus View 1</h4>"
    },
    {
        src: "./img/campus2.jpg",
        thumb: "./img/campus2.jpg",
        subHtml: "<h4>Campus View 2</h4>"
    },
    {
        src: "./img/campus3.jpg",
        thumb: "./img/campus3.jpg",
        subHtml: "<h4>Campus View 3</h4>"
    },
    {
        src: "./img/campus4.jpg",
        thumb: "./img/campus4.jpg",
        subHtml: "<h4>Campus View 4</h4>"
    },
    {
        src: "./img/campus5.jpg",
        thumb: "./img/campus5.jpg",
        subHtml: "<h4>Campus View 5</h4>"
    },
    {
        src: "./img/campus100.jpg",
        thumb: "./img/campus100.jpg",
        subHtml: "<h4>Campus View 6</h4>"
    },
    {
        src: "./img/campus101.jpg",
        thumb: "./img/campus101.jpg",
        subHtml: "<h4>Campus View 7</h4>"
    },

    // --- Canteen ---
    {
        src: "./img/canteen1.jpg",
        thumb: "./img/canteen1.jpg",
        subHtml: "<h4>Canteen 1</h4>"
    },
    {
        src: "./img/canteen2.jpg",
        thumb: "./img/canteen2.jpg",
        subHtml: "<h4>Canteen 2</h4>"
    },
    {
        src: "./img/canteen3.jpg",
        thumb: "./img/canteen3.jpg",
        subHtml: "<h4>Canteen 3</h4>"
    },
    {
        src: "./img/canteen4.jpg",
        thumb: "./img/canteen4.jpg",
        subHtml: "<h4>Canteen 4</h4>"
    },

    // --- Chairman ---
    {
        src: "./img/chairmanOffice1.jpg",
        thumb: "./img/chairmanOffice1.jpg",
        subHtml: "<h4>Chairman Office 1</h4>"
    },
    {
        src: "./img/chairmanOffice2.jpg",
        thumb: "./img/chairmanOffice2.jpg",
        subHtml: "<h4>Chairman Office 2</h4>"
    },

    // --- Classrooms ---
    {
        src: "./img/classroom1.jpg",
        thumb: "./img/classroom1.jpg",
        subHtml: "<h4>Classroom 1</h4>"
    },
    {
        src: "./img/classroom2.jpg",
        thumb: "./img/classroom2.jpg",
        subHtml: "<h4>Classroom 2</h4>"
    },
    {
        src: "./img/classroom3.jpg",
        thumb: "./img/classroom3.jpg",
        subHtml: "<h4>Classroom 3</h4>"
    },
    {
        src: "./img/classroom4.jpg",
        thumb: "./img/classroom4.jpg",
        subHtml: "<h4>Classroom 4</h4>"
    },
    {
        src: "./img/classroom5.jpg",
        thumb: "./img/classroom5.jpg",
        subHtml: "<h4>Classroom 5</h4>"
    },
    {
        src: "./img/classroom6.jpg",
        thumb: "./img/classroom6.jpg",
        subHtml: "<h4>Classroom 6</h4>"
    },
    {
        src: "./img/classroom7.jpg",
        thumb: "./img/classroom7.jpg",
        subHtml: "<h4>Classroom 7</h4>"
    },
    {
        src: "./img/classroom8.jpg",
        thumb: "./img/classroom8.jpg",
        subHtml: "<h4>Classroom 8</h4>"
    },
    {
        src: "./img/classroom9.jpg",
        thumb: "./img/classroom9.jpg",
        subHtml: "<h4>Classroom 9</h4>"
    },
    {
        src: "./img/classroom10.jpg",
        thumb: "./img/classroom10.jpg",
        subHtml: "<h4>Classroom 10</h4>"
    },
    {
        src: "./img/classroom11.jpg",
        thumb: "./img/classroom11.jpg",
        subHtml: "<h4>Classroom 11</h4>"
    },
    {
        src: "./img/classroom12.jpg",
        thumb: "./img/classroom12.jpg",
        subHtml: "<h4>Classroom 12</h4>"
    },

    // --- Hostel Office ---
    {
        src: "./img/hostelOffice1.jpg",
        thumb: "./img/hostelOffice1.jpg",
        subHtml: "<h4>Hostel Office 1</h4>"
    },
    {
        src: "./img/hostelOffice2.jpg",
        thumb: "./img/hostelOffice2.jpg",
        subHtml: "<h4>Hostel Office 2</h4>"
    },

    // --- Labs ---
    {
        src: "./img/lab1.jpg",
        thumb: "./img/lab1.jpg",
        subHtml: "<h4>Lab 1</h4>"
    },
    {
        src: "./img/lab2.jpg",
        thumb: "./img/lab2.jpg",
        subHtml: "<h4>Lab 2</h4>"
    },
    {
        src: "./img/lab3.jpg",
        thumb: "./img/lab3.jpg",
        subHtml: "<h4>Lab 3</h4>"
    },
    {
        src: "./img/lab4.jpg",
        thumb: "./img/lab4.jpg",
        subHtml: "<h4>Lab 4</h4>"
    },

    // --- Students ---
    {
        src: "./img/students1.jpg",
        thumb: "./img/students1.jpg",
        subHtml: "<h4>Students 1</h4>"
    },
    {
        src: "./img/students2.jpg",
        thumb: "./img/students2.jpg",
        subHtml: "<h4>Students 2</h4>"
    },

    //new

    {
        src: "./img/new/IMG-20251015-WA0002.jpg",
        thumb: "./img/new/IMG-20251015-WA0002.jpg",
        subHtml: "<h4>Photo 2</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0003.jpg",
        thumb: "./img/new/IMG-20251015-WA0003.jpg",
        subHtml: "<h4>Photo 3</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0004.jpg",
        thumb: "./img/new/IMG-20251015-WA0004.jpg",
        subHtml: "<h4>Photo 4</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0005.jpg",
        thumb: "./img/new/IMG-20251015-WA0005.jpg",
        subHtml: "<h4>Photo 5</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0006.jpg",
        thumb: "./img/new/IMG-20251015-WA0006.jpg",
        subHtml: "<h4>Photo 6</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0007.jpg",
        thumb: "./img/new/IMG-20251015-WA0007.jpg",
        subHtml: "<h4>Photo 7</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0008.jpg",
        thumb: "./img/new/IMG-20251015-WA0008.jpg",
        subHtml: "<h4>Photo 8</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0009.jpg",
        thumb: "./img/new/IMG-20251015-WA0009.jpg",
        subHtml: "<h4>Photo 9</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0010.jpg",
        thumb: "./img/new/IMG-20251015-WA0010.jpg",
        subHtml: "<h4>Photo 10</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0011.jpg",
        thumb: "./img/new/IMG-20251015-WA0011.jpg",
        subHtml: "<h4>Photo 11</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0012.jpg",
        thumb: "./img/new/IMG-20251015-WA0012.jpg",
        subHtml: "<h4>Photo 12</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0013.jpg",
        thumb: "./img/new/IMG-20251015-WA0013.jpg",
        subHtml: "<h4>Photo 13</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0014.jpg",
        thumb: "./img/new/IMG-20251015-WA0014.jpg",
        subHtml: "<h4>Photo 14</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0015.jpg",
        thumb: "./img/new/IMG-20251015-WA0015.jpg",
        subHtml: "<h4>Photo 15</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0016.jpg",
        thumb: "./img/new/IMG-20251015-WA0016.jpg",
        subHtml: "<h4>Photo 16</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0017.jpg",
        thumb: "./img/new/IMG-20251015-WA0017.jpg",
        subHtml: "<h4>Photo 17</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0018.jpg",
        thumb: "./img/new/IMG-20251015-WA0018.jpg",
        subHtml: "<h4>Photo 18</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0019.jpg",
        thumb: "./img/new/IMG-20251015-WA0019.jpg",
        subHtml: "<h4>Photo 19</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0020.jpg",
        thumb: "./img/new/IMG-20251015-WA0020.jpg",
        subHtml: "<h4>Photo 20</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0021.jpg",
        thumb: "./img/new/IMG-20251015-WA0021.jpg",
        subHtml: "<h4>Photo 21</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0023.jpg",
        thumb: "./img/new/IMG-20251015-WA0023.jpg",
        subHtml: "<h4>Photo 22</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0024.jpg",
        thumb: "./img/new/IMG-20251015-WA0024.jpg",
        subHtml: "<h4>Photo 23</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0025.jpg",
        thumb: "./img/new/IMG-20251015-WA0025.jpg",
        subHtml: "<h4>Photo 24</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0026.jpg",
        thumb: "./img/new/IMG-20251015-WA0026.jpg",
        subHtml: "<h4>Photo 25</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0027.jpg",
        thumb: "./img/new/IMG-20251015-WA0027.jpg",
        subHtml: "<h4>Photo 26</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0028.jpg",
        thumb: "./img/new/IMG-20251015-WA0028.jpg",
        subHtml: "<h4>Photo 27</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0029.jpg",
        thumb: "./img/new/IMG-20251015-WA0029.jpg",
        subHtml: "<h4>Photo 28</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0030.jpg",
        thumb: "./img/new/IMG-20251015-WA0030.jpg",
        subHtml: "<h4>Photo 29</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0031.jpg",
        thumb: "./img/new/IMG-20251015-WA0031.jpg",
        subHtml: "<h4>Photo 30</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0032.jpg",
        thumb: "./img/new/IMG-20251015-WA0032.jpg",
        subHtml: "<h4>Photo 31</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0033.jpg",
        thumb: "./img/new/IMG-20251015-WA0033.jpg",
        subHtml: "<h4>Photo 32</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0034.jpg",
        thumb: "./img/new/IMG-20251015-WA0034.jpg",
        subHtml: "<h4>Photo 33</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0035.jpg",
        thumb: "./img/new/IMG-20251015-WA0035.jpg",
        subHtml: "<h4>Photo 34</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0036.jpg",
        thumb: "./img/new/IMG-20251015-WA0036.jpg",
        subHtml: "<h4>Photo 35</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0037.jpg",
        thumb: "./img/new/IMG-20251015-WA0037.jpg",
        subHtml: "<h4>Photo 36</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0038.jpg",
        thumb: "./img/new/IMG-20251015-WA0038.jpg",
        subHtml: "<h4>Photo 37</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0039.jpg",
        thumb: "./img/new/IMG-20251015-WA0039.jpg",
        subHtml: "<h4>Photo 38</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0040.jpg",
        thumb: "./img/new/IMG-20251015-WA0040.jpg",
        subHtml: "<h4>Photo 39</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0041.jpg",
        thumb: "./img/new/IMG-20251015-WA0041.jpg",
        subHtml: "<h4>Photo 40</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0042.jpg",
        thumb: "./img/new/IMG-20251015-WA0042.jpg",
        subHtml: "<h4>Photo 41</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0043.jpg",
        thumb: "./img/new/IMG-20251015-WA0043.jpg",
        subHtml: "<h4>Photo 42</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0044.jpg",
        thumb: "./img/new/IMG-20251015-WA0044.jpg",
        subHtml: "<h4>Photo 43</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0045.jpg",
        thumb: "./img/new/IMG-20251015-WA0045.jpg",
        subHtml: "<h4>Photo 44</h4>"
    },
    {
        src: "./img/new/IMG-20251015-WA0046.jpg",
        thumb: "./img/new/IMG-20251015-WA0046.jpg",
        subHtml: "<h4>Photo 45</h4>"
    },
    {
        src: "./img/new/IMG-20251016-WA0012.jpg",
        thumb: "./img/new/IMG-20251016-WA0012.jpg",
        subHtml: "<h4>Photo 46</h4>"
    },
    {
        src: "./img/new/IMG-20251016-WA0013.jpg",
        thumb: "./img/new/IMG-20251016-WA0013.jpg",
        subHtml: "<h4>Photo 47</h4>"
    },
    {
        src: "./img/new/IMG-20251016-WA0014.jpg",
        thumb: "./img/new/IMG-20251016-WA0014.jpg",
        subHtml: "<h4>Photo 48</h4>"
    },



    // --- Video Example (For Mixed Content Demo) ---
    // {
    //     // YouTube URL for lightGallery's video plugin
    //     src: 'https://www.youtube.com/watch?v=kYmH401qQe4',
    //     // Thumbnail for the video (replace with your video poster/thumb)
    //     thumb: 'https://img.youtube.com/vi/kYmH401qQe4/hqdefault.jpg',
    //     subHtml: '<h4>Promotional Video (Example)</h4>',
    //     category: 'video' // Added a category for better filtering if needed
    // },

    // {
    //     src: "https://sarbajits.github.io/tetrahedron/vid/back2.mp4",
    //     thumb:
    //         "https://www.shutterstock.com/image-photo/blond-hair-girl-taking-photo-260nw-2492842415.jpg",
    //     subHtml: "<h4>Video 1111</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/VID-20251015-WA0013.mp4",
    //     thumb: "./img/new/IMG-20251016-WA0014.jpg",
    //     subHtml: "<h4>Video 1</h4>",
    //     type: "video",
    // },

    // {
    //     src: "./vid/VID-20251015-WA0013.mp4",
    //     thumb: "./img/new/IMG-20251016-WA0014.jpg",
    //     subHtml: "<h4>Video 1</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/VID-20251015-WA0014.mp4",
    //     thumb: "./vid/VID-20251015-WA0014.mp4",
    //     subHtml: "<h4>Video 2</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/VID-20251015-WA0021.mp4",
    //     thumb: "./vid/VID-20251015-WA0021.mp4",
    //     subHtml: "<h4>Video 3</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/WhatsApp Video 2025-10-15 at 16.56.26_3a05fde7.mp4",
    //     thumb: "./vid/WhatsApp Video 2025-10-15 at 16.56.26_3a05fde7.mp4",
    //     subHtml: "<h4>Video 4</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/WhatsApp Video 2025-10-15 at 17.14.48_1e4fb5fe.mp4",
    //     thumb: "./vid/WhatsApp Video 2025-10-15 at 17.14.48_1e4fb5fe.mp4",
    //     subHtml: "<h4>Video 5</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/WhatsApp Video 2025-10-15 at 17.14.56_59ca9b6e.mp4",
    //     thumb: "./vid/WhatsApp Video 2025-10-15 at 17.14.56_59ca9b6e.mp4",
    //     subHtml: "<h4>Video 6</h4>",
    //     type: "video",
    // },
    // {
    //     src: "./vid/WhatsApp Video 2025-10-15 at 19.01.25_0666225c.mp4",
    //     thumb: "./vid/WhatsApp Video 2025-10-15 at 19.01.25_0666225c.mp4",
    //     subHtml: "<h4>Video 7</h4>",
    //     type: "video",
    // }
];

export default function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="py-16 px-4 bg-white dark:bg-gray-900 min-h-screen">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    Our <span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                    Explore life at Tetrahedron through our photo and video collection
                </p>
            </div>

            {/* LightGallery Section */}
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom, lgVideo]}
                elementClassNames="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
            >
                {mediaItems.map((item, index) => {
                    if (item.type === "video") {
                        return (
                            <a
                                key={index}
                                data-lg-size="1280-720"
                                data-sub-html={item.subHtml}
                                data-poster={item.thumb}
                                data-src={item.src}
                                data-video={`{"source": [{"src":"${item.src}","type":"video/mp4"}], "attributes": {"controls": true, "preload": false}}`}
                                className="relative block overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                            >
                                <img
                                    src={item.thumb}
                                    alt={item.subHtml.replace(/<.*?>/g, "")}
                                    className="w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        className="w-14 h-14 text-white/90 group-hover:text-white transition-colors duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 3l12 9-12 9V3z" />
                                    </svg>
                                </div>
                            </a>
                        );
                    } else {
                        return (
                            <a
                                key={index}
                                data-src={item.src}
                                data-sub-html={item.subHtml}
                                className="relative block overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                            >
                                <img
                                    src={item.thumb}
                                    alt={item.subHtml.replace(/<.*?>/g, "")}
                                    className="w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                            </a>
                        );
                    }
                })}
            </LightGallery>

            <VideoGallery />
        </div>
    );
}