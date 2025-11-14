import React from "react";

const blogs = [
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh32_wRt4HQX6v1JaD1FusFe9rPjVUjTQD0wZWGJN0i3YdGd0zc41A2fazWlDcrDyQoF55YTZQDvfhwzZvxtf8MUjkOGUmownhXkjeuR0sOBmXhlYHknJfZ4-vdCO9otGKnLlE_WBrxiEetlBEM8CDHIkmwleH_ZOWtlVUMvGpeBLq0z-DEjOwb5vv-Z3U/s1280/WhatsApp%20Image%202025-11-14%20at%2013.29.42.jpeg",
        title: "Independence Day Celebration 2024",
        description:
            "Explore the highlights of India's Independence Day 2024, featuring flag hoisting ceremonies, patriotic performances, and national unity across all communities.",
        url: "https://tetrahedron-events.blogspot.com/2025/11/independence-day-celebration-2024.html",
    },
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrfuibtqunAl6ZrrL8_BxiY6H4Az5h48tbIYoy_rSd-jwgECB3gtSkQWxFI7JKzR4kDRjIMi2953xdAm64tLI9B_5wwNNLmcwQHNdzvmbfC3TP3LMQJcGAxecy4H_J2nKrn8wnTaqbW0AwL7UA1pdvyQEHtK07boFsdhMcqlpl6eBcCxjOt1dCeTJeDIc/s1280/WhatsApp%20Image%202025-10-10%20at%2011.20.35.jpeg",
        title: "Teachers Day Celebration 2025",
        description:
            "A journey through Teachers' Day 2025, celebrating mentors and educators with vibrant school activities, heartfelt tributes, and community gratitude.",
        url: "https://tetrahedron-events.blogspot.com/2025/11/teachers-day-celebration-2025.html",
    },
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5-ITtDWKt2Tvr3sPp2oenyE-1apu76vVcj0-WaMlmxzKw7HvODitAfl5uLzofr8RaQgB7sw9n0By9Y7hbXCwC4bgmdX3v5qK1x3Q7P4-_LJYOeE0L19Vf3O_X3MqSr0YsZCuZVtSIE5uRgo_XeKmbIDfP11kLvomN0zWHR1kw08KBHKqphbl9-nH8Zr4/s1280/WhatsApp%20Image%202025-11-14%20at%2014.40.24.jpeg",
        title: "A Day of Humanity",
        description:
            "Read about Tetrahedron's humanitarian initiatives, community service, and their impact on local society during this day of collective empathy.",
        url: "https://tetrahedron-events.blogspot.com/2025/11/a-day-of-humanity-tetrahedron-collects.html",
    },
];

export default function Blogs() {
    return (
        <section
            className="py-12 px-4 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
            aria-label="Blogs"
        >
            <h2 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-10 tracking-tight">
                Campus Diaries
            </h2>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, idx) => (
                    <div
                        key={idx}
                        className="group rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        style={{ animation: `fadeInUp 0.6s ${idx * 0.15}s both` }}
                    >
                        <div className="relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 group-hover:underline transition">
                                {blog.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-200 flex-1 mb-4">
                                {blog.description}
                            </p>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 mt-auto text-base font-semibold bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg shadow transition-all hover:scale-105 hover:from-indigo-700 hover:to-indigo-500 dark:from-indigo-500 dark:to-indigo-400"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
