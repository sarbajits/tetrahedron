// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // <--- Add this line
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' }, // Moves one full set of duplicated text
                },
            },
            animation: {
                'marquee-loop': 'marquee 30s linear infinite', // Adjust duration (30s) for desired speed
            },
        },
    },
    plugins: [],
}